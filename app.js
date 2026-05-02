'use strict';
/* ═══════════════════════════════════════════════
   QUESTIONS
═══════════════════════════════════════════════ */
const QDB=[
  {q:"Ibu kota negara Indonesia saat ini adalah?",o:["Jakarta","Nusantara","Surabaya","Bandung"],a:0},
  {q:"Proklamator kemerdekaan Indonesia adalah?",o:["Soekarno & Hatta","Suharto & Habibie","Megawati & Wahid","SBY & Boediono"],a:0},
  {q:"Indonesia merdeka pada tanggal?",o:["17 Agustus 1945","17 Agustus 1950","20 Mei 1945","1 Juni 1945"],a:0},
  {q:"Semboyan nasional bangsa Indonesia adalah?",o:["Bhinneka Tunggal Ika","Satu Nusa Satu Bangsa","Garuda Pancasila","Indonesia Raya"],a:0},
  {q:"Jumlah provinsi di Indonesia tahun 2024 adalah?",o:["38","34","36","32"],a:0},
  {q:"Lagu kebangsaan Republik Indonesia adalah?",o:["Indonesia Raya","Garuda Pancasila","Maju Tak Gentar","Satu Nusa Satu Bangsa"],a:0},
  {q:"Siapa pencipta lagu Indonesia Raya?",o:["W.R. Supratman","Ismail Marzuki","C. Simanjuntak","Ibu Sud"],a:0},
  {q:"Gunung tertinggi di Indonesia adalah?",o:["Puncak Jaya","Gunung Rinjani","Gunung Semeru","Gunung Kerinci"],a:0},
  {q:"Danau terbesar di Indonesia adalah?",o:["Danau Toba","Danau Ranau","Danau Matano","Danau Maninjau"],a:0},
  {q:"Berapa jumlah sila dalam Pancasila?",o:["5","4","6","3"],a:0},
  {q:"Lambang negara Indonesia adalah?",o:["Burung Garuda","Harimau Sumatera","Komodo","Elang Jawa"],a:0},
  {q:"Sungai terpanjang di Indonesia adalah?",o:["Sungai Kapuas","Sungai Mahakam","Sungai Musi","Sungai Barito"],a:0},
  {q:"Tari Saman berasal dari provinsi?",o:["Aceh","Bali","Papua","Jawa Tengah"],a:0},
  {q:"Bahasa resmi negara Indonesia adalah?",o:["Bahasa Indonesia","Bahasa Jawa","Bahasa Melayu","Bahasa Sunda"],a:0},
  {q:"Komodo adalah hewan endemik dari pulau?",o:["Komodo & Rinca","Pulau Bali","Pulau Lombok","Pulau Flores"],a:0},
  {q:"Batik diakui UNESCO sebagai warisan budaya dari?",o:["Indonesia","Malaysia","India","Thailand"],a:0},
  {q:"Buah yang dijuluki Raja Buah adalah?",o:["Durian","Rambutan","Manggis","Nangka"],a:0},
  {q:"Mata uang resmi negara Indonesia adalah?",o:["Rupiah","Ringgit","Peso","Baht"],a:0},
  {q:"Hari Sumpah Pemuda diperingati setiap tanggal?",o:["28 Oktober","17 Agustus","20 Mei","1 Juni"],a:0},
  {q:"Presiden pertama Republik Indonesia adalah?",o:["Ir. Soekarno","Soeharto","B.J. Habibie","Megawati"],a:0},
];

/* ═══════════════════════════════════════════════
   SOUND
═══════════════════════════════════════════════ */
const Snd=(()=>{
  let AC=null,on=true;
  function ctx(){if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();return AC;}
  function osc(f,d,type,vol,delay){
    if(!on)return;try{
      const c=ctx(),t=c.currentTime+(delay||0);
      const o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);
      o.type=type||'sine';o.frequency.setValueAtTime(f,t);
      g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.13,t+.012);
      g.gain.exponentialRampToValueAtTime(.0001,t+d);
      o.start(t);o.stop(t+d+.05);
    }catch(e){}
  }
  function sw(f1,f2,d,type,vol,delay){
    if(!on)return;try{
      const c=ctx(),t=c.currentTime+(delay||0);
      const o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);
      o.type=type||'sine';o.frequency.setValueAtTime(f1,t);o.frequency.linearRampToValueAtTime(f2,t+d);
      g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.11,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);
      o.start(t);o.stop(t+d+.05);
    }catch(e){}
  }
  return{
    toggle(){on=!on;return on;},
    click(){osc(660,.055,'sine',.07);},
    correct(){[523,659,784].forEach((f,i)=>osc(f,.13,'sine',.14,i*.07));osc(1047,.3,'sine',.1,.22);sw(400,900,.14,'sine',.07,.32);},
    wrong(){sw(300,140,.1,'sawtooth',.14);osc(130,.3,'sawtooth',.1,.1);},
    tick(){osc(1100,.04,'square',.05);},
    tickW(){osc(880,.07,'sine',.11);},
    tickD(){osc(660,.09,'sine',.16);},
    timeUp(){sw(400,180,.12,'square',.18);osc(150,.36,'sawtooth',.1,.12);},
    move(){[700,540].forEach((f,i)=>osc(f,.07,'sine',.09,i*.04));},
    select(){sw(440,700,.1,'sine',.1);},
    ready(){[440,554,659,880].forEach((f,i)=>osc(f,.15,'sine',.16,i*.08));},
    penalty(){sw(300,150,.1,'sawtooth',.13);osc(140,.2,'sawtooth',.08,.1);},
    cd(n){const f=[0,349,415,494,587];osc(f[n]||494,.22,'sine',.2);if(n===0)[523,659,784,1047].forEach((v,i)=>osc(v,.16,'sine',.18,i*.08));},
    win(){[523,659,784,659,784,1047,784,1047,1319,1047,1319,1568].forEach((f,i)=>osc(f,.15,'sine',.17,i*.09));[523,659,784,880,1047].forEach((f,i)=>osc(f,.3,'triangle',.07,i*.07+.05));},
  };
})();

