// Raster exports of the existing diagram, for clients without inline HTML support.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const sharp = require(require.resolve('sharp', { paths: [
  process.env.MULTIPLY_NODE_MODULES || path.join(process.env.USERPROFILE, '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules')
]}));
const project = path.resolve(__dirname, '..');
const fragment = fs.readFileSync(path.join(project, 'board-assembly-sketch.html'), 'utf8');
const script = fragment.match(/<script>([\s\S]*?)<\/script>/)[1];
const palette = {'--background':'#ffffff','--foreground':'#253a3b','--border':'#c8d5d3'};
for (const match of fragment.matchAll(/(--[\w-]+):\s*(#[\da-f]{6})/gi)) palette[match[1]] = match[2];
const esc = text => String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
class Element {
  constructor(tag) {this.tag=tag;this.attrs={};this.children=[];this.style={};this.textContent='';}
  setAttribute(key,value) {this.attrs[key]=String(value);}
  appendChild(child) {this.children.push(child);return child;}
  replaceChildren() {this.children=[];}
  addEventListener() {}
  getBoundingClientRect() {return {width:450};}
  xml() {
    const attrs={...this.attrs};
    if(attrs.class==='assembly-label') Object.assign(attrs,{fill:palette['--foreground'],'font-family':'Arial,sans-serif','font-size':12,'font-weight':500});
    if(attrs.class==='assembly-guide') Object.assign(attrs,{stroke:palette['--border'],fill:'none','stroke-width':1});
    delete attrs.class;
    const attributes=Object.entries(attrs).map(([key,value])=>` ${key}="${esc(String(value).replace(/var\((--[\w-]+)\)/g,(_,token)=>{
      if(!palette[token]) throw Error(`Unknown color ${token}`);
      return palette[token];
    }))}"`).join('');
    return `<${this.tag}${attributes}>${esc(this.textContent)}${this.children.map(c=>c.xml()).join('')}</${this.tag}>`;
  }
}
function diagram(view) {
  const svg=new Element('svg'), selector=new Element('select'), status=new Element('div'), drawing=new Element('div');
  const root={querySelector(q) {return {'svg':svg,'select':selector,'#multiply-assembly-status':status,'.assembly-drawing':drawing}[q];}};
  const context={document:{getElementById:()=>root,createElementNS:(_,tag)=>new Element(tag)},window:{openai:{widgetState:{modelContent:{view}}},addEventListener(){}},ResizeObserver:class{observe(){}}};
  vm.runInNewContext(script,context);
  svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
  const [, , width,height]=svg.attrs.viewBox.split(' ').map(Number);
  svg.setAttribute('width',width);svg.setAttribute('height',height);
  return {svg:svg.xml(),width,height};
}
const text=(x,y,value,size=26,fill='#253a3b')=>`<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${fill}">${esc(value)}</text>`;
async function exportLayout() {
  const width=1320,height=1020,layers=[];
  layers.push({input:Buffer.from(`<svg width="${width}" height="${height}">${text(40,56,'Multiply! — component layout',36)}${text(66,120,'Finished board',28)}${text(704,120,'With the top removed',28)}${text(40,930,'Provisional case: 180 × 230 × 26 mm · 2.4-inch display shown',26)}${text(40,976,'Exact clearances and mounting holes still need checking.',24,'#5c706e')}</svg>`),left:0,top:0});
  for(const [view,left] of [['finished',34],['inside',672]]) {
    const d=diagram(view);
    layers.push({input:await sharp(Buffer.from(d.svg)).resize({width:610}).png().toBuffer(),left,top:150});
  }
  await sharp({create:{width,height,channels:4,background:'#ffffff'}}).composite(layers).png().toFile(path.join(project,'board-layout.png'));
}
async function exportAssembly() {
  const width=1280,height=1030,d=diagram('exploded');
  const labels=[
    ['1  Printed keycaps','81 caps, with retaining flanges','and small pushers underneath.'],
    ['2  Top / guide plate','Keeps caps aligned and captive;','has an opening for the display.'],
    ['3  Display + Pico H','Share the rear band. Pico USB','faces the back of the enclosure.'],
    ['4  Custom matrix PCB','Holds the 81 tactile switches,','Pico sockets and display header.'],
    ['5  Bottom shell','Supports the PCB on pillars;','screws hold the assembly together.']
  ];
  let copy=text(40,56,'Multiply! — how the layers fit',36);
  labels.forEach(([title,line1,line2],i)=>{const y=180+i*145;copy+=text(735,y,title,28)+text(735,y+40,line1,24,'#5c706e')+text(735,y+72,line2,24,'#5c706e');});
  copy+=text(40,975,'Concept sketch · layers separated for clarity · supports and holes illustrative',25,'#5c706e');
  await sharp({create:{width,height,channels:4,background:'#ffffff'}}).composite([
    {input:await sharp(Buffer.from(d.svg)).resize({width:690}).png().toBuffer(),left:16,top:110},
    {input:Buffer.from(`<svg width="${width}" height="${height}">${copy}</svg>`),left:0,top:0}
  ]).png().toFile(path.join(project,'board-assembly.png'));
}
Promise.all([exportLayout(),exportAssembly()]).then(()=>console.log('Exported board-layout.png and board-assembly.png')).catch(error=>{console.error(error);process.exitCode=1;});
