'use strict';
/* ═══════════════════════════════════════════════
   QUESTIONS — 20 soal panjang & beragam
═══════════════════════════════════════════════ */
const QDB=[
  {q:"Kota manakah yang ditetapkan sebagai ibu kota baru Republik Indonesia menggantikan Jakarta?",o:["Nusantara","Balikpapan","Samarinda","Palangkaraya"],a:0},
  {q:"Siapakah dua tokoh yang memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945?",o:["Soekarno & Mohammad Hatta","Soekarno & Sutan Sjahrir","Mohammad Hatta & Ki Hajar Dewantara","Soedirman & Soekarno"],a:0},
  {q:"Pada tanggal berapa tepatnya Indonesia memproklamasikan kemerdekaannya dari penjajahan Belanda?",o:["17 Agustus 1945","20 Mei 1945","1 Juni 1945","28 Oktober 1928"],a:0},
  {q:"Apakah semboyan nasional bangsa Indonesia yang tertulis pada pita di bawah lambang Garuda Pancasila?",o:["Bhinneka Tunggal Ika","Satu Nusa Satu Bangsa","Tut Wuri Handayani","Ing Ngarso Sung Tulodo"],a:0},
  {q:"Berapa jumlah provinsi yang dimiliki oleh Indonesia berdasarkan pemekaran wilayah terbaru pada tahun 2024?",o:["38 Provinsi","34 Provinsi","36 Provinsi","40 Provinsi"],a:0},
  {q:"Siapakah komponis yang menciptakan lagu kebangsaan Indonesia Raya yang pertama kali dikumandangkan pada tahun 1928?",o:["Wage Rudolf Supratman","Ismail Marzuki","C. Simanjuntak","Kusbini"],a:0},
  {q:"Di manakah letak puncak tertinggi di Indonesia yang juga merupakan salah satu puncak Seven Summits dunia?",o:["Puncak Jaya, Papua","Gunung Semeru, Jawa Timur","Gunung Rinjani, NTB","Gunung Kerinci, Sumatera"],a:0},
  {q:"Danau vulkanik terbesar di dunia yang terletak di Sumatera Utara dan menjadi kebanggaan Indonesia adalah?",o:["Danau Toba","Danau Maninjau","Danau Singkarak","Danau Ranau"],a:0},
  {q:"Berapa jumlah sila dalam dasar negara Indonesia yaitu Pancasila yang dirumuskan oleh para pendiri bangsa?",o:["5 Sila","4 Sila","6 Sila","3 Sila"],a:0},
  {q:"Burung apakah yang dijadikan lambang negara Republik Indonesia dan terdapat dalam lambang Garuda Pancasila?",o:["Elang Jawa (Garuda)","Cendrawasih","Jalak Bali","Elang Bondol"],a:0},
  {q:"Sungai manakah yang merupakan sungai terpanjang di Indonesia yang mengalir di Pulau Kalimantan?",o:["Sungai Kapuas","Sungai Mahakam","Sungai Barito","Sungai Musi"],a:0},
  {q:"Tari Saman yang terkenal dengan gerakannya yang kompak dan cepat merupakan tarian tradisional dari provinsi mana?",o:["Aceh","Bali","Sumatera Barat","Kalimantan Timur"],a:0},
  {q:"Komodo, hewan purba yang kini dilindungi dan menjadi simbol nasional Indonesia, hidup endemik di pulau mana?",o:["Pulau Komodo & Rinca","Pulau Flores","Pulau Lombok","Pulau Sumbawa"],a:0},
  {q:"Pada tahun berapa UNESCO secara resmi mengakui Batik Indonesia sebagai Warisan Budaya Tak Benda dari Indonesia?",o:["2009","2003","2012","2015"],a:0},
  {q:"Buah apakah yang dikenal sebagai Raja Buah di Asia Tenggara dan memiliki aroma khas yang sangat kuat?",o:["Durian","Rambutan","Manggis","Nangka"],a:0},
  {q:"Mata uang resmi yang digunakan oleh Negara Kesatuan Republik Indonesia dalam transaksi sehari-hari adalah?",o:["Rupiah (IDR)","Ringgit","Peso","Baht"],a:0},
  {q:"Setiap tanggal berapa Hari Sumpah Pemuda diperingati sebagai momentum persatuan bangsa Indonesia?",o:["28 Oktober","17 Agustus","20 Mei","21 April"],a:0},
  {q:"Siapakah Presiden pertama Republik Indonesia yang menjabat dari tahun 1945 hingga 1967?",o:["Ir. Soekarno","Jenderal Soeharto","B.J. Habibie","Sri Sultan Hamengkubuwono IX"],a:0},
  {q:"Candi Borobudur yang merupakan candi Buddha terbesar di dunia terletak di provinsi mana di Indonesia?",o:["Jawa Tengah","Jawa Timur","DI Yogyakarta","Jawa Barat"],a:0},
  {q:"Laut manakah yang memisahkan Pulau Jawa dan Pulau Sumatera dan menjadi jalur pelayaran penting di Indonesia?",o:["Selat Sunda","Selat Malaka","Selat Lombok","Selat Bali"],a:0},
];

/* ═══════════════════════════════════════════════
   SOUND ENGINE
═══════════════════════════════════════════════ */
const Snd=(()=>{
  let AC=null,on=true;
  function ctx(){if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();return AC;}
  function osc(f,d,type,vol,delay){if(!on)return;try{const c=ctx(),t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=type||'sine';o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.13,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.start(t);o.stop(t+d+.05);}catch(e){}}
  function sw(f1,f2,d,type,vol,delay){if(!on)return;try{const c=ctx(),t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=type||'sine';o.frequency.setValueAtTime(f1,t);o.frequency.linearRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.11,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.start(t);o.stop(t+d+.05);}catch(e){}}
  return{
    toggle(){on=!on;return on;},
    click(){osc(660,.055,'sine',.07);},
    correct(){[523,659,784].forEach((f,i)=>osc(f,.13,'sine',.14,i*.07));osc(1047,.3,'sine',.1,.22);sw(400,900,.14,'sine',.07,.32);},
    wrong(){sw(280,120,.12,'sawtooth',.18);osc(110,.4,'sawtooth',.12,.12);},
    tick(){osc(1100,.04,'square',.05);},
    tickW(){osc(880,.07,'sine',.11);},
    tickD(){osc(660,.09,'sine',.17);},
    timeUp(){sw(350,160,.15,'square',.2);osc(130,.42,'sawtooth',.13,.15);},
    move(){[700,540].forEach((f,i)=>osc(f,.07,'sine',.09,i*.04));},
    select(){sw(440,700,.1,'sine',.1);},
    ready(){[440,554,659,880].forEach((f,i)=>osc(f,.15,'sine',.16,i*.08));},
    cd(n){const f=[0,349,415,494,587];osc(f[n]||494,.22,'sine',.2);if(n===0)[523,659,784,1047].forEach((v,i)=>osc(v,.16,'sine',.18,i*.08));},
    win(){[523,659,784,659,784,1047,784,1047,1319,1047,1319,1568].forEach((f,i)=>osc(f,.15,'sine',.17,i*.09));[523,659,784,880,1047].forEach((f,i)=>osc(f,.3,'triangle',.07,i*.07+.05));},
    lose(){sw(440,220,.3,'sine',.15);osc(196,.5,'sawtooth',.1,.3);},
  };
})();

