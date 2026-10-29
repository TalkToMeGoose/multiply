// Static, dimensioned product sketch. Rendered from vector geometry, not a CAD model.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require(require.resolve('sharp', {paths:[
  process.env.MULTIPLY_NODE_MODULES || path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules')
]}));
const project = path.resolve(__dirname,'..');
const escape = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const text = (x,y,s,size=25,color='#253a3b',extra='') => `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${color}" ${extra}>${escape(s)}</text>`;
const rect = (x,y,w,h,fill,r=0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
function board(x,y,displayWidth,displayHeight) {
  let s = `<g transform="translate(${x} ${y}) scale(2.65)">`;
  s += rect(0,1.5,180,230,'#116b69',7);
  s += rect(0,0,180,230,'#218c88',7);
  const dx=90-displayWidth/2,dy=31-displayHeight/2;
  s += rect(dx-1,dy-1,displayWidth+2,displayHeight+2,'#116b69',.9);
  s += rect(dx,dy,displayWidth,displayHeight,'#142327',.6);
  // One shared physical type size keeps the comparison about display proportions.
  s += `<text x="90" y="31" xml:space="preserve" font-family="Arial,sans-serif" font-size="10" dominant-baseline="central" text-anchor="middle"><tspan fill="#66baff">6</tspan><tspan fill="#d9e3e2"> × </tspan><tspan fill="#ffaf62">7</tspan><tspan fill="#d9e3e2"> = </tspan><tspan fill="#66baff">42</tspan></text>`;
  for(let row=0;row<9;row++) for(let col=0;col<9;col++) {
    const kx=10.5+18*col,ky=61.5+18*row;
    s += rect(kx-.25,ky+.4,15.5,15.5,'#116b69',1.5);
    s += rect(kx,ky+.6,15,15,'#d4ceb9',1.4);
    s += rect(kx,ky,15,15,'#f5f1df',1.4);
    s += text(kx+7.5,ky+7.5,`${row+1}×${col+1}`,3.2,'#253a3b','text-anchor="middle" dominant-baseline="central"');
  }
  return s+'</g>';
}
const width=1240,height=1010;
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${rect(0,0,width,height,'#ffffff')}`;
svg+=text(40,55,'Multiply! — 2.25-inch bar display',34);
svg+=text(40,94,'Same case and key spacing, so you can compare the screen proportions.',24,'#5c706e');
svg+=text(100,151,'Previous 2.4-inch screen',27);
svg+=text(666,151,'2.25-inch bar screen',27);
svg+=board(90,184,48.96,36.72);
svg+=board(660,184,55.295,14.797);
svg+=text(328,838,'49 × 37 mm visible area',25,'#253a3b','text-anchor="middle"');
svg+=text(898,838,'55 × 15 mm visible area',25,'#253a3b','text-anchor="middle"');
svg+=text(40,909,'Provisional enclosure: 180 × 230 × 26 mm',26);
svg+=text(40,950,'Bar module behind the face: approximately 73 × 21 mm.',24,'#5c706e');
svg+=text(40,986,'Concept sketch · text rendering illustrative · mounting details still to verify',23,'#5c706e');
svg+='</svg>';
const output=path.join(project,'board-bar-display-mockup');
fs.writeFileSync(output+'.svg',svg);
sharp(Buffer.from(svg)).png().toFile(output+'.png').then(()=>console.log(output+'.png')).catch(error=>{console.error(error);process.exitCode=1;});
