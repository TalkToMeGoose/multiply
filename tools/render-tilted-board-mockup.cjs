// Proposed five-degree shell and PCB mounting concept. No fabrication geometry.
const fs=require('node:fs'),path=require('node:path');
const sharp=require(require.resolve('sharp',{paths:[process.env.MULTIPLY_NODE_MODULES||path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules')]}));
const {display}=require('./render-array-board-mockup.cjs');
const project=path.resolve(__dirname,'..');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const txt=(x,y,s,size=25,c='#253a3b',extra='')=>`<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" fill="${c}" ${extra}>${esc(s)}</text>`;
const rect=(x,y,w,h,c,r=0,extra='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}" ${extra}/>`;
const line=(x,y,x2,y2,c='#a9bdb9',width=1.5,extra='')=>`<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${width}" ${extra}/>`;
const polygon=(points,c,extra='')=>`<polygon points="${points.map(p=>p.join(',')).join(' ')}" fill="${c}" ${extra}/>`;
const start=(w,h)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${rect(0,0,w,h,'#ffffff')}`;
function engravedArtwork() {
  // Monochrome engraved motifs, in place of the earlier sticker treatment.
  let s='<g fill="none" stroke="#116d69" stroke-width=".65" stroke-linejoin="round" stroke-linecap="round">';
  s+='<g transform="translate(34 30) rotate(-24)"><path d="M-4 9 Q-7 -4 0 -13 Q7 -4 4 9 Z M-4 -4 L-8 10 L-4 7 M4 -4 L8 10 L4 7 M-2 10 Q-3 15 0 18 Q3 15 2 10"/><circle cx="0" cy="1" r="2.5"/><path d="M-4 -5 L4 -5"/></g>';
  s+='<g transform="translate(145 29) rotate(-18)"><circle r="7"/><ellipse rx="12" ry="3"/><path d="M-4 -3 Q0 -6 3 -4"/></g>';
  for(const [x,y,r] of [[22,14,2.4],[49,39,2.1],[158,13,2.3],[132,45,2]]) s+=`<path d="M${x} ${y-r} L${x+.65} ${y-.65} L${x+r} ${y} L${x+.65} ${y+.65} L${x} ${y+r} L${x-.65} ${y+.65} L${x-r} ${y} L${x-.65} ${y-.65} Z"/>`;
  return s+'</g>';
}
function tiltedMockup() {
  let s=start(1200,1120);
  s+=txt(48,56,'Multiply! — a gentle 5° tilt',36)+txt(48,98,'Printed-in space motifs · 2.4-inch equation + array display',25,'#5c706e');
  const slope=Math.sin(5*Math.PI/180),a=2.8,b=-.55,c=1.1,d=1.65,e=150,f=360,sz=2.8;
  const z=y=>26+(230-y)*slope;
  const p=(x,y,h)=>[e+a*x+c*y,f+b*x+d*y-sz*h];
  const matrix=(lift=0)=>`matrix(${a} ${b} ${c} ${d+sz*slope} ${e} ${f-sz*(26+230*slope+lift)})`;
  // Fixed wedge base: the rear and front walls meet a flat desk-facing bottom.
  s+=polygon([p(180,0,0),p(180,230,0),p(180,230,z(230)),p(180,0,z(0))],'#126b68');
  s+=polygon([p(0,230,0),p(180,230,0),p(180,230,z(230)),p(0,230,z(230))],'#197b76');
  for(const [x,y] of [[20,220],[160,220],[160,15]]) {const q=p(x,y,0);s+=rect(q[0]-12,q[1],24,5,'#384e4b',2);}
  s+=`<g transform="${matrix()}">${rect(0,0,180,230,'#218c88',7)}${rect(4.5,4.5,171,221,'none',5,'stroke="#167774" stroke-width=".5"')}${rect(4.8,4.9,170.4,220.4,'none',4.8,'stroke="#48a8a0" stroke-width=".22"')}${engravedArtwork()}${rect(64.52,11.64,50.96,38.72,'#116b69',1.1)}${display()}</g>`;
  for(let row=0;row<9;row++) for(let col=0;col<9;col++) {
    const x=10.5+col*18,y=61.5+row*18;
    s+=polygon([p(x,y+15,z(y+15)),p(x+15,y+15,z(y+15)),p(x+15,y+15,z(y+15)+1.7),p(x,y+15,z(y+15)+1.7)],'#cbc5ae');
    s+=polygon([p(x+15,y,z(y)),p(x+15,y+15,z(y+15)),p(x+15,y+15,z(y+15)+1.7),p(x+15,y,z(y)+1.7)],'#ded8c1');
    s+=`<g transform="${matrix(1.7)}">${rect(x,y,15,15,'#f5f1df',1.3)}${txt(x+7.5,y+7.5,`${row+1}×${col+1}`,3.2,'#253a3b','text-anchor="middle" dominant-baseline="central"')}</g>`;
  }
  s+=txt(933,309,'Rear / display',24)+txt(933,347,'Higher by ≈ 20 mm',23,'#5c706e');
  const rear=p(180,10,z(10));s+=`<path d="M${rear[0]} ${rear[1]} L900 280 L927 280" fill="none" stroke="#a9bdb9" stroke-width="1.5"/>`;
  s+=txt(510,800,'Front / child',24,'#5c706e');
  s+=txt(70,855,'Side profile — actual 5° slope',27);
  const px=90,base=1010,k=1.8,run=230*Math.cos(5*Math.PI/180),rise=230*slope;
  s+=line(65,base+7,560,base+7,'#a9bdb9');
  s+=polygon([[px,base],[px+run*k,base],[px+run*k,base-(26+rise)*k],[px,base-26*k]],'#218c88');
  s+=line(px,base-26*k,px+run*k,base-26*k,'#8bb2ab',1.5,'stroke-dasharray="5 5"');
  s+=txt(px,base+40,'Front ≈ 26 mm',23,'#5c706e');
  s+=txt(px+run*k,base-102,'Rear ≈ 46 mm',23,'#5c706e','text-anchor="end"');
  s+=txt(680,904,'One hollow wedge-shaped base',27);
  s+=txt(680,947,'The top plate and PCB share the tilt.',23,'#5c706e');
  s+=txt(680,984,'The button mechanism stays parallel.',23,'#5c706e');
  s+=txt(48,1090,'Concept proportions · 180 × 230 mm top · heights and print details provisional',23,'#5c706e');
  return s+'</svg>';
}
function mountingMockup() {
  let s=start(1320,890);
  s+=txt(48,56,'How the PCB stays in place',36)+txt(48,98,'Cutaway concept — section spacing enlarged for clarity',25,'#5c706e');
  const angle=5*Math.PI/180,top=x=>250-(x-80)*Math.tan(angle),pcb=x=>top(x)+110;
  const baseY=610;
  // Cutaway shell, with different-height posts supporting one inclined PCB plane.
  s+=polygon([[80,top(80)],[96,top(96)],[96,baseY-18],[804,baseY-18],[804,top(804)],[820,top(820)],[820,baseY],[80,baseY]],'#218c88');
  s+=line(65,baseY+8,835,baseY+8,'#a9bdb9');
  for(const x of [130,770]) {
    const y=pcb(x)+9;
    s+=polygon([[x-22,y+2],[x+22,y-2],[x+22,baseY-18],[x-22,baseY-18]],'#218c88');
    s+=line(x,y,x,y+84,'#116b69',8);
  }
  // One additional support between switches; no fastener needed at every support.
  const support=610,sy=pcb(support)+9;
  s+=polygon([[support-21,sy+2],[support+21,sy-2],[support+21,baseY-18],[support-21,baseY-18]],'#48a8a0');
  // PCB has clearance holes aligned with the two illustrated screw posts.
  const left=100,right=800;
  s+=polygon([[left,pcb(left)],[right,pcb(right)],[right,pcb(right)+9],[left,pcb(left)+9]],'#27734d');
  for(const x of [130,770]) {
    s+=line(x,pcb(x)-2,x,pcb(x)+12,'#ffffff',12);
    s+=line(x,pcb(x)-4,x+5,pcb(x)+66,'#aab8b7',6);
    for(let y=pcb(x)+12;y<pcb(x)+65;y+=8) s+=line(x-3,y,x+6,y-3,'#728885',1.3);
    s+=`<g transform="translate(${x} ${pcb(x)}) rotate(-5)">${rect(-17,-11,34,11,'#bdc7c7',4)}${line(-7,-6,7,-6,'#728885',2)}</g>`;
  }
  // A representative cap, tactile switch and board cross-section.
  const cx=440,cy=top(cx);
  s+=`<g transform="translate(${cx} ${cy}) rotate(-5)">`;
  s+=rect(-28,83,56,27,'#384644',2)+rect(-30,83,60,6,'#bdc7c7',1)+rect(-9,73,18,10,'#253a3b',2);
  s+=rect(-5,35,10,38,'#d4ceb9',1)+rect(-48,27,96,8,'#d4ceb9',1);
  s+=rect(-40,-28,80,55,'#f5f1df',3)+txt(0,-6,'6×7',15,'#253a3b','text-anchor="middle"');
  s+='</g>';
  // Top plate is parallel to the PCB, with a gap for the sliding cap.
  for(const [x1,x2] of [[80,396],[484,820]]) s+=polygon([[x1,top(x1)],[x2,top(x2)],[x2,top(x2)+12],[x1,top(x1)+12]],'#218c88');
  const leader=(x,y,tx,ty)=>`<path d="M${x} ${y} L850 ${y} L850 ${ty} L${tx-12} ${ty}" fill="none" stroke="#a9bdb9" stroke-width="1.5"/>`;
  s+=leader(780,pcb(770)-6,890,185)+txt(890,190,'Screws through PCB holes',25);
  s+=txt(890,225,'Hold the board down on posts.',22,'#5c706e');
  s+=leader(800,pcb(800)+4,890,295)+txt(890,300,'Flat custom PCB',25);
  s+=txt(890,335,'Parallel to the button guide plate.',22,'#5c706e');
  s+=leader(632,440,890,405)+txt(890,410,'Extra support underneath',25);
  s+=txt(890,445,'Limits flex when keys are pressed.',22,'#5c706e');
  s+=leader(790,548,890,515)+txt(890,520,'Printed mounting posts',25);
  s+=txt(890,555,'Part of the hollow bottom shell.',22,'#5c706e');
  s+=txt(80,700,'The posts set the height. The screws prevent lifting or shifting.',27);
  s+=txt(80,749,'Support pads sit in clear PCB areas, away from switch legs and solder joints.',24,'#5c706e');
  s+=txt(80,797,'The top and bottom shell also screw together; artwork does not hold the electronics.',24,'#5c706e');
  s+=txt(48,860,'Illustrative mounting positions · screw sizes, clearances and support count still to design',23,'#5c706e');
  return s+'</svg>';
}
async function save(name,svg) {
  const target=path.join(project,name);
  fs.writeFileSync(target+'.svg',svg);
  await sharp(Buffer.from(svg)).png().toFile(target+'.png');
  console.log(target+'.png');
}
Promise.all([save('board-tilt-mockup',tiltedMockup()),save('board-pcb-mounting',mountingMockup())]).catch(e=>{console.error(e);process.exitCode=1;});
