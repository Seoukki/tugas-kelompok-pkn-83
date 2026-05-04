'use strict';
/* ═══════════════════════════════════════
   QUESTIONS
═══════════════════════════════════════ */
const QDB=[
  {q:"Kota manakah yang ditetapkan sebagai ibu kota baru Republik Indonesia menggantikan Jakarta?",o:["Nusantara, Kalimantan Timur","Balikpapan","Samarinda","Palangkaraya"],a:0},
  {q:"Siapakah dua tokoh yang memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945?",o:["Soekarno & Mohammad Hatta","Soekarno & Sutan Sjahrir","Hatta & Ahmad Soebardjo","Soedirman & Soekarno"],a:0},
  {q:"Semboyan nasional Indonesia yang tertulis pada pita Garuda Pancasila adalah?",o:["Bhinneka Tunggal Ika","Satu Nusa Satu Bangsa","Tut Wuri Handayani","Ing Ngarso Sung Tulodo"],a:0},
  {q:"Berapa jumlah provinsi Indonesia setelah pemekaran wilayah terbaru termasuk provinsi baru di Papua?",o:["38 Provinsi","34 Provinsi","36 Provinsi","40 Provinsi"],a:0},
  {q:"W.R. Supratman menciptakan lagu Indonesia Raya yang pertama dikumandangkan pada Kongres Pemuda tahun?",o:["1928","1945","1920","1935"],a:0},
  {q:"Puncak Jaya merupakan puncak tertinggi Indonesia dan masuk Seven Summits. Berada di provinsi?",o:["Papua Tengah","Papua","Papua Barat Daya","Papua Selatan"],a:0},
  {q:"Danau Toba adalah danau vulkanik terbesar di dunia. Terbentuk akibat letusan supervulkan sekitar?",o:["74.000 tahun lalu","10.000 tahun lalu","100.000 tahun lalu","50.000 tahun lalu"],a:0},
  {q:"Komodo hidup endemik di Indonesia. Selain Pulau Komodo, hewan ini juga hidup di?",o:["Pulau Rinca & Flores","Pulau Lombok","Pulau Timor","Pulau Sumbawa"],a:0},
  {q:"UNESCO mengakui Batik Indonesia sebagai Warisan Budaya Takbenda pada tahun?",o:["2009","2003","2012","2015"],a:0},
  {q:"Sungai Kapuas di Kalimantan Barat merupakan sungai terpanjang di Indonesia dengan panjang?",o:["1.143 km","820 km","920 km","980 km"],a:0},
  {q:"Tari Saman dengan gerakan tangan sangat cepat berasal dari suku Gayo di provinsi?",o:["Aceh","Sumatera Barat","Sumatera Utara","Kalimantan Timur"],a:0},
  {q:"Candi Borobudur, candi Buddha terbesar di dunia, berlokasi di?",o:["Magelang, Jawa Tengah","Klaten, Jawa Tengah","Sleman, DI Yogyakarta","Bantul, DI Yogyakarta"],a:0},
  {q:"Buah Durian dikenal sebagai Raja Buah Asia Tenggara. Varietas Musang King yang terkenal berasal dari?",o:["Malaysia (tapi populer di Indonesia)","Medan, Sumatera Utara","Pontianak, Kalimantan","Palu, Sulawesi Tengah"],a:0},
  {q:"Pada pecahan uang Rupiah seri 2016, gambar pahlawan wanita R.A. Kartini terdapat di pecahan?",o:["Rp 20.000","Rp 50.000","Rp 10.000","Rp 100.000"],a:0},
  {q:"Hari Sumpah Pemuda diperingati 28 Oktober untuk mengenang ikrar persatuan pemuda pada tahun?",o:["1928","1945","1920","1908"],a:0},
  {q:"Presiden pertama RI, Ir. Soekarno, mendapat gelar insinyur dari sekolah tinggi yang kini menjadi?",o:["ITB (Institut Teknologi Bandung)","ITS (Institut Teknologi Surabaya)","UI (Universitas Indonesia)","UGM (Universitas Gadjah Mada)"],a:0},
  {q:"Di Selat Sunda terdapat gunung berapi aktif yang pernah meletus dahsyat tahun 1883, yaitu?",o:["Gunung Anak Krakatau","Gunung Raung","Gunung Papandayan","Gunung Merapi"],a:0},
  {q:"Tarian Kecak dari Bali menceritakan kisah epos Hindu yang berjudul?",o:["Ramayana","Mahabharata","Bharatayuda","Arjunawiwaha"],a:0},
  {q:"Pulau yang paling padat penduduknya di Indonesia dan menjadi pusat perekonomian adalah?",o:["Pulau Jawa","Pulau Sumatera","Pulau Kalimantan","Pulau Sulawesi"],a:0},
  {q:"Wayang kulit sebagai seni pertunjukan tradisional Indonesia diakui UNESCO pada tahun?",o:["2003","2009","2012","2016"],a:0},
];

/* ═══════════════════════════════════════
   AUDIO ENGINE
═══════════════════════════════════════ */
const Audio=(()=>{
  let AC=null,sndOn=true,musicNode=null,musicGain=null,masterGain=null,duckGain=null,duckTout=null,musicOn=false;
  function ctx(){if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();return AC;}
  function initG(){
    if(masterGain)return;const c=ctx();
    masterGain=c.createGain();masterGain.gain.value=1;masterGain.connect(c.destination);
    duckGain=c.createGain();duckGain.gain.value=1;duckGain.connect(masterGain);
    musicGain=c.createGain();musicGain.gain.value=.35;musicGain.connect(masterGain);
  }
  function duck(){
    if(!duckGain)return;const c=ctx();
    duckGain.gain.cancelScheduledValues(c.currentTime);duckGain.gain.setValueAtTime(duckGain.gain.value,c.currentTime);duckGain.gain.linearRampToValueAtTime(.1,c.currentTime+.06);
    if(duckTout)clearTimeout(duckTout);
    duckTout=setTimeout(()=>{if(!duckGain)return;const c=ctx();duckGain.gain.cancelScheduledValues(c.currentTime);duckGain.gain.setValueAtTime(duckGain.gain.value,c.currentTime);duckGain.gain.linearRampToValueAtTime(1,c.currentTime+.55);},700);
  }
  function osc(f,d,type,vol,delay){if(!sndOn)return;try{initG();duck();const c=ctx(),t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(duckGain);o.type=type||'sine';o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.13,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.start(t);o.stop(t+d+.05);}catch(e){}}
  function sw(f1,f2,d,type,vol,delay){if(!sndOn)return;try{initG();duck();const c=ctx(),t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(duckGain);o.type=type||'sine';o.frequency.setValueAtTime(f1,t);o.frequency.linearRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.11,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.start(t);o.stop(t+d+.05);}catch(e){}}
  async function startMusic(){
    if(!sndOn||musicOn)return;try{
      initG();const c=ctx();
      const resp=await fetch('./musik.mp3');const buf=await resp.arrayBuffer();const dec=await c.decodeAudioData(buf);
      musicNode=c.createBufferSource();musicNode.buffer=dec;musicNode.loop=true;musicGain.gain.value=0;
      musicNode.connect(musicGain);musicNode.start(0);musicOn=true;
      musicGain.gain.setValueAtTime(0,c.currentTime);musicGain.gain.linearRampToValueAtTime(.35,c.currentTime+1.5);
    }catch(e){console.log('musik.mp3:',e.message);}
  }
  function stopMusic(){
    if(!musicNode)return;try{const c=ctx();musicGain.gain.cancelScheduledValues(c.currentTime);musicGain.gain.setValueAtTime(musicGain.gain.value,c.currentTime);musicGain.gain.linearRampToValueAtTime(0,c.currentTime+.8);setTimeout(()=>{try{musicNode.stop();musicNode.disconnect();}catch(e){}musicNode=null;musicOn=false;},900);}catch(e){}
  }
  function toggle(){sndOn=!sndOn;if(!sndOn){stopMusic();if(masterGain)masterGain.gain.value=0;}else{if(masterGain)masterGain.gain.value=1;startMusic();}return sndOn;}
  return{
    startMusic,stopMusic,toggle,
    click(){osc(660,.055,'sine',.07);},
    correct(){[523,659,784].forEach((f,i)=>osc(f,.14,'sine',.15,i*.08));osc(1047,.35,'sine',.11,.25);sw(400,950,.15,'sine',.08,.35);},
    wrong(){sw(260,110,.14,'sawtooth',.2);osc(100,.5,'sawtooth',.15,.14);},
    tick(){osc(1100,.04,'square',.05);},
    tickW(){osc(880,.07,'sine',.12);},
    tickD(){osc(660,.09,'sine',.18);},
    timeUp(){sw(350,140,.18,'square',.22);osc(110,.55,'sawtooth',.15,.18);},
    move(){[720,560,440].forEach((f,i)=>osc(f,.08,'sine',.1,i*.04));},
    flagCaptured(){[659,784,1047,784,1047,1319].forEach((f,i)=>osc(f,.15,'sine',.2,i*.07));},
    fall(){[440,330,220,165].forEach((f,i)=>osc(f,.2,'sine',.18,i*.1));},
    select(){sw(440,720,.12,'sine',.1);},
    ready(){[440,554,659,880].forEach((f,i)=>osc(f,.16,'sine',.17,i*.09));},
    cd(n){const f=[0,349,415,494,587];osc(f[n]||494,.24,'sine',.22);if(n===0)[523,659,784,1047].forEach((v,i)=>osc(v,.18,'sine',.19,i*.09));},
    win(){[523,659,784,659,784,1047,784,1047,1319,1047,1319,1568].forEach((f,i)=>osc(f,.16,'sine',.18,i*.1));[523,659,784,880,1047].forEach((f,i)=>osc(f,.35,'triangle',.08,i*.08+.06));},
    cozyCorrect(){[523,659,784].forEach((f,i)=>osc(f,.18,'sine',.12,i*.09));osc(1047,.4,'sine',.08,.3);},
  };
})();