/* ═══════════════════════════════════════════════
   ARENA CANVAS RENDERER
═══════════════════════════════════════════════ */
const Arena=(()=>{
  let cv,cx2d,W=0,H=0,raf=null;
  // Animation time
  let t=0;
  // State snapshot for rendering
  let snap={mode:1,p1:{x:.1,score:0,name:'P1',pulling:true},p2:{x:.9,score:0,name:'P2',pulling:true},t1:{score:0,players:[],pi:0},t2:{score:0,players:[],pi:0},over:false};

  function init(){
    cv=document.getElementById('arena-canvas');
    cx2d=cv.getContext('2d');
    resize();
  }

  function resize(){
    const wrap=document.getElementById('arena');
    if(!wrap)return;
    W=wrap.offsetWidth;H=wrap.offsetHeight;
    cv.width=W*window.devicePixelRatio;
    cv.height=H*window.devicePixelRatio;
    cv.style.width=W+'px';cv.style.height=H+'px';
    cx2d.scale(window.devicePixelRatio,window.devicePixelRatio);
  }

  function startLoop(){
    if(raf)return;
    function loop(ts){
      t=ts*.001;
      draw();
      raf=requestAnimationFrame(loop);
    }
    raf=requestAnimationFrame(loop);
  }
  function stopLoop(){if(raf){cancelAnimationFrame(raf);raf=null;}}

  function setSnap(s){snap={...snap,...s};}

  /* ────── helpers ────── */
  function lerp(a,b,p){return a+(b-a)*p;}
  function easeInOut(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;}

  /* ────── draw sky+ground ────── */
  function drawBG(){
    // Sky gradient
    const sky=cx2d.createLinearGradient(0,0,0,H*.47);
    sky.addColorStop(0,'#0F172A');sky.addColorStop(1,'#1E3A8A');
    cx2d.fillStyle=sky;cx2d.fillRect(0,0,W,H*.47);
    // Ground gradient
    const gnd=cx2d.createLinearGradient(0,H*.47,0,H);
    gnd.addColorStop(0,'#166534');gnd.addColorStop(.35,'#14532D');gnd.addColorStop(1,'#1A3A20');
    cx2d.fillStyle=gnd;cx2d.fillRect(0,H*.47,W,H*.53);
    // Ground line highlight
    cx2d.fillStyle='rgba(34,197,94,.4)';cx2d.fillRect(0,H*.47,W,3);
    // Stars
    const stars=[[.06,.14,.9],[.14,.08,1],[.25,.19,.8],[.38,.07,1.1],[.61,.06,.9],[.72,.16,.8],[.85,.09,1.1],[.93,.22,.85]];
    cx2d.fillStyle='#fff';
    stars.forEach(([sx,sy,r])=>{
      cx2d.globalAlpha=.4+.3*Math.sin(t*1.2+sx*10);
      cx2d.beginPath();cx2d.arc(sx*W,sy*H,r,0,Math.PI*2);cx2d.fill();
    });
    cx2d.globalAlpha=1;
    // Moon
    cx2d.fillStyle='#FEF9C3';cx2d.beginPath();cx2d.arc(W*.92,H*.2,W*.016,0,Math.PI*2);cx2d.fill();
    cx2d.fillStyle='#1E3A8A';cx2d.beginPath();cx2d.arc(W*.925,H*.16,W*.012,0,Math.PI*2);cx2d.fill();
    // Crowd silhouettes
    drawCrowd(W*.02,W*.24,true);
    drawCrowd(W*.76,W*.98,false);
  }

  function drawCrowd(x1,x2,leftSide){
    const n=8;const segW=(x2-x1)/n;
    const crowdColors=['#EF4444','#FBBF24','#06B6D4','#8B5CF6','#F97316','#EC4899','#10B981','#3B82F6'];
    for(let i=0;i<n;i++){
      const hOff=Math.sin(t*.8+(leftSide?i:i+n)*1.4)*.018;
      const cx3=x1+segW*(i+.5);
      const ch=H*(.12+.05*((i%3)*.5))+hOff*H;
      const cy=H*.47-ch;
      // Cheer animation
      const armUp=Math.sin(t*2+(leftSide?i:-i)*1.7)>.3;
      cx2d.fillStyle=crowdColors[i%crowdColors.length];
      cx2d.globalAlpha=.55;
      // body
      cx2d.beginPath();cx2d.roundRect(cx3-segW*.28,cy,segW*.56,ch*.72,3);cx2d.fill();
      // head
      cx2d.beginPath();cx2d.arc(cx3,cy-segW*.16,segW*.2,0,Math.PI*2);cx2d.fill();
      // arm
      if(armUp){
        cx2d.strokeStyle=crowdColors[i%crowdColors.length];cx2d.lineWidth=3;cx2d.globalAlpha=.5;
        cx2d.beginPath();cx2d.moveTo(cx3-segW*.28,cy+ch*.2);cx2d.lineTo(cx3-segW*.48,cy-ch*.1);cx2d.stroke();
        cx2d.beginPath();cx2d.moveTo(cx3+segW*.28,cy+ch*.2);cx2d.lineTo(cx3+segW*.48,cy-ch*.1);cx2d.stroke();
      }
      cx2d.globalAlpha=1;
    }
  }

  /* ────── draw VS pole+flag ────── */
  function drawFlag(fx){
    const py=H*.47;
    // pole
    cx2d.strokeStyle='#78350F';cx2d.lineWidth=5;cx2d.lineCap='round';
    cx2d.beginPath();cx2d.moveTo(fx,py-H*.36);cx2d.lineTo(fx,py);cx2d.stroke();
    // flag waving
    const wave=Math.sin(t*3)*.06;
    const fw=W*.042,fh=H*.09;
    cx2d.save();cx2d.translate(fx,py-H*.34);
    // red half
    cx2d.fillStyle='#DC2626';
    cx2d.beginPath();cx2d.moveTo(0,0);cx2d.quadraticCurveTo(fw*.5+wave*W,fh*.1,fw,0);cx2d.quadraticCurveTo(fw*.5+wave*W,fh*.6,fw,fh*.5);cx2d.lineTo(0,fh*.5);cx2d.closePath();cx2d.fill();
    // white half
    cx2d.fillStyle='#fff';
    cx2d.beginPath();cx2d.moveTo(0,fh*.5);cx2d.quadraticCurveTo(fw*.5+wave*W,fh*.6,fw,fh*.5);cx2d.quadraticCurveTo(fw*.5+wave*W,fh*1.1,fw,fh);cx2d.lineTo(0,fh);cx2d.closePath();cx2d.fill();
    // VS text
    cx2d.fillStyle='#1E3A8A';cx2d.font=`bold ${fh*.45}px Bebas Neue,sans-serif`;cx2d.textAlign='center';
    cx2d.fillText('VS',fw*.5,fh*.45);
    cx2d.restore();
  }

  /* ────── draw rope with sag ────── */
  function drawRope(x1,y1,x2,y2){
    const sag=Math.max(6,(x2-x1)*.05);
    const mx=(x1+x2)/2,my=Math.max(y1,y2)+sag;
    // shadow
    cx2d.strokeStyle='rgba(0,0,0,.18)';cx2d.lineWidth=7;cx2d.lineCap='round';
    cx2d.beginPath();cx2d.moveTo(x1,y1+3);cx2d.quadraticCurveTo(mx,my+3,x2,y2+3);cx2d.stroke();
    // rope
    cx2d.strokeStyle='#78350F';cx2d.lineWidth=7;
    cx2d.beginPath();cx2d.moveTo(x1,y1);cx2d.quadraticCurveTo(mx,my,x2,y2);cx2d.stroke();
    // twist pattern
    cx2d.strokeStyle='#A16207';cx2d.lineWidth=4;cx2d.setLineDash([12,8]);
    cx2d.beginPath();cx2d.moveTo(x1,y1);cx2d.quadraticCurveTo(mx,my,x2,y2);cx2d.stroke();
    cx2d.setLineDash([]);
  }

  /* ────── pixel-art front-view character with pulling animation ────── */
  function drawCharFront(cx3,cy,flip,colorMain,colorDark,name,pulling,pct){
    cx2d.save();cx2d.translate(cx3,cy);if(flip)cx2d.scale(-1,1);

    // Pulling animation: lean forward, arms stretch
    const lean=pulling?(Math.sin(t*4)*2):0;             // body rock
    const armStretch=pulling?(Math.abs(Math.sin(t*4))*.8):0; // arm pull intensity
    const legSwing=pulling?(Math.sin(t*4)*4):0;         // leg push

    cx2d.rotate(lean*Math.PI/180);

    const S=1; // scale factor (1=normal)
    // shadow
    cx2d.fillStyle='rgba(0,0,0,.22)';
    cx2d.beginPath();cx2d.ellipse(0,94*S,22*S,5*S,0,0,Math.PI*2);cx2d.fill();

    // ── legs (walking when pulling) ──
    // back leg
    cx2d.save();cx2d.translate(-4*S,76*S);cx2d.rotate((-8+legSwing)*Math.PI/180);
    cx2d.fillStyle='#1E3A8A';cx2d.beginPath();cx2d.roundRect(-7*S,0,12*S,20*S,3*S);cx2d.fill();
    // back shoe
    cx2d.fillStyle='#111';cx2d.beginPath();cx2d.roundRect(-9*S,18*S,16*S,8*S,3*S);cx2d.fill();
    cx2d.restore();
    // front leg
    cx2d.save();cx2d.translate(4*S,76*S);cx2d.rotate((8-legSwing)*Math.PI/180);
    cx2d.fillStyle='#1D4ED8';cx2d.beginPath();cx2d.roundRect(-7*S,0,12*S,20*S,3*S);cx2d.fill();
    cx2d.fillStyle='#111';cx2d.beginPath();cx2d.roundRect(-8*S,18*S,16*S,8*S,3*S);cx2d.fill();
    cx2d.restore();

    // ── body ──
    cx2d.save();cx2d.translate(0,48*S);
    // shirt shadow
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-19*S,-2*S,38*S,30*S,4*S);cx2d.fill();
    // shirt main
    cx2d.fillStyle=colorMain;cx2d.beginPath();cx2d.roundRect(-18*S,0,36*S,28*S,3*S);cx2d.fill();
    // shirt collar highlight
    cx2d.fillStyle='rgba(255,255,255,.14)';cx2d.beginPath();cx2d.roundRect(-16*S,0,32*S,6*S,2*S);cx2d.fill();
    // belt
    cx2d.fillStyle=colorDark;cx2d.fillRect(-18*S,25*S,36*S,5*S);
    cx2d.fillStyle='#F59E0B';cx2d.beginPath();cx2d.roundRect(-4*S,25*S,8*S,5*S,1*S);cx2d.fill();

    // ── arms ──
    // back arm (holding rope side) — stretched when pulling
    const armOff=armStretch*12;
    cx2d.save();cx2d.translate(16*S,4*S);cx2d.rotate((-20-armOff)*Math.PI/180);
    cx2d.fillStyle=colorMain;cx2d.beginPath();cx2d.roundRect(-6*S,0,12*S,16*S,4*S);cx2d.fill();
    cx2d.fillStyle='#FBBF24';cx2d.beginPath();cx2d.roundRect(-5*S,13*S,11*S,9*S,3*S);cx2d.fill();
    cx2d.restore();
    // front arm — counter-push
    cx2d.save();cx2d.translate(-16*S,6*S);cx2d.rotate((15+armOff*.5)*Math.PI/180);
    cx2d.fillStyle=colorMain;cx2d.beginPath();cx2d.roundRect(-6*S,0,12*S,14*S,4*S);cx2d.fill();
    cx2d.fillStyle='#FBBF24';cx2d.beginPath();cx2d.roundRect(-5*S,11*S,11*S,9*S,3*S);cx2d.fill();
    cx2d.restore();

    cx2d.restore(); // end body

    // ── head ──
    cx2d.save();cx2d.translate(0,2*S);
    // head shadow/border
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-20*S,0,40*S,38*S,5*S);cx2d.fill();
    // head main
    cx2d.fillStyle=colorMain;cx2d.beginPath();cx2d.roundRect(-18*S,2*S,36*S,34*S,4*S);cx2d.fill();
    // hair
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-18*S,2*S,36*S,8*S,4*S);cx2d.fill();
    cx2d.fillStyle=colorMain;cx2d.globalAlpha=.3;cx2d.fillRect(-18*S,8*S,36*S,2*S);cx2d.globalAlpha=1;
    // eyes
    [[-14,13],[4,13]].forEach(([ex,ey])=>{
      cx2d.fillStyle='white';cx2d.beginPath();cx2d.roundRect(ex*S,ey*S,10*S,10*S,2.5*S);cx2d.fill();
      cx2d.fillStyle='#111';cx2d.beginPath();cx2d.roundRect((ex+2)*S,(ey+1.5)*S,6*S,6*S,1.5*S);cx2d.fill();
      cx2d.fillStyle='white';cx2d.globalAlpha=.7;cx2d.fillRect((ex+2)*S,(ey+1.5)*S,3*S,3*S);cx2d.globalAlpha=1;
    });
    // eyebrows (determined look when pulling)
    const browTilt=pulling?-3:0;
    [[-14,9],[4,9]].forEach(([bx,by],i)=>{
      cx2d.save();cx2d.translate((bx+5)*S,(by+1.5)*S);cx2d.rotate((i===0?browTilt:-browTilt)*Math.PI/180);
      cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-5*S,-1.5*S,10*S,3.5*S,2*S);cx2d.fill();
      cx2d.restore();
    });
    // blush
    cx2d.fillStyle='rgba(255,255,255,.18)';
    cx2d.beginPath();cx2d.ellipse(-14*S,25*S,5*S,3*S,0,0,Math.PI*2);cx2d.fill();
    cx2d.beginPath();cx2d.ellipse(14*S,25*S,5*S,3*S,0,0,Math.PI*2);cx2d.fill();
    // mouth — grin when pulling
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-9*S,27*S,18*S,4.5*S,2.5*S);cx2d.fill();
    if(pulling){cx2d.fillStyle='rgba(255,255,255,.28)';cx2d.beginPath();cx2d.roundRect(-7*S,27.5*S,14*S,2.5*S,1.5*S);cx2d.fill();}
    // neck
    cx2d.fillStyle='#FBBF24';cx2d.beginPath();cx2d.roundRect(-5*S,37*S,10*S,6*S,1*S);cx2d.fill();
    cx2d.restore(); // end head

    // name tag
    cx2d.fillStyle='rgba(0,0,0,.45)';cx2d.beginPath();cx2d.roundRect(-22*S,-20*S,44*S,14*S,4*S);cx2d.fill();
    cx2d.fillStyle='white';cx2d.font=`700 ${9*S}px Plus Jakarta Sans,sans-serif`;cx2d.textAlign='center';cx2d.textBaseline='middle';
    cx2d.fillText(name.slice(0,10),-1*S,-14*S);

    cx2d.restore();
  }

  /* ────── side-view character for team mode ────── */
  function drawCharSide(cx3,cy,facingR,color,colorDark,isActive){
    const d=facingR?1:-1;
    cx2d.save();cx2d.translate(cx3,cy);

    const isP=isActive;
    const lean=isP?(Math.sin(t*4)*3):0;
    const armPull=isP?(Math.abs(Math.sin(t*4))):.3;
    const legA=isP?(Math.sin(t*4)*6):0;

    // shadow
    cx2d.fillStyle='rgba(0,0,0,.2)';cx2d.beginPath();cx2d.ellipse(0,3,18,4,0,0,Math.PI*2);cx2d.fill();

    // legs
    cx2d.save();cx2d.translate(0,0);
    // back leg
    cx2d.save();cx2d.translate(d*-4,-20);cx2d.rotate((-d*(8-legA))*Math.PI/180);
    cx2d.fillStyle='#1E3A8A';cx2d.beginPath();cx2d.roundRect(-5,-2,10,22,3);cx2d.fill();
    cx2d.fillStyle='#111';cx2d.beginPath();cx2d.roundRect(d*-2,19,d>0?12:12,7,3);cx2d.fill();
    cx2d.restore();
    // front leg
    cx2d.save();cx2d.translate(d*4,-20);cx2d.rotate((d*(10+legA))*Math.PI/180);
    cx2d.fillStyle='#1D4ED8';cx2d.beginPath();cx2d.roundRect(-5,-2,10,22,3);cx2d.fill();
    cx2d.fillStyle='#111';cx2d.beginPath();cx2d.roundRect(d*-1,19,12,7,3);cx2d.fill();
    cx2d.restore();
    cx2d.restore();

    // body — lean forward when pulling
    cx2d.save();cx2d.translate(0,-22);cx2d.rotate(d*(-8-lean)*Math.PI/180);
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-12,-30,24,30,4);cx2d.fill();
    cx2d.fillStyle=color;cx2d.beginPath();cx2d.roundRect(-11,-29,22,28,3);cx2d.fill();
    cx2d.fillStyle='rgba(255,255,255,.14)';cx2d.beginPath();cx2d.roundRect(-10,-29,20,6,2);cx2d.fill();
    // belt
    cx2d.fillStyle=colorDark;cx2d.fillRect(-12,-4,24,4);
    cx2d.fillStyle='#F59E0B';cx2d.beginPath();cx2d.roundRect(-3,-4,6,4,1);cx2d.fill();
    // arm holding rope (extended toward rope)
    cx2d.save();cx2d.translate(d*10,-18);cx2d.rotate(d*(-20-armPull*15)*Math.PI/180);
    cx2d.fillStyle=color;cx2d.beginPath();cx2d.roundRect(-4,0,8,20,3);cx2d.fill();
    cx2d.fillStyle='#FBBF24';cx2d.beginPath();cx2d.roundRect(-4,17,9,8,3);cx2d.fill();
    cx2d.restore();
    // other arm (push back)
    cx2d.save();cx2d.translate(-d*8,-15);cx2d.rotate(d*(15+armPull*8)*Math.PI/180);
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-4,0,8,16,3);cx2d.fill();
    cx2d.restore();
    cx2d.restore();

    // head
    cx2d.save();cx2d.translate(d*3,-52);
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-13,-1,26,25,5);cx2d.fill();
    cx2d.fillStyle=color;cx2d.beginPath();cx2d.roundRect(-12,1,24,22,4);cx2d.fill();
    cx2d.fillStyle=colorDark;cx2d.beginPath();cx2d.roundRect(-12,1,24,6,3);cx2d.fill();
    // eye facing movement direction
    const ex=d>0?4:-8;
    cx2d.fillStyle='white';cx2d.beginPath();cx2d.roundRect(ex,9,9,8,2);cx2d.fill();
    cx2d.fillStyle='#111';cx2d.beginPath();cx2d.roundRect(ex+1.5,10,5,5,1.5);cx2d.fill();
    cx2d.fillStyle='white';cx2d.globalAlpha=.7;cx2d.fillRect(ex+1.5,10,2.5,2.5);cx2d.globalAlpha=1;
    // active indicator
    if(isActive){
      cx2d.fillStyle=color;cx2d.globalAlpha=.7;
      cx2d.beginPath();cx2d.ellipse(0,-8,10,4,0,0,Math.PI*2);cx2d.fill();
      cx2d.globalAlpha=1;
      cx2d.fillStyle=color;cx2d.font='bold 8px Plus Jakarta Sans,sans-serif';cx2d.textAlign='center';cx2d.textBaseline='middle';
      cx2d.fillText('▲',0,-8);
    }
    cx2d.restore();

    cx2d.restore();
  }

  /* ────── MAIN DRAW ────── */
  function draw(){
    cx2d.clearRect(0,0,W,H);
    drawBG();

    if(snap.mode===1) drawMode1();
    else drawMode2();
  }

  function drawMode1(){
    const{p1,p2}=snap;
    // character X positions: each can advance up to 40% of width
    const maxMove=W*.40;
    const cx1=W*.07+(p1.score/20)*maxMove;
    const cx2b=W*.93-(p2.score/20)*maxMove;
    const cy=H*.38;

    // rope connection points (right hand of P1, left hand of P2)
    const rx1=cx1+W*.04; // P1's right hand
    const rx2=cx2b-W*.04; // P2's left hand (flipped)
    const ry=cy+H*.38;

    drawRope(rx1,ry,rx2,ry);

    // P1 (left, facing right, not flipped)
    drawCharFront(cx1,cy,false,'#DC2626','#991B1B',p1.name,p1.pulling,p1.score/20);
    // P2 (right, facing left, flipped)
    drawCharFront(cx2b,cy,true,'#1D4ED8','#1E3A8A',p2.name,p2.pulling,p2.score/20);

    // flag — moves based on score diff
    const diff=p1.score-p2.score;
    const flagX=W*.5+Math.max(-W*.28,Math.min(W*.28,(diff/20)*W*.24));
    drawFlag(flagX);

    // score labels near chars
    cx2d.font=`bold ${H*.1}px Bebas Neue,sans-serif`;cx2d.textAlign='center';
    cx2d.fillStyle='rgba(255,255,255,.5)';cx2d.fillText(p1.score,W*.055,H*.95);
    cx2d.fillText(p2.score,W*.945,H*.95);
  }

  function drawMode2(){
    const{t1,t2}=snap;
    const n1=t1.players.length,n2=t2.players.length;
    const areaW=W*.42;
    const gndY=H*.82;

    // spacing between characters
    const sp1=Math.min(areaW/(n1+.5),W*.09);
    const sp2=Math.min(areaW/(n2+.5),W*.09);

    // rope anchors: rightmost T1, leftmost T2
    const rx1=W*.03+(n1-.5)*sp1+W*.025;
    const rx2=W*.97-(n2-.5)*sp2-W*.025;
    const ry=gndY-H*.24;

    // connector ropes within teams
    for(let i=0;i<n1-1;i++){
      const ax=W*.03+(i+.5)*sp1+W*.02;
      const bx=W*.03+(i+1.5)*sp1-W*.02;
      cx2d.strokeStyle='#DC2626';cx2d.lineWidth=3;cx2d.globalAlpha=.3;cx2d.setLineDash([6,5]);
      cx2d.beginPath();cx2d.moveTo(ax,ry);cx2d.lineTo(bx,ry);cx2d.stroke();
      cx2d.setLineDash([]);cx2d.globalAlpha=1;
    }
    for(let i=0;i<n2-1;i++){
      const ax=W*.97-(i+.5)*sp2-W*.02;
      const bx=W*.97-(i+1.5)*sp2+W*.02;
      cx2d.strokeStyle='#1D4ED8';cx2d.lineWidth=3;cx2d.globalAlpha=.3;cx2d.setLineDash([6,5]);
      cx2d.beginPath();cx2d.moveTo(ax,ry);cx2d.lineTo(bx,ry);cx2d.stroke();
      cx2d.setLineDash([]);cx2d.globalAlpha=1;
    }

    drawRope(rx1,ry,rx2,ry);

    // T1 chars — side view, facing right
    for(let i=0;i<n1;i++){
      const cx3=W*.03+(i+.5)*sp1;
      drawCharSide(cx3,gndY,true,'#DC2626','#991B1B',t1.pi===i&&!snap.over);
    }
    // T2 chars — side view, facing left
    for(let i=0;i<n2;i++){
      const cx3=W*.97-(i+.5)*sp2;
      drawCharSide(cx3,gndY,false,'#1D4ED8','#1E3A8A',t2.pi===i&&!snap.over);
    }

    // flag
    const diff=t1.score-t2.score;
    const flagX=W*.5+Math.max(-W*.3,Math.min(W*.3,(diff/7)*W*.28));
    drawFlag(flagX);

    // score
    cx2d.font=`bold ${H*.08}px Bebas Neue,sans-serif`;cx2d.textAlign='center';
    cx2d.fillStyle='rgba(255,100,100,.6)';cx2d.fillText(t1.score,W*.045,H*.95);
    cx2d.fillStyle='rgba(100,150,255,.6)';cx2d.fillText(t2.score,W*.955,H*.95);
  }

  return{
    init,resize,startLoop,stopLoop,setSnap,
  };
})();