/* ═══════════════════════════════════════════════
   ARENA CANVAS
═══════════════════════════════════════════════ */
const Arena=(()=>{
  let cv,cx,W=0,H=0,raf=null,time=0;
  let snap={mode:1,p1:{score:0,name:'P1',qi:0,pulling:true},p2:{score:0,name:'P2',qi:0,pulling:true},t1:{score:0,players:[],pi:0},t2:{score:0,players:[],pi:0},over:false};

  function init(){cv=document.getElementById('arena-canvas');cx=cv.getContext('2d');resize();}
  function resize(){
    const w=document.getElementById('arena');if(!w)return;
    W=w.offsetWidth;H=w.offsetHeight;
    const dpr=window.devicePixelRatio||1;
    cv.width=W*dpr;cv.height=H*dpr;
    cv.style.width=W+'px';cv.style.height=H+'px';
    cx.scale(dpr,dpr);
  }
  function setSnap(s){snap=Object.assign({},snap,s);}
  function startLoop(){if(raf)return;(function loop(ts){time=ts*.001;draw();raf=requestAnimationFrame(loop);})(0);}
  function stopLoop(){if(raf){cancelAnimationFrame(raf);raf=null;}}

  /* ── background ── */
  function drawBG(){
    // Sky
    const sky=cx.createLinearGradient(0,0,0,H*.48);
    sky.addColorStop(0,'#0C1445');sky.addColorStop(1,'#1E3A8A');
    cx.fillStyle=sky;cx.fillRect(0,0,W,H*.48);
    // Ground
    const gnd=cx.createLinearGradient(0,H*.48,0,H);
    gnd.addColorStop(0,'#15803D');gnd.addColorStop(.4,'#14532D');gnd.addColorStop(1,'#0F2E1A');
    cx.fillStyle=gnd;cx.fillRect(0,H*.48,W,H*.52);
    // Ground edge
    cx.fillStyle='rgba(74,222,128,.35)';cx.fillRect(0,H*.48,W,3);
    // Stars
    [[.05,.13],[.14,.08],[.26,.18],[.4,.06],[.62,.05],[.74,.15],[.87,.09],[.94,.21]].forEach(([sx,sy],i)=>{
      cx.globalAlpha=.38+.3*Math.sin(time*1.2+i);
      cx.fillStyle='#fff';cx.beginPath();cx.arc(sx*W,sy*H,1.2,0,Math.PI*2);cx.fill();
    });
    cx.globalAlpha=1;
    // Moon
    cx.fillStyle='#FEF3C7';cx.beginPath();cx.arc(W*.91,H*.18,W*.018,0,Math.PI*2);cx.fill();
    cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(W*.914,H*.14,W*.013,0,Math.PI*2);cx.fill();
    drawCrowd();
  }

  /* ── crowd ── */
  function drawCrowd(){
    const crowdData=[
      [.02,.22,'#EF4444'],[.05,.2,'#FBBF24'],[.08,.22,'#06B6D4'],
      [.11,.2,'#8B5CF6'],[.14,.22,'#F97316'],[.17,.2,'#EC4899'],
      [.77,.22,'#10B981'],[.80,.2,'#EF4444'],[.83,.22,'#FBBF24'],
      [.86,.2,'#8B5CF6'],[.89,.22,'#06B6D4'],[.92,.2,'#F97316'],
    ];
    crowdData.forEach(([sx,hf,color],i)=>{
      const bob=Math.sin(time*2.5+i)*.012;
      const cx2=sx*W,ch=hf*H+bob*H,cy=H*.48-ch;
      const armUp=Math.sin(time*3.2+i*1.4)>.2;
      // body shadow
      cx.fillStyle='rgba(0,0,0,.18)';cx.beginPath();cx.ellipse(cx2,H*.48+2,ch*.25,4,0,0,Math.PI*2);cx.fill();
      // body
      cx.fillStyle=color;cx.globalAlpha=.7;
      cx.beginPath();cx.roundRect(cx2-ch*.18,cy,ch*.36,ch*.72,4);cx.fill();
      // head
      cx.fillStyle='#C68642';cx.beginPath();cx.arc(cx2,cy-ch*.14,ch*.16,0,Math.PI*2);cx.fill();
      // hair
      cx.fillStyle='#1C0700';
      cx.beginPath();cx.arc(cx2,cy-ch*.22,ch*.13,Math.PI,0,false);cx.fill();
      // eyes
      cx.fillStyle='white';
      cx.beginPath();cx.ellipse(cx2-ch*.05,cy-ch*.12,ch*.04,ch*.04,0,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.ellipse(cx2+ch*.05,cy-ch*.12,ch*.04,ch*.04,0,0,Math.PI*2);cx.fill();
      cx.fillStyle='#111';
      cx.beginPath();cx.arc(cx2-ch*.05,cy-ch*.12,ch*.02,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.arc(cx2+ch*.05,cy-ch*.12,ch*.02,0,Math.PI*2);cx.fill();
      // arms cheer
      cx.strokeStyle=color;cx.lineWidth=Math.max(2,ch*.05);cx.lineCap='round';
      if(armUp){
        cx.globalAlpha=.65;
        cx.beginPath();cx.moveTo(cx2-ch*.18,cy+ch*.2);cx.lineTo(cx2-ch*.32,cy);cx.stroke();
        cx.beginPath();cx.moveTo(cx2+ch*.18,cy+ch*.2);cx.lineTo(cx2+ch*.32,cy);cx.stroke();
        // hands
        cx.fillStyle='#C68642';
        cx.beginPath();cx.arc(cx2-ch*.32,cy-ch*.05,ch*.07,0,Math.PI*2);cx.fill();
        cx.beginPath();cx.arc(cx2+ch*.32,cy-ch*.05,ch*.07,0,Math.PI*2);cx.fill();
      } else {
        cx.globalAlpha=.5;
        cx.beginPath();cx.moveTo(cx2-ch*.18,cy+ch*.2);cx.lineTo(cx2-ch*.28,cy+ch*.38);cx.stroke();
        cx.beginPath();cx.moveTo(cx2+ch*.18,cy+ch*.2);cx.lineTo(cx2+ch*.28,cy+ch*.38);cx.stroke();
      }
      cx.globalAlpha=1;
      // shoes
      cx.fillStyle='#111';
      cx.beginPath();cx.ellipse(cx2-ch*.1,H*.48,ch*.1,ch*.05,0,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.ellipse(cx2+ch*.1,H*.48,ch*.1,ch*.05,0,0,Math.PI*2);cx.fill();
    });
  }

  /* ── flag ── */
  function drawFlag(fx){
    const py=H*.48,ph=H*.26;
    cx.strokeStyle='#78350F';cx.lineWidth=5;cx.lineCap='round';
    cx.beginPath();cx.moveTo(fx,py);cx.lineTo(fx,py-ph);cx.stroke();
    const wave=Math.sin(time*3.5)*.06;
    const fw=W*.05,fh=H*.1;
    cx.save();cx.translate(fx,py-ph);
    // Red
    cx.fillStyle='#DC2626';cx.beginPath();cx.moveTo(0,0);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*.1,fw,0);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*.6,fw,fh*.5);
    cx.lineTo(0,fh*.5);cx.closePath();cx.fill();
    // White
    cx.fillStyle='#fff';cx.beginPath();cx.moveTo(0,fh*.5);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*.6,fw,fh*.5);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*1.1,fw,fh);
    cx.lineTo(0,fh);cx.closePath();cx.fill();
    cx.fillStyle='rgba(0,0,0,.1)';cx.beginPath();cx.moveTo(0,0);cx.lineTo(fw,0);cx.lineTo(fw,fh);cx.lineTo(0,fh);cx.closePath();cx.fill();
    cx.restore();
  }

  /* ── rope ── */
  function drawRope(x1,y,x2){
    const sag=Math.max(5,(x2-x1)*.06+Math.sin(time*4)*(x2-x1)*.01);
    const mx=(x1+x2)/2,my=y+sag;
    cx.shadowColor='rgba(0,0,0,.3)';cx.shadowBlur=6;cx.shadowOffsetY=3;
    cx.strokeStyle='#92400E';cx.lineWidth=8;cx.lineCap='round';
    cx.beginPath();cx.moveTo(x1,y);cx.quadraticCurveTo(mx,my,x2,y);cx.stroke();
    cx.shadowColor='transparent';cx.shadowBlur=0;cx.shadowOffsetY=0;
    // strand 1
    cx.strokeStyle='#78350F';cx.lineWidth=6;
    cx.beginPath();cx.moveTo(x1,y);cx.quadraticCurveTo(mx,my,x2,y);cx.stroke();
    // highlight
    cx.strokeStyle='rgba(245,158,11,.5)';cx.lineWidth=2;cx.setLineDash([10,8]);
    cx.beginPath();cx.moveTo(x1,y-1);cx.quadraticCurveTo(mx,my-1,x2,y-1);cx.stroke();
    cx.setLineDash([]);
  }

  /* ── draw realistic human-like character (front view) ── */
  function drawHuman(x,y,teamColor,darkColor,skinTone,hairColor,flip,pulling,idx){
    cx.save();cx.translate(x,y);if(flip)cx.scale(-1,1);
    const s=1;
    // pulling animation
    const lean=pulling?Math.sin(time*4+idx)*.04:0;
    const armA=pulling?Math.abs(Math.sin(time*4+idx)):0;
    const legA=pulling?Math.sin(time*4+idx)*.18:0;
    cx.rotate(lean);

    // Shadow
    cx.fillStyle='rgba(0,0,0,.25)';
    cx.beginPath();cx.ellipse(0,95*s,22*s,6*s,0,0,Math.PI*2);cx.fill();

    // --- LEGS ---
    // left leg (back)
    cx.save();cx.translate(-7*s,74*s);cx.rotate(-legA);
    cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-6*s,0,11*s,22*s,3*s);cx.fill();
    cx.fillStyle='#111827';cx.beginPath();cx.roundRect(-8*s,19*s,16*s,8*s,4*s);cx.fill();
    cx.restore();
    // right leg (front)
    cx.save();cx.translate(7*s,74*s);cx.rotate(legA);
    cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-5*s,0,11*s,22*s,3*s);cx.fill();
    cx.fillStyle='#111827';cx.beginPath();cx.roundRect(-7*s,19*s,15*s,8*s,4*s);cx.fill();
    cx.restore();

    // --- BODY ---
    cx.save();cx.translate(0,45*s);
    // base shirt shadow
    cx.fillStyle=darkColor;cx.beginPath();cx.roundRect(-19*s,-1*s,38*s,31*s,5*s);cx.fill();
    // shirt
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-18*s,0,36*s,29*s,4*s);cx.fill();
    // shirt collar fold
    cx.fillStyle='rgba(255,255,255,.12)';cx.beginPath();cx.roundRect(-16*s,0,32*s,7*s,3*s);cx.fill();
    // number/badge on shirt
    cx.fillStyle='rgba(255,255,255,.22)';cx.beginPath();cx.roundRect(-6*s,8*s,12*s,12*s,3*s);cx.fill();
    cx.fillStyle='rgba(255,255,255,.7)';cx.font=`bold ${10*s}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
    cx.fillText(idx+1,0,15*s);
    // belt
    cx.fillStyle='rgba(0,0,0,.35)';cx.fillRect(-18*s,26*s,36*s,5*s);
    cx.fillStyle='#D97706';cx.beginPath();cx.roundRect(-5*s,26*s,10*s,5*s,2*s);cx.fill();
    cx.restore();

    // --- ARMS ---
    // RIGHT ARM (rope-holding)
    const rAng=(-35-armA*28)*(Math.PI/180);
    cx.save();cx.translate(18*s,48*s);cx.rotate(rAng);
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-5*s,0,11*s,18*s,4*s);cx.fill();
    // forearm muscle
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-5*s,13*s,11*s,10*s,4*s);cx.fill();
    cx.restore();
    // LEFT ARM (balance)
    const lAng=(25+armA*15)*(Math.PI/180);
    cx.save();cx.translate(-18*s,50*s);cx.rotate(lAng);
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-5*s,0,11*s,16*s,4*s);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-5*s,11*s,11*s,9*s,4*s);cx.fill();
    cx.restore();

    // --- HEAD ---
    cx.save();cx.translate(0,3*s);
    // neck
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-6*s,39*s,12*s,8*s,2*s);cx.fill();
    // head shadow
    cx.fillStyle=skinTone==='#C68642'?'#A0673A':(skinTone==='#D4A07A'?'#B8825C':'#8B5E3C');
    cx.beginPath();cx.roundRect(-19*s,1*s,38*s,38*s,6*s);cx.fill();
    // head skin
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-18*s,3*s,36*s,36*s,5*s);cx.fill();
    // hair
    cx.fillStyle=hairColor;
    cx.beginPath();cx.roundRect(-18*s,3*s,36*s,10*s,5*s);cx.fill();
    cx.beginPath();cx.roundRect(-19*s,5*s,5*s,14*s,3*s);cx.fill();
    cx.beginPath();cx.roundRect(14*s,5*s,5*s,14*s,3*s);cx.fill();
    // eyebrows
    const browFurrow=pulling?.06:0;
    cx.fillStyle=hairColor==='#1C0700'?'#3B1F0A':'#2D1B0A';
    cx.save();cx.translate(-10*s,16*s);cx.rotate(browFurrow);
    cx.beginPath();cx.roundRect(-5*s,-2*s,10*s,3.5*s,2*s);cx.fill();cx.restore();
    cx.save();cx.translate(10*s,16*s);cx.rotate(-browFurrow);
    cx.beginPath();cx.roundRect(-5*s,-2*s,10*s,3.5*s,2*s);cx.fill();cx.restore();
    // eye whites
    cx.fillStyle='white';
    cx.beginPath();cx.roundRect(-15*s,19*s,11*s,10*s,3*s);cx.fill();
    cx.beginPath();cx.roundRect(4*s,19*s,11*s,10*s,3*s);cx.fill();
    // irises
    cx.fillStyle='#1E3A8A';
    cx.beginPath();cx.arc(-9*s,24*s,4*s,0,Math.PI*2);cx.fill();
    cx.beginPath();cx.arc(9*s,24*s,4*s,0,Math.PI*2);cx.fill();
    cx.fillStyle='#111';
    cx.beginPath();cx.arc(-9*s,24*s,2.5*s,0,Math.PI*2);cx.fill();
    cx.beginPath();cx.arc(9*s,24*s,2.5*s,0,Math.PI*2);cx.fill();
    cx.fillStyle='rgba(255,255,255,.75)';
    cx.beginPath();cx.arc(-8*s,22*s,1.2*s,0,Math.PI*2);cx.fill();
    cx.beginPath();cx.arc(10*s,22*s,1.2*s,0,Math.PI*2);cx.fill();
    // nose
    cx.strokeStyle='rgba(0,0,0,.2)';cx.lineWidth=1.5;cx.lineCap='round';
    cx.beginPath();cx.moveTo(-3*s,28*s);cx.lineTo(-4*s,32*s);cx.lineTo(4*s,32*s);cx.stroke();
    // mouth
    cx.strokeStyle='rgba(0,0,0,.35)';cx.lineWidth=2;
    if(pulling){// grin / gritted teeth
      cx.beginPath();cx.moveTo(-8*s,36*s);cx.quadraticCurveTo(0,38*s,8*s,36*s);cx.stroke();
      cx.fillStyle='rgba(255,255,255,.5)';cx.beginPath();cx.roundRect(-6*s,35*s,12*s,3*s,2*s);cx.fill();
    } else {
      cx.beginPath();cx.arc(0,34*s,5*s,.2,Math.PI-.2,false);cx.stroke();
    }
    // blush (subtle)
    cx.fillStyle='rgba(220,100,80,.2)';
    cx.beginPath();cx.ellipse(-15*s,30*s,6*s,4*s,0,0,Math.PI*2);cx.fill();
    cx.beginPath();cx.ellipse(15*s,30*s,6*s,4*s,0,0,Math.PI*2);cx.fill();
    cx.restore();

    cx.restore();
  }

  /* ── side-view human for team mode ── */
  function drawHumanSide(x,y,teamColor,darkColor,skinTone,hairColor,faceRight,pulling,idx){
    cx.save();cx.translate(x,y);if(!faceRight)cx.scale(-1,1);
    const lean=pulling?Math.abs(Math.sin(time*4+idx))*.12:.02;
    const legA=pulling?Math.sin(time*4+idx)*.22:0;
    cx.rotate(-lean);

    // Shadow
    cx.fillStyle='rgba(0,0,0,.2)';cx.beginPath();cx.ellipse(0,5,18,5,0,0,Math.PI*2);cx.fill();

    // LEGS
    cx.save();cx.translate(-4,-22);cx.rotate(-legA);
    cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-5,0,9,24,3);cx.fill();
    cx.fillStyle='#111';cx.beginPath();cx.roundRect(-3,21,16,8,4);cx.fill();cx.restore();
    cx.save();cx.translate(4,-22);cx.rotate(legA*.8);
    cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-4,0,9,24,3);cx.fill();
    cx.fillStyle='#111';cx.beginPath();cx.roundRect(-2,21,15,8,4);cx.fill();cx.restore();

    // BODY
    cx.save();cx.translate(0,-24);cx.rotate(-lean*.3);
    cx.fillStyle=darkColor;cx.beginPath();cx.roundRect(-13,-32,26,33,5);cx.fill();
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-12,-31,24,31,4);cx.fill();
    cx.fillStyle='rgba(255,255,255,.12)';cx.beginPath();cx.roundRect(-11,-31,22,7,3);cx.fill();
    cx.fillStyle='rgba(0,0,0,.28)';cx.fillRect(-12,-3,24,5);
    cx.fillStyle='#D97706';cx.beginPath();cx.roundRect(-4,-3,8,5,2);cx.fill();
    cx.restore();

    // ROPE ARM
    const rArmAng=-35-Math.abs(Math.sin(time*4+idx))*30;
    cx.save();cx.translate(11,-50);cx.rotate(rArmAng*Math.PI/180);
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-4,0,9,20,4);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-4,15,9,10,4);cx.fill();cx.restore();

    // OTHER ARM
    cx.save();cx.translate(-9,-48);cx.rotate(25*Math.PI/180);
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-4,0,9,18,4);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-4,13,9,9,4);cx.fill();cx.restore();

    // HEAD
    cx.save();cx.translate(2,-70);
    cx.fillStyle=skinTone==='#C68642'?'#A0673A':'#B8825C';
    cx.beginPath();cx.roundRect(-13,-1,27,26,5);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-12,1,25,23,4);cx.fill();
    cx.fillStyle=hairColor;cx.beginPath();cx.roundRect(-12,1,25,7,4);cx.fill();
    // Side profile eye
    cx.fillStyle='white';cx.beginPath();cx.roundRect(5,8,9,8,2.5);cx.fill();
    cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(10,12,3.5,0,Math.PI*2);cx.fill();
    cx.fillStyle='#111';cx.beginPath();cx.arc(10,12,2,0,Math.PI*2);cx.fill();
    cx.fillStyle='rgba(255,255,255,.7)';cx.beginPath();cx.arc(11,11,1,0,Math.PI*2);cx.fill();
    cx.strokeStyle='rgba(0,0,0,.3)';cx.lineWidth=1.5;
    cx.beginPath();cx.moveTo(6,19);cx.lineTo(12,20);cx.stroke();
    cx.restore();
    cx.restore();
  }

  /* ── MAIN DRAW ── */
  function draw(){
    cx.clearRect(0,0,W,H);
    drawBG();
    snap.mode===1?drawM1():drawM2();
  }

  function drawM1(){
    const{p1,p2}=snap;
    const maxMov=W*.36;
    const x1=W*.09+(p1.score/20)*maxMov;
    const x2=W*.91-(p2.score/20)*maxMov;
    const cy=H*.34;
    const ry=cy+H*.38;
    // rope
    drawRope(x1+W*.04,ry,x2-W*.04);
    // flag (moves with score diff)
    const diff=(p1.score-p2.score)/20;
    const fx=W*.5+Math.max(-W*.26,Math.min(W*.26,diff*W*.22));
    drawFlag(fx);
    // P1 red team
    const skins=['#C68642','#D4A07A','#8B5E3C'];
    drawHuman(x1,cy,snap.p1color||'#DC2626',snap.p1dark||'#991B1B',skins[0],'#1C0700',false,p1.pulling,0);
    // P2 green team
    drawHuman(x2,cy,snap.p2color||'#059669',snap.p2dark||'#065F46',skins[1],'#3B1F0A',true,p2.pulling,0);
    // score display
    cx.font=`bold ${H*.09}px Bebas Neue,sans-serif`;cx.textAlign='center';
    cx.fillStyle='rgba(255,180,180,.55)';cx.fillText(p1.score,W*.05,H*.96);
    cx.fillStyle='rgba(180,255,200,.55)';cx.fillText(p2.score,W*.95,H*.96);
  }

  function drawM2(){
    const{t1,t2}=snap;
    const n1=t1.players.length,n2=t2.players.length;
    const areaW=W*.42;
    const gndY=H*.85;
    const sp1=Math.min(areaW/Math.max(n1,.8),W*.12);
    const sp2=Math.min(areaW/Math.max(n2,.8),W*.12);
    // rope
    const rx1=W*.03+(n1-.3)*sp1+W*.02;
    const rx2=W*.97-(n2-.3)*sp2-W*.02;
    const ry=gndY-H*.35;
    drawRope(rx1,ry,rx2);
    // flag
    const diff=(t1.score-t2.score)/7;
    const fx=W*.5+Math.max(-W*.3,Math.min(W*.3,diff*W*.26));
    drawFlag(fx);
    // Team 1 (left, red)
    const skins=['#C68642','#D4A07A','#8B5E3C','#C68642','#D4A07A','#8B5E3C'];
    const hairs=['#1C0700','#3B1F0A','#1C0700','#3B1F0A','#1C0700','#3B1F0A'];
    for(let i=0;i<n1;i++){
      const cx3=W*.03+(i+.5)*sp1;
      const isAct=!snap.over&&t1.pi===i;
      const pc=snap.t1color||'#DC2626',pd=snap.t1dark||'#991B1B';
      drawHumanSide(cx3,gndY,pc,pd,skins[i%6],hairs[i%6],true,isAct,i);
      if(i<n1-1){
        cx.strokeStyle='rgba(220,38,38,.3)';cx.lineWidth=3;cx.setLineDash([6,5]);
        cx.beginPath();cx.moveTo(cx3+sp1*.4,ry);cx.lineTo(W*.03+(i+1.5)*sp1-sp1*.4,ry);cx.stroke();
        cx.setLineDash([]);
      }
    }
    // Team 2 (right, green)
    for(let i=0;i<n2;i++){
      const cx3=W*.97-(i+.5)*sp2;
      const isAct=!snap.over&&t2.pi===i;
      const pc=snap.t2color||'#059669',pd=snap.t2dark||'#065F46';
      drawHumanSide(cx3,gndY,pc,pd,skins[(i+2)%6],hairs[(i+1)%6],false,isAct,i);
      if(i<n2-1){
        cx.strokeStyle='rgba(5,150,105,.3)';cx.lineWidth=3;cx.setLineDash([6,5]);
        cx.beginPath();cx.moveTo(cx3-sp2*.4,ry);cx.lineTo(W*.97-(i+1.5)*sp2+sp2*.4,ry);cx.stroke();
        cx.setLineDash([]);
      }
    }
    // scores
    cx.font=`bold ${H*.08}px Bebas Neue,sans-serif`;cx.textAlign='center';
    cx.fillStyle='rgba(255,160,160,.6)';cx.fillText(t1.score,W*.044,H*.97);
    cx.fillStyle='rgba(160,255,200,.6)';cx.fillText(t2.score,W*.956,H*.97);
  }

  return{init,resize,startLoop,stopLoop,setSnap};
})();

/* ═══════════════════════════════════════════════
   HOME CANVAS (particles)
═══════════════════════════════════════════════ */
(function(){
  let cv,cx2,W2,H2,raf2,particles=[];
  function init(){
    cv=document.getElementById('home-canvas');if(!cv)return;
    cx2=cv.getContext('2d');resize2();
    for(let i=0;i<40;i++)particles.push({x:Math.random()*W2,y:Math.random()*H2,r:Math.random()*2+.8,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,c:['#DC2626','#F59E0B','#fff'][Math.floor(Math.random()*3)],a:Math.random()*.5+.2});
    (function loop(){cx2.clearRect(0,0,W2,H2);particles.forEach(p=>{cx2.globalAlpha=p.a;cx2.fillStyle=p.c;cx2.beginPath();cx2.arc(p.x,p.y,p.r,0,Math.PI*2);cx2.fill();p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W2;if(p.x>W2)p.x=0;if(p.y<0)p.y=H2;if(p.y>H2)p.y=0;});cx2.globalAlpha=1;raf2=requestAnimationFrame(loop);})();
  }
  function resize2(){if(!cv)return;W2=cv.offsetWidth;H2=cv.offsetHeight;cv.width=W2*(window.devicePixelRatio||1);cv.height=H2*(window.devicePixelRatio||1);cv.style.width=W2+'px';cv.style.height=H2+'px';cx2.scale(window.devicePixelRatio||1,window.devicePixelRatio||1);}
  window.addEventListener('resize',resize2);
  window.addEventListener('load',()=>setTimeout(init,100));
})();

/* garuda SVG in home */
document.getElementById('home-garuda').innerHTML=`<svg viewBox="0 0 110 100" fill="none" style="width:100%;height:100%">
  <circle cx="55" cy="38" r="16" fill="#DC2626"/>
  <ellipse cx="62" cy="33" rx="4.5" ry="6" fill="#991B1B"/>
  <circle cx="61" cy="33" r="3.2" fill="white"/><circle cx="62.5" cy="33" r="1.8" fill="#111"/>
  <circle cx="62" cy="32" r="1" fill="white" opacity=".7"/>
  <path d="M55 57Q50 76 46 91" stroke="#DC2626" stroke-width="5.5" stroke-linecap="round" fill="none"/>
  <path d="M55 57Q60 76 64 91" stroke="#DC2626" stroke-width="5.5" stroke-linecap="round" fill="none"/>
  <path d="M55 55L6 13L19 36L2 24L24 60L44 46L55 55Z" fill="#DC2626"/>
  <path d="M55 55L104 13L91 36L108 24L86 60L66 46L55 55Z" fill="#DC2626"/>
  <rect x="49" y="61" width="12" height="22" rx="4" fill="#DC2626"/>
  <rect x="47" y="59" width="16" height="6" rx="2" fill="#991B1B" opacity=".5"/>
