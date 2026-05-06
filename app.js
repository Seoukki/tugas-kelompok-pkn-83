'use strict';
/* ══════════════════════════════════════════
   DATABASE SOAL
══════════════════════════════════════════ */
const QDB=[
  {q:"Kota manakah yang ditetapkan sebagai ibu kota baru Republik Indonesia menggantikan Jakarta?",o:["Nusantara","Balikpapan","Samarinda","Palangkaraya"],a:0,exp:"Nusantara adalah ibu kota baru RI di Penajam Paser Utara, Kalimantan Timur, berdasarkan UU No.3 Tahun 2022."},
  {q:"Siapakah dua tokoh yang memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945?",o:["Soekarno & Mohammad Hatta","Soekarno & Sutan Sjahrir","Mohammad Hatta & Ki Hajar Dewantara","Soedirman & Soekarno"],a:0,exp:"Soekarno membacakan teks proklamasi dan Mohammad Hatta menandatanganinya di Jl. Pegangsaan Timur 56, Jakarta."},
  {q:"Pada tanggal berapa tepatnya Indonesia memproklamasikan kemerdekaannya?",o:["17 Agustus 1945","20 Mei 1945","1 Juni 1945","28 Oktober 1928"],a:0,exp:"17 Agustus 1945 adalah Hari Kemerdekaan Indonesia. 17 rakaat sholat, bulan 8 (Agustus), tahun 45."},
  {q:"Apakah semboyan nasional Indonesia yang tertulis pada pita di bawah lambang Garuda Pancasila?",o:["Bhinneka Tunggal Ika","Satu Nusa Satu Bangsa","Tut Wuri Handayani","Ing Ngarso Sung Tulodo"],a:0,exp:"Bhinneka Tunggal Ika dari Kitab Sutasoma karya Mpu Tantular, artinya 'Berbeda-beda tetapi tetap satu jua'."},
  {q:"Berapa jumlah provinsi yang dimiliki Indonesia berdasarkan pemekaran wilayah terbaru (2024)?",o:["38 Provinsi","34 Provinsi","36 Provinsi","40 Provinsi"],a:0,exp:"Per 2024, Indonesia memiliki 38 provinsi setelah pemekaran 4 provinsi baru di Papua."},
  {q:"Siapakah komponis yang menciptakan lagu kebangsaan Indonesia Raya (1928)?",o:["Wage Rudolf Supratman","Ismail Marzuki","C. Simanjuntak","Kusbini"],a:0,exp:"WR Supratman memainkan Indonesia Raya pertama kali dengan biola pada Kongres Pemuda II, 28 Oktober 1928."},
  {q:"Di manakah letak puncak tertinggi di Indonesia yang termasuk Seven Summits dunia?",o:["Puncak Jaya, Papua","Gunung Semeru, Jawa Timur","Gunung Rinjani, NTB","Gunung Kerinci, Sumatera"],a:0,exp:"Puncak Jaya (Carstensz Pyramid) 4.884 mdpl di Papua — puncak tertinggi Indonesia & Oseania."},
  {q:"Danau vulkanik terbesar di dunia yang terletak di Sumatera Utara adalah?",o:["Danau Toba","Danau Maninjau","Danau Singkarak","Danau Ranau"],a:0,exp:"Danau Toba terbentuk dari letusan supervulkan 74.000 tahun lalu. Luas 1.145 km², kedalaman 505 meter."},
  {q:"Berapa jumlah sila dalam dasar negara Indonesia, Pancasila?",o:["5 Sila","4 Sila","6 Sila","3 Sila"],a:0,exp:"Pancasila (panca=lima, sila=asas) berisi 5 sila yang dirumuskan Soekarno 1 Juni 1945."},
  {q:"Burung apakah yang dijadikan lambang negara Republik Indonesia dalam Garuda Pancasila?",o:["Elang Jawa (Garuda)","Cendrawasih","Jalak Bali","Elang Bondol"],a:0,exp:"Garuda Pancasila terinspirasi dari Elang Jawa (Spizaetus bartelsi), dirancang Sultan Hamid II."},
  {q:"Sungai manakah yang merupakan sungai terpanjang di Indonesia, terletak di Kalimantan?",o:["Sungai Kapuas","Sungai Mahakam","Sungai Barito","Sungai Musi"],a:0,exp:"Sungai Kapuas di Kalimantan Barat sepanjang 1.143 km adalah sungai terpanjang Indonesia."},
  {q:"Tari Saman yang terkenal dengan gerakannya kompak dan cepat berasal dari provinsi mana?",o:["Aceh","Bali","Sumatera Barat","Kalimantan Timur"],a:0,exp:"Tari Saman dari Gayo, Aceh, diakui UNESCO 2011 sebagai Warisan Budaya Tak Benda."},
  {q:"Komodo, hewan purba yang kini dilindungi, hidup endemik di pulau mana?",o:["Pulau Komodo & Rinca","Pulau Flores","Pulau Lombok","Pulau Sumbawa"],a:0,exp:"Komodo (Varanus komodoensis) hanya hidup di Pulau Komodo, Rinca, Gili Motang, dan sebagian Flores."},
  {q:"Pada tahun berapa UNESCO mengakui Batik Indonesia sebagai Warisan Budaya Tak Benda?",o:["2009","2003","2012","2015"],a:0,exp:"2 Oktober 2009, UNESCO mengakui Batik Indonesia. Tanggal ini diperingati sebagai Hari Batik Nasional."},
  {q:"Buah apakah yang dikenal sebagai Raja Buah di Asia Tenggara dan beraroma sangat kuat?",o:["Durian","Rambutan","Manggis","Nangka"],a:0,exp:"Durian (Durio zibethinus) dijuluki Raja Buah karena rasa dan aromanya yang paling kuat."},
  {q:"Mata uang resmi yang digunakan oleh Negara Kesatuan Republik Indonesia adalah?",o:["Rupiah (IDR)","Ringgit","Peso","Baht"],a:0,exp:"Rupiah (IDR) adalah mata uang Indonesia sejak 1946, dari kata Sansekerta 'rupya' (perak)."},
  {q:"Setiap tanggal berapa Hari Sumpah Pemuda diperingati sebagai momentum persatuan bangsa?",o:["28 Oktober","17 Agustus","20 Mei","21 April"],a:0,exp:"Sumpah Pemuda lahir 28 Oktober 1928 dalam Kongres Pemuda II: satu tanah air, bangsa, dan bahasa Indonesia."},
  {q:"Siapakah Presiden pertama Republik Indonesia yang menjabat dari tahun 1945 hingga 1967?",o:["Ir. Soekarno","Jenderal Soeharto","B.J. Habibie","Sri Sultan HB IX"],a:0,exp:"Ir. Soekarno (Bung Karno) adalah Presiden RI pertama, Bapak Bangsa, dan orator ulung."},
  {q:"Candi Borobudur, candi Buddha terbesar di dunia, terletak di provinsi mana?",o:["Jawa Tengah","Jawa Timur","DI Yogyakarta","Jawa Barat"],a:0,exp:"Borobudur di Magelang, Jawa Tengah, dibangun abad ke-8 oleh Dinasti Syailendra. Warisan Dunia UNESCO sejak 1991."},
  {q:"Laut manakah yang memisahkan Pulau Jawa dan Pulau Sumatera?",o:["Selat Sunda","Selat Malaka","Selat Lombok","Selat Bali"],a:0,exp:"Selat Sunda memisahkan Jawa dan Sumatera, lokasi meletusnya Krakatau 1883."},
  {q:"Lagu daerah 'Ampar-Ampar Pisang' berasal dari provinsi mana di Indonesia?",o:["Kalimantan Selatan","Kalimantan Timur","Sulawesi Selatan","Sumatera Selatan"],a:0,exp:"Ampar-Ampar Pisang adalah lagu tradisional Banjar dari Kalimantan Selatan."},
];

/* ══════════════════════════════════════════
   MUSIC
══════════════════════════════════════════ */
const BGM=(()=>{
  let audio=null,vol=0.28,enabled=true;
  function get(){if(!audio){audio=document.getElementById('bgm-audio');if(!audio){audio=new Audio('./musik.mp3');audio.loop=true;document.body.appendChild(audio);}audio.volume=vol;}return audio;}
  function play(){if(!enabled)return;const a=get();if(a.paused)a.play().catch(()=>{});}
  function duck(){const a=get();if(enabled&&a.volume>0.04)a.volume=0.04;}
  function restore(){const a=get();if(enabled)a.volume=vol;}
  function setEnabled(on){enabled=on;const a=get();if(on){a.volume=vol;play();}else a.pause();}
  function stop(){if(audio){audio.pause();audio.currentTime=0;}}
  return{play,duck,restore,setEnabled,stop};
})();

/* ══════════════════════════════════════════
   SOUND ENGINE
══════════════════════════════════════════ */
const Snd=(()=>{
  let AC=null,on=true;
  function ctx(){if(!AC)try{AC=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return null;}if(AC.state==='suspended')AC.resume().catch(()=>{});return AC;}
  function o(f,d,tp,v,dl){if(!on)return;try{const c=ctx();if(!c)return;const t=c.currentTime+(dl||0),os=c.createOscillator(),g=c.createGain();os.connect(g);g.connect(c.destination);os.type=tp||'sine';os.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v||.1,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+d);os.start(t);os.stop(t+d+.04);}catch(e){}}
  function sw(f1,f2,d,tp,v,dl){if(!on)return;try{const c=ctx();if(!c)return;const t=c.currentTime+(dl||0),os=c.createOscillator(),g=c.createGain();os.connect(g);g.connect(c.destination);os.type=tp||'sine';os.frequency.setValueAtTime(f1,t);os.frequency.linearRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v||.09,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+d);os.start(t);os.stop(t+d+.04);}catch(e){}}
  return{
    isOn(){return on;},toggle(){on=!on;return on;},
    click(){o(660,.05,'sine',.06);},
    correct(){BGM.duck();[523,659,784].forEach((f,i)=>o(f,.14,'sine',.13,i*.07));o(1047,.3,'sine',.1,.22);sw(400,950,.15,'sine',.06,.35);setTimeout(()=>BGM.restore(),950);},
    wrong(){BGM.duck();sw(280,110,.14,'sawtooth',.18);o(110,.42,'sawtooth',.12,.14);setTimeout(()=>BGM.restore(),950);},
    tick(){o(1100,.04,'square',.04);},tickW(){o(880,.07,'sine',.1);},tickD(){o(660,.09,'sine',.16);},
    timeUp(){BGM.duck();sw(350,160,.18,'square',.2);o(130,.44,'sawtooth',.14,.17);setTimeout(()=>BGM.restore(),1200);},
    move(){[700,540].forEach((f,i)=>o(f,.07,'sine',.08,i*.04));},
    select(){sw(440,700,.1,'sine',.09);},
    ready(){[440,554,659,880].forEach((f,i)=>o(f,.14,'sine',.14,i*.07));},
    cd(n){const f=[523,349,415,494,587];o(f[n]||494,.22,'sine',.18);if(n===0)[523,659,784,1047].forEach((v,i)=>o(v,.15,'sine',.17,i*.07));},
    win(){BGM.duck();[523,659,784,659,784,1047,784,1047,1319,1047,1319,1568].forEach((f,i)=>o(f,.15,'sine',.16,i*.09));setTimeout(()=>BGM.stop(),2200);},
    fall(){BGM.duck();sw(400,80,.5,'sawtooth',.17);o(75,.68,'sawtooth',.11,.5);setTimeout(()=>BGM.restore(),1300);},
    siap(){[440,554,659,880].forEach((f,i)=>o(f,.12,'sine',.12,i*.055));},
    cozyNext(){o(523,.1,'sine',.1);o(659,.1,'sine',.1,.11);},
    finish(){BGM.duck();[523,659,784,1047,1319].forEach((f,i)=>o(f,.2,'sine',.18,i*.09));setTimeout(()=>BGM.stop(),1900);},
    ropeCreak(){sw(120,80,.3,'sawtooth',.06);},
    tug(){o(200,.08,'square',.05);},
  };
})();

