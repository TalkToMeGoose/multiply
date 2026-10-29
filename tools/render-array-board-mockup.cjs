// Concept illustration in millimetres. Export a PNG for remote chat clients.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require(require.resolve('sharp', {paths:[
  process.env.MULTIPLY_NODE_MODULES || path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules')
]}));
const project=path.resolve(__dirname,'..');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const text=(x,y,value,size=25,fill='#253a3b',extra='')=>`<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${fill}" ${extra}>${esc(value)}</text>`;
const rect=(x,y,w,h,fill,r=0,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra}/>`;
const circle=(x,y,r,fill)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
function star(x,y,r,fill) {
  const p=[];
  for(let i=0;i<10;i++) {const a=-Math.PI/2+i*Math.PI/5,d=i%2?r*.44:r;p.push(`${x+Math.cos(a)*d},${y+Math.sin(a)*d}`);}
  return `<polygon points="${p.join(' ')}" fill="${fill}"/>`;
}
function rocket() {
  // Illustrative vinyl sticker, not an extra physical component or control.
  return `<g transform="translate(34 30) rotate(-24)" stroke="#faf6e7" stroke-width="1.4" stroke-linejoin="round">
    <path d="M-4 4 L-8 10 L-7 1 L-3 -4 Z" fill="#d78676"/>
    <path d="M4 4 L8 10 L7 1 L3 -4 Z" fill="#d78676"/>
    <path d="M-2 9 Q-4 15 0 18 Q4 15 2 9 Z" fill="#f2c85d"/>
    <path d="M-4 9 Q-7 -4 0 -13 Q7 -4 4 9 Z" fill="#f5f1df"/>
    <path d="M-4 -5 Q-2 -11 0 -13 Q2 -11 4 -5 Z" fill="#d78676"/>
    <circle cx="0" cy="1" r="2.5" fill="#538d9f" stroke-width="1"/>
  </g>`;
}
function stickers() {
  let s=rocket();
  s+=star(22,14,2.4,'#f5e3a6')+star(49,39,2.1,'#f5e3a6')+circle(20,45,.8,'#f5f1df');
  s+=`<g transform="translate(145 29) rotate(-18)"><circle cx="0" cy="0" r="7" fill="#d7a4a1" stroke="#faf6e7" stroke-width="1.2"/><ellipse cx="0" cy="0" rx="12" ry="3" fill="none" stroke="#faf6e7" stroke-width="1.8"/><path d="M-5 -3 Q-1 -7 3 -5" fill="none" stroke="#efd1c8" stroke-width="1.5" stroke-linecap="round"/></g>`;
  s+=star(158,13,2.3,'#f5e3a6')+star(132,45,2,'#f5e3a6')+circle(164,40,.8,'#f5f1df');
  return s;
}
function display(x=65.52,y=12.64,scale=1) {
  let s=`<g transform="translate(${x} ${y}) scale(${scale})">`;
  s+=rect(0,0,48.96,36.72,'#142327',.5);
  // Equivalent to a landscape 320 x 240 display; geometry stays at physical size.
  s+=`<text x="24.48" y="7.1" xml:space="preserve" font-family="Arial,sans-serif" font-size="7.4" dominant-baseline="central" text-anchor="middle"><tspan fill="#66baff">6</tspan><tspan fill="#d9e3e2"> × </tspan><tspan fill="#ffaf62">7</tspan><tspan fill="#d9e3e2"> = </tspan><tspan fill="#66baff">42</tspan></text>`;
  // Fixed 2.6 mm pitch, with a reserved 9 x 9 envelope. Centre this 6 x 7 array.
  const pitch=2.6,rows=6,cols=7;
  const originX=24.48-(cols-1)*pitch/2;
  const originY=14.56+(9-rows)*pitch/2;
  for(let row=0;row<rows;row++) for(let col=0;col<cols;col++) s+=circle(originX+col*pitch,originY+row*pitch,.94,'#e5eeeb');
  return s+'</g>';
}
function board() {
  let s='<g transform="translate(65 165) scale(3.05)">';
  s+=rect(0,2,180,230,'#116b69',8)+rect(0,0,180,230,'#218c88',8);
  // Two close strokes suggest an engraved border; clearance from the keys is preserved.
  s+=rect(4.5,4.5,171,221,'none',5,'stroke="#167774" stroke-width=".55"');
  s+=rect(4.8,4.9,170.4,220.4,'none',4.8,'stroke="#48a8a0" stroke-width=".22"');
  s+=stickers();
  s+=rect(64.52,11.64,50.96,38.72,'#116b69',1.1)+display();
  for(let row=0;row<9;row++) for(let col=0;col<9;col++) {
    const x=10.5+col*18,y=61.5+row*18;
    const pressed=row===5&&col===6;
    s+=rect(x-.2,y+.3,15.4,15.6,'#116b69',1.5);
    s+=rect(x,y+.7,15,15,'#d4ceb9',1.4);
    s+=rect(x,y+(pressed?.45:0),15,15,pressed?'#e8e3cf':'#f5f1df',1.4);
    s+=text(x+7.5,y+7.5+(pressed?.45:0),`${row+1}×${col+1}`,3.2,'#253a3b','text-anchor="middle" dominant-baseline="central"');
  }
  return s+'</g>';
}
module.exports={display};
if (require.main===module) {
const width=1300,height=1030;
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${rect(0,0,width,height,'#ffffff')}`;
svg+=text(48,59,'Multiply! — equation + dot array',36);
svg+=text(48,103,'2.4-inch screen · printed border · removable space stickers',25,'#5c706e');
svg+=board();
svg+=text(719,191,'Screen detail — enlarged',28);
svg+=rect(719,220,49*9+14,36.72*9+14,'#116b69',10);
svg+=display(726,227,9);
svg+=text(719,613,'6 rows, with 7 dots in each row',25);
svg+=text(719,653,'The equation and array update together.',23,'#5c706e');
svg+=text(719,739,'Printed detail',26);
svg+=text(719,776,'A shallow border around the shell.',23,'#5c706e');
svg+=text(719,838,'Sticker decoration',26);
svg+=text(719,875,'Rocket, planet and stars on flat areas.',23,'#5c706e');
svg+=text(48,962,'Concept: 180 × 230 × 26 mm case · visible screen 49 × 37 mm',25);
svg+=text(48,1003,'Artwork illustrative; display pixels, print details and fit still to verify.',23,'#5c706e');
svg+='</svg>';
const output=path.join(project,'board-array-decoration-mockup');
fs.writeFileSync(output+'.svg',svg);
sharp(Buffer.from(svg)).png().toFile(output+'.png').then(()=>console.log(output+'.png')).catch(error=>{console.error(error);process.exitCode=1;});
}