/* ═══════════════════════════════════════
   ARENA ENGINE (Canvas)
═══════════════════════════════════════ */
const Arena=(()=>{
  let cvs={},cxs={},dims={};
  let rafs={},Times={};
  let states={};

  function getOrInit(id){
    if(!cvs[id]){
      cvs[id]=document.getElementById(id);
      cxs[id]=cvs[id].getContext('2d');
    }
    return{cv:cvs[id],cx:cxs[id]};
  }

  function resize(id,wrapId){
    const wrap=document.getElementById(wrapId);if(!wrap)return;
    const{cv,cx}=getOrInit(id);
    const W=wrap.offsetWidth,H=wrap.offsetHeight;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';
    cx.scale(dpr,dpr);
    dims[id]={W,H};
  }

  function setState(id,s){states[id]=Object.assign({},states[id]||{},s);}

  function startLoop(id,wrapId){
    if(rafs[id])return;
    Times[id]=0;
    (function lp(ts){Times[id]=ts*.001;drawArena(id,wrapId);rafs[id]=requestAnimationFrame(lp);})(0);
  }
  function stopLoop(id){if(rafs[id]){cancelAnimationFrame(rafs[id]);rafs[id]=null;}}

  function triggerFall(id,side){
    const s=states[id];if(!s)return;
    if(s[side])s[side].falling=true;
  }

  /* ─ BG ─ */
  function drawBG(cx,W,H,T){
    const sky=cx.createLinearGradient(0,0,0,H*.48);sky.addColorStop(0,'#060D2E');sky.addColorStop(1,'#0F2D73');
    cx.fillStyle=sky;cx.fillRect(0,0,W,H*.48);
    const gnd=cx.createLinearGradient(0,H*.48,0,H);gnd.addColorStop(0,'#14532D');gnd.addColorStop(.4,'#0A2B16');gnd.addColorStop(1,'#061409');
    cx.fillStyle=gnd;cx.fillRect(0,H*.48,W,H*.52);
    cx.fillStyle='rgba(74,222,128,.3)';cx.fillRect(0,H*.48,W,2.5);
    // Stars
    for(let i=0;i<10;i++){
      const sx=[.06,.13,.22,.34,.45,.62,.73,.82,.89,.95][i];
      const sy=[.14,.08,.19,.06,.17,.07,.15,.09,.18,.07][i];
      cx.globalAlpha=.32+.28*Math.sin(T*1.1+i*1.7);cx.fillStyle='#fff';
      cx.beginPath();cx.arc(sx*W,sy*H,1.1,0,Math.PI*2);cx.fill();
    }
    cx.globalAlpha=1;
    cx.fillStyle='#FEFCE8';cx.beginPath();cx.arc(W*.91,H*.17,W*.018,0,Math.PI*2);cx.fill();
    cx.fillStyle='#0F2D73';cx.beginPath();cx.arc(W*.914,H*.13,W*.013,0,Math.PI*2);cx.fill();
  }

  /* ─ CROWD (supporters for team mode) ─ */
  function drawCrowd(cx,W,H,T,showAll){
    const segs=[
      [.02,.2,'#EF4444'],[.05,.18,'#FBBF24'],[.07,.2,'#06B6D4'],[.10,.18,'#A78BFA'],
      [.12,.2,'#F97316'],[.14,.18,'#EC4899'],[.16,.2,'#34D399'],[.18,.18,'#60A5FA'],
      [.78,.2,'#EF4444'],[.81,.18,'#FBBF24'],[.83,.2,'#8B5CF6'],[.86,.18,'#10B981'],
      [.88,.2,'#F97316'],[.90,.18,'#EC4899'],[.93,.2,'#60A5FA'],[.96,.18,'#34D399'],
    ];
    const show=showAll?segs:segs.slice(0,8).concat(segs.slice(8));
    const SKINS=['#C68642','#D4A07A','#8B5040','#C68642','#D4A07A'];
    show.forEach(([sx,hf,sc],i)=>{
      const bob=Math.sin(T*2.8+i)*.016;
      const px=sx*W,ch=hf*H+bob*H,py=H*.48-ch;
      const armUp=Math.sin(T*3.5+i*1.3)>.15;
      const skinC=SKINS[i%SKINS.length];
      const sw2=W*.026;
      cx.globalAlpha=.7;
      cx.fillStyle='#1F2937';cx.fillRect(px-sw2*.28,py+ch*.72,sw2*.22,ch*.28);cx.fillRect(px+sw2*.06,py+ch*.72,sw2*.22,ch*.28);
      cx.fillStyle='#111';cx.beginPath();cx.ellipse(px-sw2*.17,H*.48,sw2*.17,3.5,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(px+sw2*.17,H*.48,sw2*.17,3.5,0,0,Math.PI*2);cx.fill();
      cx.fillStyle=sc;cx.beginPath();cx.roundRect(px-sw2*.36,py+ch*.22,sw2*.72,ch*.52,sw2*.12);cx.fill();
      cx.strokeStyle=sc;cx.lineWidth=Math.max(1.5,sw2*.25);cx.lineCap='round';cx.globalAlpha=.6;
      if(armUp){cx.beginPath();cx.moveTo(px-sw2*.36,py+ch*.35);cx.lineTo(px-sw2*.55,py+ch*.05);cx.stroke();cx.beginPath();cx.moveTo(px+sw2*.36,py+ch*.35);cx.lineTo(px+sw2*.55,py+ch*.05);cx.stroke();cx.fillStyle=skinC;cx.beginPath();cx.arc(px-sw2*.56,py+ch*.02,sw2*.13,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(px+sw2*.56,py+ch*.02,sw2*.13,0,Math.PI*2);cx.fill();}
      else{cx.beginPath();cx.moveTo(px-sw2*.36,py+ch*.38);cx.lineTo(px-sw2*.5,py+ch*.6);cx.stroke();cx.beginPath();cx.moveTo(px+sw2*.36,py+ch*.38);cx.lineTo(px+sw2*.5,py+ch*.6);cx.stroke();}
      cx.globalAlpha=.8;cx.fillStyle=skinC;cx.beginPath();cx.arc(px,py+ch*.12,sw2*.29,0,Math.PI*2);cx.fill();
      cx.fillStyle='#1A0800';cx.beginPath();cx.arc(px,py+ch*.1,sw2*.27,Math.PI,0,false);cx.fill();
      cx.fillStyle='white';cx.beginPath();cx.ellipse(px-sw2*.1,py+ch*.14,sw2*.075,sw2*.065,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(px+sw2*.1,py+ch*.14,sw2*.075,sw2*.065,0,0,Math.PI*2);cx.fill();
      cx.fillStyle='#111';cx.beginPath();cx.arc(px-sw2*.1,py+ch*.14,sw2*.038,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(px+sw2*.1,py+ch*.14,sw2*.038,0,Math.PI*2);cx.fill();
      cx.globalAlpha=1;
    });
  }

  /* ─ FLAG (target to capture) ─ */
  function drawFlag(cx,W,H,T,flagX,captured,captureColor){
    const py=H*.48,ph=H*.35;
    // Glow if captured
    if(captured){cx.shadowColor=captureColor||'#F59E0B';cx.shadowBlur=22;}
    cx.strokeStyle='#92400E';cx.lineWidth=5.5;cx.lineCap='round';cx.shadowOffsetX=2;cx.shadowOffsetY=2;
    cx.beginPath();cx.moveTo(flagX,py);cx.lineTo(flagX,py-ph);cx.stroke();
    cx.shadowColor='transparent';cx.shadowBlur=0;cx.shadowOffsetX=0;cx.shadowOffsetY=0;
    const wv=Math.sin(T*3.8)*.065;
    const fw=W*.055,fh=H*.11;
    cx.save();cx.translate(flagX,py-ph);
    // Merah-Putih flag
    const g1=cx.createLinearGradient(0,0,fw,fh*.5);g1.addColorStop(0,'#DC2626');g1.addColorStop(1,'#B91C1C');
    cx.fillStyle=g1;cx.beginPath();cx.moveTo(0,0);cx.quadraticCurveTo(fw*.5+wv*W,fh*.12,fw,0);cx.quadraticCurveTo(fw*.5+wv*W,fh*.62,fw,fh*.5);cx.lineTo(0,fh*.5);cx.closePath();cx.fill();
    const g2=cx.createLinearGradient(0,fh*.5,fw,fh);g2.addColorStop(0,'#f4f4f4');g2.addColorStop(1,'#ddd');
    cx.fillStyle=g2;cx.beginPath();cx.moveTo(0,fh*.5);cx.quadraticCurveTo(fw*.5+wv*W,fh*.62,fw,fh*.5);cx.quadraticCurveTo(fw*.5+wv*W,fh*1.12,fw,fh);cx.lineTo(0,fh);cx.closePath();cx.fill();
    if(captured){cx.fillStyle=(captureColor||'#F59E0B')+'44';cx.beginPath();cx.moveTo(0,0);cx.quadraticCurveTo(fw*.5,fh*.5,fw,0);cx.quadraticCurveTo(fw*.5,fh,fw,fh);cx.lineTo(0,fh);cx.closePath();cx.fill();}
    cx.restore();
    // Flag base
    cx.fillStyle='rgba(0,0,0,.3)';cx.beginPath();cx.ellipse(flagX,py+2,8,3,0,0,Math.PI*2);cx.fill();
    // Progress ring around flag if in capture mode
    const s=states['arena-canvas'];
    if(s&&(s.mode===1||s.mode===2)){
      const flagPct=s.flagPct||0;// 0 to 1 indicating how close
      if(flagPct>0&&!captured){
        cx.beginPath();cx.arc(flagX,py-ph/2,14+8*Math.sin(T*3),-Math.PI/2,-Math.PI/2+flagPct*Math.PI*2,false);// pulsing ring
        cx.strokeStyle='rgba(245,158,11,.7)';cx.lineWidth=3;cx.stroke();
      }
    }
  }

  /* ─ HUMAN front view ─ */
  function drawHuman(cx,x,y,tc,tcd,skinC,hairC,flip,pulling,idx,fallAngle,celebration){
    cx.save();cx.translate(x,y);
    if(fallAngle>0){const fy=96;cx.translate(flip?-22:22,fy);cx.rotate((flip?1:-1)*fallAngle);cx.translate(flip?22:-22,-fy);}
    if(flip)cx.scale(-1,1);
    const T2=Times['arena-canvas']||0;
    const lean=celebration?Math.sin(T2*8)*.1:(pulling?Math.sin(T2*4.2+idx*.9)*.05:0);
    const armA=celebration?.8:(pulling?Math.abs(Math.sin(T2*4.2+idx*.9)):0);
    const legA=celebration?Math.sin(T2*8)*.25:(pulling?Math.sin(T2*4.2+idx*.9)*.2:0);
    cx.rotate(lean);
    // Shadow
    cx.fillStyle='rgba(0,0,0,.28)';cx.beginPath();cx.ellipse(0,96,22,6,0,0,Math.PI*2);cx.fill();
    // Legs
    cx.save();cx.translate(-7,75);cx.rotate(-legA);cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-6,0,12,23,3);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-8,20,18,9,4);cx.fill();cx.fillStyle='rgba(255,255,255,.08)';cx.beginPath();cx.roundRect(-7,20,8,3.5,2);cx.fill();cx.restore();
    cx.save();cx.translate(7,75);cx.rotate(legA);cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-6,0,12,23,3);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-7,20,17,9,4);cx.fill();cx.fillStyle='rgba(255,255,255,.08)';cx.beginPath();cx.roundRect(-6,20,8,3.5,2);cx.fill();cx.restore();
    // Body
    cx.save();cx.translate(0,46);const sg=cx.createLinearGradient(-18,0,18,29);sg.addColorStop(0,tc);sg.addColorStop(1,tcd);cx.fillStyle=tcd;cx.beginPath();cx.roundRect(-19,-1,38,31,5);cx.fill();cx.fillStyle=sg;cx.beginPath();cx.roundRect(-18,0,36,29,4);cx.fill();cx.fillStyle='rgba(255,255,255,.15)';cx.beginPath();cx.roundRect(-16,0,32,7,3);cx.fill();cx.fillStyle='rgba(255,255,255,.28)';cx.beginPath();cx.roundRect(-6,8,12,12,3);cx.fill();cx.fillStyle='rgba(255,255,255,.82)';cx.font='bold 11px Bebas Neue,sans-serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillText(idx+1,0,15);cx.fillStyle='rgba(0,0,0,.38)';cx.fillRect(-18,26,36,5);cx.fillStyle='#D97706';cx.beginPath();cx.roundRect(-5,26,10,5,2);cx.fill();cx.restore();
    // Arms
    cx.save();cx.translate(18,49);cx.rotate((-32-armA*32)*Math.PI/180);cx.fillStyle=tc;cx.beginPath();cx.roundRect(-5,0,11,19,4);cx.fill();cx.fillStyle=skinC;cx.beginPath();cx.roundRect(-5,13,11,11,4);cx.fill();cx.restore();
    cx.save();cx.translate(-18,51);cx.rotate((24+armA*18)*Math.PI/180);cx.fillStyle=tcd;cx.beginPath();cx.roundRect(-5,0,11,17,4);cx.fill();cx.fillStyle=skinC;cx.beginPath();cx.roundRect(-5,11,11,10,4);cx.fill();cx.restore();
    // Head
    cx.save();cx.translate(0,3);
    const hdark=skinC==='#C68642'?'#A0673A':(skinC==='#D4A07A'?'#B8825C':'#7A3D28');
    cx.fillStyle=hdark;cx.beginPath();cx.roundRect(-6,40,12,8,2);cx.fill();cx.fillStyle=hdark;cx.beginPath();cx.roundRect(-19,2,38,38,6);cx.fill();const hg=cx.createLinearGradient(-18,3,16,38);hg.addColorStop(0,skinC);hg.addColorStop(1,hdark);cx.fillStyle=hg;cx.beginPath();cx.roundRect(-18,3,36,36,5);cx.fill();
    cx.fillStyle=hairC;cx.beginPath();cx.roundRect(-18,3,36,9,5);cx.fill();cx.beginPath();cx.roundRect(-19,5,5,14,3);cx.fill();cx.beginPath();cx.roundRect(14,5,5,14,3);cx.fill();
    const brow=pulling&&!celebration?.07:0;
    cx.fillStyle=hairC;cx.save();cx.translate(-9,17);cx.rotate(brow);cx.beginPath();cx.roundRect(-5,-2,10,3.5,2);cx.fill();cx.restore();cx.save();cx.translate(9,17);cx.rotate(-brow);cx.beginPath();cx.roundRect(-5,-2,10,3.5,2);cx.fill();cx.restore();
    cx.fillStyle='white';cx.beginPath();cx.roundRect(-15,20,11,10,3);cx.fill();cx.beginPath();cx.roundRect(4,20,11,10,3);cx.fill();
    const irisC=idx%3===0?'#7C3AED':'#1E40AF';
    cx.fillStyle=irisC;cx.beginPath();cx.arc(-9,25,4,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(9,25,4,0,Math.PI*2);cx.fill();
    cx.fillStyle='#111';cx.beginPath();cx.arc(-9,25,2.5,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(9,25,2.5,0,Math.PI*2);cx.fill();
    cx.fillStyle='rgba(255,255,255,.8)';cx.beginPath();cx.arc(-8,23,1.1,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(10,23,1.1,0,Math.PI*2);cx.fill();
    cx.strokeStyle='rgba(0,0,0,.18)';cx.lineWidth=1.5;cx.lineCap='round';cx.beginPath();cx.moveTo(-3,29);cx.lineTo(-4,33);cx.lineTo(4,33);cx.stroke();
    if(celebration){cx.strokeStyle='rgba(0,0,0,.3)';cx.lineWidth=2;cx.beginPath();cx.arc(0,35,5,.2,Math.PI-.2,false);cx.stroke();cx.fillStyle='rgba(255,220,100,.7)';[{x:-14,y:16},{x:14,y:16}].forEach(s=>{cx.beginPath();cx.arc(s.x,s.y+Math.sin(Times['arena-canvas']*8+s.x)*2,3,0,Math.PI*2);cx.fill();});}
    else if(fallAngle>1.2){cx.strokeStyle='rgba(255,0,0,.7)';cx.lineWidth=2;[{l:{x:-13,y:22},r:{x:-6,y:28}},{l:{x:-6,y:22},r:{x:-13,y:28}},{l:{x:6,y:22},r:{x:13,y:28}},{l:{x:13,y:22},r:{x:6,y:28}}].forEach(s=>{cx.beginPath();cx.moveTo(s.l.x,s.l.y);cx.lineTo(s.r.x,s.r.y);cx.stroke();});}
    else if(pulling){cx.strokeStyle='rgba(0,0,0,.3)';cx.lineWidth=2;cx.beginPath();cx.moveTo(-8,36);cx.quadraticCurveTo(0,38.5,8,36);cx.stroke();cx.fillStyle='rgba(255,255,255,.55)';cx.beginPath();cx.roundRect(-6,35,12,3,2);cx.fill();}
    else{cx.strokeStyle='rgba(0,0,0,.3)';cx.lineWidth=2;cx.beginPath();cx.arc(0,35,5,.15,Math.PI-.15,false);cx.stroke();}
    cx.fillStyle='rgba(220,120,100,.18)';cx.beginPath();cx.ellipse(-15,31,6,4,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(15,31,6,4,0,0,Math.PI*2);cx.fill();
    cx.restore();cx.restore();
  }

  /* ─ SIDE HUMAN (supporters) ─ */
  function drawHumanSide(cx,x,y,tc,tcd,skinC,hairC,facingR,cheering,idx){
    const T2=Times['arena-canvas']||Times['cozy-canvas']||0;
    cx.save();cx.translate(x,y);if(!facingR)cx.scale(-1,1);
    const lean=cheering?Math.sin(T2*6+idx)*.08:.02;
    cx.rotate(-lean);
    cx.fillStyle='rgba(0,0,0,.2)';cx.beginPath();cx.ellipse(0,4,15,4,0,0,Math.PI*2);cx.fill();
    // legs
    cx.save();cx.translate(-4,-20);cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-5,-2,9,22,3);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-3,19,15,8,4);cx.fill();cx.restore();
    cx.save();cx.translate(4,-20);cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-4,-2,9,22,3);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-2,19,13,8,4);cx.fill();cx.restore();
    // body
    cx.save();cx.translate(0,-23);cx.fillStyle=tcd;cx.beginPath();cx.roundRect(-12,-31,24,32,5);cx.fill();cx.fillStyle=tc;cx.beginPath();cx.roundRect(-11,-30,22,30,4);cx.fill();cx.fillStyle='rgba(255,255,255,.14)';cx.beginPath();cx.roundRect(-10,-30,20,7,3);cx.fill();
    // Cheering arms up
    if(cheering){const wa=(-80+Math.sin(T2*5+idx)*15)*Math.PI/180;cx.save();cx.translate(11,-20);cx.rotate(wa);cx.fillStyle=tc;cx.beginPath();cx.roundRect(-4,0,9,20,4);cx.fill();cx.fillStyle=skinC;cx.beginPath();cx.roundRect(-4,15,9,10,4);cx.fill();cx.restore();cx.save();cx.translate(-11,-20);cx.rotate(-wa);cx.fillStyle=tcd;cx.beginPath();cx.roundRect(-4,0,9,18,4);cx.fill();cx.fillStyle=skinC;cx.beginPath();cx.roundRect(-4,13,9,9,4);cx.fill();cx.restore();}
    cx.restore();
    // head
    cx.save();cx.translate(3,-72);const hd=skinC==='#C68642'?'#A0673A':'#B8825C';cx.fillStyle=hd;cx.beginPath();cx.roundRect(-13,-1,27,26,5);cx.fill();cx.fillStyle=skinC;cx.beginPath();cx.roundRect(-12,1,25,23,4);cx.fill();cx.fillStyle=hairC;cx.beginPath();cx.roundRect(-12,1,25,7,4);cx.fill();cx.fillStyle='white';cx.beginPath();cx.roundRect(5,8,9,8,2.5);cx.fill();cx.fillStyle='#1E40AF';cx.beginPath();cx.arc(10,12,3.5,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(10,12,2,0,Math.PI*2);cx.fill();cx.fillStyle='rgba(255,255,255,.8)';cx.beginPath();cx.arc(11,11,1,0,Math.PI*2);cx.fill();
    if(cheering){cx.strokeStyle='rgba(0,0,0,.28)';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(4,19);cx.quadraticCurveTo(10,21,14,19);cx.stroke();}
    cx.restore();cx.restore();
  }

  /* ─ DRAW ARENA ─ */
  function drawArena(id,wrapId){
    if(!dims[id]){resize(id,wrapId);}
    const{cx}=getOrInit(id);const{W,H}=dims[id];const T2=Times[id]||0;
    const s=states[id]||{};
    cx.clearRect(0,0,W,H);
    drawBG(cx,W,H,T2);
    // Draw crowd based on mode
    if(s.mode===2)drawCrowd(cx,W,H,T2,true);
    else drawCrowd(cx,W,H,T2,false);

    // Flag position: center at start, moves with score
    const maxScore=20;
    let flagX=W*.5;
    let flagCaptured=false,flagColor=null;
    if(s.mode===1){
      const p1s=s.p1?s.p1.score:0,p2s=s.p2?s.p2.score:0;
      const diff=(p1s-p2s)/maxScore;
      flagX=W*.5+Math.max(-W*.36,Math.min(W*.36,diff*W*.38));
      if(s.winner==='p1'){flagCaptured=true;flagColor='#F97316';}
      else if(s.winner==='p2'){flagCaptured=true;flagColor='#60A5FA';}
    } else if(s.mode===2){
      const t1s=s.t1?s.t1.score:0,t2s=s.t2?s.t2.score:0;
      const diff=(t1s-t2s)/maxScore;
      flagX=W*.5+Math.max(-W*.36,Math.min(W*.36,diff*W*.38));
      if(s.winner==='t1'){flagCaptured=true;flagColor='#F97316';}
      else if(s.winner==='t2'){flagCaptured=true;flagColor='#60A5FA';}
    } else if(s.mode===3){
      const sc=s.solo?s.solo.score:0;
      flagX=W*.5+Math.min(W*.38,(sc/maxScore)*W*.76-W*.38);
      if(s.winner==='solo'){flagCaptured=true;flagColor='#A78BFA';}
    }
    drawFlag(cx,W,H,T2,flagX,flagCaptured,flagColor);

    // Characters
    const skins=['#C68642','#D4A07A','#8B5040','#C68642','#D4A07A'];
    const hairs=['#1A0800','#3B1A0A','#0A0A0A','#3B1A0A','#1A0800'];
    if(s.mode===1){
      // P1: 3 chars on left side approaching flag
      const p1base=W*.08+(((s.p1||{}).score||0)/maxScore)*W*.38;
      const p2base=W*.92-((( s.p2||{}).score||0)/maxScore)*W*.38;
      for(let i=0;i<3;i++){
        const ox=(i-1)*W*.055,oy=i===1?0:H*.025;
        const fa=(i===1&&(s.p1||{}).falling)?Math.min(Math.PI/2,((s.p1||{}).fallAngle||0)):0;
        const cel=(s.winner==='p1'&&i===1);
        drawHuman(cx,p1base+ox,H*.36+oy,'#F97316','#C2410C',skins[i],hairs[i],false,(s.p1||{}).pulling&&!s.over,i,fa,cel);
      }
      for(let i=0;i<3;i++){
        const ox=(i-1)*W*.055*-1,oy=i===1?0:H*.025;
        const fa=(i===1&&(s.p2||{}).falling)?Math.min(Math.PI/2,((s.p2||{}).fallAngle||0)):0;
        const cel=(s.winner==='p2'&&i===1);
        drawHuman(cx,p2base+ox,H*.36+oy,'#1E3A8A','#1e2d5a',skins[(i+1)%5],hairs[(i+2)%5],true,(s.p2||{}).pulling&&!s.over,i,fa,cel);
      }
      // Score text
      cx.font=`bold ${H*.09}px Bebas Neue,sans-serif`;cx.textAlign='center';
      cx.fillStyle='rgba(249,115,22,.55)';cx.fillText((s.p1||{}).score||0,W*.055,H*.97);
      cx.fillStyle='rgba(96,165,250,.55)';cx.fillText((s.p2||{}).score||0,W*.945,H*.97);
    } else if(s.mode===2){
      const t1=s.t1||{players:[],score:0,pi:0};const t2=s.t2||{players:[],score:0,pi:0};
      const n1=t1.players.length||1,n2=t2.players.length||1;
      const areaW=W*.42;
      const sp1=Math.min(areaW/Math.max(n1,.7),W*.1);const sp2=Math.min(areaW/Math.max(n2,.7),W*.1);
      // Supporters in back, active player walks toward flag
      const t1x=W*.07+(t1.score/maxScore)*W*.38;
      const t2x=W*.93-(t2.score/maxScore)*W*.38;
      // Draw supporters (side view)
      for(let i=0;i<n1;i++){
        if(i===t1.pi)continue;// skip active
        const cx3=W*.03+(i<Math.floor(n1/2)?i:i-1)*sp1+sp1*.5;
        const cy3=H*.82+(i%2)*H*.03;
        drawHumanSide(cx,cx3,cy3,'#F97316','#C2410C',skins[i%5],hairs[i%5],true,!s.over,i);
      }
      for(let i=0;i<n2;i++){
        if(i===t2.pi)continue;
        const cx3=W*.97-(i<Math.floor(n2/2)?i:i-1)*sp2-sp2*.5;
        const cy3=H*.82+(i%2)*H*.03;
        drawHumanSide(cx,cx3,cy3,'#1E3A8A','#1e2d5a',skins[(i+2)%5],hairs[(i+1)%5],false,!s.over,i);
      }
      // Active player (front view walking toward center)
      const t1fa=(s.t1||{}).falling?Math.min(Math.PI/2,(s.t1.fallAngle||0)):0;
      const t2fa=(s.t2||{}).falling?Math.min(Math.PI/2,(s.t2.fallAngle||0)):0;
      drawHuman(cx,t1x,H*.36,'#F97316','#C2410C',skins[0],hairs[0],false,!s.over&&!t1.falling,0,t1fa,s.winner==='t1');
      drawHuman(cx,t2x,H*.36,'#1E3A8A','#1e2d5a',skins[1],hairs[1],true,!s.over&&!t2.falling,0,t2fa,s.winner==='t2');
      cx.font=`bold ${H*.08}px Bebas Neue,sans-serif`;cx.textAlign='center';
      cx.fillStyle='rgba(249,115,22,.55)';cx.fillText(t1.score,W*.044,H*.97);cx.fillStyle='rgba(96,165,250,.55)';cx.fillText(t2.score,W*.956,H*.97);
    } else if(s.mode===3){
      const solo=s.solo||{score:0,pulling:true};
      const sx=W*.08+(solo.score/maxScore)*W*.78;
      const fa=solo.falling?Math.min(Math.PI/2,(solo.fallAngle||0)):0;
      drawHuman(cx,sx,H*.38,'#7C3AED','#5B21B6','#C68642','#1A0800',false,solo.pulling&&!s.over,0,fa,s.winner==='solo');
      cx.font=`bold ${H*.09}px Bebas Neue,sans-serif`;cx.textAlign='center';
      cx.fillStyle='rgba(167,139,250,.55)';cx.fillText(solo.score,W*.5,H*.97);
    }
    // Physics update
    ['p1','p2','t1','t2','solo'].forEach(k=>{
      const p=s[k];if(p&&p.falling&&p.fallAngle<Math.PI/2){
        if(!p.fallSpeed)p.fallSpeed=.06;
        p.fallAngle=(p.fallAngle||0)+p.fallSpeed;p.fallSpeed+=.004;
        if(p.fallAngle>=Math.PI/2)p.fallAngle=Math.PI/2;
      }
    });
  }

  return{resize,setState,startLoop,stopLoop,triggerFall,drawArena};
})();

/* ═══════════════════════════════════════
   HOME PARTICLE CANVAS
═══════════════════════════════════════ */
(function(){
  let cv,cx,W,H,ps=[];
  function init(){cv=document.getElementById('home-particles');if(!cv)return;cx=cv.getContext('2d');r();const cols=['#F97316','#FB923C','#FBBF24','#fff','#60A5FA','#A78BFA'];for(let i=0;i<50;i++)ps.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2.2+.8,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,c:cols[Math.floor(Math.random()*cols.length)],a:Math.random()*.5+.15});
    (function lp(){cx.clearRect(0,0,W,H);ps.forEach(p=>{cx.globalAlpha=p.a;cx.fillStyle=p.c;cx.beginPath();cx.arc(p.x,p.y,p.r,0,Math.PI*2);cx.fill();p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;});cx.globalAlpha=1;requestAnimationFrame(lp);})();
  }
  function r(){if(!cv)return;W=cv.offsetWidth;H=cv.offsetHeight;const d=window.devicePixelRatio||1;cv.width=W*d;cv.height=H*d;cx.scale(d,d);}
  window.addEventListener('resize',r);window.addEventListener('load',()=>setTimeout(init,120));
})();