</svg>`;

/* ═══════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════ */
const Confetti=(()=>{
  let raf=null;
  function start(wc){
    const cv=document.getElementById('cf-canvas'),ct=cv.getContext('2d');
    cv.width=window.innerWidth;cv.height=window.innerHeight;
    const cols=[wc,'#F59E0B','#16A34A','#DC2626','#059669','#FBBF24','#EF4444'];
    const ps=Array.from({length:150},()=>({x:Math.random()*cv.width,y:Math.random()*-cv.height,w:Math.random()*13+5,h:Math.random()*6+3,r:Math.random()*Math.PI*2,rs:Math.random()*.12-.06,vx:Math.random()*2.2-1.1,vy:Math.random()*4.5+2,c:cols[Math.floor(Math.random()*cols.length)]}));
    function draw(){ct.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{ct.save();ct.translate(p.x,p.y);ct.rotate(p.r);ct.fillStyle=p.c;ct.globalAlpha=.88;ct.fillRect(-p.w/2,-p.h/2,p.w,p.h);ct.restore();p.x+=p.vx;p.y+=p.vy;p.r+=p.rs;if(p.y>cv.height+20){p.y=-20;p.x=Math.random()*cv.width;}});raf=requestAnimationFrame(draw);}
    stop();draw();
  }
  function stop(){if(raf){cancelAnimationFrame(raf);raf=null;}const cv=document.getElementById('cf-canvas');if(cv)cv.getContext('2d').clearRect(0,0,cv.width,cv.height);}
  return{start,stop};
})();

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function prepQ(){return shuffle(QDB).map((q,idx)=>{const ans=q.o[q.a];const opts=shuffle([...q.o]);return{q:q.q,opts,ai:opts.indexOf(ans),id:idx};});}
function floatLbl(el,text,color){
  if(!el)return;
  const r=el.getBoundingClientRect();
  const d=document.createElement('div');d.className='float-lbl';d.textContent=text;
  d.style.cssText=`left:${r.left+r.width/2-22}px;top:${r.top+r.height*.28}px;color:${color}`;
  document.body.appendChild(d);setTimeout(()=>d.remove(),1000);
}
function flashPanel(side,type){
  const fl=document.getElementById('pf-'+side);
  if(!fl)return;
  fl.className='panel-flash fl-'+type;
  setTimeout(()=>fl.className='panel-flash',600);
}

/* ═══════════════════════════════════════════════
   APP
═══════════════════════════════════════════════ */
const App=(()=>{
  let cur='s-home',mode=1,G={},teamCounts=[3,3];
  let qHistory=[];// track all questions that appeared

  /* ── navigate ── */
  function go(id){
    Snd.click();
    const o=document.getElementById(cur),n=document.getElementById(id);
    if(!n||id===cur)return;
    o.classList.add('leaving');setTimeout(()=>o.classList.remove('active','leaving'),280);
    n.classList.add('active');cur=id;
  }

  /* ── sound ── */
  function toggleSound(){const on=Snd.toggle();document.getElementById('snd-btn').textContent=on?'🔊 Suara Aktif':'🔇 Suara Mati';}

  /* ── mode select ── */
  const HOWTO={
    1:{badge:'MODE 1',title:'⚔️ Tarik Tambang',sub:'2 Pemain Individu — Layar Terbagi 2',steps:[
      {icon:'⏱️',title:'70 Detik',desc:'Setiap pemain punya waktu 70 detik untuk menyelesaikan semua soal',hl:'-5 dtk jika salah, -3 dtk jika benar',hlc:'hs-amber'},
      {icon:'📋',title:'20 Soal',desc:'Jawab 20 soal pengetahuan Indonesia. Soal yang salah dijawab akan muncul kembali!',hl:'Selesaikan semua soal = Menang',hlc:'hs-grn'},
      {icon:'⚡',title:'Layar Dibagi 2',desc:'Pemain Merah di kiri, Pemain Hijau di kanan. Jawab secepatnya tanpa gangguan!',hl:'Jawab benar = karakter maju',hlc:'hs-grn'},
      {icon:'💀',title:'Kalah Jika...',desc:'Waktu habis sebelum semua soal terjawab, ATAU lawan menyelesaikan lebih dulu!',hl:'Berlomba sampai selesai!',hlc:'hs-red'},
    ]},
    2:{badge:'MODE 2',title:'🤝 Tim Battle',sub:'2 Tim — Hingga 20 Peserta per Tim',steps:[
      {icon:'👥',title:'2 Tim Bersaing',desc:'Tim Merah vs Tim Hijau. Kedua tim main bersamaan! Tidak perlu menunggu giliran.',hl:'Layar kiri & kanan aktif bersamaan',hlc:'hs-grn'},
      {icon:'⏱️',title:'70 Detik',desc:'Setiap pemain dalam tim punya waktu 70 detik. Soal dijawab secara bergilir dalam tim.',hl:'-5 dtk salah, -3 dtk benar',hlc:'hs-amber'},
      {icon:'📋',title:'20 Soal per Tim',desc:'Masing-masing tim mendapat 20 soal berbeda. Semakin cepat selesai, semakin baik!',hl:'Soal salah = muncul lagi',hlc:'hs-red'},
      {icon:'🏆',title:'Pemenang',desc:'Tim yang menyelesaikan 20 soal lebih dulu MENANG! Atau tim yang tidak kehabisan waktu.',hl:'Ayo semangat bersama tim!',hlc:'hs-grn'},
    ]},
  };

  function selectMode(m){
    Snd.select();mode=m;
    const h=HOWTO[m];
    document.getElementById('howto-badge').textContent=h.badge;
    document.getElementById('howto-badge').className='howto-mode-badge '+(m===1?'':'grn-mode-badge');
    document.getElementById('howto-title').textContent=h.title;
    document.getElementById('howto-sub').textContent=h.sub;
    const st=document.getElementById('howto-steps');
    st.innerHTML=h.steps.map(s=>`<div class="howto-step">
      <div class="hs-icon">${s.icon}</div>
      <div class="hs-title">${s.title}</div>
      <div class="hs-desc">${s.desc}</div>
      <span class="hs-highlight ${s.hlc}">${s.hl}</span>
    </div>`).join('');
    go('s-howto');
  }

  /* ── setup ── */
  function buildSetup(m){
    const cols=document.getElementById('setup-cols');
    if(m===1){
      cols.innerHTML=`
      <div class="split-pane pane-red">
        <div class="setup-header">👤 Pemain 1 — Merah</div>
        <div class="setup-single">
          <div class="setup-lbl">NAMA PEMAIN 1</div>
          <input id="ni-p1" class="setup-inp" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off">
        </div>
      </div>
      <div class="split-sep"></div>
      <div class="split-pane pane-grn">
        <div class="setup-header">👤 Pemain 2 — Hijau</div>
        <div class="setup-single">
          <div class="setup-lbl">NAMA PEMAIN 2</div>
          <input id="ni-p2" class="setup-inp" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off">
        </div>
      </div>`;
    } else {
      teamCounts=[3,3];
      cols.innerHTML=buildTC(1)+`<div class="split-sep"></div>`+buildTC(2);
      renderNI(1);renderNI(2);
    }
  }

  function buildTC(t){
    const cl=t===1?'pane-red':'pane-grn',lbl=t===1?'🔴 Tim Merah':'🟢 Tim Hijau';
    return `<div class="split-pane ${cl}">
      <div class="setup-header">${lbl}</div>
      <div class="cnt-row">
        <div class="cnt-lbl">Jumlah Peserta</div>
        <div class="cnt-ctrl">
          <button class="cnt-btn" onclick="App.setCount(${t},-1)">−</button>
          <div class="cnt-val" id="cv-${t}">3</div>
          <button class="cnt-btn" onclick="App.setCount(${t},1)">+</button>
        </div>
      </div>
      <div class="names-grid" id="ng-${t}"></div>
    </div>`;
  }

  function setCount(t,d){teamCounts[t-1]=Math.max(1,Math.min(20,teamCounts[t-1]+d));document.getElementById('cv-'+t).textContent=teamCounts[t-1];renderNI(t);Snd.click();}
  function renderNI(t){
    const g=document.getElementById('ng-'+t);if(!g)return;
    g.innerHTML='';const n=teamCounts[t-1];
    for(let i=1;i<=n;i++){const row=document.createElement('div');row.className='name-row';row.innerHTML=`<div class="name-num">${i}</div><input class="name-inp" id="ni-t${t}-${i}" type="text" placeholder="Peserta ${i}" maxlength="14" autocomplete="off">`;g.appendChild(row);}
  }
  function getPlayers(t){const n=teamCounts[t-1],ps=[];for(let i=1;i<=n;i++){const v=document.getElementById(`ni-t${t}-${i}`);ps.push(v&&v.value.trim()||`Peserta ${i}`);}return ps;}

  /* ── start ── */
  function startFromSetup(){
    Snd.ready();qHistory=[];
    if(mode===1){
      const n1=document.getElementById('ni-p1').value.trim()||'Pemain 1';
      const n2=document.getElementById('ni-p2').value.trim()||'Pemain 2';
      G={mode:1,over:false,winner:null,
        p1:{name:n1,queue:prepQ(),correct:new Set(),ci:0,timer:70,tInt:null,locked:false,done:false,score:0,pulling:true},
        p2:{name:n2,queue:prepQ(),correct:new Set(),ci:0,timer:70,tInt:null,locked:false,done:false,score:0,pulling:true},
      };
    } else {
      G={mode:2,over:false,
        t1:{players:getPlayers(1),score:0,pi:0},
        t2:{players:getPlayers(2),score:0,pi:0},
        qs1:prepQ(),qs2:prepQ(),qi1:0,qi2:0,
        t1lock:false,t2lock:false,t1tInt:null,t2tInt:null,
        t1timer:70,t2timer:70,
        t1correct:new Set(),t2correct:new Set(),
        t1ci:0,t2ci:0,t1done:false,t2done:false,
      };
    }
    runCD(()=>startGame());
  }

  /* ── countdown ── */
  function runCD(cb){
    go('s-countdown');
    const el=document.getElementById('cdn');let n=3;
    function tick(){el.textContent=n>0?n:'MULAI!';el.classList.remove('cd-pop');void el.offsetWidth;el.classList.add('cd-pop');Snd.cd(n);if(n-->0)setTimeout(tick,1000);else setTimeout(cb,900);}
    tick();
  }

  /* ── game start ── */
  function startGame(){
    Arena.init();Arena.resize();
    if(G.mode===1){
      Arena.setSnap({mode:1,p1:{score:0,name:G.p1.name,qi:0,pulling:true},p2:{score:0,name:G.p2.name,qi:0,pulling:true},p1color:'#DC2626',p1dark:'#991B1B',p2color:'#059669',p2dark:'#065F46'});
      buildHead('left',G.p1.name,0,'r');buildHead('right',G.p2.name,0,'g');
      loadM1Q('p1');loadM1Q('p2');
    } else {
      Arena.setSnap({mode:2,t1:{score:0,players:G.t1.players,pi:0},t2:{score:0,players:G.t2.players,pi:0},over:false,t1color:'#DC2626',t1dark:'#991B1B',t2color:'#059669',t2dark:'#065F46'});
      buildHead('left','Tim Merah',0,'r',true);buildHead('right','Tim Hijau',0,'g',true);
      loadM2Q(1);loadM2Q(2);
    }
    go('s-game');Arena.startLoop();Snd.select();
  }

  /* ═══════ MODE 1 ═══════ */
  const M1T=70,M1BONUS=3,M1PEN=5,M1MIN=8;

  function getNextM1(ps){const n=ps.queue.length;for(let i=0;i<n;i++){const idx=(ps.ci+i)%n;if(!ps.correct.has(ps.queue[idx].id)){ps.ci=idx;return ps.queue[idx];}}return null;}

  function loadM1Q(p){
    const ps=G[p],side=p==='p1'?'left':'right';
    stopM1T(p);
    // track questions
    const q=getNextM1(ps);
    if(!q){
      ps.done=true;ps.pulling=false;
      Arena.setSnap({[p]:{...Arena._snap&&Arena._snap[p],pulling:false}});
      setQ(side,'<span style="color:#10B981;font-weight:700">✅ Semua soal selesai!</span>',true);
      setOpts(side,[],null,side==='left'?'r':'g');
      setTim(side,'✔','100%','#10B981');
      updateHead(side,{qi:'Selesai!'});
      if(!G.over)endM1(p,'done');
      return;
    }
    if(!qHistory.find(q2=>q2.id===q.id))qHistory.push({...q,p1ans:-1,p2ans:-1});
    updateHead(side,{qi:`Sisa ${ps.queue.length-ps.correct.size}`});
    setQ(side,q.q);
    const col=p==='p1'?'r':'g';
    setOpts(side,q.opts,(i)=>ansM1(p,i,q.ai),col);
    startM1T(p);
  }

  function startM1T(p){
    const ps=G[p],side=p==='p1'?'left':'right',col=p==='p1'?'r':'g';
    const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);
    bar.style.transition='none';bar.style.width=(ps.timer/M1T*100)+'%';
    bar.className='gp-fill '+col;void bar.offsetWidth;bar.style.transition='width 1s linear,background .4s';
    const upd=()=>{
      sec.textContent=ps.timer+'s';
      if(ps.timer<=8){bar.classList.add('dang');bar.classList.remove('warn');sec.className='gp-tsec '+col+' dang';}
      else if(ps.timer<=20){bar.classList.add('warn');bar.classList.remove('dang');sec.className='gp-tsec '+col+' warn';}
      else{bar.classList.remove('warn','dang');sec.className='gp-tsec '+col;}
    };upd();
    ps.tInt=setInterval(()=>{
      if(ps.locked||ps.done)return;
      ps.timer--;bar.style.width=Math.max(0,ps.timer/M1T*100)+'%';upd();
      if(ps.timer<=8)Snd.tickD();else if(ps.timer<=20)Snd.tickW();else if(ps.timer%15===0)Snd.tick();
      if(ps.timer<=0){clearInterval(ps.tInt);ps.pulling=false;endM1(p,'timeout');}
    },1000);
  }
  function stopM1T(p){if(G[p]&&G[p].tInt){clearInterval(G[p].tInt);G[p].tInt=null;}}

  function ansM1(p,sel,correct){
    if(G[p].locked||G.over)return;
    G[p].locked=true;stopM1T(p);
    const ps=G[p],side=p==='p1'?'left':'right';
    lockOpts(side,correct,sel);
    // update history
    const qid=ps.queue[ps.ci].id;
    const hq=qHistory.find(q=>q.id===qid);
    if(hq){if(p==='p1')hq.p1ans=sel;else hq.p2ans=sel;}
    if(sel===correct){
      Snd.correct();flashPanel(side,'correct');
      ps.correct.add(qid);ps.score++;
      ps.timer=Math.max(M1MIN,ps.timer-M1BONUS);
      ps.ci=(ps.ci+1)%ps.queue.length;
      updateHead(side,{score:ps.score});
      Arena.setSnap({[p]:{score:ps.score,name:ps.name,pulling:true}});
      floatLbl(document.getElementById('go-'+side),'-'+M1BONUS+'s ✓','#10B981');
      Snd.move();
    } else {
      Snd.wrong();flashPanel(side,'wrong');
      ps.timer=Math.max(M1MIN,ps.timer-M1PEN);
      const c=ps.queue[ps.ci];ps.queue.splice(ps.ci,1);ps.queue.push(c);
      if(ps.ci>=ps.queue.length)ps.ci=0;
      floatLbl(document.getElementById('go-'+side),'-'+M1PEN+'s','#EF4444');
      const og=document.getElementById('go-'+side);
      og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
    }
    setTimeout(()=>{ps.locked=false;loadM1Q(p);},820);
  }

  function endM1(p,reason){
    if(G.over)return;G.over=true;stopM1T('p1');stopM1T('p2');
    G.p1.pulling=false;G.p2.pulling=false;
    Arena.setSnap({p1:{...G.p1,pulling:false},p2:{...G.p2,pulling:false}});
    const w=reason==='done'?p:(p==='p1'?'p2':'p1');
    G.winner=w;
    setTimeout(()=>showWin(G[w].name,w==='p1'?'#DC2626':'#059669',G.p1.name,G.p2.name,G.p1.score,G.p2.score,w),680);
  }

  /* ═══════ MODE 2 ═══════ */
  const M2T=70,M2BONUS=3,M2PEN=5,M2MIN=8;

  function getNextM2(t){
    const qs=t===1?G.qs1:G.qs2;
    const correct=t===1?G.t1correct:G.t2correct;
    let ci=t===1?G.t1ci:G.t2ci;
    const n=qs.length;
    for(let i=0;i<n;i++){const idx=(ci+i)%n;if(!correct.has(qs[idx].id)){if(t===1)G.t1ci=idx;else G.t2ci=idx;return qs[idx];}}
    return null;
  }

  function loadM2Q(t){
    const side=t===1?'left':'right',col=t===1?'r':'g';
    stopM2T(t);
    if(t===1&&G.t1done)return;if(t===2&&G.t2done)return;
    const q=getNextM2(t);
    if(!q){
      if(t===1)G.t1done=true;else G.t2done=true;
      setQ(side,'<span style="color:#10B981;font-weight:700">✅ Semua soal selesai!</span>',true);
      setOpts(side,[],null,col);setTim(side,'✔','100%','#10B981');
      if(!G.over)endM2(t,'done');return;
    }
    if(!qHistory.find(q2=>q2.id===q.id))qHistory.push({...q,t1ans:-1,t2ans:-1});
    const team=t===1?G.t1:G.t2;
    const pname=team.players[team.pi];
    updateHead(side,{name:(t===1?'🔴 ':'🟢 ')+pname,qi:`Sisa ${(t===1?G.qs1:G.qs2).length-(t===1?G.t1correct:G.t2correct).size}`});
    setQ(side,q.q);setOpts(side,q.opts,(i)=>ansM2(t,i,q.ai),col);
    startM2T(t);
  }

  function startM2T(t){
    const side=t===1?'left':'right',col=t===1?'r':'g';
    const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);
    if(t===1)G.t1timer=M2T;else G.t2timer=M2T;
    const getT=()=>t===1?G.t1timer:G.t2timer;
    const setT=(v)=>{if(t===1)G.t1timer=v;else G.t2timer=v;};
    bar.style.transition='none';bar.style.width='100%';bar.className='gp-fill '+col;
    void bar.offsetWidth;bar.style.transition='width 1s linear';sec.textContent=getT()+'s';sec.className='gp-tsec '+col;
    const tInt=setInterval(()=>{
      if(G.over)return;setT(getT()-1);
      bar.style.width=Math.max(0,getT()/M2T*100)+'%';sec.textContent=getT()+'s';
      if(getT()<=8){bar.classList.add('dang');sec.className='gp-tsec '+col+' dang';Snd.tickD();}
      else if(getT()<=20){bar.classList.add('warn');sec.className='gp-tsec '+col+' warn';Snd.tickW();}
      if(getT()<=0){clearInterval(tInt);if(t===1)G.t1tInt=null;else G.t2tInt=null;timeUpM2(t);}
    },1000);
    if(t===1)G.t1tInt=tInt;else G.t2tInt=tInt;
  }
  function stopM2T(t){if(t===1&&G.t1tInt){clearInterval(G.t1tInt);G.t1tInt=null;}if(t===2&&G.t2tInt){clearInterval(G.t2tInt);G.t2tInt=null;}}

  function timeUpM2(t){
    if(G.over)return;const lock=t===1?'t1lock':'t2lock';if(G[lock])return;G[lock]=true;Snd.timeUp();
    const side=t===1?'left':'right';const ci=t===1?G.t1ci:G.t2ci;const qs=t===1?G.qs1:G.qs2;
    if(ci<qs.length)lockOpts(side,qs[ci].ai,-1);
    setTimeout(()=>endM2(t,'timeout'),850);
  }

  function ansM2(t,sel,correct){
    const lock=t===1?'t1lock':'t2lock';if(G[lock]||G.over)return;
    G[lock]=true;stopM2T(t);
    const side=t===1?'left':'right';lockOpts(side,correct,sel);
    const team=t===1?G.t1:G.t2;const qs=t===1?G.qs1:G.qs2;const ci=t===1?G.t1ci:G.t2ci;
    const qid=qs[ci].id;const hq=qHistory.find(q=>q.id===qid);
    if(sel===correct){
      Snd.correct();flashPanel(side,'correct');
      (t===1?G.t1correct:G.t2correct).add(qid);
      team.score++;updateHead(side,{score:team.score});
      Arena.setSnap({t1:{...G.t1},t2:{...G.t2}});
      floatLbl(document.getElementById('go-'+side),'-'+M2BONUS+'s ✓','#10B981');
      Snd.move();
      if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2BONUS);else G.t2timer=Math.max(M2MIN,G.t2timer-M2BONUS);
      if(hq){if(t===1)hq.t1ans=sel;else hq.t2ans=sel;}
      // advance player
      team.pi=(team.pi+1)%team.players.length;Arena.setSnap({t1:{...G.t1},t2:{...G.t2}});
      if(t===1)G.t1ci=(G.t1ci+1)%G.qs1.length;else G.t2ci=(G.t2ci+1)%G.qs2.length;
      setTimeout(()=>{G[lock]=false;loadM2Q(t);},820);
    } else {
      Snd.wrong();flashPanel(side,'wrong');
      if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2PEN);else G.t2timer=Math.max(M2MIN,G.t2timer-M2PEN);
      if(hq){if(t===1)hq.t1ans=sel;else hq.t2ans=sel;}
      // push wrong q to end
      const arr=t===1?G.qs1:G.qs2;const ci2=t===1?G.t1ci:G.t2ci;
      const cq=arr[ci2];arr.splice(ci2,1);arr.push(cq);
      const og=document.getElementById('go-'+side);og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
      setTimeout(()=>{G[lock]=false;loadM2Q(t);},820);
    }
  }

  function endM2(t,reason){
    if(G.over)return;G.over=true;stopM2T(1);stopM2T(2);
    Arena.setSnap({over:true});
    const w=reason==='done'?t:(t===1?2:1);
    const wn=w===1?'TIM MERAH':'TIM HIJAU';
    const wc=w===1?'#DC2626':'#059669';
    setTimeout(()=>showWin(wn,wc,'Tim Merah','Tim Hijau',G.t1.score,G.t2.score,w===1?'t1':'t2'),680);
  }

  /* ═══════ PANEL HELPERS ═══════ */
  function buildHead(side,name,score,col,isTeam){
    const el=document.getElementById('gph-'+side);
    el.innerHTML=`<div class="gp-head-inner head-${col==='r'?'red':'grn'}">
      <span class="gph-name ${col}" id="gn-${side}">${name}</span>
      <div class="gph-right">
        <span class="gph-qi" id="gqi-${side}"></span>
        <div style="display:flex;align-items:baseline;gap:2px">
          <span class="gph-score ${col} pop-target" id="gs-${side}">${score}</span>
          <span class="gph-max">${isTeam?'poin':' poin'}</span>
        </div>
      </div>
    </div>`;
  }
  function updateHead(side,o){
    if(o.score!==undefined){const e=document.getElementById('gs-'+side);if(e){e.textContent=o.score;e.classList.remove('pop-anim');void e.offsetWidth;e.classList.add('pop-anim');}}
    if(o.qi!==undefined){const e=document.getElementById('gqi-'+side);if(e)e.textContent=o.qi;}
    if(o.name!==undefined){const e=document.getElementById('gn-'+side);if(e)e.textContent=o.name;}
  }
  function setQ(side,html,isH){const e=document.getElementById('gq-'+side);if(isH)e.innerHTML=html;else e.textContent=html;}
  function setOpts(side,opts,cb,col){
    const og=document.getElementById('go-'+side);og.innerHTML='';
    if(!opts.length){og.innerHTML='<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#64748B;font-size:.86rem;font-weight:600">Menunggu...</div>';return;}
    ['A','B','C','D'].forEach((L,i)=>{const b=document.createElement('button');b.className='opt';b.innerHTML=`<span class="opt-l">${L}</span><span>${opts[i]}</span>`;b.onclick=()=>cb(i);og.appendChild(b);});
  }
  function lockOpts(side,correct,chosen){document.getElementById('go-'+side).querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add('ok');else if(i===chosen)b.classList.add('no');});}
  function setTim(side,text,w,bg){const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);if(bar){bar.style.width=w;bar.style.background=bg;bar.style.transition='none';}if(sec)sec.textContent=text;}

  /* ═══════ WINNER ═══════ */
  function showWin(name,color,n1,n2,s1,s2,winner){
    Snd.win();Arena.stopLoop();
    document.getElementById('w-name').textContent=name;
    document.getElementById('w-name').style.color=color;
    document.getElementById('w-scores').innerHTML=`
      <div class="ws-item"><div class="ws-name">${n1}</div><div class="ws-score" style="color:#DC2626">${s1}</div></div>
      <div class="ws-vs">VS</div>
      <div class="ws-item"><div class="ws-name">${n2}</div><div class="ws-score" style="color:#059669">${s2}</div></div>`;
    go('s-winner');Confetti.start(color);
  }

  /* ═══════ QUESTION LIST ═══════ */
  function buildQList(){
    const scroll=document.getElementById('qlist-scroll');
    const sub=document.getElementById('qlist-sub');
    sub.textContent=qHistory.length+' soal telah dimainkan';
    scroll.innerHTML='';
    qHistory.forEach((q,i)=>{
      const card=document.createElement('div');card.className='q-card';
      const optsHtml=q.opts.map((opt,j)=>{
        let cls='q-opt';let icon='';
        if(j===q.ai){cls+=' is-correct';icon='✅';}
        else if(j===q.p1ans||j===q.p2ans||j===q.t1ans||j===q.t2ans){cls+=' p1-wrong';icon='❌';}
        return `<div class="${cls}"><span class="q-opt-lbl">${['A','B','C','D'][j]}</span><span>${opt}</span><span class="q-opt-icon">${icon}</span></div>`;
      }).join('');
      card.innerHTML=`<div class="q-num">SOAL ${i+1}</div><div class="q-text">${q.q}</div><div class="q-opts">${optsHtml}</div>`;
      scroll.appendChild(card);
    });
  }

  /* go to qlist */
  const origGo=go;
  function goQList(){buildQList();go('s-qlist');}
  // patch s-winner next button
  document.querySelector('#s-winner .btn-hero').onclick=()=>goQList();

  /* ═══════ HOME / REMATCH ═══════ */
  function goHome(){Confetti.stop();Arena.stopLoop();G={};qHistory=[];go('s-home');}
  function rematch(){Confetti.stop();Arena.stopLoop();G={};qHistory=[];buildSetup(mode);go('s-setup');}

  /* ═══════ RESIZE ═══════ */
  window.addEventListener('resize',()=>Arena.resize());
  window.addEventListener('orientationchange',()=>setTimeout(()=>Arena.resize(),150));

  /* ═══════ SETUP on howto ── go to setup ═══════ */
  document.querySelector('.howto-go-btn').onclick=()=>{buildSetup(mode);go('s-setup');};

  return{go:origGo,toggleSound,selectMode,setCount,renderNI,startFromSetup,goHome,rematch};
})();