/* ══════════════════════════════════════════
   ARENA — REALISTIC ROPE
══════════════════════════════════════════ */
const Arena=(()=>{
  let cv,cx,W=0,H=0,raf=null,T=0;
  /* rope physics */
  const ROPE_SEGS=24;
  let ropeNodes=[];
  let ropeVel=[];
  let ropeInit=false;
  let ropePulse=0; // animation for tug

  let snap={
    mode:1,
    p1:{score:0,name:'P1',state:'pull'},
    p2:{score:0,name:'P2',state:'pull'},
    t1:{score:0,players:[],pi:0,state:'pull'},
    t2:{score:0,players:[],pi:0,state:'pull'},
    over:false,fallenSide:null,fallProgress:0,
    lastCheer:'none',cheerTime:0,
    cozy:{correct:0,total:20,skin:'#C68642',hair:'#1C0700'},
    flagX:0.5,
  };

  function init(){cv=document.getElementById('arena-canvas');if(!cv)return;cx=cv.getContext('2d');resize();}
  function resize(){
    if(!cv)return;const ar=document.getElementById('arena');if(!ar)return;
    W=ar.clientWidth;H=ar.clientHeight;if(W<1||H<1)return;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';
    cx.setTransform(dpr,0,0,dpr,0,0);
    initRope();
  }
  function setSnap(s){for(const k in s){if(s[k]!==null&&typeof s[k]==='object'&&!Array.isArray(s[k])&&snap[k]&&typeof snap[k]==='object'){snap[k]=Object.assign({},snap[k],s[k]);}else snap[k]=s[k];}}
  function startLoop(){if(raf)return;(function loop(ts){T=ts*.001;if(snap.fallenSide&&snap.fallProgress<1)snap.fallProgress=Math.min(1,snap.fallProgress+.016);if(W>0&&H>0&&cx)draw();raf=requestAnimationFrame(loop);})(0);}
  function stopLoop(){if(raf){cancelAnimationFrame(raf);raf=null;}}

  /* ── ROPE PHYSICS ── */
  function initRope(){
    ropeNodes=[];ropeVel=[];
    const y=H*.55;
    for(let i=0;i<=ROPE_SEGS;i++){
      const t=i/ROPE_SEGS;
      ropeNodes.push({x:W*.12+t*(W*.76),y});
      ropeVel.push({x:0,y:0});
    }
    ropeInit=true;
  }

  function updateRope(x1,y1,x2,y2){
    if(!ropeInit||ropeNodes.length===0)return;
    const dt=0.5;
    const gravity=H*.15;
    const stiffness=0.85;
    const damping=0.88;
    const segLen=(x2-x1)/ROPE_SEGS;
    // anchor endpoints
    ropeNodes[0].x=x1;ropeNodes[0].y=y1;
    ropeNodes[ROPE_SEGS].x=x2;ropeNodes[ROPE_SEGS].y=y2;
    // physics for interior nodes
    for(let i=1;i<ROPE_SEGS;i++){
      // gravity + tug pulse
      const tugY=snap.fallenSide?H*.05:ropePulse*H*.012;
      ropeVel[i].y+=gravity*dt*.016;
      ropeVel[i].y+=tugY*dt*.016;
      ropeVel[i].x+=ropeVel[i].x*.001;
      ropeNodes[i].x+=ropeVel[i].x;
      ropeNodes[i].y+=ropeVel[i].y;
      // damping
      ropeVel[i].x*=damping;ropeVel[i].y*=damping;
    }
    // constraint relaxation
    for(let iter=0;iter<8;iter++){
      for(let i=0;i<ROPE_SEGS;i++){
        const a=ropeNodes[i],b=ropeNodes[i+1];
        const dx=b.x-a.x,dy=b.y-a.y;
        const dist=Math.sqrt(dx*dx+dy*dy)||1;
        const diff=(dist-segLen)/dist*stiffness;
        if(i>0){a.x+=dx*diff*.5;a.y+=dy*diff*.5;}
        if(i<ROPE_SEGS-1){b.x-=dx*diff*.5;b.y-=dy*diff*.5;}
      }
    }
    // floor clamp
    for(let i=1;i<ROPE_SEGS;i++){
      if(ropeNodes[i].y>H*.96)ropeNodes[i].y=H*.96;
    }
  }

  function drawRealRope(){
    if(ropeNodes.length<2)return;
    // shadow
    cx.beginPath();cx.moveTo(ropeNodes[0].x,ropeNodes[0].y);
    ropeNodes.forEach((n,i)=>{if(i>0)cx.lineTo(n.x,n.y+4);});
    cx.strokeStyle='rgba(0,0,0,.25)';cx.lineWidth=12;cx.lineCap='round';cx.lineJoin='round';cx.stroke();
    // base rope (brown thick)
    cx.beginPath();cx.moveTo(ropeNodes[0].x,ropeNodes[0].y);
    ropeNodes.forEach((n,i)=>{if(i>0)cx.lineTo(n.x,n.y);});
    cx.strokeStyle='#7C3A1A';cx.lineWidth=11;cx.lineCap='round';cx.lineJoin='round';cx.stroke();
    // mid strand
    cx.beginPath();cx.moveTo(ropeNodes[0].x,ropeNodes[0].y);
    ropeNodes.forEach((n,i)=>{if(i>0)cx.lineTo(n.x,n.y);});
    cx.strokeStyle='#92400E';cx.lineWidth=9;cx.stroke();
    // highlight strand
    cx.beginPath();cx.moveTo(ropeNodes[0].x,ropeNodes[0].y);
    ropeNodes.forEach((n,i)=>{if(i>0)cx.lineTo(n.x,n.y-1);});
    cx.strokeStyle='rgba(180,120,50,.6)';cx.lineWidth=4;cx.stroke();
    // twist marks
    cx.strokeStyle='rgba(0,0,0,.18)';cx.lineWidth=1.2;
    for(let i=2;i<ropeNodes.length-1;i+=2){
      const a=ropeNodes[i-1],b=ropeNodes[i];
      const dx=b.x-a.x,dy=b.y-a.y;
      const nx=-dy,ny=dx;const len=Math.sqrt(nx*nx+ny*ny)||1;
      cx.beginPath();cx.moveTo(a.x+nx/len*4,a.y+ny/len*4);cx.lineTo(b.x-nx/len*4,b.y-ny/len*4);cx.stroke();
    }
    // center marker (flag ring)
    const mid=ropeNodes[Math.floor(ROPE_SEGS/2)];
    cx.fillStyle='#DC2626';cx.beginPath();cx.arc(mid.x,mid.y,7,0,Math.PI*2);cx.fill();
    cx.fillStyle='#fff';cx.beginPath();cx.arc(mid.x,mid.y,4,0,Math.PI*2);cx.fill();
    cx.fillStyle='#DC2626';cx.beginPath();cx.arc(mid.x,mid.y,2,0,Math.PI*2);cx.fill();
  }

  /* ── STARS ── */
  const STARS=Array.from({length:26},()=>({x:Math.random()*.94+.03,y:Math.random()*.34,r:Math.random()*1.3+.4,ph:Math.random()*Math.PI*2}));

  /* ── BACKGROUND ── */
  function drawBG(){
    if(snap.mode===3){drawCozyBG();return;}
    const sky=cx.createLinearGradient(0,0,0,H*.5);
    sky.addColorStop(0,'#040810');sky.addColorStop(.5,'#0A1040');sky.addColorStop(1,'#1A2F7A');
    cx.fillStyle=sky;cx.fillRect(0,0,W,H*.5);
    STARS.forEach(st=>{cx.globalAlpha=.38+.34*Math.sin(T*1.7+st.ph);cx.fillStyle='#fff';cx.beginPath();cx.arc(st.x*W,st.y*H*.5,st.r,0,Math.PI*2);cx.fill();});
    cx.globalAlpha=1;
    cx.fillStyle='rgba(254,243,199,.88)';cx.beginPath();cx.arc(W*.9,H*.13,W*.018,0,Math.PI*2);cx.fill();
    cx.fillStyle='#0A1040';cx.beginPath();cx.arc(W*.913,H*.104,W*.013,0,Math.PI*2);cx.fill();
    const gnd=cx.createLinearGradient(0,H*.5,0,H);
    gnd.addColorStop(0,'#14532D');gnd.addColorStop(.35,'#166534');gnd.addColorStop(1,'#0F2E1A');
    cx.fillStyle=gnd;cx.fillRect(0,H*.5,W,H*.5);
    cx.fillStyle='rgba(74,222,128,.32)';cx.fillRect(0,H*.5,W,3);
    for(let i=0;i<14;i++){const gx=W*(i/14+.03);cx.strokeStyle='rgba(74,222,128,.5)';cx.lineWidth=1.4;cx.beginPath();cx.moveTo(gx,H*.5);cx.lineTo(gx-2,H*.5-5);cx.moveTo(gx+3,H*.5);cx.lineTo(gx+4,H*.5-7);cx.stroke();}
  }
  function drawCozyBG(){
    const sky=cx.createLinearGradient(0,0,0,H*.5);sky.addColorStop(0,'#BAE6FD');sky.addColorStop(1,'#FDE68A');cx.fillStyle=sky;cx.fillRect(0,0,W,H*.5);
    cx.fillStyle='#FCD34D';cx.beginPath();cx.arc(W*.12,H*.16,W*.028,0,Math.PI*2);cx.fill();
    [[.3,.1,.08],[.55,.07,.065],[.78,.14,.055]].forEach(([ex,cy,r],i)=>{const bob=Math.sin(T*.42+i)*.007;cx.fillStyle='rgba(255,255,255,.88)';[[0,0,1],[r*.8,r*.22,.7],[-.6*r,r*.28,.6]].forEach(([dx,dy,sc])=>{cx.beginPath();cx.arc((ex+dx)*W,(cy+bob+dy)*H,r*sc*W,0,Math.PI*2);cx.fill();});});
    const gnd=cx.createLinearGradient(0,H*.5,0,H);gnd.addColorStop(0,'#86EFAC');gnd.addColorStop(.4,'#4ADE80');gnd.addColorStop(1,'#16A34A');cx.fillStyle=gnd;cx.fillRect(0,H*.5,W,H*.5);
    const pg=cx.createLinearGradient(0,H*.5,0,H);pg.addColorStop(0,'#D4A96A');pg.addColorStop(1,'#A0834C');cx.fillStyle=pg;cx.beginPath();cx.moveTo(W*.07,H*.5);cx.lineTo(W*.93,H*.5);cx.lineTo(W*.93+W*.08,H);cx.lineTo(W*.07-W*.08,H);cx.closePath();cx.fill();
    cx.strokeStyle='rgba(255,255,255,.34)';cx.lineWidth=2;cx.setLineDash([8,10]);cx.beginPath();cx.moveTo(W*.5,H*.5);cx.lineTo(W*.5,H);cx.stroke();cx.setLineDash([]);
    [[.03,.47],[.97,.47],[.2,.44],[.8,.44]].forEach(([tx,ty],i)=>{const sw=Math.sin(T*1.1+i)*.016;cx.fillStyle='#6B4226';cx.fillRect(tx*W-2,ty*H,4,H*.06);cx.save();cx.translate(tx*W,ty*H);cx.rotate(sw);cx.fillStyle=['#16A34A','#14532D'][i%2];cx.beginPath();cx.moveTo(0,0);cx.lineTo(-W*.022,-H*.07);cx.lineTo(W*.022,-H*.07);cx.closePath();cx.fill();cx.beginPath();cx.moveTo(0,-H*.055);cx.lineTo(-W*.016,-H*.11);cx.lineTo(W*.016,-H*.11);cx.closePath();cx.fill();cx.restore();});
  }

  /* ── CROWD ── */
  const CRD=(()=>{
    const sk=['#C68642','#D4A07A','#8B5E3C','#E8C39E','#B5713A'],hr=['#1C0700','#3B1F0A','#111','#2D1B0A'];
    const lc=['#EF4444','#FBBF24','#06B6D4','#8B5CF6','#F97316','#EC4899','#10B981','#84CC16','#F43F5E','#A78BFA'];
    const rc=['#3B82F6','#6366F1','#10B981','#F59E0B','#EF4444','#06B6D4','#8B5CF6','#4ADE80','#60A5FA','#818CF8'];
    const L=[],R=[];
    for(let i=0;i<14;i++)L.push({x:.016+i*.046,h:.17+Math.sin(i*2.4)*.038,c:lc[i%lc.length],s:sk[i%5],r:hr[i%4],p:i*.72,sg:i%4===0});
    for(let i=0;i<14;i++)R.push({x:.61+i*.027,h:.17+Math.sin(i*2)*.038,c:rc[i%rc.length],s:sk[(i+2)%5],r:hr[(i+1)%4],p:i*.88+1,sg:i%4===1});
    return{L,R};
  })();
  function drawCrowd(){
    const ci=Math.max(0,1-(T-snap.cheerTime)*.85);
    function p(sx,hf,col,sk,hr,ph,side){
      const ex=(snap.lastCheer===side)&&ci>.12;
      const bob=Math.sin(T*(2.6+ex*2.2)+ph)*(ex?.022:.012)*H;
      const ch=hf*H,cy=H*.5-ch+bob,cx2=sx*W,au=Math.sin(T*(3.2+ex*2)+ph*1.5)>.1||ex;
      cx.fillStyle='rgba(0,0,0,.17)';cx.beginPath();cx.ellipse(cx2,H*.5+2,ch*.23,4,0,0,Math.PI*2);cx.fill();
      cx.fillStyle=col;cx.globalAlpha=.76+ci*.12;cx.beginPath();cx.roundRect(cx2-ch*.18,cy,ch*.36,ch*.72,4);cx.fill();
      cx.fillStyle='rgba(255,255,255,.13)';cx.beginPath();cx.roundRect(cx2-ch*.13,cy,ch*.26,ch*.16,3);cx.fill();cx.globalAlpha=1;
      cx.fillStyle=sk;cx.beginPath();cx.arc(cx2,cy-ch*.16,ch*.15,0,Math.PI*2);cx.fill();
      cx.fillStyle=hr;cx.beginPath();cx.arc(cx2,cy-ch*.26,ch*.12,Math.PI,0,false);cx.fill();
      if(ex){cx.fillStyle='white';cx.beginPath();cx.ellipse(cx2-ch*.046,cy-ch*.13,ch*.046,ch*.046,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(cx2+ch*.046,cy-ch*.13,ch*.046,ch*.046,0,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(cx2-ch*.046,cy-ch*.13,ch*.022,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(cx2+ch*.046,cy-ch*.13,ch*.022,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(cx2,cy-ch*.065,ch*.034,.1,Math.PI-.1);cx.fill();}
      else{cx.fillStyle='white';cx.beginPath();cx.ellipse(cx2-ch*.04,cy-ch*.13,ch*.034,ch*.034,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(cx2+ch*.04,cy-ch*.13,ch*.034,ch*.034,0,0,Math.PI*2);cx.fill();cx.fillStyle='#333';cx.beginPath();cx.arc(cx2-ch*.04,cy-ch*.13,ch*.016,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(cx2+ch*.04,cy-ch*.13,ch*.016,0,Math.PI*2);cx.fill();}
      cx.strokeStyle=col;cx.lineWidth=Math.max(1.5,ch*.065);cx.lineCap='round';cx.globalAlpha=.7+ci*.18;
      if(au){cx.beginPath();cx.moveTo(cx2-ch*.18,cy+ch*.2);cx.lineTo(cx2-ch*.32,cy-ch*.02);cx.stroke();cx.beginPath();cx.moveTo(cx2+ch*.18,cy+ch*.2);cx.lineTo(cx2+ch*.32,cy-ch*.02);cx.stroke();}
      else{cx.beginPath();cx.moveTo(cx2-ch*.18,cy+ch*.2);cx.lineTo(cx2-ch*.28,cy+ch*.4);cx.stroke();cx.beginPath();cx.moveTo(cx2+ch*.18,cy+ch*.2);cx.lineTo(cx2+ch*.28,cy+ch*.4);cx.stroke();}
      cx.globalAlpha=1;
      cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(cx2-ch*.13,cy+ch*.72,ch*.1,ch*.17,2);cx.fill();cx.beginPath();cx.roundRect(cx2+ch*.03,cy+ch*.72,ch*.1,ch*.17,2);cx.fill();
    }
    CRD.L.forEach(pt=>p(pt.x,pt.h,pt.c,pt.s,pt.r,pt.p,'left'));
    CRD.R.forEach(pt=>p(pt.x,pt.h,pt.c,pt.s,pt.r,pt.p,'right'));
  }

  /* ── FLAG POLE ── */
  function drawFlag(fx){
    const py=H*.5,ph=H*.27,wave=Math.sin(T*3.8)*.065;
    cx.fillStyle='rgba(0,0,0,.2)';cx.beginPath();cx.roundRect(fx+2,py-ph,4,ph,2);cx.fill();
    cx.strokeStyle='#92400E';cx.lineWidth=4;cx.lineCap='round';cx.beginPath();cx.moveTo(fx,py);cx.lineTo(fx,py-ph);cx.stroke();
    const fw=W*.048,fh=H*.1;
    cx.save();cx.translate(fx,py-ph);
    cx.fillStyle='#DC2626';cx.beginPath();cx.moveTo(0,0);cx.quadraticCurveTo(fw*.5+wave*W,fh*.1,fw,0);cx.quadraticCurveTo(fw*.5+wave*W,fh*.6,fw,fh*.5);cx.lineTo(0,fh*.5);cx.closePath();cx.fill();
    cx.fillStyle='#fff';cx.beginPath();cx.moveTo(0,fh*.5);cx.quadraticCurveTo(fw*.5+wave*W,fh*.62,fw,fh*.5);cx.quadraticCurveTo(fw*.5+wave*W,fh*1.1,fw,fh);cx.lineTo(0,fh);cx.closePath();cx.fill();
    cx.restore();
  }

  /* ── DUST ── */
  function drawDust(x,y,prog){
    if(prog<.08)return;
    for(let i=0;i<7;i++){const ang=(i/7)*Math.PI*2+prog*.4,dist=prog*H*.055*(1+i*.28);cx.globalAlpha=(1-prog)*.36;cx.fillStyle='#D1D5DB';cx.beginPath();cx.arc(x+Math.cos(ang)*dist,y+Math.sin(ang)*dist*.4,H*.021*(1-prog*.5),0,Math.PI*2);cx.fill();}
    cx.globalAlpha=1;
  }

  /* ── CHAR SCALE ── */
  function S(baseH){return Math.max(.3,Math.min(1,H*baseH/100));}

  /* ── DRAW HUMAN (front-facing, mode 1) ── */
  function drawHuman(x,y,tc,dc,sk,hr,flip,state,idx){
    const u=S(.9);if(u<.1)return;
    cx.save();cx.translate(x,y);if(flip)cx.scale(-1,1);
    const pull=state==='pull',fall=state==='fall',win=state==='win',corr=state==='correct',wrong=state==='wrong';
    const lean=pull?Math.sin(T*4.2+idx)*.055:0;
    const armA=pull?Math.abs(Math.sin(T*4.2+idx)):0;
    const legA=pull?Math.sin(T*4.2+idx)*.22:0;
    // tug forward when pulling
    const tugX=pull?Math.sin(T*4.2+idx)*.012*W:.0;
    cx.translate(tugX,0);
    if(fall)cx.rotate(snap.fallProgress*1.45);else cx.rotate(lean);
    if(!fall){cx.fillStyle='rgba(0,0,0,.2)';cx.beginPath();cx.ellipse(0,96*u,22*u,6*u,0,0,Math.PI*2);cx.fill();}
    // legs
    cx.save();cx.translate(-7*u,76*u);cx.rotate(-legA);cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-6*u,0,12*u,22*u,3*u);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-7*u,19*u,16*u,8*u,5*u);cx.fill();cx.restore();
    cx.save();cx.translate(7*u,76*u);cx.rotate(legA);cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-5*u,0,12*u,22*u,3*u);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-6*u,19*u,15*u,8*u,5*u);cx.fill();cx.restore();
    // body
    cx.save();cx.translate(0,46*u);cx.fillStyle=dc;cx.beginPath();cx.roundRect(-20*u,-2*u,40*u,32*u,6*u);cx.fill();cx.fillStyle=tc;cx.beginPath();cx.roundRect(-19*u,0,38*u,29*u,5*u);cx.fill();cx.fillStyle='rgba(255,255,255,.15)';cx.beginPath();cx.roundRect(-17*u,0,34*u,8*u,4*u);cx.fill();cx.fillStyle='rgba(255,255,255,.22)';cx.beginPath();cx.roundRect(-6*u,9*u,12*u,12*u,3*u);cx.fill();cx.fillStyle='rgba(255,255,255,.82)';cx.font=`bold ${11*u}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText(idx+1,0,15*u);cx.fillStyle='rgba(0,0,0,.28)';cx.fillRect(-19*u,26*u,38*u,4*u);cx.fillStyle='#D97706';cx.beginPath();cx.roundRect(-5*u,26*u,10*u,5*u,2*u);cx.fill();cx.restore();
    // arms — pulling stance (leaning back, arms forward gripping rope)
    const rA=(-36-armA*28)*(Math.PI/180);cx.save();cx.translate(19*u,49*u);cx.rotate(rA);cx.fillStyle=tc;cx.beginPath();cx.roundRect(-5*u,0,11*u,18*u,4*u);cx.fill();cx.fillStyle=sk;cx.beginPath();cx.roundRect(-5*u,13*u,11*u,10*u,4*u);cx.fill();cx.restore();
    const lA=(26+armA*14)*(Math.PI/180);cx.save();cx.translate(-19*u,51*u);cx.rotate(lA);cx.fillStyle=tc;cx.beginPath();cx.roundRect(-5*u,0,11*u,16*u,4*u);cx.fill();cx.fillStyle=sk;cx.beginPath();cx.roundRect(-5*u,11*u,11*u,9*u,4*u);cx.fill();cx.restore();
    // head
    cx.save();cx.translate(0,2*u);cx.fillStyle=sk;cx.beginPath();cx.roundRect(-6*u,40*u,12*u,8*u,2*u);cx.fill();
    const hd=sk==='#C68642'?'#A0673A':(sk==='#D4A07A'?'#B8825C':'#8B5E3C');
    cx.fillStyle=hd;cx.beginPath();cx.roundRect(-20*u,2*u,40*u,38*u,7*u);cx.fill();cx.fillStyle=sk;cx.beginPath();cx.roundRect(-19*u,4*u,38*u,36*u,6*u);cx.fill();cx.fillStyle=hr;cx.beginPath();cx.roundRect(-19*u,4*u,38*u,10*u,6*u);cx.fill();cx.beginPath();cx.roundRect(-20*u,6*u,5*u,14*u,3*u);cx.fill();cx.beginPath();cx.roundRect(15*u,6*u,5*u,14*u,3*u);cx.fill();
    const bf=pull?.07:(wrong?.11:0),br=(corr||win)?.04:0;
    cx.fillStyle=hr==='#1C0700'?'#3B1F0A':'#2D1B0A';
    cx.save();cx.translate(-11*u,17*u);cx.rotate(bf-br);cx.beginPath();cx.roundRect(-5*u,-2*u,11*u,3.5*u,2*u);cx.fill();cx.restore();
    cx.save();cx.translate(11*u,17*u);cx.rotate(-(bf-br));cx.beginPath();cx.roundRect(-5*u,-2*u,11*u,3.5*u,2*u);cx.fill();cx.restore();
    if(fall){cx.strokeStyle='#111';cx.lineWidth=2*u;cx.beginPath();cx.moveTo(-15*u,19*u);cx.lineTo(-9*u,26*u);cx.moveTo(-9*u,19*u);cx.lineTo(-15*u,26*u);cx.stroke();cx.beginPath();cx.moveTo(4*u,19*u);cx.lineTo(10*u,26*u);cx.moveTo(10*u,19*u);cx.lineTo(4*u,26*u);cx.stroke();}
    else{cx.fillStyle='white';cx.beginPath();cx.roundRect(-16*u,19*u,11*u,10*u,3*u);cx.fill();cx.beginPath();cx.roundRect(5*u,19*u,11*u,10*u,3*u);cx.fill();const pw=corr?5.5:4;cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(-10*u,24*u,pw*.56*u,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(10*u,24*u,pw*.56*u,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(-10*u,24*u,(wrong?3:2.3)*u,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(10*u,24*u,(wrong?3:2.3)*u,0,Math.PI*2);cx.fill();cx.fillStyle='rgba(255,255,255,.8)';cx.beginPath();cx.arc(-9*u,22*u,1.2*u,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(11*u,22*u,1.2*u,0,Math.PI*2);cx.fill();}
    cx.strokeStyle='rgba(0,0,0,.17)';cx.lineWidth=1.4*u;cx.lineCap='round';cx.beginPath();cx.moveTo(-3*u,28*u);cx.lineTo(-4*u,33*u);cx.lineTo(4*u,33*u);cx.stroke();
    cx.strokeStyle='rgba(0,0,0,.33)';cx.lineWidth=2*u;cx.lineCap='round';
    if(pull){cx.beginPath();cx.moveTo(-8*u,37*u);cx.quadraticCurveTo(0,39*u,8*u,37*u);cx.stroke();cx.fillStyle='rgba(255,255,255,.44)';cx.beginPath();cx.roundRect(-6*u,36*u,12*u,3*u,2*u);cx.fill();}
    else if(win||corr){cx.beginPath();cx.arc(0,35*u,7*u,.2,Math.PI-.2,false);cx.stroke();}
    else if(wrong||fall){cx.beginPath();cx.arc(0,39*u,5*u,Math.PI-.18,.18+Math.PI,false);cx.stroke();}
    else{cx.beginPath();cx.moveTo(-6*u,36*u);cx.quadraticCurveTo(0,38*u,6*u,36*u);cx.stroke();}
    cx.fillStyle='rgba(220,100,80,.14)';cx.beginPath();cx.ellipse(-16*u,31*u,5*u,3.5*u,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(16*u,31*u,5*u,3.5*u,0,0,Math.PI*2);cx.fill();
    if(win){cx.fillStyle=sk;cx.beginPath();cx.arc(24*u,-22*u,7*u,0,Math.PI*2);cx.fill();cx.fillStyle=tc;cx.beginPath();cx.roundRect(18*u,-17*u,11*u,13*u,3*u);cx.fill();cx.strokeStyle='#FBBF24';cx.lineWidth=2*u;cx.beginPath();cx.arc(24*u,-24*u,11*u,.2,-.5);cx.stroke();}
    cx.restore();cx.restore();
  }

  /* ── DRAW HUMAN SIDE (mode 2) ── */
  function drawHumanSide(x,y,tc,dc,sk,hr,faceRight,state,idx){
    const u=S(.7);if(u<.1)return;
    cx.save();cx.translate(x,y);if(!faceRight)cx.scale(-1,1);
    const pull=state==='pull',fall=state==='fall',win=state==='win',corr=state==='correct',wrong=state==='wrong';
    const legA=pull?Math.sin(T*4.2+idx)*.23:0;
    const tugX=pull?Math.cos(T*4.2+idx)*.008*W:0;cx.translate(tugX,0);
    if(fall){const fa=snap.fallProgress*1.5;cx.rotate(faceRight?fa:-fa);}
    else if(pull){cx.rotate(-Math.abs(Math.sin(T*4.2+idx))*.09);}
    cx.fillStyle='rgba(0,0,0,.16)';cx.beginPath();cx.ellipse(0,5*u,17*u,4*u,0,0,Math.PI*2);cx.fill();
    cx.save();cx.translate(-4*u,-22*u);cx.rotate(-legA);cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-5*u,0,10*u,23*u,3*u);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-3*u,20*u,15*u,8*u,4*u);cx.fill();cx.restore();
    cx.save();cx.translate(4*u,-22*u);cx.rotate(legA*.8);cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-4*u,0,10*u,23*u,3*u);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.roundRect(-2*u,20*u,14*u,8*u,4*u);cx.fill();cx.restore();
    cx.save();cx.translate(0,-25*u);cx.rotate(-Math.abs(Math.sin(T*4.2+idx))*(pull?.055:0));cx.fillStyle=dc;cx.beginPath();cx.roundRect(-14*u,-34*u,28*u,36*u,6*u);cx.fill();cx.fillStyle=tc;cx.beginPath();cx.roundRect(-13*u,-32*u,26*u,33*u,5*u);cx.fill();cx.fillStyle='rgba(255,255,255,.13)';cx.beginPath();cx.roundRect(-12*u,-32*u,24*u,8*u,3*u);cx.fill();cx.fillStyle='rgba(255,255,255,.2)';cx.beginPath();cx.roundRect(-5*u,-22*u,10*u,10*u,3*u);cx.fill();cx.fillStyle='rgba(255,255,255,.75)';cx.font=`bold ${9*u}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText(idx+1,0,-17*u);cx.fillStyle='rgba(0,0,0,.26)';cx.fillRect(-13*u,-4*u,26*u,5*u);cx.fillStyle='#D97706';cx.beginPath();cx.roundRect(-4*u,-4*u,8*u,5*u,2*u);cx.fill();cx.restore();
    cx.save();cx.translate(12*u,-52*u);cx.rotate((-36-Math.abs(Math.sin(T*4.2+idx))*30)*(Math.PI/180));cx.fillStyle=tc;cx.beginPath();cx.roundRect(-4*u,0,10*u,20*u,4*u);cx.fill();cx.fillStyle=sk;cx.beginPath();cx.roundRect(-4*u,15*u,10*u,10*u,4*u);cx.fill();cx.restore();
    cx.save();cx.translate(-10*u,-50*u);cx.rotate(26*(Math.PI/180));cx.fillStyle=tc;cx.beginPath();cx.roundRect(-4*u,0,10*u,18*u,4*u);cx.fill();cx.fillStyle=sk;cx.beginPath();cx.roundRect(-4*u,13*u,10*u,9*u,4*u);cx.fill();cx.restore();
    cx.save();cx.translate(2*u,-72*u);const hd=sk==='#C68642'?'#A0673A':'#B8825C';cx.fillStyle=hd;cx.beginPath();cx.roundRect(-13*u,-2*u,27*u,26*u,6*u);cx.fill();cx.fillStyle=sk;cx.beginPath();cx.roundRect(-12*u,0,25*u,24*u,5*u);cx.fill();cx.fillStyle=hr;cx.beginPath();cx.roundRect(-12*u,0,25*u,7*u,5*u);cx.fill();
    if(fall){cx.strokeStyle='#111';cx.lineWidth=1.8*u;cx.beginPath();cx.moveTo(5*u,7*u);cx.lineTo(12*u,15*u);cx.moveTo(12*u,7*u);cx.lineTo(5*u,15*u);cx.stroke();}
    else{cx.fillStyle='white';cx.beginPath();cx.roundRect(4*u,7*u,11*u,8*u,3*u);cx.fill();cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(10*u,11*u,(corr||win?5:4)*u,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(10*u,11*u,2.2*u,0,Math.PI*2);cx.fill();cx.fillStyle='rgba(255,255,255,.74)';cx.beginPath();cx.arc(11.5*u,9.5*u,1.1*u,0,Math.PI*2);cx.fill();}
    cx.strokeStyle='rgba(0,0,0,.28)';cx.lineWidth=1.5*u;cx.lineCap='round';
    if(pull){cx.beginPath();cx.moveTo(4*u,19*u);cx.lineTo(14*u,20*u);cx.stroke();}
    else if(win||corr){cx.beginPath();cx.arc(9*u,19*u,5*u,.3,Math.PI-.3,false);cx.stroke();}
    else if(fall){cx.beginPath();cx.arc(9*u,22*u,4*u,Math.PI-.2,.2+Math.PI,false);cx.stroke();}
    else{cx.beginPath();cx.moveTo(4*u,19*u);cx.quadraticCurveTo(9*u,21*u,14*u,19*u);cx.stroke();}
    cx.restore();cx.restore();
  }

  /* ── COZY WALKER ── */
  function drawWalker(x,y){
    const u=S(.55);if(u<.1)return;cx.save();cx.translate(x,y);
    const wk=Math.sin(T*3.8)*.18,bo=Math.abs(Math.sin(T*3.8))*.04*H*.04;cx.translate(0,-bo);
    cx.fillStyle='rgba(0,0,0,.13)';cx.beginPath();cx.ellipse(0,4*u,13*u,4*u,0,0,Math.PI*2);cx.fill();
    cx.save();cx.translate(-4*u,-18*u);cx.rotate(wk);cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-4*u,0,8*u,18*u,3*u);cx.fill();cx.restore();
    cx.save();cx.translate(4*u,-18*u);cx.rotate(-wk);cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-4*u,0,8*u,18*u,3*u);cx.fill();cx.restore();
    cx.fillStyle='#111';cx.beginPath();cx.ellipse(-4*u,2*u,6.5*u,3.5*u,wk,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(4*u,2*u,6.5*u,3.5*u,-wk,0,Math.PI*2);cx.fill();
    cx.fillStyle='#10B981';cx.beginPath();cx.roundRect(-11*u,-37*u,22*u,21*u,5*u);cx.fill();cx.fillStyle='rgba(255,255,255,.13)';cx.beginPath();cx.roundRect(-9*u,-37*u,18*u,6*u,3*u);cx.fill();
    cx.save();cx.translate(-11*u,-30*u);cx.rotate(-wk*.5);cx.fillStyle='#10B981';cx.beginPath();cx.roundRect(-3*u,0,7*u,13*u,3*u);cx.fill();cx.restore();
    cx.save();cx.translate(11*u,-30*u);cx.rotate(wk*.5);cx.fillStyle='#10B981';cx.beginPath();cx.roundRect(-3*u,0,7*u,13*u,3*u);cx.fill();cx.restore();
    const cs=snap.cozy.skin,hd=cs==='#C68642'?'#A0673A':'#B8825C';cx.fillStyle=hd;cx.beginPath();cx.roundRect(-12*u,-60*u,24*u,24*u,6*u);cx.fill();cx.fillStyle=cs;cx.beginPath();cx.roundRect(-11*u,-58*u,22*u,22*u,5*u);cx.fill();cx.fillStyle=snap.cozy.hair;cx.beginPath();cx.roundRect(-11*u,-58*u,22*u,7*u,5*u);cx.fill();
    cx.fillStyle='white';cx.beginPath();cx.ellipse(-5*u,-51*u,3.5*u,4*u,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(5*u,-51*u,3.5*u,4*u,0,0,Math.PI*2);cx.fill();cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(-5*u,-51*u,2.2*u,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(5*u,-51*u,2.2*u,0,Math.PI*2);cx.fill();
    cx.strokeStyle='rgba(0,0,0,.3)';cx.lineWidth=1.5*u;cx.lineCap='round';cx.beginPath();cx.arc(0,-45*u,4.5*u,.2,Math.PI-.2,false);cx.stroke();cx.restore();
  }

  /* ── MAIN DRAW ── */
  function draw(){
    cx.clearRect(0,0,W,H);
    drawBG();
    if(snap.mode===3){drawM3();return;}
    drawCrowd();
    const diff=snap.mode===1?(snap.p1.score-snap.p2.score):(snap.t1.score-snap.t2.score);
    const mx=snap.mode===1?20:8;
    const flagFx=W*.5+Math.max(-W*.28,Math.min(W*.28,(diff/mx)*W*.24));
    drawFlag(flagFx);
    ropePulse=Math.sin(T*8)*.5+.5;
    if(snap.mode===1)drawM1();else drawM2();
  }

  const SK=['#C68642','#D4A07A','#8B5E3C'],HR=['#1C0700','#3B1F0A','#2D1B0A'];

  function drawM1(){
    const p1=snap.p1,p2=snap.p2;
    const mv=W*.3;
    const x1=W*.15+(p1.score/20)*mv,x2=W*.85-(p2.score/20)*mv;
    const gndY=H*.84;
    const charH=H*.38;
    // update physics rope between character hands
    const p1state=snap.fallenSide==='left'?'fall':(p1.state||'pull');
    const p2state=snap.fallenSide==='right'?'fall':(p2.state||'pull');
    // rope hand positions
    const h1x=x1+(p1state==='fall'?0:16),h1y=gndY-charH*.62;
    const h2x=x2-(p2state==='fall'?0:16),h2y=gndY-charH*.62;
    updateRope(h1x,h1y,h2x,h2y);
    drawRealRope();
    drawHuman(x1,gndY-charH,'#F97316','#C2410C',SK[0],HR[0],false,p1state,0);
    if(snap.fallenSide==='left')drawDust(x1,gndY,snap.fallProgress);
    drawHuman(x2,gndY-charH,'#1E40AF','#1E3A8A',SK[1],HR[1],true,p2state,0);
    if(snap.fallenSide==='right')drawDust(x2,gndY,snap.fallProgress);
    cx.textAlign='center';cx.textBaseline='middle';cx.font=`bold ${H*.09}px Bebas Neue,sans-serif`;
    cx.fillStyle='rgba(249,115,22,.38)';cx.fillText(p1.score,W*.07,H*.17);
    cx.fillStyle='rgba(96,165,250,.38)';cx.fillText(p2.score,W*.93,H*.17);
  }

  function drawM2(){
    const t1=snap.t1,t2=snap.t2;
    const n1=Math.max(1,t1.players.length),n2=Math.max(1,t2.players.length);
    const gndY=H*.92;
    const aW1=Math.min(W*.44,n1*W*.09),aW2=Math.min(W*.44,n2*W*.09);
    const sp1=aW1/n1,sp2=aW2/n2;
    const b1=W*.03,b2=W*.97-aW2;
    const lx=b1+n1*sp1+8,rx=b2-8;
    const ry=gndY-H*.2;
    updateRope(lx,ry,rx,ry);
    drawRealRope();
    for(let i=0;i<n1;i++){const px=b1+(i+.5)*sp1;const isAct=!snap.over&&t1.pi===i;const st=snap.fallenSide==='left'?'fall':(isAct?(t1.state||'pull'):'idle');drawHumanSide(px,gndY,'#F97316','#C2410C',SK[i%3],HR[i%3],true,st,i);}
    for(let i=0;i<n2;i++){const px=b2+(i+.5)*sp2;const isAct=!snap.over&&t2.pi===i;const st=snap.fallenSide==='right'?'fall':(isAct?(t2.state||'pull'):'idle');drawHumanSide(px,gndY,'#1E40AF','#1E3A8A',SK[(i+1)%3],HR[(i+1)%3],false,st,i);}
    if(snap.fallenSide==='left')drawDust(W*.12,gndY-H*.1,snap.fallProgress);
    if(snap.fallenSide==='right')drawDust(W*.88,gndY-H*.1,snap.fallProgress);
    cx.font=`bold ${H*.09}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.fillStyle='rgba(249,115,22,.38)';cx.fillText(t1.score,W*.05,H*.17);cx.fillStyle='rgba(96,165,250,.38)';cx.fillText(t2.score,W*.95,H*.17);
  }

  function drawM3(){
    const co=snap.cozy,prog=Math.min(1,(co.correct||0)/(co.total||20));
    const pY=H*.62,pS=W*.08,pE=W*.84,charX=pS+(pE-pS)*prog;
    [.25,.5,.75,1].forEach((wp,i)=>{const wx=pS+(pE-pS)*wp;cx.fillStyle=prog>=wp?'rgba(16,185,129,.55)':'rgba(255,255,255,.22)';cx.beginPath();cx.arc(wx,pY,7,0,Math.PI*2);cx.fill();cx.fillStyle='rgba(255,255,255,.75)';cx.font=`bold ${H*.03}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText((i+1)*5,wx,pY);});
    if(prog>0){cx.strokeStyle='rgba(16,185,129,.55)';cx.lineWidth=5;cx.lineCap='round';cx.beginPath();cx.moveTo(pS,pY);cx.lineTo(charX,pY);cx.stroke();}
    const fx=pE+W*.04;cx.fillStyle='#78350F';cx.beginPath();cx.roundRect(fx,pY-H*.16,4,H*.16,2);cx.fill();cx.fillStyle='#DC2626';cx.fillRect(fx,pY-H*.16,W*.038,H*.07);cx.fillStyle='#fff';cx.fillRect(fx,pY-H*.09,W*.038,H*.06);cx.fillStyle='#1F2937';cx.font=`bold ${H*.022}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText('FINISH',fx+W*.019,pY-H*.13);
    cx.fillStyle='rgba(255,255,255,.94)';cx.beginPath();cx.roundRect(charX-22,pY-H*.27,44,20,10);cx.fill();cx.fillStyle='#166534';cx.font=`bold ${H*.029}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';cx.fillText(`${co.correct||0}/${co.total||20}`,charX,pY-H*.257);
    drawWalker(charX,pY);
    if(prog>=1){for(let i=0;i<8;i++){const a=T*2+i*(Math.PI*2/8),d=H*.04;cx.fillStyle=['#F59E0B','#EF4444','#10B981','#6366F1'][i%4];cx.globalAlpha=.74;cx.beginPath();cx.arc(charX+Math.cos(a)*d,pY-H*.18+Math.sin(a)*d*.5,4,0,Math.PI*2);cx.fill();}cx.globalAlpha=1;}
  }

  return{init,resize,startLoop,stopLoop,setSnap};
})();

/* ══════════════════════════════════════════
   HOME PARTICLES
══════════════════════════════════════════ */
(()=>{
  let cv,c2,W=0,H=0,ps=[];
  function mk(){return{x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.4,vx:(Math.random()-.5)*.42,vy:(Math.random()-.5)*.38,col:['#DC2626','#F59E0B','#fff','#F97316','#60A5FA'][Math.floor(Math.random()*5)],a:Math.random()*.48+.1};}
  function rsz(){if(!cv)return;W=cv.parentElement?cv.parentElement.offsetWidth:innerWidth;H=cv.parentElement?cv.parentElement.offsetHeight:innerHeight;const d=Math.min(devicePixelRatio||1,2);cv.width=W*d;cv.height=H*d;cv.style.width=W+'px';cv.style.height=H+'px';c2.scale(d,d);}
  window.addEventListener('load',()=>{cv=document.getElementById('home-canvas');if(!cv)return;c2=cv.getContext('2d');rsz();ps=Array.from({length:50},mk);(function loop(){c2.clearRect(0,0,W,H);ps.forEach(p=>{c2.globalAlpha=p.a;c2.fillStyle=p.col;c2.beginPath();c2.arc(p.x,p.y,p.r,0,Math.PI*2);c2.fill();p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W;if(p.x>W)p.x=0;if(p.y<0)p.y=H;if(p.y>H)p.y=0;});c2.globalAlpha=1;requestAnimationFrame(loop);})();});
  window.addEventListener('resize',()=>{if(cv&&c2){c2.setTransform(1,0,0,1,0,0);rsz();}});
})();

window.addEventListener('load',()=>{
  const el=document.getElementById('home-garuda');if(!el)return;
  el.innerHTML=`<svg viewBox="0 0 110 100" fill="none" style="width:100%;height:100%"><circle cx="55" cy="38" r="16" fill="#DC2626"/><ellipse cx="62" cy="33" rx="4.5" ry="6" fill="#991B1B"/><circle cx="61" cy="33" r="3.2" fill="white"/><circle cx="62.5" cy="33" r="1.8" fill="#111"/><circle cx="62" cy="32" r="1" fill="white" opacity=".7"/><path d="M55 57Q50 76 46 91" stroke="#DC2626" stroke-width="5.5" stroke-linecap="round" fill="none"/><path d="M55 57Q60 76 64 91" stroke="#DC2626" stroke-width="5.5" stroke-linecap="round" fill="none"/><path d="M55 55L6 13L19 36L2 24L24 60L44 46L55 55Z" fill="#DC2626"/><path d="M55 55L104 13L91 36L108 24L86 60L66 46L55 55Z" fill="#DC2626"/><rect x="49" y="61" width="12" height="22" rx="4" fill="#DC2626"/></svg>`;
});

/* ══════════════════════════════════════════
   CONFETTI
══════════════════════════════════════════ */
const Confetti=(()=>{
  let raf=null;
  function start(wc){const cv=document.getElementById('cf-canvas');if(!cv)return;const ct=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;const cols=[wc,'#F59E0B','#10B981','#DC2626','#F97316','#60A5FA','#FBBF24','#EF4444','#A78BFA'];const ps=Array.from({length:170},()=>({x:Math.random()*cv.width,y:Math.random()*-cv.height,w:Math.random()*13+5,h:Math.random()*5+3,r:Math.random()*Math.PI*2,rs:Math.random()*.13-.065,vx:Math.random()*2.2-1.1,vy:Math.random()*4.8+2,c:cols[Math.floor(Math.random()*cols.length)],sh:Math.random()>.5}));stop();(function loop(){ct.clearRect(0,0,cv.width,cv.height);ps.forEach(p=>{ct.save();ct.translate(p.x,p.y);ct.rotate(p.r);ct.fillStyle=p.c;ct.globalAlpha=.88;p.sh?(ct.beginPath(),ct.arc(0,0,p.w/3,0,Math.PI*2),ct.fill()):ct.fillRect(-p.w/2,-p.h/2,p.w,p.h);ct.restore();p.x+=p.vx;p.y+=p.vy;p.r+=p.rs;if(p.y>cv.height+20){p.y=-20;p.x=Math.random()*cv.width;}});raf=requestAnimationFrame(loop);})();}
  function stop(){if(raf){cancelAnimationFrame(raf);raf=null;}const cv=document.getElementById('cf-canvas');if(cv)cv.getContext('2d').clearRect(0,0,cv.width,cv.height);}
  return{start,stop};
})();

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function prepQ(){return shuffle(QDB).slice(0,20).map(q=>{const ans=q.o[q.a];const opts=shuffle([...q.o]);return{q:q.q,opts,ai:opts.indexOf(ans),exp:q.exp,id:Math.random().toString(36).slice(2),_done:false};});}
function floatLbl(el,text,color){if(!el)return;const r=el.getBoundingClientRect();const d=document.createElement('div');d.className='float-lbl';d.textContent=text;d.style.cssText=`left:${r.left+r.width/2-20}px;top:${r.top+r.height*.2}px;color:${color}`;document.body.appendChild(d);setTimeout(()=>d.remove(),1100);}
function flashPanel(side,type){const fl=document.getElementById('pf-'+side);if(!fl)return;fl.className='panel-flash fl-'+type;setTimeout(()=>{if(fl)fl.className='panel-flash';},660);}
function fmtTime(s){const m=Math.floor(s/60),sec=s%60;return m>0?`${m}:${sec.toString().padStart(2,'0')}`:`${sec}s`;}

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
const App=(()=>{
  let cur='s-home',mode=1,G={},qHistory=[],paused=false;
  let _tc=[3,3],setupPhase=1,cozyNextCb=null;
  const TOTAL_TIME=300; // 5 minutes = 300 seconds
  const DELAY=1500;
  const PEN_SEC=15; // wrong answer penalty in seconds

  /* ── NAVIGATE ── */
  function go(id,dir='right'){
    BGM.play();
    const o=document.getElementById(cur),n=document.getElementById(id);
    if(!n||id===cur)return;
    // direction
    n.classList.toggle('slide-from-left',dir==='left');
    if(o){o.classList.add('leaving');setTimeout(()=>{o.classList.remove('active','leaving');n.classList.remove('slide-from-left');},320);}
    n.classList.add('active');cur=id;
    if(id==='s-home')checkResume();
  }

  /* ── TABS ── */
  function switchTab(btn,tabId){
    document.querySelectorAll('.itab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.itab-content').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    const tab=document.getElementById('tab-'+tabId);if(tab)tab.classList.add('active');
    Snd.click();
  }

  /* ── FULLSCREEN ── */
  function toggleFS(){if(!document.fullscreenElement)document.documentElement.requestFullscreen().catch(()=>{});else document.exitFullscreen().catch(()=>{});}

  /* ── RESUME ── */
  function checkResume(){try{const sv=localStorage.getItem('kuisResume');const rb=document.getElementById('resume-btn');if(sv&&rb)rb.style.display='';else if(rb)rb.style.display='none';}catch(e){}}
  function saveResume(d){try{localStorage.setItem('kuisResume',JSON.stringify(d));}catch(e){}}
  function clearResume(){try{localStorage.removeItem('kuisResume');}catch(e){}}
  function resumeGame(){try{const sv=JSON.parse(localStorage.getItem('kuisResume'));if(!sv)return;mode=sv.mode;selectMode(mode,true);buildSetup(mode);setTimeout(()=>{if(mode===1){const a=document.getElementById('ni-p1'),b=document.getElementById('ni-p2');if(a)a.value=sv.p1||'';if(b)b.value=sv.p2||'';}else if(mode===2){(sv.t1||[]).forEach((n,i)=>{const e=document.getElementById(`ni-t1-${i+1}`);if(e)e.value=n;});(sv.t2||[]).forEach((n,i)=>{const e=document.getElementById(`ni-t2-${i+1}`);if(e)e.value=n;});}else{const e=document.getElementById('ni-solo');if(e)e.value=sv.solo||'';}},120);go('s-setup');}catch(e){}}

  /* ── SOUND ── */
  function toggleSound(){const on=Snd.toggle();BGM.setEnabled(on);const b=document.getElementById('snd-btn');if(b)b.innerHTML='<span>'+(on?'🔊':'🔇')+'</span>'+(on?'Suara':'Mati');}

  /* ── PAUSE ── */
  function pauseGame(){if(G.over)return;paused=true;const ov=document.getElementById('pause-overlay');if(ov)ov.style.display='flex';const pb=document.getElementById('pause-btn');if(pb)pb.textContent='▶';}
  function resumeGame2(){paused=false;const ov=document.getElementById('pause-overlay');if(ov)ov.style.display='none';const pb=document.getElementById('pause-btn');if(pb)pb.textContent='⏸';BGM.play();}
  function restartGame(){const ov=document.getElementById('pause-overlay');if(ov)ov.style.display='none';paused=false;stopAllTimers();Arena.stopLoop();Confetti.stop();resetPanels();buildSetup(mode);go('s-setup','left');}
  function goHomeFromGame(){const ov=document.getElementById('pause-overlay');if(ov)ov.style.display='none';paused=false;stopAllTimers();Arena.stopLoop();Confetti.stop();G={};qHistory=[];resetPanels();go('s-home','left');}
  function stopAllTimers(){if(G.p1&&G.p1.tInt){clearInterval(G.p1.tInt);G.p1.tInt=null;}if(G.p2&&G.p2.tInt){clearInterval(G.p2.tInt);G.p2.tInt=null;}if(G.t1tInt){clearInterval(G.t1tInt);G.t1tInt=null;}if(G.t2tInt){clearInterval(G.t2tInt);G.t2tInt=null;}}

  /* ── MODE ── */
  const HOWTO={
    1:{badge:'MODE 1',title:'⚔️ Tarik Tambang',sub:'2 Pemain Individu',hero:'linear-gradient(135deg,#F97316,#C2410C)',steps:[
      {icon:'⏱️',title:'5 Menit',desc:'Setiap pemain punya 5 menit total untuk menyelesaikan 20 soal.',badge:'300 detik per orang',bc:'amb'},
      {icon:'📋',title:'20 Soal',desc:'Jawab 20 soal Pengetahuan Umum Indonesia. Soal salah masuk antrian lagi!',badge:'Selesaikan 20 soal = Menang!',bc:'grn'},
      {icon:'🟠🔵',title:'Oranye vs Biru',desc:'Split screen — Oranye di kiri, Biru di kanan. Jawab lebih cepat!',badge:'Karakter maju tiap jawaban benar',bc:'grn'},
      {icon:'⚠️',title:'Hukuman',desc:'Jawaban salah mengurangi waktu 15 detik dari total waktumu!',badge:'-15 detik jika salah',bc:'red'},
    ]},
    2:{badge:'MODE 2',title:'🤝 Tim Battle',sub:'2 Tim — Hingga 20 Peserta',hero:'linear-gradient(135deg,#1E40AF,#1E3A8A)',steps:[
      {icon:'⏱️',title:'5 Menit Total',desc:'Setiap tim punya 5 menit total untuk menyelesaikan 20 soal bersama.',badge:'Timer berjalan terus per tim',bc:'amb'},
      {icon:'🔄',title:'Bergiliran',desc:'Anggota menjawab soal bergantian, tapi timer tim terus berjalan!',badge:'Jawab cepat sebelum waktu habis',bc:'grn'},
      {icon:'⚠️',title:'Hukuman Tim',desc:'Jawaban salah mengurangi 15 detik dari waktu tim tersebut.',badge:'-15 detik jika salah',bc:'red'},
      {icon:'🏆',title:'Pemenang',desc:'Tim yang selesaikan 20 soal lebih dulu MENANG! Atau waktu lawan habis.',badge:'Tim pertama selesai = JUARA!',bc:'grn'},
    ]},
    3:{badge:'MODE 3',title:'🌿 Cozy Mode',sub:'Solo Player — Santai',hero:'linear-gradient(135deg,#10B981,#065F46)',steps:[
      {icon:'🌿',title:'Santai',desc:'Tidak ada timer, tidak ada tekanan. Nikmati belajar dengan nyaman.',badge:'Tidak ada batas waktu',bc:'grn'},
      {icon:'🚶',title:'Jalan ke Finish',desc:'Jawab soal → karakter melangkah maju menuju garis finish!',badge:'20 soal = Sampai Finish!',bc:'grn'},
      {icon:'📖',title:'Penjelasan',desc:'Setelah setiap jawaban: lihat hasil → baca penjelasan → tekan Lanjut.',badge:'Salah pun tetap dijelaskan',bc:'amb'},
      {icon:'🎯',title:'Tujuan',desc:'Tidak ada yang kalah! Semua bisa sampai garis finish.',badge:'Santai, nikmati prosesnya!',bc:'grn'},
    ]},
  };
  function selectMode(m,silent=false){
    mode=m;const h=HOWTO[m];
    const badge=document.getElementById('howto-badge');if(badge){badge.textContent=h.badge;badge.style.background=h.hero;}
    const ttl=document.getElementById('howto-title');if(ttl)ttl.textContent=h.title;
    const sub=document.getElementById('howto-sub');if(sub)sub.textContent=h.sub;
    const hero=document.getElementById('howto-hero');if(hero)hero.style.background=h.hero;
    const tn=document.getElementById('howto-topbar-title');if(tn)tn.textContent=h.title;
    document.getElementById('howto-steps').innerHTML=h.steps.map(s=>`<div class="hstep"><div class="hstep-icon">${s.icon}</div><div class="hstep-title">${s.title}</div><div class="hstep-desc">${s.desc}</div><span class="hstep-badge ${s.bc}">${s.badge}</span></div>`).join('');
    document.getElementById('howto-go-btn').onclick=()=>{buildSetup(mode);go('s-setup');};
    if(!silent){Snd.select();go('s-howto');}
  }

  /* ── SETUP ── */
  function buildSetup(m){
    const body=document.getElementById('setup-body');const goBtn=document.getElementById('setup-go');
    const tn=document.getElementById('setup-topbar-title');
    resetPanels();
    if(m===3){
      if(tn)tn.textContent='Setup Cozy';
      body.innerHTML=`<div class="setup-solo"><div class="setup-solo-card"><div class="setup-solo-icon">🌿</div><div class="setup-solo-title">SIAPAKAH KAMU?</div><label class="sp-label">NAMA PEMAIN</label><input id="ni-solo" class="sp-input cozy" type="text" placeholder="Nama kamu..." maxlength="18" autocomplete="off" style="border-color:var(--cozy)"></div></div>`;
      goBtn.textContent='🌿 MULAI SANTAI!';goBtn.style.display='';
    } else if(m===1){
      if(tn)tn.textContent='Setup Pemain';
      body.innerHTML=`<div class="setup-1v1"><div class="setup-player t1"><div class="sp-header"><div class="sp-dot t1"></div><div class="sp-title t1">Pemain Oranye</div></div><label class="sp-label">NAMA PEMAIN 1</label><input id="ni-p1" class="sp-input t1" type="text" placeholder="Nama pemain 1…" maxlength="14" autocomplete="off"></div><div class="setup-player t2"><div class="sp-header"><div class="sp-dot t2"></div><div class="sp-title t2">Pemain Biru</div></div><label class="sp-label">NAMA PEMAIN 2</label><input id="ni-p2" class="sp-input t2" type="text" placeholder="Nama pemain 2…" maxlength="14" autocomplete="off"></div></div>`;
      goBtn.textContent='⚔️ MASUK ARENA!';goBtn.style.display='';
    } else {
      if(tn)tn.textContent='Setup Tim';
      setupPhase=1;_tc=[3,3];
      body.innerHTML=`<div class="setup-team"><div class="setup-team-split">${buildTeamPane(1)}${buildTeamPaneLocked()}</div></div>`;
      renderNI(1);goBtn.style.display='none';
    }
  }

  function buildTeamPane(t){
    const col=t===1?'t1':'t2',em=t===1?'🟠':'🔵',lbl=t===1?'Tim Oranye':'Tim Biru';
    return `<div class="team-pane ${col}" id="pane-t${t}">
      <div class="tp-header"><span style="font-size:1.1rem">${em}</span><span class="tp-title ${col}">${lbl}</span></div>
      <div class="tp-count"><span class="tp-count-label">Jumlah peserta</span><div class="tp-count-ctrl"><button class="tp-count-btn ${col}" onclick="App.setCount(${t},-1)">−</button><div class="tp-count-val" id="cv-${t}">${_tc[t-1]}</div><button class="tp-count-btn ${col}" onclick="App.setCount(${t},1)">+</button></div></div>
      <div class="tp-names" id="ng-${t}"></div>
      ${t===1?`<button class="tp-siap" id="siap-btn" onclick="App.teamSiap()">SIAP ✓</button>`:''}
    </div>`;
  }
  function buildTeamPaneLocked(){return `<div class="team-pane t2 locked" id="pane-t2"><div class="tp-header"><span>🔵</span><span class="tp-title t2">Tim Biru</span></div><div class="tp-lock-msg"><span>🔒</span><p>Tim Oranye selesai dulu, lalu Tim Biru</p></div></div>`;}
  function setCount(t,d){_tc[t-1]=Math.max(1,Math.min(20,(_tc[t-1]||3)+d));const cv=document.getElementById('cv-'+t);if(cv)cv.textContent=_tc[t-1];renderNI(t);Snd.click();}
  function renderNI(t){const g=document.getElementById('ng-'+t);if(!g)return;g.innerHTML='';const n=_tc[t-1]||3,col=t===1?'t1':'t2';for(let i=1;i<=n;i++){const row=document.createElement('div');row.className='tp-name-row';row.innerHTML=`<div class="tp-name-num" style="background:var(--${col})">${i}</div><input class="tp-name-input ${col}" id="ni-t${t}-${i}" type="text" placeholder="Peserta ${i}" maxlength="14" autocomplete="off">`;g.appendChild(row);}}
  function teamSiap(){Snd.siap();setupPhase=2;const p1=document.getElementById('pane-t1');if(p1)p1.classList.add('pane-done');const sb=document.getElementById('siap-btn');if(sb){sb.textContent='✅ Siap!';sb.disabled=true;}const p2=document.getElementById('pane-t2');if(p2)p2.outerHTML=buildTeamPane(2);renderNI(2);const gb=document.getElementById('setup-go');if(gb){gb.textContent='⚔️ MASUK ARENA!';gb.style.display='';}}
  function getPlayers(t){const n=_tc[t-1]||3,ps=[];for(let i=1;i<=n;i++){const v=document.getElementById(`ni-t${t}-${i}`);ps.push((v&&v.value.trim())||`Peserta ${i}`);}return ps;}

  /* ── START ── */
  function startFromSetup(){
    Snd.ready();qHistory=[];paused=false;cozyNextCb=null;
    const co=document.getElementById('cozy-overlay');if(co)co.style.display='none';
    if(mode===1){
      const n1=document.getElementById('ni-p1')?.value.trim()||'Pemain Oranye';
      const n2=document.getElementById('ni-p2')?.value.trim()||'Pemain Biru';
      G={mode:1,over:false,p1:{name:n1,queue:prepQ(),ci:0,timer:TOTAL_TIME,tInt:null,locked:false,done:false,score:0,state:'pull'},p2:{name:n2,queue:prepQ(),ci:0,timer:TOTAL_TIME,tInt:null,locked:false,done:false,score:0,state:'pull'}};
      saveResume({mode,p1:n1,p2:n2});
    } else if(mode===2){
      const t1p=getPlayers(1),t2p=getPlayers(2);
      G={mode:2,over:false,t1:{players:t1p,score:0,pi:0,state:'pull'},t2:{players:t2p,score:0,pi:0,state:'pull'},qs1:prepQ(),qs2:prepQ(),t1ci:0,t2ci:0,t1lock:false,t2lock:false,t1tInt:null,t2tInt:null,t1timer:TOTAL_TIME,t2timer:TOTAL_TIME,t1done:false,t2done:false};
      saveResume({mode,t1:t1p,t2:t2p});
    } else {
      const solo=document.getElementById('ni-solo')?.value.trim()||'Petualang';
      G={mode:3,over:false,cozyLock:false,solo:{name:solo,queue:prepQ(),ci:0,correct:0,total:20,done:false}};
      saveResume({mode,solo});
    }
    runCD(()=>startGame());
  }

  /* ── COUNTDOWN ── */
  function runCD(cb){go('s-countdown');const el=document.getElementById('cdn');let n=3;function tick(){el.textContent=n>0?n:'MULAI!';el.classList.remove('cd-pop');void el.offsetWidth;el.classList.add('cd-pop');Snd.cd(n);if(n-->0)setTimeout(tick,1100);else setTimeout(cb,1000);}tick();}

  /* ── TOPBAR ── */
  function topbar(ll,ls,lt,rl,rs,rt,lbl){
    const s=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v!=null?v:'';};
    s('gtb-name-left',ll);s('gtb-score-left',ls);s('gtb-time-left',lt);
    s('gtb-name-right',rl);s('gtb-score-right',rs);s('gtb-time-right',rt);
    s('gtb-label',lbl);
    const rr=document.getElementById('gtb-time-right');if(rr)rr.style.visibility=rl?'':'hidden';
  }

  /* ── PANEL HELPERS ── */
  function buildHead(side,name,score,tc){
    const el=document.getElementById('gph-'+side);if(!el)return;
    el.innerHTML=`<div class="gpanel-head gh-${tc}"><span class="gh-name ${tc}c" id="gn-${side}">${name}</span><div class="gh-right"><span class="gh-qi" id="gqi-${side}"></span><span class="gh-score ${tc}c pop-target" id="gs-${side}">${score}</span><span class="gh-unit">poin</span></div></div>`;
  }
  function updHead(side,o){if(o.score!=null){const e=document.getElementById('gs-'+side);if(e){e.textContent=o.score;e.classList.remove('pop-anim');void e.offsetWidth;e.classList.add('pop-anim');}}if(o.qi!=null){const e=document.getElementById('gqi-'+side);if(e)e.textContent=o.qi;}if(o.name!=null){const e=document.getElementById('gn-'+side);if(e)e.textContent=o.name;}}
  function setQ(side,html,isHtml){const e=document.getElementById('gq-'+side);if(e){if(isHtml)e.innerHTML=html;else e.textContent=html;}}
  function setOpts(side,opts,cb,tc){
    const og=document.getElementById('go-'+side);if(!og)return;og.innerHTML='';
    if(!opts||!opts.length){og.innerHTML='<div style="grid-column:1/-1;display:flex;align-items:center;justify-content:center;color:#64748B;font-size:.84rem;font-weight:600">Selesai ✓</div>';return;}
    ['A','B','C','D'].forEach((L,i)=>{const b=document.createElement('button');b.className=`opt o${tc}`;b.innerHTML=`<span class="opt-l">${L}</span><span>${opts[i]||''}</span>`;b.addEventListener('click',()=>cb(i));og.appendChild(b);});
  }
  function lockOpts(side,correct,chosen){const og=document.getElementById('go-'+side);if(!og)return;og.querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add('ok');else if(i===chosen&&chosen!==-1)b.classList.add('no');});}
  function setTimBar(side,tc,pct,text,warn,dang){
    const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);
    if(bar){bar.style.width=Math.max(0,pct)+'%';bar.className='timer-fill '+tc+(dang?' dang':warn?' warn':'');}
    if(sec){sec.textContent=text;sec.className='timer-sec '+(dang?' dang':warn?' warn':'');}
  }
  function showExpInline(side,exp,correct){
    const qEl=document.getElementById('gq-'+side);if(!qEl)return;
    const bg=correct?'rgba(16,185,129,.1)':'rgba(239,68,68,.1)',bdr=correct?'#10B981':'#EF4444';
    qEl.innerHTML=`<div style="font-size:.68rem;line-height:1.48;background:${bg};padding:.28rem .46rem;border-radius:6px;border-left:3px solid ${bdr};color:#374151">${correct?'💡':'📚'} ${exp}</div>`;
    setTimeout(()=>{if(qEl&&!G.over)qEl.innerHTML='';},DELAY-200);
  }
  function resetPanels(){
    const rp=document.getElementById('gp-right'),sep=document.getElementById('panel-divider');
    if(rp)rp.style.display='';if(sep)sep.style.display='';
    const lp=document.getElementById('gp-left');if(lp)lp.style.flex='';
    const po=document.getElementById('pause-overlay');if(po)po.style.display='none';
    const co=document.getElementById('cozy-overlay');if(co)co.style.display='none';
  }

  /* ═══════ MODE 1 ═══════ */
  function nextQ1(ps){for(let i=0;i<ps.queue.length;i++){const idx=(ps.ci+i)%ps.queue.length;if(!ps.queue[idx]._done){ps.ci=idx;return ps.queue[idx];}}return null;}

  function loadM1Q(p){
    const ps=G[p],side=p==='p1'?'left':'right',tc=p==='p1'?'t1':'t2';
    stopM1T(p);
    const q=nextQ1(ps);
    if(!q){
      ps.done=true;ps.locked=true;ps.state='win';
      Arena.setSnap({[p]:{score:ps.score,name:ps.name,state:'win'}});
      setQ(side,'<span style="color:#10B981;font-weight:700">✅ Semua soal selesai!</span>',true);
      setOpts(side,[],null,tc);setTimBar(side,tc,'100',fmtTime(ps.timer),false,false);
      updHead(side,{qi:'Selesai 🎉'});
      if(!G.over)endM1(p,'done');return;
    }
    if(!qHistory.find(q2=>q2.id===q.id))qHistory.push({...q,p1ans:-1,p2ans:-1});
    const rem=ps.queue.filter(q2=>!q2._done).length;
    updHead(side,{qi:`Sisa ${rem} soal`});
    setQ(side,q.q);setOpts(side,q.opts,(i)=>ansM1(p,i,q.ai,q),tc);
    // refresh timer display
    const w=ps.timer<=60,d=ps.timer<=20;
    setTimBar(side,tc,ps.timer/TOTAL_TIME*100,fmtTime(ps.timer),w,d);
    startM1T(p);
  }

  function startM1T(p){
    const ps=G[p],side=p==='p1'?'left':'right',tc=p==='p1'?'t1':'t2';
    ps.tInt=setInterval(()=>{
      if(paused||ps.locked||ps.done)return;
      ps.timer--;
      const w=ps.timer<=60,d=ps.timer<=20;
      setTimBar(side,tc,ps.timer/TOTAL_TIME*100,fmtTime(ps.timer),w,d);
      const te=document.getElementById('gtb-time-'+side);if(te)te.textContent=fmtTime(ps.timer);
      if(d)Snd.tickD();else if(w&&ps.timer%10===0)Snd.tickW();
      if(ps.timer<=0){clearInterval(ps.tInt);ps.tInt=null;ps.state='fall';if(!G.over)endM1(p,'timeout');}
    },1000);
  }
  function stopM1T(p){if(G[p]&&G[p].tInt){clearInterval(G[p].tInt);G[p].tInt=null;}}

  function ansM1(p,sel,correct,q){
    if(G[p].locked||G.over)return;
    G[p].locked=true;stopM1T(p);
    const ps=G[p],side=p==='p1'?'left':'right';
    lockOpts(side,correct,sel);
    const hq=qHistory.find(q2=>q2.id===q.id);
    if(sel===correct){
      Snd.correct();flashPanel(side,'correct');
      q._done=true;ps.score++;ps.state='correct';
      const rem=ps.queue.filter(q2=>!q2._done).length;
      updHead(side,{score:ps.score,qi:`Sisa ${rem} soal`});
      Arena.setSnap({[p]:{score:ps.score,name:ps.name,state:'correct'},lastCheer:side,cheerTime:Date.now()/1000});
      document.getElementById('gtb-score-'+side).textContent=ps.score;
      floatLbl(document.getElementById('go-'+side),'+1','#10B981');
      if(hq)hq[p+'ans']=sel;Snd.move();
      setTimeout(()=>{if(G[p])G[p].state='pull';Arena.setSnap({[p]:{score:ps.score,name:ps.name,state:'pull'}});},460);
    } else {
      Snd.wrong();flashPanel(side,'wrong');
      if(hq)hq[p+'ans']=sel;
      ps.timer=Math.max(5,ps.timer-PEN_SEC);ps.state='wrong';
      ps.ci=(ps.ci+1)%ps.queue.length;
      floatLbl(document.getElementById('go-'+side),'-15s','#EF4444');
      const og=document.getElementById('go-'+side);if(og){og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');}
      Arena.setSnap({[p]:{score:ps.score,name:ps.name,state:'wrong'}});
      setTimeout(()=>{if(G[p])G[p].state='pull';Arena.setSnap({[p]:{score:ps.score,name:ps.name,state:'pull'}});},460);
    }
    if(q.exp)showExpInline(side,q.exp,sel===correct);
    setTimeout(()=>{if(G[p])G[p].locked=false;if(!G.over&&!G[p]?.done)loadM1Q(p);},DELAY);
  }

  function endM1(p,reason){
    if(G.over)return;G.over=true;stopM1T('p1');stopM1T('p2');clearResume();
    const w=reason==='done'?p:(p==='p1'?'p2':'p1');
    const loser=w==='p1'?'p2':'p1',lS=loser==='p1'?'left':'right';
    Snd.fall();
    Arena.setSnap({p1:{score:G.p1.score,name:G.p1.name,state:w==='p1'?'win':'fall'},p2:{score:G.p2.score,name:G.p2.name,state:w==='p2'?'win':'fall'},fallenSide:lS,fallProgress:0,over:true});
    setTimeout(()=>showWin(G[w].name,w==='p1'?'#F97316':'#1E40AF',G.p1.name,G.p2.name,G.p1.score,G.p2.score),2200);
  }

  /* ═══════ MODE 2 — TOTAL TIMER ═══════ */
  function nextQ2(t){const qs=t===1?G.qs1:G.qs2;const ci=t===1?G.t1ci:G.t2ci;for(let i=0;i<qs.length;i++){const idx=(ci+i)%qs.length;if(!qs[idx]._done){if(t===1)G.t1ci=idx;else G.t2ci=idx;return qs[idx];}}return null;}

  function loadM2Q(t){
    const side=t===1?'left':'right',tc=t===1?'t1':'t2';
    if(G.over)return;
    if(t===1&&G.t1done)return;if(t===2&&G.t2done)return;
    const q=nextQ2(t);
    if(!q){if(t===1)G.t1done=true;else G.t2done=true;setQ(side,'<span style="color:#10B981;font-weight:700">✅ Semua soal selesai!</span>',true);setOpts(side,[],null,tc);if(!G.over)endM2(t,'done');return;}
    if(!qHistory.find(q2=>q2.id===q.id))qHistory.push({...q,t1ans:-1,t2ans:-1});
    const team=t===1?G.t1:G.t2;
    const pname=team.players[team.pi]||`Peserta ${team.pi+1}`;
    const rem=(t===1?G.qs1:G.qs2).filter(q2=>!q2._done).length;
    updHead(side,{name:(t===1?'🟠 ':'🔵 ')+pname,qi:`Sisa ${rem} soal`});
    document.getElementById('gtb-name-'+side).textContent=(t===1?'🟠 ':'🔵 ')+pname;
    setQ(side,q.q);setOpts(side,q.opts,(i)=>ansM2(t,i,q.ai,q),tc);
  }

  function startM2Timer(t){
    // single shared timer per team — runs continuously
    const side=t===1?'left':'right',tc=t===1?'t1':'t2';
    const getT=()=>t===1?G.t1timer:G.t2timer;
    const setT=v=>{if(t===1)G.t1timer=v;else G.t2timer=v;};
    const bar=document.getElementById('gf-'+side);
    if(bar){bar.style.transition='none';bar.style.width='100%';void bar.offsetWidth;bar.style.transition='width 1s linear';}
    const tInt=setInterval(()=>{
      if(paused||G.over)return;
      const lock=t===1?G.t1lock:G.t2lock;
      if(lock)return; // pause ticking while answer is being processed
      setT(getT()-1);
      const w=getT()<=60,d=getT()<=20;
      setTimBar(side,tc,getT()/TOTAL_TIME*100,fmtTime(getT()),w,d);
      const te=document.getElementById('gtb-time-'+side);if(te)te.textContent=fmtTime(getT());
      if(d)Snd.tickD();else if(w&&getT()%10===0)Snd.tickW();
      if(getT()<=0){clearInterval(tInt);if(t===1)G.t1tInt=null;else G.t2tInt=null;if(!G.over)endM2(t,'timeout');}
    },1000);
    if(t===1)G.t1tInt=tInt;else G.t2tInt=tInt;
  }
  function stopM2T(t){if(t===1&&G.t1tInt){clearInterval(G.t1tInt);G.t1tInt=null;}if(t===2&&G.t2tInt){clearInterval(G.t2tInt);G.t2tInt=null;}}

  function ansM2(t,sel,correct,q){
    const lock=t===1?'t1lock':'t2lock';if(G[lock]||G.over)return;
    G[lock]=true; // freeze timer briefly while processing
    const side=t===1?'left':'right',tc=t===1?'t1':'t2';
    lockOpts(side,correct,sel);
    const team=t===1?G.t1:G.t2;
    const hq=qHistory.find(q2=>q2.id===q.id);
    if(sel===correct){
      Snd.correct();flashPanel(side,'correct');
      q._done=true;team.score++;team.state='correct';
      updHead(side,{score:team.score,qi:`Sisa ${(t===1?G.qs1:G.qs2).filter(q2=>!q2._done).length} soal`});
      Arena.setSnap({[tc]:{...team},lastCheer:side,cheerTime:Date.now()/1000});
      document.getElementById('gtb-score-'+side).textContent=team.score;
      floatLbl(document.getElementById('go-'+side),'+1','#10B981');
      if(hq){if(t===1)hq.t1ans=sel;else hq.t2ans=sel;}
      team.pi=(team.pi+1)%team.players.length;
      if(t===1)G.t1ci=(G.t1ci+1)%G.qs1.length;else G.t2ci=(G.t2ci+1)%G.qs2.length;
      Snd.move();setTimeout(()=>{team.state='pull';Arena.setSnap({[tc]:{...team}});},460);
    } else {
      Snd.wrong();flashPanel(side,'wrong');
      if(hq){if(t===1)hq.t1ans=sel;else hq.t2ans=sel;}
      // penalty: deduct 15s from team timer
      if(t===1)G.t1timer=Math.max(5,G.t1timer-PEN_SEC);else G.t2timer=Math.max(5,G.t2timer-PEN_SEC);
      floatLbl(document.getElementById('go-'+side),'-15s','#EF4444');
      const arr=t===1?G.qs1:G.qs2,ci=t===1?G.t1ci:G.t2ci;const cq=arr[ci];arr.splice(ci,1);arr.push(cq);
      const og=document.getElementById('go-'+side);if(og){og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');}
    }
    if(q.exp)showExpInline(side,q.exp,sel===correct);
    setTimeout(()=>{G[lock]=false;if(!G.over)loadM2Q(t);},DELAY);
  }

  function endM2(t,reason){
    if(G.over)return;G.over=true;stopM2T(1);stopM2T(2);clearResume();
    Arena.setSnap({over:true});
    const w=reason==='done'?t:(t===1?2:1),lS=w===1?'right':'left';
    Snd.fall();
    Arena.setSnap({fallenSide:lS,fallProgress:0,t1:{...G.t1,state:w===1?'win':'fall'},t2:{...G.t2,state:w===2?'win':'fall'},over:true});
    const wn=w===1?'TIM ORANYE':'TIM BIRU',wc=w===1?'#F97316':'#1E40AF';
    setTimeout(()=>showWin(wn,wc,'Tim Oranye','Tim Biru',G.t1.score,G.t2.score),2200);
  }

  /* ═══════ MODE 3 COZY ═══════ */
  function loadCozyQ(){
    const solo=G.solo,side='left',tc='cozy';
    if(solo.ci>=solo.total||solo.ci>=solo.queue.length){
      solo.done=true;G.over=true;
      setQ(side,'<span style="color:#10B981;font-weight:800">🎉 Selamat! Kamu sampai FINISH!</span>',true);
      setOpts(side,[],null,tc);setTimBar(side,tc,'100','∞',false,false);
      updHead(side,{qi:'Selesai! 🎉',score:solo.correct});
      Arena.setSnap({cozy:{correct:solo.correct,total:solo.total},over:true});
      Snd.finish();setTimeout(()=>showWinCozy(solo.name,solo.correct,solo.total),1800);return;
    }
    const q=solo.queue[solo.ci];
    if(!qHistory.find(q2=>q2.id===q.id))qHistory.push({...q,soloAns:-1});
    updHead(side,{qi:`Soal ${solo.ci+1} dari ${solo.total}`,score:solo.correct});
    document.getElementById('gtb-score-left').textContent=solo.correct;
    setQ(side,q.q);setOpts(side,q.opts,(i)=>ansCozy(i,q.ai,q),tc);
    setTimBar(side,tc,'100','∞',false,false);
  }

  function ansCozy(sel,correct,q){
    if(G.cozyLock||G.over)return;
    G.cozyLock=true;lockOpts('left',correct,sel);
    const solo=G.solo;const hq=qHistory.find(q2=>q2.id===q.id);if(hq)hq.soloAns=sel;
    const ok=sel===correct;
    if(ok){Snd.correct();flashPanel('left','correct');solo.correct++;floatLbl(document.getElementById('go-left'),'✓','#10B981');}
    else{Snd.wrong();flashPanel('left','wrong');const og=document.getElementById('go-left');if(og){og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');}floatLbl(document.getElementById('go-left'),'Hampir!','#F59E0B');}
    solo.ci++;
    Arena.setSnap({cozy:{correct:solo.correct,total:solo.total,skin:'#C68642',hair:'#1C0700'}});
    updHead('left',{score:solo.correct,qi:`Soal ${solo.ci} dari ${solo.total}`});
    showCozyOverlay(ok,q,correct,solo.ci,solo.total);
  }

  function showCozyOverlay(ok,q,correctIdx,nextCi,total){
    const ov=document.getElementById('cozy-overlay');if(!ov)return;
    document.getElementById('co-icon').textContent=ok?'✅':'❌';
    const ct=document.getElementById('co-text');ct.textContent=ok?'Jawaban Benar!':'Jawaban Salah!';ct.className='cozy-label '+(ok?'ok':'no');
    const ca=document.getElementById('co-answer');
    if(!ok&&q&&q.opts){ca.style.display='block';ca.textContent='Jawaban benar: '+q.opts[correctIdx];}else ca.style.display='none';
    document.getElementById('co-exp').textContent=q?.exp||'';
    document.getElementById('co-progress').textContent=`Soal ${nextCi} dari ${total}`;
    const card=document.querySelector('.cozy-card');if(card)card.className='cozy-card '+(ok?'c-ok':'c-no');
    ov.style.display='flex';cozyNextCb=()=>{ov.style.display='none';G.cozyLock=false;loadCozyQ();};
  }
  function cozyNext(){Snd.cozyNext();if(cozyNextCb){cozyNextCb();cozyNextCb=null;}}

  function showWinCozy(name,correct,total){
    clearResume();Confetti.start('#10B981');Snd.win();Arena.stopLoop();
    document.getElementById('w-trophy').textContent='🌿';document.getElementById('w-label').textContent='PERJALANAN SELESAI!';document.getElementById('w-name').textContent=name;document.getElementById('w-name').style.color='#10B981';document.getElementById('w-sub').textContent=`${correct} dari ${total} soal benar! 🎊`;document.getElementById('w-scores').innerHTML=`<div class="ws-item"><div class="ws-name">Benar</div><div class="ws-score" style="color:#10B981">${correct}</div></div><div class="ws-vs">/</div><div class="ws-item"><div class="ws-name">Total</div><div class="ws-score" style="color:#64748B">${total}</div></div>`;
    go('s-winner');
  }

  /* ═══════ GAME START ═══════ */
  function startGame(){
    resetPanels();Arena.init();Arena.resize();
    if(mode===3){
      const rp=document.getElementById('gp-right'),sep=document.getElementById('panel-divider');
      if(rp)rp.style.display='none';if(sep)sep.style.display='none';
      const lp=document.getElementById('gp-left');if(lp)lp.style.flex='1';
      buildHead('left',G.solo.name,0,'cozy');
      topbar(G.solo.name,0,'∞','','','','🌿 COZY MODE');
      Arena.setSnap({mode:3,cozy:{correct:0,total:G.solo.total,skin:'#C68642',hair:'#1C0700'},over:false,fallenSide:null,fallProgress:0});
      go('s-game');Arena.startLoop();loadCozyQ();
    } else if(mode===1){
      buildHead('left',G.p1.name,0,'t1');buildHead('right',G.p2.name,0,'t2');
      topbar(G.p1.name,0,fmtTime(TOTAL_TIME),G.p2.name,0,fmtTime(TOTAL_TIME),'⚔️ TARIK TAMBANG');
      Arena.setSnap({mode:1,p1:{score:0,name:G.p1.name,state:'pull'},p2:{score:0,name:G.p2.name,state:'pull'},over:false,fallenSide:null,fallProgress:0,lastCheer:'none',cheerTime:0});
      go('s-game');Arena.startLoop();loadM1Q('p1');loadM1Q('p2');startM1T('p1');startM1T('p2');
    } else {
      buildHead('left',G.t1.players[0]||'Tim Oranye',0,'t1');buildHead('right',G.t2.players[0]||'Tim Biru',0,'t2');
      topbar('🟠 '+G.t1.players[0],0,fmtTime(TOTAL_TIME),'🔵 '+G.t2.players[0],0,fmtTime(TOTAL_TIME),'🤝 TIM BATTLE');
      const initTb={side:'left',tc:'t1',pct:100,text:fmtTime(TOTAL_TIME)};setTimBar('left','t1',100,fmtTime(TOTAL_TIME),false,false);setTimBar('right','t2',100,fmtTime(TOTAL_TIME),false,false);
      Arena.setSnap({mode:2,t1:{score:0,players:G.t1.players,pi:0,state:'pull'},t2:{score:0,players:G.t2.players,pi:0,state:'pull'},over:false,fallenSide:null,fallProgress:0,lastCheer:'none',cheerTime:0});
      go('s-game');Arena.startLoop();loadM2Q(1);loadM2Q(2);startM2Timer(1);startM2Timer(2);
    }
  }

  /* ═══════ WINNER ═══════ */
  function showWin(name,color,n1,n2,s1,s2){
    clearResume();Confetti.start(color);Snd.win();Arena.stopLoop();
    document.getElementById('w-trophy').textContent='🏆';document.getElementById('w-label').textContent='PEMENANG!';document.getElementById('w-name').textContent=name;document.getElementById('w-name').style.color=color;document.getElementById('w-sub').textContent='LUAR BIASA! 🎉';document.getElementById('w-scores').innerHTML=`<div class="ws-item"><div class="ws-name">${n1}</div><div class="ws-score" style="color:#F97316">${s1}</div></div><div class="ws-vs">VS</div><div class="ws-item"><div class="ws-name">${n2}</div><div class="ws-score" style="color:#1E40AF">${s2}</div></div>`;
    go('s-winner');
  }

  /* ═══════ Q LIST ═══════ */
  function goQList(){
    const scroll=document.getElementById('qlist-scroll'),sub=document.getElementById('qlist-sub');
    if(sub)sub.textContent=`${qHistory.length} soal telah dimainkan`;
    if(scroll){scroll.innerHTML='';qHistory.forEach((q,i)=>renderQCard(scroll,q,i));}
    go('s-qlist');
  }
  function openQDB(){
    const scroll=document.getElementById('qdb-scroll');
    if(scroll){scroll.innerHTML='';QDB.forEach((q,i)=>{const card=document.createElement('div');card.className='q-card';const optsHtml=q.o.map((opt,j)=>`<div class="q-opt${j===q.a?' is-correct':''}"><span class="q-opt-lbl">${'ABCD'[j]}</span><span>${opt}</span><span class="q-opt-icon">${j===q.a?'✅':''}</span></div>`).join('');card.innerHTML=`<div class="q-num">SOAL ${i+1}</div><div class="q-text">${q.q}</div><div class="q-opts">${optsHtml}</div>${q.exp?`<div class="q-exp">💡 ${q.exp}</div>`:''}`;scroll.appendChild(card);});}
    go('s-qdb');
  }
  function renderQCard(parent,q,i){
    const card=document.createElement('div');card.className='q-card';
    const optsHtml=(q.opts||q.o).map((opt,j)=>{let cls='q-opt';let icon='';if(j===q.ai||j===q.a){cls+=' is-correct';icon='✅';}else if(j===q.p1ans||j===q.p2ans||j===q.t1ans||j===q.t2ans||j===q.soloAns){cls+=' p1-wrong';icon='❌';}return `<div class="${cls}"><span class="q-opt-lbl">${'ABCD'[j]}</span><span>${opt}</span><span class="q-opt-icon">${icon}</span></div>`;}).join('');
    card.innerHTML=`<div class="q-num">SOAL ${i+1}</div><div class="q-text">${q.q}</div><div class="q-opts">${optsHtml}</div>${q.exp?`<div class="q-exp">💡 ${q.exp}</div>`:''}`;
    parent.appendChild(card);
  }

  /* ═══════ HOME / REMATCH ═══════ */
  function goHome(){Confetti.stop();Arena.stopLoop();stopAllTimers();G={};qHistory=[];resetPanels();go('s-home','left');}
  function rematch(){Confetti.stop();Arena.stopLoop();stopAllTimers();G={};qHistory=[];buildSetup(mode);go('s-setup','left');}

  /* ═══════ RESIZE ═══════ */
  window.addEventListener('resize',()=>Arena.resize());
  window.addEventListener('orientationchange',()=>setTimeout(()=>Arena.resize(),200));

  /* ═══════ INIT ═══════ */
  checkResume();

  return{go,switchTab,toggleSound,toggleFS,selectMode,setCount,renderNI,teamSiap,startFromSetup,pauseGame,resumeGame,resumeGame2,restartGame,goHomeFromGame,cozyNext,goQList,openQDB,goHome,rematch};
})();