/* ═══════════════════════════════════════
   GARUDA CANVAS
═══════════════════════════════════════ */
(function(){
  const cv=document.getElementById('garuda-canvas');if(!cv)return;
  const cx=cv.getContext('2d');let t=0;
  (function lp(){cx.clearRect(0,0,120,110);const bob=Math.sin(t*.8)*3,lean=Math.sin(t*.5)*.04;cx.save();cx.translate(60,55+bob);cx.rotate(lean);
    cx.fillStyle='#DC2626';cx.beginPath();cx.arc(0,-2,16,0,Math.PI*2);cx.fill();
    cx.fillStyle='#DC2626';cx.beginPath();cx.ellipse(7,-7,5,7,.3,0,Math.PI*2);cx.fill();
    cx.fillStyle='white';cx.beginPath();cx.arc(8,-6,3,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(9,-6,1.5,0,Math.PI*2);cx.fill();cx.fillStyle='rgba(255,255,255,.8)';cx.beginPath();cx.arc(9.5,-6.5,.7,0,Math.PI*2);cx.fill();
    const wf=Math.sin(t*2)*.08;cx.fillStyle='#DC2626';cx.save();cx.translate(-2,0);cx.rotate(-Math.PI/6-wf);cx.beginPath();cx.moveTo(0,0);cx.lineTo(-30,-12);cx.lineTo(-25,4);cx.lineTo(-15,6);cx.closePath();cx.fill();cx.restore();
    cx.save();cx.translate(-2,0);cx.rotate(-Math.PI/6-wf*.8);cx.fillStyle='#B91C1C';cx.beginPath();cx.moveTo(0,0);cx.lineTo(-28,-8);cx.lineTo(-22,6);cx.closePath();cx.fill();cx.restore();
    cx.fillStyle='#DC2626';cx.beginPath();cx.moveTo(-6,10);cx.lineTo(-12,26);cx.lineTo(-2,18);cx.lineTo(8,26);cx.lineTo(6,10);cx.closePath();cx.fill();
    cx.restore();t+=.04;requestAnimationFrame(lp);
  })();
})();

/* ═══════════════════════════════════════
   CONFETTI
═══════════════════════════════════════ */
const Confetti=(()=>{
  let raf=null;
  function start(wc){const cv=document.getElementById('cf-canvas'),ct=cv.getContext('2d');cv.width=window.innerWidth;cv.height=window.innerHeight;const cols=[wc,'#F59E0B','#16A34A','#F97316','#1E3A8A','#FBBF24','#60A5FA','#A78BFA'];const ps=Array.from({length:160},()=>({x:Math.random()*cv.width,y:Math.random()*-cv.height,w:Math.random()*14+5,h:Math.random()*6+3,r:Math.random()*Math.PI*2,rs:Math.random()*.13-.065,vx:Math.random()*2.4-1.2,vy:Math.random()*5+2,c:cols[Math.floor(Math.random()*cols.length)]}));function draw(){ct.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{ct.save();ct.translate(p.x,p.y);ct.rotate(p.r);ct.fillStyle=p.c;ct.globalAlpha=.88;ct.fillRect(-p.w/2,-p.h/2,p.w,p.h);ct.restore();p.x+=p.vx;p.y+=p.vy;p.r+=p.rs;if(p.y>cv.height+20){p.y=-20;p.x=Math.random()*cv.width;}});raf=requestAnimationFrame(draw);}stop();draw();}
  function stop(){if(raf){cancelAnimationFrame(raf);raf=null;}const cv=document.getElementById('cf-canvas');if(cv)cv.getContext('2d').clearRect(0,0,cv.width,cv.height);}
  return{start,stop};
})();

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function prepQ(){return shuffle(QDB).map((q,idx)=>{const ans=q.o[q.a];const opts=shuffle([...q.o]);return{q:q.q,opts,ai:opts.indexOf(ans),id:idx,p1t:0,p2t:0,t1t:0,t2t:0,ct:0};});}
function floatLbl(el,text,color){if(!el)return;const r=el.getBoundingClientRect();const d=document.createElement('div');d.className='float-lbl';d.textContent=text;d.style.cssText=`left:${r.left+r.width/2-22}px;top:${r.top+r.height*.28}px;color:${color}`;document.body.appendChild(d);setTimeout(()=>d.remove(),1150);}
function flashPanel(side,type){const fl=document.getElementById('pfl-'+side);if(!fl)return;fl.className='pflash fl-'+type;setTimeout(()=>{fl.className='pflash';},780);}