/* ═══════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════ */
const Confetti=(()=>{
  let raf=null;
  function start(wc){
    const cv=document.getElementById('cf-canvas'),ctx=cv.getContext('2d');
    cv.width=window.innerWidth;cv.height=window.innerHeight;
    const cols=[wc,'#F59E0B','#16A34A','#DC2626','#1D4ED8','#FBBF24','#EF4444'];
    const ps=Array.from({length:140},()=>({
      x:Math.random()*cv.width,y:Math.random()*-cv.height,
      w:Math.random()*13+5,h:Math.random()*6+3,
      r:Math.random()*Math.PI*2,rs:Math.random()*.12-.06,
      vx:Math.random()*2.2-1.1,vy:Math.random()*4.5+2,
      c:cols[Math.floor(Math.random()*cols.length)]
    }));
    function draw(){
      ctx.clearRect(0,0,cv.width,cv.height);
      ps.forEach(p=>{
        ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);
        ctx.fillStyle=p.c;ctx.globalAlpha=.85;
        ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
        p.x+=p.vx;p.y+=p.vy;p.r+=p.rs;
        if(p.y>cv.height+20){p.y=-20;p.x=Math.random()*cv.width;}
      });
      raf=requestAnimationFrame(draw);
    }
    stop();draw();
  }
  function stop(){
    if(raf){cancelAnimationFrame(raf);raf=null;}
    const cv=document.getElementById('cf-canvas');
    if(cv)cv.getContext('2d').clearRect(0,0,cv.width,cv.height);
  }
  return{start,stop};
})();

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function prepQ(){
  return shuffle(QDB).map((q,idx)=>{
    const ans=q.o[q.a];const opts=shuffle([...q.o]);
    return{q:q.q,opts,ai:opts.indexOf(ans),id:idx};
  });
}
function floatLbl(el,text,color){
  if(!el)return;
  const r=el.getBoundingClientRect();
  const d=document.createElement('div');
  d.className='float-lbl';d.textContent=text;
  d.style.cssText=`left:${r.left+r.width/2-20}px;top:${r.top+r.height*.3}px;color:${color}`;
  document.body.appendChild(d);setTimeout(()=>d.remove(),1000);
}