/* ═══════════════════════════════════════
   APP
═══════════════════════════════════════ */
const App=(()=>{
  let cur='s-home',mode=1,G={},teamCounts=[3,3],qHistory=[];
  let setupPhase=0;// 0=team1, 1=team1ready, 2=team2, 3=all ready

  function go(id){
    Audio.click();
    const o=document.getElementById(cur),n=document.getElementById(id);
    if(!n||id===cur)return;
    o.classList.add('leaving');setTimeout(()=>o.classList.remove('active','leaving'),300);
    n.classList.add('active');cur=id;
    if(id==='s-home')setTimeout(()=>Audio.startMusic(),400);
  }
  function toggleSound(){const on=Audio.toggle();document.getElementById('snd-btn').textContent=on?'🔊 Suara':'🔇 Mati';}

  /* ── HOWTO ── */
  const HT={
    1:{badge:'⚔️ MODE 1',title:'Rebut Bendera',sub:'2 Pemain — Layar Dibagi 2',steps:[
      {i:'🏁',t:'Rebut Bendera',d:'Karaktermu bergerak mendekati bendera setiap jawaban benar! Yang pertama merebut bendera, MENANG!',p:'Jawab cepat dan tepat!',pc:'pill-o'},
      {i:'⏱️',t:'70 Detik',d:'Kamu punya 70 detik. Jawab benar -3 dtk, jawab salah -5 dtk dari waktumu!',p:'-3 benar • -5 salah',pc:'pill-o'},
      {i:'📋',t:'20 Soal',d:'Jawab semua 20 soal Indonesia. Soal yang salah muncul kembali sampai berhasil dijawab benar.',p:'Soal salah = balik antri',pc:'pill-r'},
      {i:'💥',t:'Kalah Jika...',d:'Waktu habis atau lawan merebut bendera duluan! Karakter lawan akan JATUH saat kamu menang.',p:'Yang duluan sampai = JUARA!',pc:'pill-r'},
    ]},
    2:{badge:'🤝 MODE 2',title:'Tim Battle',sub:'2 Tim — Maks 20 Peserta',steps:[
      {i:'🏁',t:'Rebut Bendera Tim',d:'Wakil tim bergerak mendekati bendera setiap jawaban benar. Suporter di pinggir lapangan memberi semangat!',p:'Rebut bendera untuk tim!',pc:'pill-o'},
      {i:'👥',t:'Bergantian',d:'Dalam satu tim, peserta bergantian menjawab soal. Setiap peserta punya soalnya sendiri!',p:'Kerja sama tim!',pc:'pill-g'},
      {i:'⏱️',t:'70 Detik/Peserta',d:'Setiap peserta punya 70 detik. Jawab benar -3 dtk, salah -5 dtk.',p:'-3 benar • -5 salah',pc:'pill-o'},
      {i:'🏆',t:'Pemenang',d:'Tim yang wakilnya merebut bendera pertama MENANG! Tim kalah akan jatuh dramatis!',p:'Semangat bersama tim!',pc:'pill-g'},
    ]},
    3:{badge:'☕ COZY',title:'Cozy Mode',sub:'Solo Player — Santai Tanpa Tekanan',steps:[
      {i:'🏁',t:'Jalan Santai',d:'Karaktermu berjalan santai mendekati bendera setiap jawaban benar. Tidak ada waktu, tidak ada tekanan!',p:'Santai dan nikmati!',pc:'pill-c'},
      {i:'🧠',t:'20 Soal Indonesia',d:'Jawab semua 20 soal pengetahuan umum Indonesia. Salah boleh, soal akan muncul lagi.',p:'Belajar dari kesalahan',pc:'pill-c'},
      {i:'⭐',t:'Progress',d:'Lihat karaktermu melangkah maju setiap kali jawab benar. Berapa langkah sampai kamu merebut bendera?',p:'Tanpa batas waktu!',pc:'pill-c'},
      {i:'🎉',t:'Selesai!',d:'Setelah semua 20 soal terjawab benar, karaktermu merebut bendera dengan penuh kemenangan!',p:'Selamat belajar!',pc:'pill-g'},
    ]},
    general:[
      {i:'🏁',t:'Rebut Bendera',d:'Jawabanmu yang benar menggerakkan karakter mendekati bendera di tengah lapangan.',p:'3 mode permainan tersedia!',pc:'pill-o'},
      {i:'🇮🇩',t:'20 Soal Indonesia',d:'Soal seputar budaya, sejarah, geografi, dan alam Indonesia yang menarik dan informatif.',p:'Perluas wawasan nusantara!',pc:'pill-g'},
      {i:'⏱️',t:'Kelola Waktu',d:'Jawab benar hemat 3 dtk, jawab salah buang 5 dtk. Kelola waktu dengan bijak!',p:'Mode Cozy: tanpa batas waktu',pc:'pill-c'},
      {i:'📋',t:'Review Soal',d:'Setelah selesai, lihat daftar semua soal beserta waktu menjawab masing-masing tim/pemain.',p:'Pelajari hasilmu!',pc:'pill-g'},
    ],
  };
  function buildHowto(key,targetId){
    const data=HT[key];
    if(key!=='general'){document.getElementById('hw-badge').textContent=data.badge;document.getElementById('hw-title').textContent=data.title;document.getElementById('hw-sub').textContent=data.sub;}
    const arr=Array.isArray(data)?data:data.steps;
    document.getElementById(targetId).innerHTML=arr.map(s=>`<div class="hstep"><div class="hs-icon">${s.i}</div><div class="hs-title">${s.t}</div><div class="hs-desc">${s.d}</div><span class="hs-pill ${s.pc}">${s.p}</span></div>`).join('');
  }
  buildHowto('general','hw-general-steps');

  function selectMode(m){Audio.select();mode=m;buildHowto(m,'hw-steps');go('s-howto');}

  /* ── SETUP ── */
  function buildSetup(m){
    setupPhase=0;
    const stage=document.getElementById('setup-stage');
    const goBtn=document.getElementById('setup-go');
    if(m===1){
      // Show both panes
      stage.innerHTML=`
        <div class="setup-pane sp-orange">
          <div class="setup-pane-header">🟠 Pemain 1 — Oranye</div>
          <div class="setup-single"><div class="setup-lbl">NAMA PEMAIN 1</div>
          <input id="ni-p1" class="setup-inp" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off" inputmode="text"></div>
        </div>
        <div class="col-sep"></div>
        <div class="setup-pane sp-navy">
          <div class="setup-pane-header">🔵 Pemain 2 — Biru</div>
          <div class="setup-single"><div class="setup-lbl">NAMA PEMAIN 2</div>
          <input id="ni-p2" class="setup-inp" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off" inputmode="text"></div>
        </div>`;
      goBtn.textContent='⚔ MASUK ARENA!';
      goBtn.style.background='linear-gradient(135deg,#FBBF24,#B45309)';
    } else if(m===2){
      // Start with team 1 only
      teamCounts=[3,3];
      buildTeamSetupPhase(0);
    } else {// cozy
      stage.innerHTML=`
        <div class="setup-pane sp-cozy" style="align-items:center;justify-content:center">
          <div class="setup-pane-header" style="justify-content:center">☕ Cozy Mode</div>
          <div class="setup-single"><div class="setup-lbl">NAMA KAMU</div>
          <input id="ni-cozy" class="setup-inp" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off" inputmode="text">
          <div style="font-size:.82rem;color:rgba(255,255,255,.35);font-weight:500;text-align:center;max-width:280px;margin-top:.5rem">Mode santai tanpa batas waktu. Jawab semua soal sambil belajar!</div></div>
        </div>`;
      goBtn.textContent='☕ MULAI SANTAI!';
      goBtn.style.background='linear-gradient(135deg,#A78BFA,#7C3AED)';
    }
  }

  function buildTeamSetupPhase(phase){
    const stage=document.getElementById('setup-stage');
    const goBtn=document.getElementById('setup-go');
    if(phase===0){
      // Show team 1 only
      stage.innerHTML=`
        <div class="setup-pane sp-orange" style="flex:none;width:100%;max-width:520px;margin:auto">
          <div class="setup-pane-header">🟠 Tim Oranye — Setup</div>
          <div class="cnt-row"><div class="cnt-lbl">Jumlah Peserta Tim Oranye</div>
          <div class="cnt-ctrl"><button class="cnt-btn" onclick="App.setCount(1,-1)">−</button><div class="cnt-val" id="cv-1">3</div><button class="cnt-btn" onclick="App.setCount(1,1)">+</button></div></div>
          <div class="names-grid" id="ng-1"></div>
        </div>`;
      renderNI(1);
      goBtn.textContent='✅ Tim Oranye Siap →';
      goBtn.style.background='linear-gradient(135deg,#F97316,#C2410C)';
      setupPhase=0;
    } else if(phase===1){
      // Show team 1 ready + team 2
      const t1players=getPlayers(1);
      stage.innerHTML=`
        <div class="setup-pane sp-orange" style="max-width:380px">
          <div class="setup-pane-header">🟠 Tim Oranye</div>
          <div class="ready-badge">✅ Siap Bertanding! (${t1players.length} peserta)</div>
          <div class="setup-single" style="flex:1;overflow-y:auto;gap:.35rem">
            ${t1players.map((p,i)=>`<div style="font-size:.82rem;color:rgba(255,255,255,.65);font-weight:600;display:flex;align-items:center;gap:6px"><div class="name-num" style="background:var(--o)">${i+1}</div>${p}</div>`).join('')}
          </div>
        </div>
        <div class="col-sep"></div>
        <div class="setup-pane sp-navy">
          <div class="setup-pane-header">🔵 Tim Biru — Setup</div>
          <div class="cnt-row"><div class="cnt-lbl">Jumlah Peserta Tim Biru</div>
          <div class="cnt-ctrl"><button class="cnt-btn" onclick="App.setCount(2,-1)">−</button><div class="cnt-val" id="cv-2">3</div><button class="cnt-btn" onclick="App.setCount(2,1)">+</button></div></div>
          <div class="names-grid" id="ng-2"></div>
        </div>`;
      renderNI(2);
      goBtn.textContent='⚔ MASUK ARENA!';
      goBtn.style.background='linear-gradient(135deg,#FBBF24,#B45309)';
      setupPhase=1;
    }
  }

  function setupAction(){
    if(mode===2){
      if(setupPhase===0){Audio.ready();G._t1players=getPlayers(1);buildTeamSetupPhase(1);}
      else{startFromSetupFinal();}
    } else {startFromSetupFinal();}
  }

  function setCount(t,d){teamCounts[t-1]=Math.max(1,Math.min(20,teamCounts[t-1]+d));document.getElementById('cv-'+t).textContent=teamCounts[t-1];renderNI(t);Audio.click();}
  function renderNI(t){const g=document.getElementById('ng-'+t);if(!g)return;g.innerHTML='';for(let i=1;i<=teamCounts[t-1];i++){const row=document.createElement('div');row.className='name-row';row.innerHTML=`<div class="name-num">${i}</div><input class="name-inp" id="ni-t${t}-${i}" type="text" placeholder="Peserta ${i}" maxlength="14" autocomplete="off" inputmode="text">`;g.appendChild(row);}}
  function getPlayers(t){const n=teamCounts[t-1],ps=[];for(let i=1;i<=n;i++){const v=document.getElementById(`ni-t${t}-${i}`);ps.push(v&&v.value.trim()||`Peserta ${i}`);}return ps;}

  function startFromSetupFinal(){
    Audio.ready();qHistory=[];
    if(mode===1){
      const n1=document.getElementById('ni-p1').value.trim()||'Pemain 1';
      const n2=document.getElementById('ni-p2').value.trim()||'Pemain 2';
      G={mode:1,over:false,
        p1:{name:n1,queue:prepQ(),correct:new Set(),ci:0,timer:70,tInt:null,locked:false,done:false,score:0,pulling:true,answerTimes:[]},
        p2:{name:n2,queue:prepQ(),correct:new Set(),ci:0,timer:70,tInt:null,locked:false,done:false,score:0,pulling:true,answerTimes:[]},
      };
    } else if(mode===2){
      const t1p=G._t1players||getPlayers(1);const t2p=getPlayers(2);
      G={mode:2,over:false,
        t1:{players:t1p,score:0,pi:0,answerTimes:[]},
        t2:{players:t2p,score:0,pi:0,answerTimes:[]},
        qs1:prepQ(),qs2:prepQ(),qi1:0,qi2:0,
        t1lock:false,t2lock:false,t1tInt:null,t2tInt:null,t1timer:70,t2timer:70,
        t1correct:new Set(),t2correct:new Set(),t1ci:0,t2ci:0,t1done:false,t2done:false,
      };
    } else {
      const cn=document.getElementById('ni-cozy').value.trim()||'Pemain';
      G={mode:3,over:false,solo:{name:cn,queue:prepQ(),correct:new Set(),ci:0,locked:false,done:false,score:0,pulling:true,answerTimes:[]}};
    }
    runCD(()=>startGame());
  }

  function runCD(cb){
    go('s-countdown');Audio.stopMusic();
    const el=document.getElementById('cdn');let n=3;
    function tick(){el.textContent=n>0?n:'MULAI!';el.classList.remove('cd-pop');void el.offsetWidth;el.classList.add('cd-pop');Audio.cd(n);if(n-->0)setTimeout(tick,1100);else setTimeout(cb,1000);}tick();
  }

  function startGame(){
    const cvId='arena-canvas',wrapId='arena-wrap';
    const cozyId='cozy-canvas',cozyWrapId='cozy-arena-wrap';
    if(G.mode===3){
      Arena.resize(cozyId,cozyWrapId);
      Arena.setState(cozyId,{mode:3,solo:{name:G.solo.name,score:0,pulling:true,fallAngle:0},over:false});
      buildCozyHead();loadCozyQ();
      go('s-cozy');Arena.startLoop(cozyId,cozyWrapId);
    } else {
      Arena.resize(cvId,wrapId);
      if(G.mode===1){
        Arena.setState(cvId,{mode:1,p1:{name:G.p1.name,score:0,pulling:true,fallAngle:0},p2:{name:G.p2.name,score:0,pulling:true,fallAngle:0},over:false});
        buildHead('left',G.p1.name,0,'o');buildHead('right',G.p2.name,0,'n');
        buildArenaHeader();loadM1Q('p1');loadM1Q('p2');
      } else {
        Arena.setState(cvId,{mode:2,t1:{players:G.t1.players,score:0,pi:0,fallAngle:0},t2:{players:G.t2.players,score:0,pi:0,fallAngle:0},over:false});
        buildHead('left','Tim Oranye',0,'o',true);buildHead('right','Tim Biru',0,'n',true);
        buildArenaHeader();loadM2Q(1);loadM2Q(2);
      }
      go('s-game');Arena.startLoop(cvId,wrapId);
    }
    Audio.select();
  }

  /* ── ARENA HEADER ── */
  function buildArenaHeader(){
    const h=document.getElementById('arena-header');
    if(G.mode===1){
      h.innerHTML=`
        <div class="ah-team">
          <span class="ah-score o" id="ah-s1">0</span>
          <span class="ah-name o">${G.p1.name}</span>
          <span class="ah-time o" id="ah-t1">70s</span>
        </div>
        <div class="ah-center">
          <div class="ah-vs">VS</div>
          <div class="ah-progress" id="ah-prog"></div>
        </div>
        <div class="ah-team" style="flex-direction:row-reverse">
          <span class="ah-score n" id="ah-s2">0</span>
          <span class="ah-name n" style="text-align:right">${G.p2.name}</span>
          <span class="ah-time n" id="ah-t2">70s</span>
        </div>`;
      buildProgressPips();
    } else {
      h.innerHTML=`
        <div class="ah-team">
          <span class="ah-score o" id="ah-s1">0</span>
          <span class="ah-name o">Tim Oranye</span>
          <span class="ah-time o" id="ah-t1">70s</span>
        </div>
        <div class="ah-center">
          <div class="ah-vs">⚔</div>
          <div class="ah-progress" id="ah-prog"></div>
        </div>
        <div class="ah-team" style="flex-direction:row-reverse">
          <span class="ah-score n" id="ah-s2">0</span>
          <span class="ah-name n" style="text-align:right">Tim Biru</span>
          <span class="ah-time n" id="ah-t2">70s</span>
        </div>`;
      buildProgressPips();
    }
  }
  function buildProgressPips(){
    const prog=document.getElementById('ah-prog');if(!prog)return;
    const steps=10;prog.innerHTML='';
    for(let i=0;i<steps;i++){const pip=document.createElement('div');pip.className='ah-pip';pip.id='pip-'+i;prog.appendChild(pip);}
  }
  function updateAHScore(side,score,time){
    const n=side==='left'?'1':'2';
    const sel=document.getElementById('ah-s'+n);if(sel)sel.textContent=score;
    const tel=document.getElementById('ah-t'+n);if(tel)tel.textContent=time+'s';
    // Update pips
    const p1s=G.mode===1?(G.p1?G.p1.score:0):(G.t1?G.t1.score:0);
    const p2s=G.mode===1?(G.p2?G.p2.score:0):(G.t2?G.t2.score:0);
    const steps=10;
    for(let i=0;i<steps;i++){
      const pip=document.getElementById('pip-'+i);if(!pip)continue;
      const pct=(i+.5)/steps;
      const p1pct=p1s/20,p2pct=p2s/20;
      pip.className='ah-pip'+(p1pct>pct?' filled-o':(p2pct>(1-pct)?' filled-n':''));
    }
  }

  /* ── COZY HEADER ── */
  function buildCozyHead(){
    const h=document.getElementById('cozy-header');
    h.innerHTML=`<div class="ah-team"><span class="ah-score c" id="ah-cozy-s">0</span><span class="ah-name c">${G.solo.name}</span></div><div class="ah-center"><span style="font-size:.75rem;color:rgba(167,139,250,.6);font-weight:700;letter-spacing:2px">SOAL</span><div class="ah-progress" id="ah-cozy-prog"></div></div><div style="width:80px"></div>`;
    const prog=document.getElementById('ah-cozy-prog');if(!prog)return;
    for(let i=0;i<20;i++){const pip=document.createElement('div');pip.className='ah-pip';pip.id='cpip-'+i;prog.appendChild(pip);}
  }
  function updateCozyHeader(score){
    const el=document.getElementById('ah-cozy-s');if(el){el.textContent=score;el.classList.remove('pop-anim');void el.offsetWidth;el.classList.add('pop-anim');}
    for(let i=0;i<20;i++){const pip=document.getElementById('cpip-'+i);if(pip){pip.className='ah-pip'+(i<score?' filled-c':'');}}
  }

  /* ── MODE 1 ── */
  const M1T=70,M1B=3,M1P=5,M1MIN=8;
  function getNextM1(ps){for(let i=0;i<ps.queue.length;i++){const idx=(ps.ci+i)%ps.queue.length;if(!ps.correct.has(ps.queue[idx].id)){ps.ci=idx;return ps.queue[idx];}}return null;}

  function loadM1Q(p){
    const ps=G[p],side=p==='p1'?'left':'right';stopM1T(p);
    const q=getNextM1(ps);
    if(!q){ps.done=true;ps.pulling=false;setQ(side,'<span style="color:#4ADE80;font-weight:700">✅ Selesai!</span>',true);setOpts(side,[],null,'o');setTim(side,'✔','100%','#16A34A');if(!G.over)endM1(p,'done');return;}
    if(!qHistory.find(h=>h.id===q.id))qHistory.push({...q,p1t:0,p2t:0,p1ans:-1,p2ans:-1});
    updateHead(side,{qi:`Sisa ${ps.queue.length-ps.correct.size}`});
    setQ(side,q.q);setOpts(side,q.opts,(i)=>ansM1(p,i,q.ai),p==='p1'?'o':'n');
    startM1T(p);
  }

  function startM1T(p){
    const ps=G[p],side=p==='p1'?'left':'right',col=p==='p1'?'o':'n';
    const bar=document.getElementById('gtf-'+side),sec=document.getElementById('gts-'+side);
    bar.style.transition='none';bar.style.width=(ps.timer/M1T*100)+'%';bar.className='gtfill '+col;void bar.offsetWidth;bar.style.transition='width 1s linear,background .4s';
    const upd=()=>{sec.textContent=ps.timer+'s';if(ps.timer<=8){bar.classList.add('dang');bar.classList.remove('warn');sec.className='gtsec '+col+' dang';}else if(ps.timer<=20){bar.classList.add('warn');bar.classList.remove('dang');sec.className='gtsec '+col+' warn';}else{bar.classList.remove('warn','dang');sec.className='gtsec '+col;}updateAHScore(side,ps.score,ps.timer);};upd();
    ps.tInt=setInterval(()=>{if(ps.locked||ps.done)return;ps.timer--;bar.style.width=Math.max(0,ps.timer/M1T*100)+'%';upd();if(ps.timer<=8)Audio.tickD();else if(ps.timer<=20)Audio.tickW();else if(ps.timer%15===0)Audio.tick();if(ps.timer<=0){clearInterval(ps.tInt);ps.pulling=false;endM1(p,'timeout');}},1000);
  }
  function stopM1T(p){if(G[p]&&G[p].tInt){clearInterval(G[p].tInt);G[p].tInt=null;}}

  function ansM1(p,sel,correct){
    if(G[p].locked||G.over)return;G[p].locked=true;stopM1T(p);
    const ps=G[p],side=p==='p1'?'left':'right';lockOpts(side,correct,sel);
    const q=ps.queue[ps.ci];const hq=qHistory.find(h=>h.id===q.id);
    const tUsed=M1T-ps.timer;if(hq){if(p==='p1'){hq.p1ans=sel;hq.p1t=tUsed;}else{hq.p2ans=sel;hq.p2t=tUsed;}}
    if(sel===correct){
      Audio.correct();flashPanel(side,'c');ps.correct.add(q.id);ps.score++;
      ps.timer=Math.max(M1MIN,ps.timer-M1B);ps.ci=(ps.ci+1)%ps.queue.length;
      updateHead(side,{score:ps.score});
      Arena.setState('arena-canvas',{[p]:{name:ps.name,score:ps.score,pulling:true,fallAngle:0}});
      floatLbl(document.getElementById('go-'+side),'-'+M1B+'s ✓','#4ADE80');Audio.move();
      if(ps.score>=20&&!G.over){endM1(p,'flag');return;}
    } else {
      Audio.wrong();flashPanel(side,'w');ps.timer=Math.max(M1MIN,ps.timer-M1P);
      const c=ps.queue[ps.ci];ps.queue.splice(ps.ci,1);ps.queue.push(c);if(ps.ci>=ps.queue.length)ps.ci=0;
      floatLbl(document.getElementById('go-'+side),'-'+M1P+'s','#F87171');
      const og=document.getElementById('go-'+side);og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
    }
    setTimeout(()=>{ps.locked=false;loadM1Q(p);},1100);
  }

  function endM1(p,reason){
    if(G.over)return;G.over=true;stopM1T('p1');stopM1T('p2');G.p1.pulling=false;G.p2.pulling=false;
    const winner=reason==='timeout'?(p==='p1'?'p2':'p1'):p;
    const loser=winner==='p1'?'p2':'p1';
    Arena.setState('arena-canvas',{over:true,winner,p1:{...G.p1,pulling:false},p2:{...G.p2,pulling:false}});
    Audio.flagCaptured();
    setTimeout(()=>{Arena.triggerFall('arena-canvas',loser);Audio.fall();},1200);
    setTimeout(()=>showWin(G[winner].name,winner==='p1'?'#F97316':'#1E3A8A',G.p1.name,G.p2.name,G.p1.score,G.p2.score),3200);
  }

  /* ── MODE 2 ── */
  const M2T=70,M2B=3,M2P=5,M2MIN=8;
  function getNextM2(t){const qs=t===1?G.qs1:G.qs2,cor=t===1?G.t1correct:G.t2correct;let ci=t===1?G.t1ci:G.t2ci;for(let i=0;i<qs.length;i++){const idx=(ci+i)%qs.length;if(!cor.has(qs[idx].id)){if(t===1)G.t1ci=idx;else G.t2ci=idx;return qs[idx];}}return null;}

  function loadM2Q(t){
    const side=t===1?'left':'right',col=t===1?'o':'n';stopM2T(t);if(t===1&&G.t1done)return;if(t===2&&G.t2done)return;
    const q=getNextM2(t);if(!q){if(t===1)G.t1done=true;else G.t2done=true;setQ(side,'<span style="color:#4ADE80;font-weight:700">✅ Tim selesai!</span>',true);setOpts(side,[],null,col);setTim(side,'✔','100%','#16A34A');if(!G.over)endM2(t,'flag');return;}
    if(!qHistory.find(h=>h.id===q.id))qHistory.push({...q,t1ans:-1,t2ans:-1,t1t:0,t2t:0});
    const team=t===1?G.t1:G.t2;
    updateHead(side,{name:(t===1?'🟠 ':'🔵 ')+team.players[team.pi],qi:`Sisa ${(t===1?G.qs1:G.qs2).length-(t===1?G.t1correct.size:G.t2correct.size)}`});
    setQ(side,q.q);setOpts(side,q.opts,(i)=>ansM2(t,i,q.ai),col);startM2T(t);
  }

  function startM2T(t){
    const side=t===1?'left':'right',col=t===1?'o':'n';
    const bar=document.getElementById('gtf-'+side),sec=document.getElementById('gts-'+side);
    if(t===1)G.t1timer=M2T;else G.t2timer=M2T;
    const getT=()=>t===1?G.t1timer:G.t2timer;const setT=v=>{if(t===1)G.t1timer=v;else G.t2timer=v;};
    bar.style.transition='none';bar.style.width='100%';bar.className='gtfill '+col;void bar.offsetWidth;bar.style.transition='width 1s linear';sec.textContent=getT()+'s';sec.className='gtsec '+col;
    const ti=setInterval(()=>{if(G.over)return;setT(getT()-1);bar.style.width=Math.max(0,getT()/M2T*100)+'%';sec.textContent=getT()+'s';updateAHScore(side,t===1?G.t1.score:G.t2.score,getT());if(getT()<=8){bar.classList.add('dang');sec.className='gtsec '+col+' dang';Audio.tickD();}else if(getT()<=20){bar.classList.add('warn');sec.className='gtsec '+col+' warn';Audio.tickW();}if(getT()<=0){clearInterval(ti);if(t===1)G.t1tInt=null;else G.t2tInt=null;timeUpM2(t);}},1000);
    if(t===1)G.t1tInt=ti;else G.t2tInt=ti;
  }
  function stopM2T(t){if(t===1&&G.t1tInt){clearInterval(G.t1tInt);G.t1tInt=null;}if(t===2&&G.t2tInt){clearInterval(G.t2tInt);G.t2tInt=null;}}

  function timeUpM2(t){
    if(G.over)return;const lock=t===1?'t1lock':'t2lock';if(G[lock])return;G[lock]=true;Audio.timeUp();
    const side=t===1?'left':'right';const ci=t===1?G.t1ci:G.t2ci;const qs=t===1?G.qs1:G.qs2;
    if(ci<qs.length)lockOpts(side,qs[ci].ai,-1);setTimeout(()=>endM2(t,'timeout'),1200);
  }

  function ansM2(t,sel,correct){
    const lock=t===1?'t1lock':'t2lock';if(G[lock]||G.over)return;G[lock]=true;stopM2T(t);
    const side=t===1?'left':'right';lockOpts(side,correct,sel);
    const team=t===1?G.t1:G.t2;const qs=t===1?G.qs1:G.qs2;const ci=t===1?G.t1ci:G.t2ci;
    const hq=qHistory.find(h=>h.id===qs[ci].id);const tUsed=(t===1?M2T-G.t1timer:M2T-G.t2timer);
    if(sel===correct){
      Audio.correct();flashPanel(side,'c');(t===1?G.t1correct:G.t2correct).add(qs[ci].id);team.score++;
      updateHead(side,{score:team.score});Arena.setState('arena-canvas',{t1:{...G.t1},t2:{...G.t2}});
      floatLbl(document.getElementById('go-'+side),'-'+M2B+'s ✓','#4ADE80');Audio.move();
      if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2B);else G.t2timer=Math.max(M2MIN,G.t2timer-M2B);
      if(hq){if(t===1){hq.t1ans=sel;hq.t1t=tUsed;}else{hq.t2ans=sel;hq.t2t=tUsed;}}
      team.pi=(team.pi+1)%team.players.length;Arena.setState('arena-canvas',{t1:{...G.t1},t2:{...G.t2}});
      if(t===1)G.t1ci=(G.t1ci+1)%G.qs1.length;else G.t2ci=(G.t2ci+1)%G.qs2.length;
      if(team.score>=20&&!G.over){endM2(t,'flag');return;}
      setTimeout(()=>{G[lock]=false;loadM2Q(t);},1100);
    } else {
      Audio.wrong();flashPanel(side,'w');if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2P);else G.t2timer=Math.max(M2MIN,G.t2timer-M2P);
      if(hq){if(t===1){hq.t1ans=sel;hq.t1t=tUsed;}else{hq.t2ans=sel;hq.t2t=tUsed;}}
      const arr=t===1?G.qs1:G.qs2,ci2=t===1?G.t1ci:G.t2ci;const cq=arr[ci2];arr.splice(ci2,1);arr.push(cq);
      const og=document.getElementById('go-'+side);og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
      setTimeout(()=>{G[lock]=false;loadM2Q(t);},1100);
    }
  }

  function endM2(t,reason){
    if(G.over)return;G.over=true;stopM2T(1);stopM2T(2);
    const winner=reason==='timeout'?(t===1?2:1):t;const loser=winner===1?'t2':'t1';
    Arena.setState('arena-canvas',{over:true,winner:winner===1?'t1':'t2',t1:{...G.t1},t2:{...G.t2}});
    Audio.flagCaptured();
    setTimeout(()=>{Arena.triggerFall('arena-canvas',loser);Audio.fall();},1200);
    setTimeout(()=>showWin(winner===1?'TIM ORANYE':'TIM BIRU',winner===1?'#F97316':'#1E3A8A','Tim Oranye','Tim Biru',G.t1.score,G.t2.score),3200);
  }

  /* ── COZY MODE ── */
  function loadCozyQ(){
    const ps=G.solo;const q=getNextCozy(ps);
    if(!q){ps.done=true;ps.pulling=false;Arena.setState('cozy-canvas',{over:true,winner:'solo',solo:{...ps,pulling:false}});Audio.flagCaptured();setTimeout(()=>showWin(ps.name,'#7C3AED',ps.name,'—',ps.score,'—'),1800);return;}
    if(!qHistory.find(h=>h.id===q.id))qHistory.push({...q,ct:0,cans:-1});
    updateCozyHeader(ps.score);
    const ph=document.getElementById('gph-cozy');
    ph.innerHTML=`<div class="gph-inner gph-c"><span class="gph-name c">${ps.name}</span><div class="gph-right"><span class="gph-qi" id="gqi-cozy">Sisa ${ps.queue.length-ps.correct.size}</span><div style="display:flex;align-items:baseline;gap:2px"><span class="gph-score c pop-target" id="gs-cozy">${ps.score}</span><span class="gph-max">/20</span></div></div></div>`;
    document.getElementById('gq-cozy').textContent=q.q;
    const og=document.getElementById('go-cozy');og.innerHTML='';
    ['A','B','C','D'].forEach((L,i)=>{const b=document.createElement('button');b.className='opt';b.innerHTML=`<span class="opt-l">${L}</span><span>${q.opts[i]}</span>`;b.onclick=()=>ansCozy(i,q.ai);og.appendChild(b);});
  }

  function getNextCozy(ps){for(let i=0;i<ps.queue.length;i++){const idx=(ps.ci+i)%ps.queue.length;if(!ps.correct.has(ps.queue[idx].id)){ps.ci=idx;return ps.queue[idx];}}return null;}

  function ansCozy(sel,correct){
    const ps=G.solo;if(ps.locked||G.over)return;ps.locked=true;
    const og=document.getElementById('go-cozy');og.querySelectorAll('.opt').forEach(b=>b.disabled=true);
    og.querySelectorAll('.opt')[correct].classList.add('ok');
    const q=ps.queue[ps.ci];const hq=qHistory.find(h=>h.id===q.id);if(hq){hq.cans=sel;hq.ct=0;}
    if(sel===correct){
      Audio.cozyCorrect();ps.correct.add(q.id);ps.score++;ps.ci=(ps.ci+1)%ps.queue.length;
      Arena.setState('cozy-canvas',{solo:{...ps,score:ps.score,pulling:true}});
      const el=document.getElementById('gs-cozy');if(el){el.textContent=ps.score;el.classList.remove('pop-anim');void el.offsetWidth;el.classList.add('pop-anim');}
      updateCozyHeader(ps.score);
    } else {
      og.querySelectorAll('.opt')[sel]&&og.querySelectorAll('.opt')[sel].classList.add('no');
      Audio.wrong();const c=ps.queue[ps.ci];ps.queue.splice(ps.ci,1);ps.queue.push(c);if(ps.ci>=ps.queue.length)ps.ci=0;
      og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
    }
    setTimeout(()=>{ps.locked=false;loadCozyQ();},1200);
  }

  /* ── PANEL HELPERS ── */
  function buildHead(side,name,score,col,isTeam){
    const el=document.getElementById('gph-'+side);
    el.innerHTML=`<div class="gph-inner gph-${col}"><span class="gph-name ${col}" id="gn-${side}">${name}</span><div class="gph-right"><span class="gph-qi" id="gqi-${side}"></span><div style="display:flex;align-items:baseline;gap:2px"><span class="gph-score ${col}" id="gs-${side}">${score}</span><span class="gph-max">${isTeam?'poin':' poin'}</span></div></div></div>`;
  }
  function updateHead(side,o){
    if(o.score!==undefined){const e=document.getElementById('gs-'+side);if(e){e.textContent=o.score;e.classList.remove('pop-anim');void e.offsetWidth;e.classList.add('pop-anim');}}
    if(o.qi!==undefined){const e=document.getElementById('gqi-'+side);if(e)e.textContent=o.qi;}
    if(o.name!==undefined){const e=document.getElementById('gn-'+side);if(e)e.textContent=o.name;}
  }
  function setQ(side,html,isH){const e=document.getElementById('gq-'+side);if(isH)e.innerHTML=html;else e.textContent=html;}
  function setOpts(side,opts,cb,col){
    const og=document.getElementById('go-'+side);og.innerHTML='';
    if(!opts.length){og.innerHTML='<div style="flex:1;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.3);font-size:.86rem;font-weight:600">🎉 Selesai!</div>';return;}
    ['A','B','C','D'].forEach((L,i)=>{const b=document.createElement('button');b.className='opt';b.innerHTML=`<span class="opt-l">${L}</span><span>${opts[i]}</span>`;b.onclick=()=>cb(i);og.appendChild(b);});
  }
  function lockOpts(side,correct,chosen){document.getElementById('go-'+side).querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add('ok');else if(i===chosen)b.classList.add('no');});}
  function setTim(side,text,w,bg){const bar=document.getElementById('gtf-'+side),sec=document.getElementById('gts-'+side);if(bar){bar.style.transition='none';bar.style.width=w;bar.style.background=bg;}if(sec)sec.textContent=text;}

  /* ── WINNER ── */
  function showWin(name,color,n1,n2,s1,s2){
    Audio.win();Arena.stopLoop('arena-canvas');Arena.stopLoop('cozy-canvas');
    document.getElementById('win-name').textContent=name;
    document.getElementById('win-name').style.color=color;
    document.getElementById('win-name').style.textShadow=`0 0 40px ${color}80,3px 3px 0 rgba(0,0,0,.2)`;
    document.getElementById('win-scores').innerHTML=`<div class="wscore-item"><div class="wscore-name">${n1}</div><div class="wscore-val" style="color:#F97316">${s1}</div></div>${s2!=='—'?`<div class="wscore-vs">VS</div><div class="wscore-item"><div class="wscore-name">${n2}</div><div class="wscore-val" style="color:#60A5FA">${s2}</div></div>`:''}`;
    go('s-winner');Confetti.start(color);
  }

  /* ── QLIST ── */
  function goQList(){buildQList();go('s-qlist');}
  function buildQList(){
    const scroll=document.getElementById('ql-scroll');
    const l1=G.mode===1?G.p1.name:(G.mode===2?'Tim Oranye':(G.solo?G.solo.name:'Solo'));
    const l2=G.mode===1?G.p2.name:(G.mode===2?'Tim Biru':'—');
    document.getElementById('ql-sub').textContent=`${qHistory.length} soal dimainkan • ${l1} vs ${l2}`;
    scroll.innerHTML='';
    qHistory.forEach((q,i)=>{
      const card=document.createElement('div');card.className='qcard';
      const t1txt=G.mode===1?(q.p1t?q.p1t+'s':'-'):(G.mode===2?(q.t1t?q.t1t+'s':'-'):(q.ct?q.ct+'s':'-'));
      const t2txt=G.mode===1?(q.p2t?q.p2t+'s':'-'):(G.mode===2?(q.t2t?q.t2t+'s':'-'):'');
      const timeHtml=G.mode!==3?`<span class="qt-o">${l1}: ${t1txt}</span><span class="qt-n">${l2}: ${t2txt}</span>`:
        `<span class="qt-c">${l1}: ${t1txt}</span>`;
      const opts=q.opts.map((opt,j)=>{
        let cls='qopt',icon='';
        if(j===q.ai){cls+=' correct';icon='✅';}
        else if(j===(G.mode===1?q.p1ans:G.mode===2?q.t1ans:q.cans)||j===(G.mode===1?q.p2ans:G.mode===2?q.t2ans:-1)){cls+=' wrong';icon='❌';}
        return`<div class="${cls}"><span class="qopt-l">${['A','B','C','D'][j]}</span><span>${opt}</span><span class="qopt-icon">${icon}</span></div>`;
      }).join('');
      card.innerHTML=`<div class="qcard-num">SOAL ${i+1}<div class="qcard-time">${timeHtml}</div></div><div class="qcard-text">${q.q}</div><div class="qcard-opts">${opts}</div>`;
      scroll.appendChild(card);
    });
  }

  /* ── HOME / REMATCH ── */
  function goHome(){Confetti.stop();Arena.stopLoop('arena-canvas');Arena.stopLoop('cozy-canvas');G={};qHistory=[];go('s-home');setTimeout(()=>Audio.startMusic(),600);}
  function rematch(){Confetti.stop();Arena.stopLoop('arena-canvas');Arena.stopLoop('cozy-canvas');G={};qHistory=[];buildSetup(mode);go('s-setup');}

  /* ── RESIZE ── */
  window.addEventListener('resize',()=>{Arena.resize('arena-canvas','arena-wrap');Arena.resize('cozy-canvas','cozy-arena-wrap');});
    window.addEventListener('orientationchange',()=>setTimeout(()=>{Arena.resize('arena-canvas','arena-wrap');Arena.resize('cozy-canvas','cozy-arena-wrap');},180));

  /* ── Prevent scroll up ── */
  let lastY2=0;
  document.addEventListener('touchstart',e=>{lastY2=e.touches[0].clientY;},{passive:true});
  document.addEventListener('touchmove',e=>{const dy=e.touches[0].clientY-lastY2;const el=e.target.closest('.ql-scroll,.names-grid');if(!el){e.preventDefault();return;}if(dy>0&&el.scrollTop<=0){e.preventDefault();return;}lastY2=e.touches[0].clientY;},{passive:false});

  setTimeout(()=>Audio.startMusic(),1000);

  return{go,toggleSound,selectMode,setCount,renderNI,setupAction,goHome,rematch,goQList};
})();