/* ═══════════════════════════════════════════════
   APP CONTROLLER
═══════════════════════════════════════════════ */
const App=(()=>{
  let cur='s-home';
  let mode=1,G={};
  let teamCounts=[3,3];

  /* ── navigate ── */
  function go(id){
    Snd.click();
    const oldEl=document.getElementById(cur);
    const newEl=document.getElementById(id);
    if(!newEl||id===cur)return;
    oldEl.classList.add('leaving');
    setTimeout(()=>{oldEl.classList.remove('active','leaving');},300);
    newEl.classList.add('active');
    cur=id;
  }

  /* ── sound toggle ── */
  function toggleSound(){
    const on=Snd.toggle();
    document.getElementById('snd-btn').textContent=on?'🔊 Suara Aktif':'🔇 Suara Mati';
  }

  /* ── mode select ── */
  function selectMode(m){
    Snd.select();
    mode=m;
    buildSetup(m);
    go('s-setup');
  }

  /* ═══════════════ SETUP ═══════════════ */
  function buildSetup(m){
    const cols=document.getElementById('setup-cols');
    cols.innerHTML='';
    if(m===1){
      cols.innerHTML=`
      <div class="col col-red">
        <div class="setup-header">👤 Pemain 1 — Merah</div>
        <div class="setup-single">
          <div class="setup-lbl">NAMA PEMAIN 1</div>
          <input id="ni-p1" class="setup-inp-big" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off">
        </div>
      </div>
      <div class="col-div"></div>
      <div class="col col-blue">
        <div class="setup-header">👤 Pemain 2 — Biru</div>
        <div class="setup-single">
          <div class="setup-lbl">NAMA PEMAIN 2</div>
          <input id="ni-p2" class="setup-inp-big" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off">
        </div>
      </div>`;
    } else {
      teamCounts=[3,3];
      cols.innerHTML=buildTeamCol(1)+`<div class="col-div"></div>`+buildTeamCol(2);
      renderNames(1);renderNames(2);
    }
  }

  function buildTeamCol(t){
    const cl=t===1?'col-red':'col-blue';
    const lbl=t===1?'🔴 Tim Merah':'🔵 Tim Biru';
    return `<div class="col ${cl}">
      <div class="setup-header">${lbl}</div>
      <div class="count-row">
        <div class="count-lbl">Jumlah Peserta</div>
        <div class="count-ctrl">
          <button class="cnt-btn" onclick="App.setCount(${t},-1)">−</button>
          <div class="cnt-val" id="cv-${t}">3</div>
          <button class="cnt-btn" onclick="App.setCount(${t},1)">+</button>
        </div>
      </div>
      <div class="names-grid" id="ng-${t}"></div>
    </div>`;
  }

  function setCount(t,d){
    teamCounts[t-1]=Math.max(1,Math.min(20,teamCounts[t-1]+d));
    document.getElementById('cv-'+t).textContent=teamCounts[t-1];
    renderNames(t);Snd.click();
  }

  function renderNames(t){
    const n=teamCounts[t-1];
    const g=document.getElementById('ng-'+t);if(!g)return;
    const cl=t===1?'col-red':'col-blue';
    g.innerHTML='';
    for(let i=1;i<=n;i++){
      const row=document.createElement('div');row.className='name-row';
      row.innerHTML=`<div class="name-num">${i}</div><input class="name-inp" id="ni-t${t}-${i}" type="text" placeholder="Peserta ${i}" maxlength="14" autocomplete="off">`;
      g.appendChild(row);
    }
  }

  function getPlayers(t){
    const n=teamCounts[t-1],ps=[];
    for(let i=1;i<=n;i++){
      const v=document.getElementById(`ni-t${t}-${i}`);
      ps.push(v&&v.value.trim()||`Peserta ${i}`);
    }
    return ps;
  }

  /* ═══════════════ START ═══════════════ */
  function startFromSetup(){
    Snd.ready();
    if(mode===1){
      const n1=document.getElementById('ni-p1').value.trim()||'Pemain 1';
      const n2=document.getElementById('ni-p2').value.trim()||'Pemain 2';
      G={mode:1,over:false,
        p1:{name:n1,queue:prepQ(),correct:new Set(),ci:0,timer:90,tInt:null,locked:false,done:false,score:0,pulling:true},
        p2:{name:n2,queue:prepQ(),correct:new Set(),ci:0,timer:90,tInt:null,locked:false,done:false,score:0,pulling:true},
      };
    } else {
      G={mode:2,over:false,
        t1:{players:getPlayers(1),score:0,pi:0},
        t2:{players:getPlayers(2),score:0,pi:0},
        qs1:prepQ(),qs2:prepQ(),
        qi1:0,qi2:0,
        t1lock:false,t2lock:false,
        t1tInt:null,t2tInt:null,
        t1timer:20,t2timer:20,
      };
    }
    runCD(()=>startGame());
  }

  /* ═══════════════ COUNTDOWN ═══════════════ */
  function runCD(cb){
    go('s-countdown');
    const el=document.getElementById('cdn');
    let n=3;
    function tick(){
      el.textContent=n>0?n:'MULAI!';
      el.classList.remove('cd-pop');void el.offsetWidth;el.classList.add('cd-pop');
      Snd.cd(n);
      if(n-->0)setTimeout(tick,1000);
      else setTimeout(()=>{cb();},920);
    }tick();
  }

  /* ═══════════════ GAME START ═══════════════ */
  function startGame(){
    Arena.init();Arena.resize();
    if(G.mode===1){
      Arena.setSnap({mode:1,p1:{x:.07,score:0,name:G.p1.name,pulling:true},p2:{x:.93,score:0,name:G.p2.name,pulling:true}});
      buildHead('left',G.p1.name,0,'r');buildHead('right',G.p2.name,0,'b');
      loadQ1('p1');loadQ1('p2');
    } else {
      Arena.setSnap({mode:2,t1:{score:0,players:G.t1.players,pi:0},t2:{score:0,players:G.t2.players,pi:0},over:false});
      buildHead('left','Tim Merah',0,'r',true);buildHead('right','Tim Biru',0,'b',true);
      loadQ2(1);loadQ2(2);
    }
    go('s-game');
    Arena.startLoop();
    Snd.select();
  }

  /* ═══════════════════════════════════════
     MODE 1 LOGIC
  ═══════════════════════════════════════ */
  const M1MAX=90,M1B=5,M1P=5,M1MIN=10;

  function getNextQ1(ps){
    const n=ps.queue.length;
    for(let i=0;i<n;i++){
      const idx=(ps.ci+i)%n;
      if(!ps.correct.has(ps.queue[idx].id)){ps.ci=idx;return ps.queue[idx];}
    }
    return null;
  }

  function loadQ1(p){
    const ps=G[p],side=p==='p1'?'left':'right';
    stopT1(p);
    const q=getNextQ1(ps);
    if(!q){
      ps.done=true;ps.pulling=false;
      Arena.setSnap({[p]:{...ps,pulling:false}});
      setQ(side,'<span style="color:#16A34A;font-weight:700">✅ Semua soal selesai!</span>',true);
      setOpts(side,[]);
      setTimer(side,'✔','100%','#16A34A');
      if(!G.over)endM1(p,'done');
      return;
    }
    const rem=ps.queue.length-ps.correct.size;
    updateHead(side,{qi:'Sisa '+rem});
    setQ(side,q.q);
    setOpts(side,q.opts,(i)=>ansM1(p,i,q.ai));
    startT1(p);
  }

  function startT1(p){
    const ps=G[p],side=p==='p1'?'left':'right',col=p==='p1'?'r':'b';
    const bar=document.getElementById('gf-'+side);
    const sec=document.getElementById('gt-'+side);
    bar.style.transition='none';bar.style.width=(ps.timer/M1MAX*100)+'%';
    bar.className='gp-fill '+col;void bar.offsetWidth;
    bar.style.transition='width 1s linear,background .4s';
    const upd=()=>{
      sec.textContent=ps.timer+'s';
      if(ps.timer<=10){bar.classList.add('td');bar.classList.remove('tw');sec.className='gp-tsec '+col+' td';}
      else if(ps.timer<=25){bar.classList.add('tw');bar.classList.remove('td');sec.className='gp-tsec '+col+' tw';}
      else{bar.classList.remove('tw','td');sec.className='gp-tsec '+col;}
    };upd();
    ps.tInt=setInterval(()=>{
      if(ps.locked||ps.done)return;
      ps.timer--;
      bar.style.width=Math.max(0,ps.timer/M1MAX*100)+'%';
      upd();
      if(ps.timer<=10)Snd.tickD();else if(ps.timer<=25)Snd.tickW();else if(ps.timer%15===0)Snd.tick();
      if(ps.timer<=0){clearInterval(ps.tInt);ps.pulling=false;Arena.setSnap({[p]:{...ps,pulling:false}});endM1(p,'timeout');}
    },1000);
  }
  function stopT1(p){if(G[p]&&G[p].tInt){clearInterval(G[p].tInt);G[p].tInt=null;}}

  function ansM1(p,sel,correct){
    if(G[p].locked||G.over)return;
    G[p].locked=true;stopT1(p);
    const ps=G[p],side=p==='p1'?'left':'right';
    lockOpts(side,correct,sel);
    if(sel===correct){
      Snd.correct();
      ps.correct.add(ps.queue[ps.ci].id);ps.score++;
      ps.timer=Math.min(M1MAX,ps.timer+M1B);
      ps.ci=(ps.ci+1)%ps.queue.length;
      updateHead(side,{score:ps.score});
      Arena.setSnap({[p]:{name:ps.name,score:ps.score,pulling:true}});
      floatLbl(document.getElementById('go-'+side),'+'+M1B+'s','#16A34A');
      Snd.move();
    } else {
      Snd.wrong();
      ps.timer=Math.max(M1MIN,ps.timer-M1P);
      const c=ps.queue[ps.ci];ps.queue.splice(ps.ci,1);ps.queue.push(c);
      if(ps.ci>=ps.queue.length)ps.ci=0;
      floatLbl(document.getElementById('go-'+side),'-'+M1P+'s','#EF4444');
      Snd.penalty();
      const pan=document.getElementById('gp-'+side);
      pan.classList.remove('shake-anim');void pan.offsetWidth;pan.classList.add('shake-anim');
    }
    setTimeout(()=>{ps.locked=false;loadQ1(p);},780);
  }

  function endM1(p,reason){
    if(G.over)return;G.over=true;
    stopT1('p1');stopT1('p2');
    G.p1.pulling=false;G.p2.pulling=false;
    Arena.setSnap({p1:{...G.p1,pulling:false},p2:{...G.p2,pulling:false}});
    const w=reason==='done'?p:(p==='p1'?'p2':'p1');
    setTimeout(()=>showWin(G[w].name,w==='p1'?'#DC2626':'#1D4ED8',G.p1.name,G.p2.name,G.p1.score,G.p2.score),650);
  }

  /* ═══════════════════════════════════════
     MODE 2 LOGIC — BOTH TEAMS SIMULTANEOUS
  ═══════════════════════════════════════ */
  const M2WIN=7,M2T=20;

  function getNextQ2(t){
    const qs=t===1?G.qs1:G.qs2;
    let qi=t===1?G.qi1:G.qi2;
    if(qi>=qs.length)return null;
    return qs[qi];
  }

  function loadQ2(t){
    const side=t===1?'left':'right',col=t===1?'r':'b';
    const team=t===1?G.t1:G.t2;
    const lock=t===1?'t1lock':'t2lock';
    stopT2(t);
    const q=getNextQ2(t);
    if(!q){
      setQ(side,'<span style="color:#16A34A;font-weight:700">✅ Semua soal habis!</span>',true);
      setOpts(side,[]);
      setTimer(side,'✔','100%','#16A34A');
      return;
    }
    const pname=team.players[team.pi];
    updateHead(side,{name:t===1?'🔴 '+pname:'🔵 '+pname,qi:`Q${(t===1?G.qi1:G.qi2)+1}/20`});
    setQ(side,q.q);
    setOpts(side,q.opts,(i)=>ansM2(t,i,q.ai));
    startT2(t);
  }

  function startT2(t){
    const side=t===1?'left':'right',col=t===1?'r':'b';
    const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);
    if(t===1)G.t1timer=M2T;else G.t2timer=M2T;
    const getTimer=()=>t===1?G.t1timer:G.t2timer;
    const setTimerV=(v)=>{if(t===1)G.t1timer=v;else G.t2timer=v;};
    bar.style.transition='none';bar.style.width='100%';bar.className='gp-fill '+col;
    void bar.offsetWidth;bar.style.transition='width 1s linear';
    sec.textContent=getTimer()+'s';sec.className='gp-tsec '+col;
    const tInt=setInterval(()=>{
      if(G.over)return;
      setTimerV(getTimer()-1);
      bar.style.width=Math.max(0,getTimer()/M2T*100)+'%';
      sec.textContent=getTimer()+'s';
      if(getTimer()<=5){bar.classList.add('td');sec.className='gp-tsec '+col+' td';Snd.tickD();}
      else if(getTimer()<=10){bar.classList.add('tw');sec.className='gp-tsec '+col+' tw';Snd.tickW();}
      if(getTimer()<=0){clearInterval(tInt);if(t===1)G.t1tInt=null;else G.t2tInt=null;timeUpM2(t);}
    },1000);
    if(t===1)G.t1tInt=tInt;else G.t2tInt=tInt;
  }
  function stopT2(t){
    if(t===1&&G.t1tInt){clearInterval(G.t1tInt);G.t1tInt=null;}
    if(t===2&&G.t2tInt){clearInterval(G.t2tInt);G.t2tInt=null;}
  }

  function timeUpM2(t){
    if(G.over)return;
    const lock=t===1?'t1lock':'t2lock';
    if(G[lock])return;G[lock]=true;
    Snd.timeUp();
    const side=t===1?'left':'right';
    const qi=t===1?G.qi1:G.qi2;
    const qs=t===1?G.qs1:G.qs2;
    if(qi<qs.length)lockOpts(side,qs[qi].ai,-1);
    setTimeout(()=>advM2(t),850);
  }

  function ansM2(t,sel,correct){
    const lock=t===1?'t1lock':'t2lock';
    if(G[lock]||G.over)return;
    G[lock]=true;stopT2(t);
    const side=t===1?'left':'right';
    lockOpts(side,correct,sel);
    if(sel===correct){
      Snd.correct();
      const team=t===1?G.t1:G.t2;
      team.score++;
      updateHead(side,{score:team.score});
      Arena.setSnap({t1:{...G.t1},t2:{...G.t2}});
      floatLbl(document.getElementById('go-'+side),'+1',t===1?'#DC2626':'#1D4ED8');
      Snd.move();
      if(team.score>=M2WIN&&!G.over){setTimeout(()=>endM2(t,'win'),700);return;}
    } else {Snd.wrong();}
    setTimeout(()=>advM2(t),780);
  }

  function advM2(t){
    if(G.over)return;
    const team=t===1?G.t1:G.t2;
    team.pi=(team.pi+1)%team.players.length;
    Arena.setSnap({t1:{...G.t1},t2:{...G.t2}});
    if(t===1)G.qi1++;else G.qi2++;
    G[t===1?'t1lock':'t2lock']=false;
    loadQ2(t);
  }

  function endM2(t,reason){
    if(G.over)return;G.over=true;
    stopT2(1);stopT2(2);
    Arena.setSnap({over:true});
    const wn=t===1?'TIM MERAH':'TIM BIRU';
    const wc=t===1?'#DC2626':'#1D4ED8';
    setTimeout(()=>showWin(wn,wc,'Tim Merah','Tim Biru',G.t1.score,G.t2.score),650);
  }

  /* ═══════════════ PANEL HELPERS ═══════════════ */
  function buildHead(side,name,score,col,isTeam){
    const el=document.getElementById('gph-'+side);
    el.innerHTML=`<div class="gp-head-inner ${col==='r'?'red-head':'blue-head'}">
      <span class="gph-name ${col}" id="gn-${side}">${name}</span>
      <div class="gph-right">
        <span class="gph-qi" id="gqi-${side}"></span>
        <div style="display:flex;align-items:baseline;gap:2px">
          <span class="gph-score ${col} pop-target" id="gs-${side}">${score}</span>
          <span class="gph-max">${isTeam?'/7':' poin'}</span>
        </div>
      </div>
    </div>`;
  }

  function updateHead(side,opts){
    if(opts.score!==undefined){
      const el=document.getElementById('gs-'+side);
      if(el){el.textContent=opts.score;el.classList.remove('pop-anim');void el.offsetWidth;el.classList.add('pop-anim');}
    }
    if(opts.qi!==undefined){const el=document.getElementById('gqi-'+side);if(el)el.textContent=opts.qi;}
    if(opts.name!==undefined){const el=document.getElementById('gn-'+side);if(el)el.textContent=opts.name;}
  }

  function setQ(side,html,isHtml){
    const el=document.getElementById('gq-'+side);
    if(isHtml)el.innerHTML=html;else el.textContent=html;
  }

  function setOpts(side,opts,cb){
    const og=document.getElementById('go-'+side);og.innerHTML='';
    if(!opts.length){og.innerHTML='<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#6B7280;font-size:.86rem;font-weight:600">Menunggu...</div>';return;}
    ['A','B','C','D'].forEach((L,i)=>{
      const b=document.createElement('button');b.className='opt';
      b.innerHTML=`<span class="opt-l">${L}</span><span>${opts[i]}</span>`;
      b.onclick=()=>cb(i);og.appendChild(b);
    });
  }

  function lockOpts(side,correct,chosen){
    document.getElementById('go-'+side).querySelectorAll('.opt').forEach((b,i)=>{
      b.disabled=true;
      if(i===correct)b.classList.add('ok');
      else if(i===chosen)b.classList.add('no');
    });
  }

  function setTimer(side,text,widthPct,bg){
    const bar=document.getElementById('gf-'+side);
    const sec=document.getElementById('gt-'+side);
    if(bar){bar.style.width=widthPct;bar.style.background=bg;}
    if(sec)sec.textContent=text;
  }

  /* ═══════════════ WINNER ═══════════════ */
  function showWin(name,color,n1,n2,s1,s2){
    Snd.win();Arena.stopLoop();
    document.getElementById('w-name').textContent=name;
    document.getElementById('w-name').style.color=color;
    document.getElementById('w-scores').innerHTML=`
      <div class="ws-item"><div class="ws-name">${n1}</div><div class="ws-score" style="color:#DC2626">${s1}</div></div>
      <div class="ws-vs">VS</div>
      <div class="ws-item"><div class="ws-name">${n2}</div><div class="ws-score" style="color:#1D4ED8">${s2}</div></div>`;
    go('s-winner');
    Confetti.start(color);
  }

  function goHome(){
    Confetti.stop();Arena.stopLoop();
    G={};
    go('s-home');
  }

  function rematch(){
    Confetti.stop();Arena.stopLoop();
    G={};
    buildSetup(mode);
    go('s-setup');
  }

  /* resize */
  window.addEventListener('resize',()=>{
    Arena.resize();
  });
  window.addEventListener('orientationchange',()=>setTimeout(()=>Arena.resize(),150));

  return{go,toggleSound,selectMode,setCount,renderNames,startFromSetup,goHome,rematch};
})();
