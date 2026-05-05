'use strict';
/* ══════════════════════════════════════════
   QUESTIONS DATABASE — 21 soal + penjelasan
══════════════════════════════════════════ */
const QDB=[
  {q:"Kota manakah yang ditetapkan sebagai ibu kota baru Republik Indonesia menggantikan Jakarta?",o:["Nusantara","Balikpapan","Samarinda","Palangkaraya"],a:0,
   exp:"Nusantara adalah ibu kota baru RI di Penajam Paser Utara, Kalimantan Timur, berdasarkan UU No.3 Tahun 2022. Pemindahan ibu kota bertujuan untuk pemerataan pembangunan Indonesia."},
  {q:"Siapakah dua tokoh yang memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945?",o:["Soekarno & Mohammad Hatta","Soekarno & Sutan Sjahrir","Mohammad Hatta & Ki Hajar Dewantara","Soedirman & Soekarno"],a:0,
   exp:"Soekarno membacakan teks proklamasi dan Mohammad Hatta menandatanganinya sebagai Wakil Presiden. Proklamasi dibacakan di Jl. Pegangsaan Timur 56, Jakarta Pusat."},
  {q:"Pada tanggal berapa tepatnya Indonesia memproklamasikan kemerdekaannya dari penjajahan?",o:["17 Agustus 1945","20 Mei 1945","1 Juni 1945","28 Oktober 1928"],a:0,
   exp:"17 Agustus 1945 adalah Hari Kemerdekaan Indonesia. Angka 17-8-45 punya makna: 17 rakaat sholat, bulan Agustus, dan 45 melambangkan tahun kemerdekaan."},
  {q:"Apakah semboyan nasional bangsa Indonesia yang tertulis pada pita di bawah lambang Garuda Pancasila?",o:["Bhinneka Tunggal Ika","Satu Nusa Satu Bangsa","Tut Wuri Handayani","Ing Ngarso Sung Tulodo"],a:0,
   exp:"Bhinneka Tunggal Ika berasal dari Kitab Sutasoma karya Mpu Tantular, artinya 'Berbeda-beda tetapi tetap satu jua'. Mencerminkan keberagaman 1.300+ suku bangsa di Indonesia."},
  {q:"Berapa jumlah provinsi yang dimiliki oleh Indonesia berdasarkan pemekaran wilayah terbaru tahun 2024?",o:["38 Provinsi","34 Provinsi","36 Provinsi","40 Provinsi"],a:0,
   exp:"Per 2024, Indonesia memiliki 38 provinsi setelah pemekaran 4 provinsi baru di Papua: Papua Selatan, Papua Tengah, Papua Pegunungan, dan Papua Barat Daya."},
  {q:"Siapakah komponis yang menciptakan lagu kebangsaan Indonesia Raya yang pertama dikumandangkan tahun 1928?",o:["Wage Rudolf Supratman","Ismail Marzuki","C. Simanjuntak","Kusbini"],a:0,
   exp:"WR Supratman memainkan Indonesia Raya pertama kali dengan biola pada Kongres Pemuda II, 28 Oktober 1928. Beliau lahir di Jatinegara, 9 Maret 1903."},
  {q:"Di manakah letak puncak tertinggi di Indonesia yang juga merupakan salah satu puncak Seven Summits dunia?",o:["Puncak Jaya, Papua","Gunung Semeru, Jawa Timur","Gunung Rinjani, NTB","Gunung Kerinci, Sumatera"],a:0,
   exp:"Puncak Jaya (Carstensz Pyramid) setinggi 4.884 mdpl di Papua adalah puncak tertinggi Indonesia & Oseania, satu-satunya dari tujuh puncak dunia yang diselimuti gletser tropis."},
  {q:"Danau vulkanik terbesar di dunia yang terletak di Sumatera Utara dan menjadi kebanggaan Indonesia adalah?",o:["Danau Toba","Danau Maninjau","Danau Singkarak","Danau Ranau"],a:0,
   exp:"Danau Toba terbentuk dari letusan supervulkan 74.000 tahun lalu, salah satu letusan terbesar dalam sejarah Bumi. Luasnya 1.145 km² dengan kedalaman 505 meter."},
  {q:"Berapa jumlah sila dalam dasar negara Indonesia yaitu Pancasila yang dirumuskan para pendiri bangsa?",o:["5 Sila","4 Sila","6 Sila","3 Sila"],a:0,
   exp:"Pancasila (dari Sansekerta: panca=lima, sila=asas) berisi 5 sila yang dirumuskan Soekarno pada 1 Juni 1945. Lima sila meliputi Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, dan Keadilan."},
  {q:"Burung apakah yang dijadikan lambang negara Republik Indonesia dan terdapat dalam Garuda Pancasila?",o:["Elang Jawa (Garuda)","Cendrawasih","Jalak Bali","Elang Bondol"],a:0,
   exp:"Garuda Pancasila terinspirasi dari Elang Jawa (Spizaetus bartelsi). Lambang ini dirancang Sultan Hamid II dan disempurnakan Soekarno, resmi digunakan sejak 11 Februari 1950."},
  {q:"Sungai manakah yang merupakan sungai terpanjang di Indonesia yang mengalir di Pulau Kalimantan?",o:["Sungai Kapuas","Sungai Mahakam","Sungai Barito","Sungai Musi"],a:0,
   exp:"Sungai Kapuas di Kalimantan Barat sepanjang 1.143 km adalah sungai terpanjang di Indonesia. Sungai ini merupakan jalur transportasi vital dan sumber kehidupan bagi masyarakat Dayak."},
  {q:"Tari Saman yang terkenal dengan gerakannya yang kompak dan cepat merupakan tarian tradisional dari provinsi mana?",o:["Aceh","Bali","Sumatera Barat","Kalimantan Timur"],a:0,
   exp:"Tari Saman dari Gayo, Aceh, diakui UNESCO sebagai Warisan Budaya Tak Benda tahun 2011. Tarian ini dilakukan serentak oleh banyak penari dengan gerakan tangan yang luar biasa cepat."},
  {q:"Komodo, hewan purba yang kini dilindungi dan menjadi simbol nasional, hidup endemik di pulau mana?",o:["Pulau Komodo & Rinca","Pulau Flores","Pulau Lombok","Pulau Sumbawa"],a:0,
   exp:"Komodo (Varanus komodoensis) hanya hidup di Pulau Komodo, Rinca, Gili Motang, dan Flores. Panjangnya bisa 3 meter, beratnya 70 kg, dengan gigitan berbisa mematikan."},
  {q:"Pada tahun berapa UNESCO secara resmi mengakui Batik Indonesia sebagai Warisan Budaya Tak Benda?",o:["2009","2003","2012","2015"],a:0,
   exp:"Pada 2 Oktober 2009, UNESCO mengakui Batik Indonesia. Tanggal ini kini diperingati sebagai Hari Batik Nasional. Indonesia memiliki lebih dari 5.000 motif batik yang unik."},
  {q:"Buah apakah yang dikenal sebagai Raja Buah di Asia Tenggara dan memiliki aroma khas sangat kuat?",o:["Durian","Rambutan","Manggis","Nangka"],a:0,
   exp:"Durian (Durio zibethinus) dijuluki Raja Buah karena rasa dan aromanya yang paling kuat. Dilarang di banyak hotel dan transportasi umum di Asia karena bau tajamnya."},
  {q:"Mata uang resmi yang digunakan oleh Negara Kesatuan Republik Indonesia adalah?",o:["Rupiah (IDR)","Ringgit","Peso","Baht"],a:0,
   exp:"Rupiah (IDR) adalah mata uang Indonesia sejak 1946, dari kata Sansekerta 'rupya' (perak). Bank Indonesia sebagai bank sentral bertanggung jawab atas penerbitan dan peredarannya."},
  {q:"Setiap tanggal berapa Hari Sumpah Pemuda diperingati sebagai momentum persatuan bangsa?",o:["28 Oktober","17 Agustus","20 Mei","21 April"],a:0,
   exp:"Sumpah Pemuda lahir 28 Oktober 1928 dalam Kongres Pemuda II di Jakarta. Isinya: bertanah air satu, berbangsa satu, dan berbahasa satu — Indonesia. Sebuah tekad bersejarah."},
  {q:"Siapakah Presiden pertama Republik Indonesia yang menjabat dari tahun 1945 hingga 1967?",o:["Ir. Soekarno","Jenderal Soeharto","B.J. Habibie","Sri Sultan HB IX"],a:0,
   exp:"Ir. Soekarno (Bung Karno) adalah Presiden RI pertama dan Bapak Bangsa. Dikenal sebagai orator ulung, beliau juga tokoh Non-Blok dan penggagas Konferensi Asia-Afrika 1955."},
  {q:"Candi Borobudur yang merupakan candi Buddha terbesar di dunia terletak di provinsi mana?",o:["Jawa Tengah","Jawa Timur","DI Yogyakarta","Jawa Barat"],a:0,
   exp:"Borobudur di Magelang, Jawa Tengah, dibangun abad ke-8 oleh Dinasti Syailendra. Memiliki 504 arca Buddha, 2.672 panel relief, dan diakui UNESCO sebagai Warisan Dunia sejak 1991."},
  {q:"Laut manakah yang memisahkan Pulau Jawa dan Pulau Sumatera dan menjadi jalur pelayaran penting?",o:["Selat Sunda","Selat Malaka","Selat Lombok","Selat Bali"],a:0,
   exp:"Selat Sunda memisahkan Jawa dan Sumatera, terkenal sebagai lokasi meletusnya Gunung Krakatau 1883. Selat ini juga jalur utama pelayaran internasional dari Samudra Hindia ke Laut Jawa."},
  {q:"Lagu daerah 'Ampar-Ampar Pisang' berasal dari provinsi mana di Indonesia?",o:["Kalimantan Selatan","Kalimantan Timur","Sulawesi Selatan","Sumatera Selatan"],a:0,
   exp:"Ampar-Ampar Pisang adalah lagu tradisional Banjar dari Kalimantan Selatan. Lagu ini menceritakan anak-anak yang menjemur pisang di atas tikar pandan sambil bermain."},
];

/* ══════════════════════════════════════════
   BACKGROUND MUSIC
══════════════════════════════════════════ */
const BGM=(()=>{
  let audio=null,vol=0.32,enabled=true,ducked=false;
  function ensure(){
    if(!audio){
      audio=document.getElementById('bgm-audio');
      if(!audio){audio=document.createElement('audio');audio.id='bgm-audio';audio.loop=true;audio.src='./musik.mp3';document.body.appendChild(audio);}
      audio.volume=enabled?vol:0;
      audio.addEventListener('error',()=>{});
      audio.addEventListener('canplaythrough',()=>{if(enabled&&audio.paused)audio.play().catch(()=>{});});
    }
    return audio;
  }
  function play(){if(!enabled)return;const a=ensure();if(a.paused)a.play().catch(()=>{});}
  function duck(){const a=ensure();if(enabled){ducked=true;a.volume=Math.min(a.volume,0.05);}}
  function restore(){if(!audio)return;ducked=false;if(enabled)audio.volume=vol;}
  function setEnabled(on){enabled=on;const a=ensure();if(on){a.volume=vol;a.play().catch(()=>{});}else a.pause();}
  function stop(){if(audio){audio.pause();audio.currentTime=0;}}
  return{play,duck,restore,setEnabled,stop};
})();

/* ══════════════════════════════════════════
   SOUND ENGINE
══════════════════════════════════════════ */
const Snd=(()=>{
  let AC=null,on=true;
  function ctx(){if(!AC)AC=new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();return AC;}
  function osc(f,d,type,vol,delay){if(!on)return;try{const c=ctx(),t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=type||'sine';o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.13,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.start(t);o.stop(t+d+.05);}catch(e){}}
  function sw(f1,f2,d,type,vol,delay){if(!on)return;try{const c=ctx(),t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.type=type||'sine';o.frequency.setValueAtTime(f1,t);o.frequency.linearRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol||.11,t+.02);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.start(t);o.stop(t+d+.05);}catch(e){}}
  return{
    isOn(){return on;},
    toggle(){on=!on;return on;},
    click(){osc(660,.055,'sine',.07);},
    correct(){BGM.duck();[523,659,784].forEach((f,i)=>osc(f,.15,'sine',.15,i*.08));osc(1047,.32,'sine',.12,.25);sw(400,950,.16,'sine',.08,.38);setTimeout(()=>BGM.restore(),900);},
    wrong(){BGM.duck();sw(280,110,.15,'sawtooth',.2);osc(110,.45,'sawtooth',.14,.14);setTimeout(()=>BGM.restore(),900);},
    tick(){osc(1100,.04,'square',.05);},
    tickW(){osc(880,.07,'sine',.11);},
    tickD(){osc(660,.09,'sine',.17);},
    timeUp(){BGM.duck();sw(350,160,.18,'square',.22);osc(130,.45,'sawtooth',.15,.18);setTimeout(()=>BGM.restore(),1200);},
    move(){[700,540].forEach((f,i)=>osc(f,.07,'sine',.09,i*.04));},
    select(){sw(440,700,.1,'sine',.1);},
    ready(){[440,554,659,880].forEach((f,i)=>osc(f,.15,'sine',.16,i*.08));},
    cd(n){const f=[0,349,415,494,587];osc(f[n]||494,.22,'sine',.2);if(n===0)[523,659,784,1047].forEach((v,i)=>osc(v,.16,'sine',.18,i*.08));},
    win(){BGM.duck();[523,659,784,659,784,1047,784,1047,1319,1047,1319,1568].forEach((f,i)=>osc(f,.16,'sine',.18,i*.095));[523,659,784,880,1047].forEach((f,i)=>osc(f,.3,'triangle',.08,i*.075+.06));setTimeout(()=>BGM.stop(),2000);},
    lose(){sw(440,220,.3,'sine',.15);osc(196,.5,'sawtooth',.1,.3);},
    fall(){BGM.duck();sw(400,80,.5,'sawtooth',.18);osc(75,.7,'sawtooth',.12,.5);setTimeout(()=>BGM.restore(),1200);},
    cozyStep(){osc(523,.1,'sine',.1);osc(659,.1,'sine',.08,.12);},
    siap(){[440,554,659,880].forEach((f,i)=>osc(f,.12,'sine',.12,i*.06));},
    finish(){BGM.duck();[523,659,784,1047,1319].forEach((f,i)=>osc(f,.2,'sine',.2,i*.1));setTimeout(()=>BGM.stop(),1800);},
  };
})();

/* ══════════════════════════════════════════
   ARENA CANVAS
══════════════════════════════════════════ */
const Arena=(()=>{
  let cv,cx,W=0,H=0,raf=null,time=0;
  let snap={
    mode:1,
    p1:{score:0,name:'P1',pulling:true,state:'pull'},
    p2:{score:0,name:'P2',pulling:true,state:'pull'},
    t1:{score:0,players:[],pi:0,state:'pull'},
    t2:{score:0,players:[],pi:0,state:'pull'},
    over:false,fallenSide:null,fallProgress:0,
    lastCheer:'none',cheerTime:0,
    p1color:'#F97316',p1dark:'#C2410C',
    p2color:'#1E40AF',p2dark:'#1E3A8A',
    t1color:'#F97316',t1dark:'#C2410C',
    t2color:'#1E40AF',t2dark:'#1E3A8A',
  };

  function init(){cv=document.getElementById('arena-canvas');cx=cv.getContext('2d');resize();}
  function resize(){
    const w=document.getElementById('arena');if(!w)return;
    W=w.offsetWidth;H=w.offsetHeight;
    const dpr=window.devicePixelRatio||1;
    cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';
    cx.scale(dpr,dpr);
  }
  function setSnap(s){snap=Object.assign({},snap,s);}
  function startLoop(){if(raf)return;(function loop(ts){time=ts*.001;if(snap.fallenSide&&snap.fallProgress<1)snap.fallProgress=Math.min(1,snap.fallProgress+.018);draw();raf=requestAnimationFrame(loop);})(0);}
  function stopLoop(){if(raf){cancelAnimationFrame(raf);raf=null;}}

  // ── Stars ──
  const STARS=Array.from({length:32},(_,i)=>({x:Math.random()*.95+.025,y:Math.random()*.38,s:Math.random()*1.4+.5,ph:Math.random()*Math.PI*2}));

  // ── BACKGROUND ──
  function drawBG(mode){
    if(mode===3){drawCozyBG();return;}
    // Night sky
    const sky=cx.createLinearGradient(0,0,0,H*.5);
    sky.addColorStop(0,'#070B1A');sky.addColorStop(.5,'#0C1852');sky.addColorStop(1,'#1E3A8A');
    cx.fillStyle=sky;cx.fillRect(0,0,W,H*.5);
    // Stars
    STARS.forEach((st,i)=>{
      const flicker=.45+.35*Math.sin(time*1.8+st.ph);
      cx.globalAlpha=flicker;cx.fillStyle='#FFFFFF';
      cx.beginPath();cx.arc(st.x*W,st.y*H,st.s,0,Math.PI*2);cx.fill();
    });
    cx.globalAlpha=1;
    // Moon glow
    const moonGlow=cx.createRadialGradient(W*.88,H*.14,2,W*.88,H*.14,W*.06);
    moonGlow.addColorStop(0,'rgba(254,243,199,.4)');moonGlow.addColorStop(1,'transparent');
    cx.fillStyle=moonGlow;cx.fillRect(0,0,W,H*.3);
    cx.fillStyle='#FEF3C7';cx.beginPath();cx.arc(W*.88,H*.14,W*.019,0,Math.PI*2);cx.fill();
    cx.fillStyle='#0C1852';cx.beginPath();cx.arc(W*.893,H*.108,W*.014,0,Math.PI*2);cx.fill();
    // Ground gradient
    const gnd=cx.createLinearGradient(0,H*.5,0,H);
    gnd.addColorStop(0,'#14532D');gnd.addColorStop(.3,'#15803D');gnd.addColorStop(.7,'#166534');gnd.addColorStop(1,'#0F2E1A');
    cx.fillStyle=gnd;cx.fillRect(0,H*.5,W,H*.5);
    // Ground highlight edge
    cx.fillStyle='rgba(74,222,128,.28)';cx.fillRect(0,H*.5,W,3);
    // Grass tufts
    for(let i=0;i<12;i++){const gx=W*(i/12+.04);const gy=H*.5;cx.strokeStyle='rgba(74,222,128,.4)';cx.lineWidth=1.5;cx.beginPath();cx.moveTo(gx,gy);cx.lineTo(gx-3,gy-6);cx.moveTo(gx+3,gy);cx.lineTo(gx+5,gy-8);cx.stroke();}
    // Atmospheric haze at horizon
    const haze=cx.createLinearGradient(0,H*.44,0,H*.56);
    haze.addColorStop(0,'transparent');haze.addColorStop(.5,'rgba(30,58,138,.15)');haze.addColorStop(1,'transparent');
    cx.fillStyle=haze;cx.fillRect(0,H*.44,W,H*.12);
  }

  // ── COZY BACKGROUND ──
  function drawCozyBG(){
    // Sunny sky
    const sky=cx.createLinearGradient(0,0,0,H*.5);
    sky.addColorStop(0,'#BAE6FD');sky.addColorStop(1,'#FDE68A');
    cx.fillStyle=sky;cx.fillRect(0,0,W,H*.5);
    // Sun
    cx.fillStyle='#FCD34D';cx.beginPath();cx.arc(W*.14,H*.15,W*.03+Math.sin(time)*.002*W,0,Math.PI*2);cx.fill();
    const sunGlow=cx.createRadialGradient(W*.14,H*.15,0,W*.14,H*.15,W*.08);
    sunGlow.addColorStop(0,'rgba(252,211,77,.3)');sunGlow.addColorStop(1,'transparent');
    cx.fillStyle=sunGlow;cx.fillRect(0,0,W*.25,H*.35);
    // Clouds
    [[.3,.12,.09],[.55,.08,.07],[.75,.16,.06]].forEach(([cx2,cy,r],i)=>{
      const bob=Math.sin(time*.4+i)*.008;
      cx.fillStyle='rgba(255,255,255,.85)';
      cx.beginPath();cx.arc(cx2*W,(cy+bob)*H,r*W,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.arc((cx2+r*.8)*W,(cy+bob+r*.2)*H,r*.7*W,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.arc((cx2-r*.6)*W,(cy+bob+r*.3)*H,r*.6*W,0,Math.PI*2);cx.fill();
    });
    // Ground
    const gnd=cx.createLinearGradient(0,H*.5,0,H);
    gnd.addColorStop(0,'#86EFAC');gnd.addColorStop(.4,'#4ADE80');gnd.addColorStop(1,'#16A34A');
    cx.fillStyle=gnd;cx.fillRect(0,H*.5,W,H*.5);
    // Path
    const pathW=W*.14,pathY=H*.5,pathH=H*.4;
    const pathGrad=cx.createLinearGradient(0,pathY,0,pathY+pathH);
    pathGrad.addColorStop(0,'#D4A96A');pathGrad.addColorStop(1,'#A0834C');
    cx.fillStyle=pathGrad;
    cx.beginPath();cx.moveTo(W*.1,pathY);cx.lineTo(W*.9,pathY);cx.lineTo(W*.9+pathW*.3,pathY+pathH);cx.lineTo(W*.1-pathW*.3,pathY+pathH);cx.closePath();cx.fill();
    // Path dashes
    cx.strokeStyle='rgba(255,255,255,.4)';cx.lineWidth=2;cx.setLineDash([10,12]);
    cx.beginPath();cx.moveTo(W*.5,pathY);cx.lineTo(W*.5,pathY+pathH);cx.stroke();cx.setLineDash([]);
    // Trees
    [[.04,.48],[.06,.52],[.94,.48],[.96,.52],[.25,.45],[.72,.45]].forEach(([tx,ty],i)=>{
      const sway=Math.sin(time*1.2+i)*.018;
      cx.fillStyle='#4A5568';cx.beginPath();cx.roundRect(tx*W-3,ty*H,6,H*.06,2);cx.fill();
      cx.fillStyle=['#16A34A','#15803D','#166534'][i%3];
      cx.save();cx.translate(tx*W,ty*H);cx.rotate(sway);
      cx.beginPath();cx.moveTo(0,0);cx.lineTo(-W*.025,-H*.06);cx.lineTo(W*.025,-H*.06);cx.closePath();cx.fill();
      cx.beginPath();cx.moveTo(0,-H*.04);cx.lineTo(-W*.018,-H*.1);cx.lineTo(W*.018,-H*.1);cx.closePath();cx.fill();
      cx.restore();
    });
    // Flowers
    [[.15,.64],[.2,.68],[.78,.63],[.82,.68]].forEach(([fx,fy])=>{
      cx.fillStyle='#FCA5A5';cx.beginPath();cx.arc(fx*W,fy*H,4,0,Math.PI*2);cx.fill();
      cx.fillStyle='#FBBF24';cx.beginPath();cx.arc(fx*W,fy*H,2,0,Math.PI*2);cx.fill();
    });
  }

  // ── CROWD ──
  const CROWD_DATA=(()=>{
    const left=[],right=[];
    const lColors=['#EF4444','#FBBF24','#06B6D4','#8B5CF6','#F97316','#EC4899','#10B981','#EF4444','#FBBF24','#06B6D4','#8B5CF6','#F97316','#EC4899','#10B981','#84CC16'];
    const rColors=['#3B82F6','#6366F1','#10B981','#F59E0B','#EF4444','#06B6D4','#8B5CF6','#3B82F6','#6366F1','#10B981','#F59E0B','#EF4444','#06B6D4','#8B5CF6','#84CC16'];
    const skins=['#C68642','#D4A07A','#8B5E3C','#E8C39E','#B5713A','#C68642'];
    const hairs=['#1C0700','#3B1F0A','#111','#2D1B0A','#1C0700','#3B1F0A'];
    for(let i=0;i<15;i++){left.push({x:.015+i*.045,h:.18+Math.sin(i*2.3)*.04,col:lColors[i],skin:skins[i%6],hair:hairs[i%6],ph:i*.7,sign:i%4===0});} 
    for(let i=0;i<15;i++){right.push({x:.62+i*.025,h:.18+Math.sin(i*1.9)*.04,col:rColors[i],skin:skins[(i+2)%6],hair:hairs[(i+1)%6],ph:i*.85+1,sign:i%4===1});}
    return{left,right};
  })();

  function drawCrowd(){
    const cheerSide=snap.lastCheer;
    const cheerIntensity=Math.max(0,1-(time-snap.cheerTime)*.8);
    function drawPerson(sx,hf,color,skin,hair,ph,isSign,side){
      const cheer=(side==='left'&&cheerSide==='left')||(side==='right'&&cheerSide==='right');
      const ci=cheer?cheerIntensity:0;
      const bob=Math.sin(time*(2.8+ci*2)+ph)*(0.015+ci*.02);
      const ch=hf*H+bob*H,cy=H*.5-ch;
      const cx2=sx*W;
      const armUp=Math.sin(time*(3.5+ci*2)+ph*1.4)>.1;
      const excited=ci>.3;
      // shadow
      cx.fillStyle='rgba(0,0,0,.2)';cx.beginPath();cx.ellipse(cx2,H*.5+2,ch*.26,5,0,0,Math.PI*2);cx.fill();
      // body
      cx.fillStyle=color;cx.globalAlpha=.78+ci*.12;
      cx.beginPath();cx.roundRect(cx2-ch*.19,cy,ch*.38,ch*.75,5);cx.fill();
      // shirt detail
      cx.fillStyle='rgba(255,255,255,.12)';cx.beginPath();cx.roundRect(cx2-ch*.14,cy,ch*.28,ch*.18,3);cx.fill();
      // head
      cx.fillStyle=skin;cx.beginPath();cx.arc(cx2,cy-ch*.15,ch*.17,0,Math.PI*2);cx.fill();
      // hair
      cx.fillStyle=hair;cx.beginPath();cx.arc(cx2,cy-ch*.24,ch*.14,Math.PI,0,false);cx.fill();
      // expression
      if(excited){
        // excited eyes
        cx.fillStyle='white';
        cx.beginPath();cx.ellipse(cx2-ch*.05,cy-ch*.12,ch*.05,ch*.05,0,0,Math.PI*2);cx.fill();
        cx.beginPath();cx.ellipse(cx2+ch*.05,cy-ch*.12,ch*.05,ch*.05,0,0,Math.PI*2);cx.fill();
        cx.fillStyle='#111';cx.beginPath();cx.arc(cx2-ch*.05,cy-ch*.12,ch*.025,0,Math.PI*2);cx.fill();
        cx.beginPath();cx.arc(cx2+ch*.05,cy-ch*.12,ch*.025,0,Math.PI*2);cx.fill();
        // open mouth / smile
        cx.fillStyle='#111';cx.beginPath();cx.arc(cx2,cy-ch*.06,ch*.04,.1,Math.PI-.1,false);cx.fill();
      } else {
        // normal eyes
        cx.fillStyle='white';
        cx.beginPath();cx.ellipse(cx2-ch*.045,cy-ch*.12,ch*.04,ch*.04,0,0,Math.PI*2);cx.fill();
        cx.beginPath();cx.ellipse(cx2+ch*.045,cy-ch*.12,ch*.04,ch*.04,0,0,Math.PI*2);cx.fill();
        cx.fillStyle='#333';cx.beginPath();cx.arc(cx2-ch*.045,cy-ch*.12,ch*.02,0,Math.PI*2);cx.fill();
        cx.beginPath();cx.arc(cx2+ch*.045,cy-ch*.12,ch*.02,0,Math.PI*2);cx.fill();
      }
      // arms
      cx.strokeStyle=color;cx.lineWidth=Math.max(2,ch*.07);cx.lineCap='round';
      if(armUp){
        cx.globalAlpha=.7+ci*.2;
        cx.beginPath();cx.moveTo(cx2-ch*.19,cy+ch*.22);cx.lineTo(cx2-ch*.35,cy-ch*.04);cx.stroke();
        cx.beginPath();cx.moveTo(cx2+ch*.19,cy+ch*.22);cx.lineTo(cx2+ch*.35,cy-ch*.04);cx.stroke();
        cx.fillStyle=skin;cx.globalAlpha=.85;
        cx.beginPath();cx.arc(cx2-ch*.35,cy-ch*.08,ch*.07,0,Math.PI*2);cx.fill();
        cx.beginPath();cx.arc(cx2+ch*.35,cy-ch*.08,ch*.07,0,Math.PI*2);cx.fill();
        // sign if applicable
        if(isSign){
          cx.fillStyle=excited?'#FBBF24':'rgba(255,255,255,.8)';
          cx.beginPath();cx.roundRect(cx2+ch*.28,-cy*.05+H*.32,ch*.38,ch*.22,3);cx.fill();
          cx.fillStyle='#111';cx.font=`bold ${ch*.12}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
          cx.fillText('GO!',cx2+ch*.47,-cy*.05+H*.32+ch*.11);
        }
      } else {
        cx.globalAlpha=.55;
        cx.beginPath();cx.moveTo(cx2-ch*.19,cy+ch*.22);cx.lineTo(cx2-ch*.3,cy+ch*.42);cx.stroke();
        cx.beginPath();cx.moveTo(cx2+ch*.19,cy+ch*.22);cx.lineTo(cx2+ch*.3,cy+ch*.42);cx.stroke();
      }
      cx.globalAlpha=1;
      // legs/shoes
      cx.fillStyle='#1F2937';
      cx.beginPath();cx.roundRect(cx2-ch*.14,cy+ch*.74,ch*.12,ch*.18,2);cx.fill();
      cx.beginPath();cx.roundRect(cx2+ch*.02,cy+ch*.74,ch*.12,ch*.18,2);cx.fill();
      cx.fillStyle='#111';
      cx.beginPath();cx.ellipse(cx2-ch*.08,H*.5,ch*.1,ch*.05,0,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.ellipse(cx2+ch*.08,H*.5,ch*.1,ch*.05,0,0,Math.PI*2);cx.fill();
    }
    CROWD_DATA.left.forEach(p=>drawPerson(p.x,p.h,p.col,p.skin,p.hair,p.ph,p.sign,'left'));
    CROWD_DATA.right.forEach(p=>drawPerson(p.x,p.h,p.col,p.skin,p.hair,p.ph,p.sign,'right'));
  }

  // ── FLAG ──
  function drawFlag(fx){
    const py=H*.5,ph=H*.28;
    // pole shadow
    cx.fillStyle='rgba(0,0,0,.25)';cx.beginPath();cx.roundRect(fx+3,py-ph,5,ph+2,2);cx.fill();
    cx.strokeStyle='#92400E';cx.lineWidth=5;cx.lineCap='round';
    cx.beginPath();cx.moveTo(fx,py);cx.lineTo(fx,py-ph);cx.stroke();
    const wave=Math.sin(time*3.8)*.07;
    const fw=W*.052,fh=H*.105;
    cx.save();cx.translate(fx,py-ph);
    // Red
    cx.fillStyle='#DC2626';cx.beginPath();cx.moveTo(0,0);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*.1,fw,0);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*.65,fw,fh*.5);
    cx.lineTo(0,fh*.5);cx.closePath();cx.fill();
    // White
    cx.fillStyle='#fff';cx.beginPath();cx.moveTo(0,fh*.5);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*.62,fw,fh*.5);
    cx.quadraticCurveTo(fw*.5+wave*W,fh*1.12,fw,fh);
    cx.lineTo(0,fh);cx.closePath();cx.fill();
    // shine
    cx.fillStyle='rgba(255,255,255,.08)';cx.beginPath();cx.moveTo(0,0);cx.lineTo(fw,0);cx.lineTo(fw,fh);cx.lineTo(0,fh);cx.closePath();cx.fill();
    cx.restore();
  }

  // ── ROPE ──
  function drawRope(x1,y,x2){
    const tension=Math.abs(snap.p1?snap.p1.score-snap.p2?.score:0)/20;
    const sag=Math.max(4,(x2-x1)*.05*(1-tension*.5)+Math.sin(time*4.5)*(x2-x1)*.008);
    const mx=(x1+x2)/2,my=y+sag;
    // thick shadow rope
    cx.shadowColor='rgba(0,0,0,.4)';cx.shadowBlur=8;cx.shadowOffsetY=4;
    cx.strokeStyle='#7C3A1A';cx.lineWidth=11;cx.lineCap='round';
    cx.beginPath();cx.moveTo(x1,y);cx.quadraticCurveTo(mx,my,x2,y);cx.stroke();
    cx.shadowColor='transparent';cx.shadowBlur=0;cx.shadowOffsetY=0;
    // base rope
    cx.strokeStyle='#92400E';cx.lineWidth=9;
    cx.beginPath();cx.moveTo(x1,y);cx.quadraticCurveTo(mx,my,x2,y);cx.stroke();
    // strand overlay
    cx.strokeStyle='#A16207';cx.lineWidth=6;
    cx.beginPath();cx.moveTo(x1,y);cx.quadraticCurveTo(mx,my,x2,y);cx.stroke();
    // highlight strand
    cx.strokeStyle='rgba(245,158,11,.55)';cx.lineWidth=2.5;cx.setLineDash([8,7]);
    cx.beginPath();cx.moveTo(x1,y-1.5);cx.quadraticCurveTo(mx,my-1.5,x2,y-1.5);cx.stroke();
    cx.setLineDash([]);
    // grip marks every 20px
    const steps=Math.floor((x2-x1)/20);
    for(let i=1;i<steps;i++){
      const t2=i/steps;
      const gx=x1*(1-t2)+x2*t2;
      const gy=y*(1-t2)+y*t2+sag*(1-(2*t2-1)**2); // quad approx
      cx.strokeStyle='rgba(0,0,0,.22)';cx.lineWidth=1.5;cx.setLineDash([]);
      cx.beginPath();cx.moveTo(gx-2,gy-4);cx.lineTo(gx+2,gy+4);cx.stroke();
    }
  }

  // ── DUST CLOUD ──
  function drawDust(x,y,progress){
    if(progress<.1)return;
    const numPuffs=8;
    for(let i=0;i<numPuffs;i++){
      const ang=((i/numPuffs)*Math.PI*2)+progress*.5;
      const dist=progress*H*.06*(1+i*.3);
      const dx=x+Math.cos(ang)*dist;
      const dy=y+Math.sin(ang)*dist*.4;
      const r=H*.025*(1-progress*.5);
      cx.globalAlpha=(1-progress)*.4;
      cx.fillStyle='#E5E7EB';
      cx.beginPath();cx.arc(dx,dy,r,0,Math.PI*2);cx.fill();
    }
    cx.globalAlpha=1;
  }

  // ── HUMAN (front-facing, for mode 1) ──
  function drawHuman(x,y,teamColor,darkColor,skinTone,hairColor,flip,state,idx){
    cx.save();cx.translate(x,y);if(flip)cx.scale(-1,1);
    const s=1;
    const pulling=state==='pull';
    const fallen=state==='fall';
    const winning=state==='win';
    const correct=state==='correct';
    const wrong=state==='wrong';
    const lean=pulling?Math.sin(time*4.2+idx)*.055:0;
    const armA=pulling?Math.abs(Math.sin(time*4.2+idx)):0;
    const legA=pulling?Math.sin(time*4.2+idx)*.2:0;
    if(!fallen)cx.rotate(lean);
    else{const fa=snap.fallProgress*1.45;cx.rotate(fa);}

    // Shadow
    if(!fallen){cx.fillStyle='rgba(0,0,0,.22)';cx.beginPath();cx.ellipse(0,96*s,23*s,6*s,0,0,Math.PI*2);cx.fill();}

    // LEGS
    cx.save();cx.translate(-7*s,76*s);cx.rotate(-legA);
    cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-6*s,0,12*s,23*s,3*s);cx.fill();
    cx.fillStyle='#111827';cx.beginPath();cx.roundRect(-8*s,20*s,17*s,9*s,5*s);cx.fill();cx.restore();
    cx.save();cx.translate(7*s,76*s);cx.rotate(legA);
    cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-5*s,0,12*s,23*s,3*s);cx.fill();
    cx.fillStyle='#111827';cx.beginPath();cx.roundRect(-7*s,20*s,15*s,9*s,5*s);cx.fill();cx.restore();

    // BODY
    cx.save();cx.translate(0,46*s);
    cx.fillStyle=darkColor;cx.beginPath();cx.roundRect(-20*s,-2*s,40*s,33*s,6*s);cx.fill();
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-19*s,0,38*s,30*s,5*s);cx.fill();
    cx.fillStyle='rgba(255,255,255,.14)';cx.beginPath();cx.roundRect(-17*s,0,34*s,8*s,4*s);cx.fill();
    cx.fillStyle='rgba(255,255,255,.24)';cx.beginPath();cx.roundRect(-7*s,9*s,14*s,13*s,3*s);cx.fill();
    cx.fillStyle='rgba(255,255,255,.8)';cx.font=`bold ${11*s}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
    cx.fillText(idx+1,0,17*s);
    cx.fillStyle='rgba(0,0,0,.32)';cx.fillRect(-19*s,27*s,38*s,5*s);
    cx.fillStyle='#D97706';cx.beginPath();cx.roundRect(-5*s,27*s,10*s,5*s,2*s);cx.fill();cx.restore();

    // ARMS
    const rAng=(-36-armA*30)*(Math.PI/180);
    cx.save();cx.translate(19*s,49*s);cx.rotate(rAng);
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-5*s,0,12*s,19*s,4*s);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-5*s,14*s,12*s,11*s,4*s);cx.fill();cx.restore();
    const lAng=(26+armA*16)*(Math.PI/180);
    cx.save();cx.translate(-19*s,51*s);cx.rotate(lAng);
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-5*s,0,12*s,17*s,4*s);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-5*s,12*s,12*s,10*s,4*s);cx.fill();cx.restore();

    // HEAD
    cx.save();cx.translate(0,3*s);
    // neck
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-6*s,40*s,12*s,8*s,2*s);cx.fill();
    // head
    cx.fillStyle=skinTone==='#C68642'?'#A0673A':(skinTone==='#D4A07A'?'#B8825C':'#8B5E3C');
    cx.beginPath();cx.roundRect(-20*s,2*s,40*s,40*s,7*s);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-19*s,4*s,38*s,38*s,6*s);cx.fill();
    // hair
    cx.fillStyle=hairColor;
    cx.beginPath();cx.roundRect(-19*s,4*s,38*s,11*s,6*s);cx.fill();
    cx.beginPath();cx.roundRect(-20*s,6*s,6*s,15*s,3*s);cx.fill();
    cx.beginPath();cx.roundRect(14*s,6*s,6*s,15*s,3*s);cx.fill();
    // eyebrows - expressive
    const browFurrow=pulling?.08:(wrong?.12:0);
    const browRaise=correct?.05:(winning?.05:0);
    cx.fillStyle=hairColor==='#1C0700'?'#3B1F0A':'#2D1B0A';
    cx.save();cx.translate(-11*s,17*s);cx.rotate(browFurrow-browRaise);cx.beginPath();cx.roundRect(-5*s,-2*s,11*s,3.5*s,2*s);cx.fill();cx.restore();
    cx.save();cx.translate(11*s,17*s);cx.rotate(-(browFurrow-browRaise));cx.beginPath();cx.roundRect(-5*s,-2*s,11*s,3.5*s,2*s);cx.fill();cx.restore();
    // eyes
    if(fallen){// X eyes
      cx.strokeStyle='#111';cx.lineWidth=2;
      cx.beginPath();cx.moveTo(-15*s,19*s);cx.lineTo(-9*s,26*s);cx.moveTo(-9*s,19*s);cx.lineTo(-15*s,26*s);cx.stroke();
      cx.beginPath();cx.moveTo(4*s,19*s);cx.lineTo(10*s,26*s);cx.moveTo(10*s,19*s);cx.lineTo(4*s,26*s);cx.stroke();
    } else {
      cx.fillStyle='white';
      cx.beginPath();cx.roundRect(-16*s,19*s,12*s,11*s,3*s);cx.fill();
      cx.beginPath();cx.roundRect(4*s,19*s,12*s,11*s,3*s);cx.fill();
      const eyeW=correct?6:4,eyeH=correct?6:4.5;
      cx.fillStyle='#1E3A8A';
      cx.beginPath();cx.arc(-10*s,24*s,eyeW*.6*s,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.arc(10*s,24*s,eyeH*.6*s,0,Math.PI*2);cx.fill();
      cx.fillStyle='#111';
      cx.beginPath();cx.arc(-10*s,24*s,(wrong?3:2.5)*s,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.arc(10*s,24*s,(wrong?3:2.5)*s,0,Math.PI*2);cx.fill();
      cx.fillStyle='rgba(255,255,255,.82)';
      cx.beginPath();cx.arc(-9*s,22*s,1.4*s,0,Math.PI*2);cx.fill();
      cx.beginPath();cx.arc(11*s,22*s,1.4*s,0,Math.PI*2);cx.fill();
    }
    // nose
    cx.strokeStyle='rgba(0,0,0,.2)';cx.lineWidth=1.6;cx.lineCap='round';
    cx.beginPath();cx.moveTo(-3*s,28*s);cx.lineTo(-4*s,33*s);cx.lineTo(4*s,33*s);cx.stroke();
    // mouth
    cx.strokeStyle='rgba(0,0,0,.38)';cx.lineWidth=2.2;
    if(pulling){cx.beginPath();cx.moveTo(-9*s,37*s);cx.quadraticCurveTo(0,39*s,9*s,37*s);cx.stroke();cx.fillStyle='rgba(255,255,255,.5)';cx.beginPath();cx.roundRect(-7*s,36*s,14*s,3.5*s,2*s);cx.fill();}
    else if(winning||correct){cx.beginPath();cx.arc(0,35*s,7*s,.2,Math.PI-.2,false);cx.stroke();}
    else if(wrong||fallen){cx.beginPath();cx.arc(0,39*s,5*s,Math.PI-.2,.2+Math.PI,false);cx.stroke();}
    else{cx.beginPath();cx.arc(0,35*s,5*s,.2,Math.PI-.2,false);cx.stroke();}
    // blush
    cx.fillStyle='rgba(220,100,80,.18)';
    cx.beginPath();cx.ellipse(-16*s,31*s,6*s,4*s,0,0,Math.PI*2);cx.fill();
    cx.beginPath();cx.ellipse(16*s,31*s,6*s,4*s,0,0,Math.PI*2);cx.fill();
    // winning fist pump
    if(winning){
      cx.fillStyle=skinTone;
      cx.beginPath();cx.arc(25*s,-20*s,8*s,0,Math.PI*2);cx.fill();
      cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(19*s,-15*s,12*s,14*s,4*s);cx.fill();
      cx.strokeStyle='#FBBF24';cx.lineWidth=2;cx.beginPath();cx.arc(25*s,-22*s,12*s,.2,-.5);cx.stroke();
    }
    cx.restore();
    cx.restore();
  }

  // ── HUMAN SIDE (for mode 2) ──
  function drawHumanSide(x,y,teamColor,darkColor,skinTone,hairColor,faceRight,state,idx){
    cx.save();cx.translate(x,y);if(!faceRight)cx.scale(-1,1);
    const pulling=state==='pull';
    const fallen=state==='fall';
    const winning=state==='win';
    const correct=state==='correct';
    const wrong=state==='wrong';
    const lean=pulling?Math.abs(Math.sin(time*4.2+idx))*.14:.02;
    const legA=pulling?Math.sin(time*4.2+idx)*.24:0;
    if(!fallen)cx.rotate(-lean);
    else{const fa=snap.fallProgress*1.5;cx.rotate(faceRight?fa:-fa);}

    cx.fillStyle='rgba(0,0,0,.18)';cx.beginPath();cx.ellipse(0,5,19,5,0,0,Math.PI*2);cx.fill();

    // LEGS
    cx.save();cx.translate(-4,-22);cx.rotate(-legA);
    cx.fillStyle='#1F2937';cx.beginPath();cx.roundRect(-5,0,10,25,3);cx.fill();
    cx.fillStyle='#111';cx.beginPath();cx.roundRect(-3,22,17,9,4);cx.fill();cx.restore();
    cx.save();cx.translate(4,-22);cx.rotate(legA*.85);
    cx.fillStyle='#374151';cx.beginPath();cx.roundRect(-4,0,10,25,3);cx.fill();
    cx.fillStyle='#111';cx.beginPath();cx.roundRect(-2,22,16,9,4);cx.fill();cx.restore();

    // BODY
    cx.save();cx.translate(0,-25);cx.rotate(-lean*.28);
    cx.fillStyle=darkColor;cx.beginPath();cx.roundRect(-14,-34,28,36,6);cx.fill();
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-13,-32,26,33,5);cx.fill();
    cx.fillStyle='rgba(255,255,255,.13)';cx.beginPath();cx.roundRect(-12,-32,24,8,3);cx.fill();
    cx.fillStyle='rgba(255,255,255,.2)';cx.beginPath();cx.roundRect(-5,-22,10,11,3);cx.fill();
    cx.fillStyle='rgba(255,255,255,.75)';cx.font=`bold 9px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
    cx.fillText(idx+1,0,-16);
    cx.fillStyle='rgba(0,0,0,.3)';cx.fillRect(-13,-4,26,5);
    cx.fillStyle='#D97706';cx.beginPath();cx.roundRect(-4,-4,8,5,2);cx.fill();cx.restore();

    // ROPE ARM
    const rArmAng=(-36-Math.abs(Math.sin(time*4.2+idx))*32)*(Math.PI/180);
    cx.save();cx.translate(12,-52);cx.rotate(rArmAng);
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-4,0,10,21,4);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-4,16,10,11,4);cx.fill();cx.restore();
    // OTHER ARM
    cx.save();cx.translate(-10,-50);cx.rotate(26*(Math.PI/180));
    cx.fillStyle=teamColor;cx.beginPath();cx.roundRect(-4,0,10,19,4);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-4,14,10,10,4);cx.fill();cx.restore();

    // HEAD
    cx.save();cx.translate(2,-72);
    cx.fillStyle=skinTone==='#C68642'?'#A0673A':'#B8825C';
    cx.beginPath();cx.roundRect(-13,-2,28,28,6);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-12,0,26,25,5);cx.fill();
    cx.fillStyle=hairColor;cx.beginPath();cx.roundRect(-12,0,26,8,5);cx.fill();
    // side eye
    if(fallen){cx.strokeStyle='#111';cx.lineWidth=2;cx.beginPath();cx.moveTo(5,7);cx.lineTo(13,15);cx.moveTo(13,7);cx.lineTo(5,15);cx.stroke();}
    else if(correct||winning){cx.fillStyle='white';cx.beginPath();cx.roundRect(5,7,11,9,3);cx.fill();cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(11,12,4.5,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(11,12,2.5,0,Math.PI*2);cx.fill();cx.fillStyle='rgba(255,255,255,.8)';cx.beginPath();cx.arc(12,10,1.2,0,Math.PI*2);cx.fill();}
    else{cx.fillStyle='white';cx.beginPath();cx.roundRect(5,7,10,8,2.5);cx.fill();cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(10,11,3.5,0,Math.PI*2);cx.fill();cx.fillStyle='#111';cx.beginPath();cx.arc(10,11,2,0,Math.PI*2);cx.fill();cx.fillStyle='rgba(255,255,255,.75)';cx.beginPath();cx.arc(11,10,1,0,Math.PI*2);cx.fill();}
    // mouth
    cx.strokeStyle='rgba(0,0,0,.32)';cx.lineWidth=1.6;
    if(pulling){cx.beginPath();cx.moveTo(5,20);cx.lineTo(14,21);cx.stroke();cx.fillStyle='rgba(255,255,255,.45)';cx.fillRect(5,19,9,3);}
    else if(winning||correct){cx.beginPath();cx.arc(9,20,5,.3,Math.PI-.3,false);cx.stroke();}
    else if(fallen){cx.beginPath();cx.arc(9,23,4,Math.PI-.3,.3+Math.PI,false);cx.stroke();}
    else{cx.beginPath();cx.moveTo(5,20);cx.quadraticCurveTo(9,22,14,20);cx.stroke();}
    cx.restore();
    cx.restore();
  }

  // ── WALKING HUMAN (cozy mode) ──
  function drawWalker(x,y,skinTone,hairColor,state){
    cx.save();cx.translate(x,y);
    const walk=Math.sin(time*4)*.2;
    const bounce=Math.abs(Math.sin(time*4))*.04;
    cx.translate(0,-bounce*H*.08);
    // shadow
    cx.fillStyle='rgba(0,0,0,.15)';cx.beginPath();cx.ellipse(0,4,16,4,0,0,Math.PI*2);cx.fill();
    // legs
    cx.fillStyle='#374151';cx.save();cx.translate(-4,-18);cx.rotate(walk);cx.beginPath();cx.roundRect(-4,0,8,20,3);cx.fill();cx.restore();
    cx.fillStyle='#1F2937';cx.save();cx.translate(4,-18);cx.rotate(-walk);cx.beginPath();cx.roundRect(-4,0,8,20,3);cx.fill();cx.restore();
    // shoes
    cx.fillStyle='#111';cx.beginPath();cx.ellipse(-4,3,8,4,walk,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(4,3,8,4,-walk,0,Math.PI*2);cx.fill();
    // body
    cx.fillStyle='#10B981';cx.beginPath();cx.roundRect(-12,-38,24,22,5);cx.fill();
    cx.fillStyle='rgba(255,255,255,.15)';cx.beginPath();cx.roundRect(-10,-38,20,6,3);cx.fill();
    // arms swing
    cx.fillStyle='#10B981';cx.save();cx.translate(-12,-32);cx.rotate(-walk*.6);cx.beginPath();cx.roundRect(-4,0,8,14,3);cx.fill();cx.restore();
    cx.fillStyle='#10B981';cx.save();cx.translate(12,-32);cx.rotate(walk*.6);cx.beginPath();cx.roundRect(-4,0,8,14,3);cx.fill();cx.restore();
    // head
    cx.fillStyle=skinTone==='#C68642'?'#A0673A':'#B8825C';cx.beginPath();cx.roundRect(-13,-62,26,26,6);cx.fill();
    cx.fillStyle=skinTone;cx.beginPath();cx.roundRect(-12,-60,24,24,5);cx.fill();
    cx.fillStyle=hairColor;cx.beginPath();cx.roundRect(-12,-60,24,8,5);cx.fill();
    // happy face
    cx.fillStyle='white';cx.beginPath();cx.ellipse(-5,-50,4,4.5,0,0,Math.PI*2);cx.fill();cx.beginPath();cx.ellipse(5,-50,4,4.5,0,0,Math.PI*2);cx.fill();
    cx.fillStyle='#1E3A8A';cx.beginPath();cx.arc(-5,-50,2.5,0,Math.PI*2);cx.fill();cx.beginPath();cx.arc(5,-50,2.5,0,Math.PI*2);cx.fill();
    cx.strokeStyle='rgba(0,0,0,.35)';cx.lineWidth=1.8;
    if(state==='win')cx.fillStyle='#16A34A';
    cx.beginPath();cx.arc(0,-44,5,.2,Math.PI-.2,false);cx.stroke();
    cx.restore();
  }

  // ── MAIN DRAW ──
  function draw(){
    cx.clearRect(0,0,W,H);
    drawBG(snap.mode);
    if(snap.mode===3){drawM3();}
    else{
      if(snap.mode!==3)drawCrowd();
      drawFlag(snap.mode===1?W*.5+Math.max(-W*.26,Math.min(W*.26,((snap.p1?.score||0)-(snap.p2?.score||0))/20*W*.22)):W*.5+Math.max(-W*.28,Math.min(W*.28,((snap.t1?.score||0)-(snap.t2?.score||0))/8*W*.24)));
      snap.mode===1?drawM1():drawM2();
    }
  }

  function drawM1(){
    const{p1,p2}=snap;
    const maxMov=W*.34;
    const x1=W*.1+(p1.score/20)*maxMov;
    const x2=W*.9-(p2.score/20)*maxMov;
    const cy=H*.32,ry=cy+H*.36;
    // rope between characters
    drawRope(x1+W*.045,ry,x2-W*.045);
    const skins=['#C68642','#D4A07A','#8B5E3C'];
    const hairs=['#1C0700','#3B1F0A','#2D1B0A'];
    // P1
    const p1state=snap.fallenSide==='left'?'fall':(p1.state||'pull');
    drawHuman(x1,cy,snap.p1color,snap.p1dark,skins[0],hairs[0],false,p1state,0);
    if(snap.fallenSide==='left')drawDust(x1,cy+H*.1,snap.fallProgress);
    // P2
    const p2state=snap.fallenSide==='right'?'fall':(p2.state||'pull');
    drawHuman(x2,cy,snap.p2color,snap.p2dark,skins[1],hairs[1],true,p2state,0);
    if(snap.fallenSide==='right')drawDust(x2,cy+H*.1,snap.fallProgress);
    // score in sky
    cx.font=`bold ${H*.1}px Bebas Neue,sans-serif`;cx.textAlign='center';
    cx.fillStyle='rgba(249,115,22,.45)';cx.fillText(p1.score,W*.07,H*.14);
    cx.fillStyle='rgba(96,165,250,.45)';cx.fillText(p2.score,W*.93,H*.14);
  }

  function drawM2(){
    const{t1,t2}=snap;
    const n1=t1.players.length,n2=t2.players.length;
    const areaW=W*.42;
    const gndY=H*.85;
    const sp1=Math.min(areaW/Math.max(n1,.8),W*.11);
    const sp2=Math.min(areaW/Math.max(n2,.8),W*.11);
    const rx1=W*.03+(n1-.3)*sp1+W*.02;
    const rx2=W*.97-(n2-.3)*sp2-W*.02;
    const ry=gndY-H*.35;
    drawRope(rx1,ry,rx2);
    const skins=['#C68642','#D4A07A','#8B5E3C','#C68642','#D4A07A','#8B5E3C'];
    const hairs=['#1C0700','#3B1F0A','#1C0700','#3B1F0A','#1C0700','#3B1F0A'];
    // T1 (left, orange)
    for(let i=0;i<n1;i++){
      const px=W*.03+(i+.5)*sp1;
      const isAct=!snap.over&&t1.pi===i;
      const tstate=snap.fallenSide==='left'?'fall':(isAct?(t1.state||'pull'):'idle');
      drawHumanSide(px,gndY,snap.t1color,snap.t1dark,skins[i%6],hairs[i%6],true,tstate,i);
    }
    // T2 (right, blue)
    for(let i=0;i<n2;i++){
      const px=W*.97-(i+.5)*sp2;
      const isAct=!snap.over&&t2.pi===i;
      const tstate=snap.fallenSide==='right'?'fall':(isAct?(t2.state||'pull'):'idle');
      drawHumanSide(px,gndY,snap.t2color,snap.t2dark,skins[(i+2)%6],hairs[(i+1)%6],false,tstate,i);
    }
    if(snap.fallenSide==='left')drawDust(W*.15,gndY-H*.1,snap.fallProgress);
    if(snap.fallenSide==='right')drawDust(W*.85,gndY-H*.1,snap.fallProgress);
    cx.font=`bold ${H*.09}px Bebas Neue,sans-serif`;cx.textAlign='center';
    cx.fillStyle='rgba(249,115,22,.45)';cx.fillText(t1.score,W*.04,H*.14);
    cx.fillStyle='rgba(96,165,250,.45)';cx.fillText(t2.score,W*.96,H*.14);
  }

  function drawM3(){
    // Cozy mode: path with character and finish line
    const progress=(snap.cozy?.correct||0)/(snap.cozy?.total||20);
    const pathY=H*.62;
    const pathStart=W*.1,pathEnd=W*.86;
    const charX=pathStart+(pathEnd-pathStart)*progress;
    // Path segment highlights (waypoints every 25%)
    [.25,.5,.75,1].forEach((wp,i)=>{
      const wx=pathStart+(pathEnd-pathStart)*wp;
      cx.fillStyle=progress>=wp?'rgba(16,185,129,.5)':'rgba(255,255,255,.2)';
      cx.beginPath();cx.arc(wx,pathY,8,0,Math.PI*2);cx.fill();
      cx.fillStyle='rgba(255,255,255,.7)';cx.font=`bold ${H*.03}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
      cx.fillText((i+1)*5,wx,pathY);
    });
    // Progress bar on path
    if(progress>0){
      cx.strokeStyle='rgba(16,185,129,.6)';cx.lineWidth=5;cx.lineCap='round';
      cx.beginPath();cx.moveTo(pathStart,pathY);cx.lineTo(charX,pathY);cx.stroke();
    }
    // Finish flag
    const fx=pathEnd+W*.03;
    cx.fillStyle='#78350F';cx.beginPath();cx.roundRect(fx,pathY-H*.16,4,H*.16,2);cx.fill();
    cx.fillStyle='#DC2626';cx.beginPath();cx.rect(fx,pathY-H*.16,W*.04,H*.07);cx.fill();
    cx.fillStyle='#fff';cx.beginPath();cx.rect(fx,pathY-H*.1,W*.04,H*.06);cx.fill();
    cx.fillStyle='#111';cx.font=`bold ${H*.025}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
    cx.fillText('FINISH',fx+W*.02,pathY-H*.13);
    // Walker
    const wstate=progress>=1?'win':'walk';
    drawWalker(charX,pathY,snap.cozy?.skin||'#C68642',snap.cozy?.hair||'#1C0700',wstate);
    // Question counter above character
    cx.fillStyle='rgba(255,255,255,.9)';cx.beginPath();cx.roundRect(charX-22,pathY-H*.28,44,20,10);cx.fill();
    cx.fillStyle='#166534';cx.font=`bold ${H*.03}px Bebas Neue,sans-serif`;cx.textAlign='center';cx.textBaseline='middle';
    cx.fillText(`${snap.cozy?.correct||0}/${snap.cozy?.total||20}`,charX,pathY-H*.255);
    // celebration particles if finished
    if(progress>=1){
      for(let i=0;i<8;i++){
        const ang=time*2+i*(Math.PI*2/8);
        const dist=H*.04;
        cx.fillStyle=['#F59E0B','#EF4444','#10B981','#6366F1'][i%4];
        cx.globalAlpha=.8;cx.beginPath();cx.arc(charX+Math.cos(ang)*dist,pathY-H*.18+Math.sin(ang)*dist*.5,4,0,Math.PI*2);cx.fill();cx.globalAlpha=1;
      }
    }
  }

  return{init,resize,startLoop,stopLoop,setSnap};
})();

/* ══════════════════════════════════════════
   HOME CANVAS (particles)
══════════════════════════════════════════ */
(function(){
  let cv,cx2,W2,H2,raf2,particles=[];
  function init(){
    cv=document.getElementById('home-canvas');if(!cv)return;
    cx2=cv.getContext('2d');resize2();
    for(let i=0;i<55;i++)particles.push({
      x:Math.random()*W2,y:Math.random()*H2,r:Math.random()*2.2+.6,
      vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.45,
      c:['#DC2626','#F59E0B','#fff','#F97316','#60A5FA'][Math.floor(Math.random()*5)],
      a:Math.random()*.55+.15
    });
    (function loop(){
      cx2.clearRect(0,0,W2,H2);
      particles.forEach(p=>{
        cx2.globalAlpha=p.a;cx2.fillStyle=p.c;cx2.beginPath();cx2.arc(p.x,p.y,p.r,0,Math.PI*2);cx2.fill();
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=W2;if(p.x>W2)p.x=0;if(p.y<0)p.y=H2;if(p.y>H2)p.y=0;
      });
      cx2.globalAlpha=1;raf2=requestAnimationFrame(loop);
    })();
  }
  function resize2(){if(!cv)return;W2=cv.offsetWidth;H2=cv.offsetHeight;const dpr=window.devicePixelRatio||1;cv.width=W2*dpr;cv.height=H2*dpr;cv.style.width=W2+'px';cv.style.height=H2+'px';cx2.scale(dpr,dpr);}
  window.addEventListener('resize',resize2);
  window.addEventListener('load',()=>setTimeout(init,100));
})();

/* garuda SVG */
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

/* ══════════════════════════════════════════
   CONFETTI
══════════════════════════════════════════ */
const Confetti=(()=>{
  let raf=null;
  function start(wc){
    const cv=document.getElementById('cf-canvas'),ct=cv.getContext('2d');
    cv.width=window.innerWidth;cv.height=window.innerHeight;
    const cols=[wc,'#F59E0B','#10B981','#DC2626','#F97316','#60A5FA','#FBBF24','#EF4444','#A78BFA'];
    const ps=Array.from({length:180},()=>({
      x:Math.random()*cv.width,y:Math.random()*-cv.height,
      w:Math.random()*14+5,h:Math.random()*6+3,
      r:Math.random()*Math.PI*2,rs:Math.random()*.14-.07,
      vx:Math.random()*2.4-1.2,vy:Math.random()*5+2.2,
      c:cols[Math.floor(Math.random()*cols.length)],shape:Math.random()>.5?'rect':'circle'
    }));
    function draw(){
      ct.clearRect(0,0,cv.width,cv.height);
      ps.forEach(p=>{ct.save();ct.translate(p.x,p.y);ct.rotate(p.r);ct.fillStyle=p.c;ct.globalAlpha=.9;
      if(p.shape==='circle'){ct.beginPath();ct.arc(0,0,p.w/3,0,Math.PI*2);ct.fill();}
      else{ct.fillRect(-p.w/2,-p.h/2,p.w,p.h);}
      ct.restore();p.x+=p.vx;p.y+=p.vy;p.r+=p.rs;if(p.y>cv.height+20){p.y=-20;p.x=Math.random()*cv.width;}});
      raf=requestAnimationFrame(draw);
    }
    stop();draw();
  }
  function stop(){if(raf){cancelAnimationFrame(raf);raf=null;}const cv=document.getElementById('cf-canvas');if(cv)cv.getContext('2d').clearRect(0,0,cv.width,cv.height);}
  return{start,stop};
})();

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function prepQ(){return shuffle(QDB).map((q,idx)=>{const ans=q.o[q.a];const opts=shuffle([...q.o]);return{q:q.q,opts,ai:opts.indexOf(ans),id:idx,exp:q.exp};});}
function floatLbl(el,text,color){
  if(!el)return;
  const r=el.getBoundingClientRect();
  const d=document.createElement('div');d.className='float-lbl';d.textContent=text;
  d.style.cssText=`left:${r.left+r.width/2-22}px;top:${r.top+r.height*.22}px;color:${color}`;
  document.body.appendChild(d);setTimeout(()=>d.remove(),1100);
}
function flashPanel(side,type){
  const fl=document.getElementById('pf-'+side);if(!fl)return;
  fl.className='panel-flash fl-'+type;
  setTimeout(()=>fl.className='panel-flash',650);
}
function updateArenaHeader(left,right,center){
  const hbar=document.getElementById('arena-hbar');if(!hbar)return;
  hbar.style.display='flex';
  if(left){
    const nl=document.getElementById('ahn-left');const sl=document.getElementById('ahs-left');const tl=document.getElementById('aht-left');
    if(nl)nl.textContent=left.name||'';if(sl)sl.textContent=left.score??'';if(tl)tl.textContent=left.time||'';
  }
  if(right){
    const nr=document.getElementById('ahn-right');const sr=document.getElementById('ahs-right');const tr=document.getElementById('aht-right');
    if(nr)nr.textContent=right.name||'';if(sr)sr.textContent=right.score??'';if(tr)tr.textContent=right.time||'';
  }
  if(center){const c=document.getElementById('ah-center');if(c)c.textContent=center;}
}

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
const App=(()=>{
  let cur='s-home',mode=1,G={},teamCounts=[3,3],qHistory=[];
  let setupTeamPhase=1;// 1=left entering, 2=right entering

  /* ── NAVIGATE ── */
  function go(id){
    Snd.click();BGM.play();
    const o=document.getElementById(cur),n=document.getElementById(id);
    if(!n||id===cur)return;
    o.classList.add('leaving');setTimeout(()=>o.classList.remove('active','leaving'),300);
    n.classList.add('active');cur=id;
    if(id==='s-home')checkResume();
  }

  /* ── RESUME BUTTON ── */
  function checkResume(){
    try{
      const sv=localStorage.getItem('kuisResume');
      const rb=document.getElementById('resume-btn');
      if(sv&&rb)rb.style.display='inline-flex';
      else if(rb)rb.style.display='none';
    }catch(e){}
  }
  function saveResume(data){try{localStorage.setItem('kuisResume',JSON.stringify(data));}catch(e){}}
  function clearResume(){try{localStorage.removeItem('kuisResume');}catch(e){}}

  function resumeGame(){
    try{
      const sv=JSON.parse(localStorage.getItem('kuisResume'));
      if(!sv)return;
      mode=sv.mode;
      selectMode(mode,true);// go to howto for that mode
      buildSetup(mode);
      // pre-fill names
      if(mode===1){
        const e1=document.getElementById('ni-p1'),e2=document.getElementById('ni-p2');
        if(e1)e1.value=sv.p1||'';if(e2)e2.value=sv.p2||'';
      } else if(mode===2){
        (sv.t1||[]).forEach((n,i)=>{const e=document.getElementById(`ni-t1-${i+1}`);if(e)e.value=n;});
        (sv.t2||[]).forEach((n,i)=>{const e=document.getElementById(`ni-t2-${i+1}`);if(e)e.value=n;});
      } else if(mode===3){
        const e=document.getElementById('ni-solo');if(e)e.value=sv.solo||'';
      }
      go('s-setup');
    }catch(e){}
  }

  /* ── SOUND ── */
  function toggleSound(){const on=Snd.toggle();BGM.setEnabled(on);document.getElementById('snd-btn').textContent=on?'🔊 Suara Aktif':'🔇 Suara Mati';}

  /* ── MODE SELECT ── */
  const HOWTO={
    1:{badge:'MODE 1',title:'⚔️ Tarik Tambang',sub:'2 Pemain Individu — Layar Terbagi 2',steps:[
      {icon:'⏱️',title:'70 Detik',desc:'Setiap pemain punya 70 detik untuk menjawab semua soal. Waktu berkurang setiap jawaban!',hl:'-5 dtk jika salah, -3 dtk jika benar',hlc:'hs-amber'},
      {icon:'📋',title:'20 Soal',desc:'Jawab 20 soal Pengetahuan Umum Indonesia. Soal yang salah dijawab akan muncul kembali!',hl:'Selesaikan semua 20 soal = Menang!',hlc:'hs-grn'},
      {icon:'⚡',title:'Tim Oranye vs Biru',desc:'Pemain Oranye di kiri, Pemain Biru di kanan. Jawab lebih cepat dari lawan!',hl:'Skor lebih tinggi = karakter maju',hlc:'hs-grn'},
      {icon:'💀',title:'Kalah Jika...',desc:'Waktu habis sebelum semua soal terjawab, ATAU lawan menyelesaikan lebih dulu!',hl:'Lawan tuntas lebih dulu = kamu kalah!',hlc:'hs-red'},
    ]},
    2:{badge:'MODE 2',title:'🤝 Tim Battle',sub:'2 Tim — Hingga 20 Peserta per Tim',steps:[
      {icon:'👥',title:'2 Tim Bersaing',desc:'Tim Oranye vs Tim Biru! Kedua tim main bersamaan tanpa perlu menunggu giliran.',hl:'Layar kiri & kanan aktif bersamaan',hlc:'hs-grn'},
      {icon:'⏱️',title:'70 Detik per Pemain',desc:'Setiap pemain punya 70 detik. Soal dijawab secara bergilir sesuai urutan tim.',hl:'-5 dtk salah, -3 dtk benar',hlc:'hs-amber'},
      {icon:'📋',title:'20 Soal per Tim',desc:'Masing-masing tim mendapat 20 soal berbeda. Jawaban salah? Soal kembali ke antrian!',hl:'Soal salah = muncul lagi di antrian',hlc:'hs-red'},
      {icon:'🏆',title:'Pemenang',desc:'Tim yang menyelesaikan 20 soal lebih dulu MENANG! Semangati anggota timmu!',hl:'Ayo semangat bersama tim!',hlc:'hs-grn'},
    ]},
    3:{badge:'MODE 3',title:'🌿 Cozy Mode',sub:'Solo Player — Santai Tanpa Tekanan',steps:[
      {icon:'🌿',title:'Santai & Damai',desc:'Tidak ada timer, tidak ada tekanan! Nikmati belajar Pengetahuan Umum Indonesia dengan tenang.',hl:'Tidak ada batas waktu',hlc:'hs-grn'},
      {icon:'🚶',title:'Jalan ke Garis Finish',desc:'Setiap jawaban benar membuat karaktermu melangkah maju menuju garis finish di ujung jalan!',hl:'20 soal benar = sampai di Finish!',hlc:'hs-grn'},
      {icon:'📖',title:'Belajar Sambil Main',desc:'Setelah setiap jawaban kamu akan melihat penjelasan singkat. Sangat edukatif!',hl:'Ada penjelasan di setiap soal',hlc:'hs-amber'},
      {icon:'🎯',title:'Tujuan',desc:'Jawab semua 20 soal dan bawa karaktermu sampai garis finish. Tidak ada yang kalah — semua menang!',hl:'Santai, nikmati prosesnya!',hlc:'hs-grn'},
    ]},
  };

  function selectMode(m,silent=false){
    if(!silent)Snd.select();
    mode=m;
    const h=HOWTO[m];
    document.getElementById('howto-badge').textContent=h.badge;
    document.getElementById('howto-badge').className='howto-mode-badge '+(m===1?'':'') + (m===2?'grn-mode-badge':'') + (m===3?'cozy-mode-badge':'');
    document.getElementById('howto-title').textContent=h.title;
    document.getElementById('howto-sub').textContent=h.sub;
    const st=document.getElementById('howto-steps');
    st.innerHTML=h.steps.map(s=>`<div class="howto-step"><div class="hs-icon">${s.icon}</div><div class="hs-title">${s.title}</div><div class="hs-desc">${s.desc}</div><span class="hs-highlight ${s.hlc}">${s.hl}</span></div>`).join('');
    if(!silent)go('s-howto');
  }

  /* ── SETUP ── */
  function buildSetup(m){
    const cols=document.getElementById('setup-cols');
    const goBtn=document.getElementById('setup-go');
    if(m===3){
      // Cozy solo
      cols.innerHTML=`<div class="split-pane cozy-solo">
        <div class="setup-header cozy-hdr">🌿 Siapakah Kamu?</div>
        <div class="setup-single">
          <div class="setup-lbl cozy-lbl">NAMA PEMAIN</div>
          <input id="ni-solo" class="setup-inp cozy-inp" type="text" placeholder="Nama kamu..." maxlength="18" autocomplete="off">
        </div>
      </div>`;
      goBtn.textContent='🌿 MULAI SANTAI!';goBtn.style.display='';goBtn.onclick=()=>App.startFromSetup();
    } else if(m===1){
      cols.innerHTML=`
      <div class="split-pane pane-t1">
        <div class="setup-header">🟠 Pemain Oranye</div>
        <div class="setup-single">
          <div class="setup-lbl" style="color:var(--t1)">NAMA PEMAIN 1</div>
          <input id="ni-p1" class="setup-inp t1-inp" type="text" placeholder="Nama pemain 1..." maxlength="14" autocomplete="off">
        </div>
      </div>
      <div class="split-sep"></div>
      <div class="split-pane pane-t2">
        <div class="setup-header" style="color:var(--t2)">🔵 Pemain Biru</div>
        <div class="setup-single">
          <div class="setup-lbl" style="color:var(--t2)">NAMA PEMAIN 2</div>
          <input id="ni-p2" class="setup-inp t2-inp" type="text" placeholder="Nama pemain 2..." maxlength="14" autocomplete="off">
        </div>
      </div>`;
      goBtn.textContent='⚔️ MASUK ARENA!';goBtn.style.display='';goBtn.onclick=()=>App.startFromSetup();
    } else {
      // Mode 2 — sequential: left first
      setupTeamPhase=1;
      teamCounts=[3,3];
      cols.innerHTML=buildTeamPane(1)+`<div class="split-sep"></div>`+buildTeamPaneLocked();
      renderNI(1);
      goBtn.style.display='none';// hidden until phase 2
    }
  }

  function buildTeamPane(t){
    const cl=t===1?'pane-t1':'pane-t2';
    const col=t===1?'var(--t1)':'var(--t2)';
    const emoji=t===1?'🟠':'🔵';
    const lbl=t===1?'Tim Oranye':'Tim Biru';
    return `<div class="split-pane ${cl}" id="pane-t${t}">
      <div class="setup-header" style="color:${col}">${emoji} ${lbl}</div>
      <div class="cnt-row">
        <div class="cnt-lbl">Jumlah Peserta</div>
        <div class="cnt-ctrl">
          <button class="cnt-btn" id="cnt-btn-${t}-m" onclick="App.setCount(${t},-1)">−</button>
          <div class="cnt-val" id="cv-${t}" style="color:${col}">3</div>
          <button class="cnt-btn" id="cnt-btn-${t}-p" onclick="App.setCount(${t},1)">+</button>
        </div>
      </div>
      <div class="names-grid" id="ng-${t}"></div>
      ${t===1?`<button class="btn siap-btn t1-siap" id="siap-btn" onclick="App.teamSiap()">SIAP ✓</button>`:''}
    </div>`;
  }

  function buildTeamPaneLocked(){
    return `<div class="split-pane pane-t2 pane-locked" id="pane-t2">
      <div class="setup-header" style="color:var(--t2)">🔵 Tim Biru</div>
      <div class="lock-overlay">
        <div class="lock-icon">🔒</div>
        <div class="lock-text">Tunggu Tim Oranye<br>selesai dulu!</div>
      </div>
    </div>`;
  }

  function teamSiap(){
    Snd.siap();
    setupTeamPhase=2;
    // Lock team 1 (show checkmark)
    const p1=document.getElementById('pane-t1');
    if(p1){p1.classList.add('pane-done');const sb=document.getElementById('siap-btn');if(sb){sb.textContent='✅ Siap!';sb.disabled=true;}}
    // Replace locked pane with active pane for team 2
    const p2=document.getElementById('pane-t2');
    if(p2){
      p2.outerHTML=buildTeamPane(2);
      renderNI(2);
      // style team 2 cnt buttons
      const cb=document.querySelectorAll('#pane-t2 .cnt-btn');
      cb.forEach(b=>{b.style.borderColor='var(--t2)';b.style.color='var(--t2)';});
    }
    // Show start button
    const goBtn=document.getElementById('setup-go');
    if(goBtn){goBtn.textContent='⚔️ MASUK ARENA!';goBtn.style.display='';goBtn.onclick=()=>App.startFromSetup();}
  }

  function setCount(t,d){
    teamCounts[t-1]=Math.max(1,Math.min(20,teamCounts[t-1]+d));
    const cv=document.getElementById('cv-'+t);if(cv)cv.textContent=teamCounts[t-1];
    renderNI(t);Snd.click();
  }

  function renderNI(t){
    const g=document.getElementById('ng-'+t);if(!g)return;
    g.innerHTML='';const n=teamCounts[t-1];
    for(let i=1;i<=n;i++){
      const row=document.createElement('div');row.className='name-row';
      const col=t===1?'var(--t1)':'var(--t2)';
      row.innerHTML=`<div class="name-num" style="background:${col}">${i}</div><input class="name-inp ${t===1?'t1-inp':'t2-inp'}" id="ni-t${t}-${i}" type="text" placeholder="Peserta ${i}" maxlength="14" autocomplete="off">`;
      g.appendChild(row);
    }
  }

  function getPlayers(t){
    const n=teamCounts[t-1],ps=[];
    for(let i=1;i<=n;i++){const v=document.getElementById(`ni-t${t}-${i}`);ps.push(v&&v.value.trim()||`Peserta ${i}`);}
    return ps;
  }

  /* ── START ── */
  function startFromSetup(){
    Snd.ready();qHistory=[];
    if(mode===1){
      const n1=document.getElementById('ni-p1')?.value.trim()||'Pemain Oranye';
      const n2=document.getElementById('ni-p2')?.value.trim()||'Pemain Biru';
      G={mode:1,over:false,winner:null,
        p1:{name:n1,queue:prepQ(),correct:new Set(),ci:0,timer:70,tInt:null,locked:false,done:false,score:0,pulling:true,state:'pull'},
        p2:{name:n2,queue:prepQ(),correct:new Set(),ci:0,timer:70,tInt:null,locked:false,done:false,score:0,pulling:true,state:'pull'},
      };
      saveResume({mode,p1:n1,p2:n2});
    } else if(mode===2){
      const t1p=getPlayers(1),t2p=getPlayers(2);
      G={mode:2,over:false,
        t1:{players:t1p,score:0,pi:0,state:'pull'},
        t2:{players:t2p,score:0,pi:0,state:'pull'},
        qs1:prepQ(),qs2:prepQ(),
        t1lock:false,t2lock:false,t1tInt:null,t2tInt:null,
        t1timer:70,t2timer:70,
        t1correct:new Set(),t2correct:new Set(),
        t1ci:0,t2ci:0,t1done:false,t2done:false,
      };
      saveResume({mode,t1:t1p,t2:t2p});
    } else {
      // Cozy
      const solo=document.getElementById('ni-solo')?.value.trim()||'Petualang';
      G={mode:3,over:false,
        solo:{name:solo,queue:prepQ(),ci:0,correct:0,total:20,done:false},
        cozyLock:false,
      };
      saveResume({mode,solo});
    }
    runCD(()=>startGame());
  }

  /* ── COUNTDOWN ── */
  function runCD(cb){
    go('s-countdown');
    const el=document.getElementById('cdn');let n=3;
    function tick(){
      el.textContent=n>0?n:'MULAI!';
      el.classList.remove('cd-pop');void el.offsetWidth;el.classList.add('cd-pop');
      Snd.cd(n);
      if(n-->0)setTimeout(tick,1100);else setTimeout(cb,1000);
    }
    tick();
  }

  /* ── GAME START ── */
  function startGame(){
    Arena.init();Arena.resize();
    if(G.mode===1){
      Arena.setSnap({mode:1,
        p1:{score:0,name:G.p1.name,pulling:true,state:'pull'},
        p2:{score:0,name:G.p2.name,pulling:true,state:'pull'},
        p1color:'#F97316',p1dark:'#C2410C',
        p2color:'#1E40AF',p2dark:'#1E3A8A',
        fallenSide:null,fallProgress:0,lastCheer:'none',cheerTime:0,
      });
      buildHead('left',G.p1.name,0,'t1');buildHead('right',G.p2.name,0,'t2');
      updateArenaHeader({name:G.p1.name,score:0,time:'70s'},{name:G.p2.name,score:0,time:'70s'},'⚔️ TARIK TAMBANG');
      loadM1Q('p1');loadM1Q('p2');
    } else if(G.mode===2){
      Arena.setSnap({mode:2,
        t1:{score:0,players:G.t1.players,pi:0,state:'pull'},
        t2:{score:0,players:G.t2.players,pi:0,state:'pull'},
        over:false,fallenSide:null,fallProgress:0,lastCheer:'none',cheerTime:0,
        t1color:'#F97316',t1dark:'#C2410C',
        t2color:'#1E40AF',t2dark:'#1E3A8A',
      });
      buildHead('left','Tim Oranye',0,'t1',true);buildHead('right','Tim Biru',0,'t2',true);
      updateArenaHeader({name:'Tim Oranye',score:0,time:'70s'},{name:'Tim Biru',score:0,time:'70s'},'🤝 TIM BATTLE');
      loadM2Q(1);loadM2Q(2);
    } else {
      // Cozy
      Arena.setSnap({mode:3,cozy:{correct:0,total:20,skin:'#C68642',hair:'#1C0700'},over:false});
      buildHeadCozy();
      updateArenaHeader({name:G.solo.name,score:0,time:'∞'},{name:'',score:'',time:''},'🌿 COZY MODE');
      loadCozyQ();
    }
    document.getElementById('arena-hbar').style.display='flex';
    go('s-game');Arena.startLoop();Snd.select();
  }

  /* ═══════ MODE 1 ═══════ */
  const M1T=70,M1BONUS=3,M1PEN=5,M1MIN=8;
  const DELAY_FEEDBACK=1400;

  function getNextM1(ps){
    const n=ps.queue.length;
    for(let i=0;i<n;i++){const idx=(ps.ci+i)%n;if(!ps.correct.has(ps.queue[idx].id)){ps.ci=idx;return ps.queue[idx];}}
    return null;
  }

  function loadM1Q(p){
    const ps=G[p],side=p==='p1'?'left':'right';
    stopM1T(p);
    const q=getNextM1(ps);
    if(!q){
      ps.done=true;ps.pulling=false;ps.state='win';
      Arena.setSnap({[p]:{score:ps.score,name:ps.name,pulling:false,state:'win'}});
      setQ(side,'<span style="color:#10B981;font-weight:700">✅ Semua soal selesai!</span>',true);
      setOpts(side,[],null,side==='left'?'t1':'t2');
      setTim(side,'✔','100%','#10B981');
      updateHead(side,{qi:'Selesai! 🎉'});
      if(!G.over)endM1(p,'done');
      return;
    }
    if(!qHistory.find(q2=>q2.id===q.id))qHistory.push({...q,p1ans:-1,p2ans:-1});
    updateHead(side,{qi:`Sisa ${ps.queue.length-ps.correct.size} soal`});
    setQ(side,q.q);
    setOpts(side,q.opts,(i)=>ansM1(p,i,q.ai),side==='left'?'t1':'t2');
    startM1T(p);
  }

  function startM1T(p){
    const ps=G[p],side=p==='p1'?'left':'right',col=p==='p1'?'t1':'t2';
    const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);
    bar.style.transition='none';bar.style.width=(ps.timer/M1T*100)+'%';
    bar.className='gp-fill '+col;void bar.offsetWidth;bar.style.transition='width 1s linear,background .4s';
    const upd=()=>{
      sec.textContent=ps.timer+'s';
      updateArenaHeader(p==='p1'?{time:ps.timer+'s'}:null,p==='p2'?{time:ps.timer+'s'}:null,null);
      if(ps.timer<=8){bar.classList.add('dang');bar.classList.remove('warn');sec.className='gp-tsec '+col+' dang';}
      else if(ps.timer<=20){bar.classList.add('warn');bar.classList.remove('dang');sec.className='gp-tsec '+col+' warn';}
      else{bar.classList.remove('warn','dang');sec.className='gp-tsec '+col;}
    };upd();
    ps.tInt=setInterval(()=>{
      if(ps.locked||ps.done)return;
      ps.timer--;bar.style.width=Math.max(0,ps.timer/M1T*100)+'%';upd();
      if(ps.timer<=8)Snd.tickD();else if(ps.timer<=20)Snd.tickW();else if(ps.timer%18===0)Snd.tick();
      if(ps.timer<=0){clearInterval(ps.tInt);ps.pulling=false;ps.state='fall';endM1(p,'timeout');}
    },1000);
  }
  function stopM1T(p){if(G[p]&&G[p].tInt){clearInterval(G[p].tInt);G[p].tInt=null;}}

  function ansM1(p,sel,correct){
    if(G[p].locked||G.over)return;
    G[p].locked=true;stopM1T(p);
    const ps=G[p],side=p==='p1'?'left':'right';
    lockOpts(side,correct,sel);
    const qid=ps.queue[ps.ci].id;
    const hq=qHistory.find(q=>q.id===qid);
    if(hq){if(p==='p1')hq.p1ans=sel;else hq.p2ans=sel;}
    if(sel===correct){
      Snd.correct();flashPanel(side,'correct');
      ps.correct.add(qid);ps.score++;ps.state='correct';
      ps.timer=Math.max(M1MIN,ps.timer-M1BONUS);
      ps.ci=(ps.ci+1)%ps.queue.length;
      updateHead(side,{score:ps.score});
      Arena.setSnap({[p]:{score:ps.score,name:ps.name,pulling:true,state:'correct'},lastCheer:side,cheerTime:Date.now()/1000});
      updateArenaHeader(p==='p1'?{score:ps.score}:null,p==='p2'?{score:ps.score}:null,null);
      floatLbl(document.getElementById('go-'+side),'+1 ✓','#10B981');
      Snd.move();
      setTimeout(()=>{ps.state='pull';Arena.setSnap({[p]:{...Arena._snap&&Arena._snap[p],state:'pull'}});},600);
    } else {
      Snd.wrong();flashPanel(side,'wrong');
      ps.timer=Math.max(M1MIN,ps.timer-M1PEN);ps.state='wrong';
      const c=ps.queue[ps.ci];ps.queue.splice(ps.ci,1);ps.queue.push(c);
      if(ps.ci>=ps.queue.length)ps.ci=0;
      floatLbl(document.getElementById('go-'+side),'-'+M1PEN+'s','#EF4444');
      const og=document.getElementById('go-'+side);
      og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
      Arena.setSnap({[p]:{score:ps.score,name:ps.name,pulling:true,state:'wrong'}});
      setTimeout(()=>{ps.state='pull';},600);
    }
    // show explanation briefly
    const q=qHistory.find(q2=>q2.id===qid);
    if(q&&q.exp){showExp(side,q.exp,sel===correct);}
    setTimeout(()=>{ps.locked=false;if(!ps.done)loadM1Q(p);},DELAY_FEEDBACK);
  }

  function showExp(side,exp,correct){
    const qEl=document.getElementById('gq-'+side);if(!qEl)return;
    const orig=qEl.innerHTML;
    const bg=correct?'rgba(16,185,129,.1)':'rgba(239,68,68,.1)';
    const icon=correct?'💡':'📚';
    qEl.innerHTML=`<div style="font-size:.72rem;color:#374151;line-height:1.5;background:${bg};padding:.3rem .5rem;border-radius:6px;border-left:3px solid ${correct?'#10B981':'#EF4444'}">${icon} ${exp}</div>`;
    setTimeout(()=>{if(qEl)qEl.innerHTML=orig;},DELAY_FEEDBACK-200);
  }

  function endM1(p,reason){
    if(G.over)return;G.over=true;
    stopM1T('p1');stopM1T('p2');
    clearResume();
    const w=reason==='done'?p:(p==='p1'?'p2':'p1');
    const loser=w==='p1'?'p2':'p1';
    G.p1.pulling=false;G.p2.pulling=false;
    if(reason!=='done'){// loser falls
      const loserSide=loser==='p1'?'left':'right';
      Snd.fall();
      Arena.setSnap({p1:{score:G.p1.score,name:G.p1.name,pulling:false,state:loser==='p1'?'fall':'win'},p2:{score:G.p2.score,name:G.p2.name,pulling:false,state:loser==='p2'?'fall':'win'},fallenSide:loserSide,fallProgress:0});
    } else {
      const winnerSide=w==='p1'?'left':'right';
      const loserSide=w==='p1'?'right':'left';
      Arena.setSnap({p1:{score:G.p1.score,name:G.p1.name,pulling:false,state:w==='p1'?'win':'fall'},p2:{score:G.p2.score,name:G.p2.name,pulling:false,state:w==='p2'?'win':'fall'},fallenSide:loserSide,fallProgress:0});
      Snd.fall();
    }
    G.winner=w;
    setTimeout(()=>showWin(G[w].name,w==='p1'?'#F97316':'#1E40AF',G.p1.name,G.p2.name,G.p1.score,G.p2.score,w),1800);
  }

  /* ═══════ MODE 2 ═══════ */
  const M2T=70,M2BONUS=3,M2PEN=5,M2MIN=8;

  function getNextM2(t){
    const qs=t===1?G.qs1:G.qs2;const correct=t===1?G.t1correct:G.t2correct;let ci=t===1?G.t1ci:G.t2ci;
    const n=qs.length;for(let i=0;i<n;i++){const idx=(ci+i)%n;if(!correct.has(qs[idx].id)){if(t===1)G.t1ci=idx;else G.t2ci=idx;return qs[idx];}}return null;
  }

  function loadM2Q(t){
    const side=t===1?'left':'right',col=t===1?'t1':'t2';
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
    updateHead(side,{name:(t===1?'🟠 ':'🔵 ')+pname,qi:`Sisa ${(t===1?G.qs1:G.qs2).length-(t===1?G.t1correct:G.t2correct).size} soal`});
    updateArenaHeader(t===1?{name:'🟠 '+pname}:null,t===2?{name:'🔵 '+pname}:null,null);
    setQ(side,q.q);setOpts(side,q.opts,(i)=>ansM2(t,i,q.ai),col);
    startM2T(t);
  }

  function startM2T(t){
    const side=t===1?'left':'right',col=t===1?'t1':'t2';
    const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);
    if(t===1)G.t1timer=M2T;else G.t2timer=M2T;
    const getT=()=>t===1?G.t1timer:G.t2timer;
    const setT=(v)=>{if(t===1)G.t1timer=v;else G.t2timer=v;};
    bar.style.transition='none';bar.style.width='100%';bar.className='gp-fill '+col;
    void bar.offsetWidth;bar.style.transition='width 1s linear';sec.textContent=getT()+'s';sec.className='gp-tsec '+col;
    const tInt=setInterval(()=>{
      if(G.over)return;setT(getT()-1);
      bar.style.width=Math.max(0,getT()/M2T*100)+'%';sec.textContent=getT()+'s';
      updateArenaHeader(t===1?{time:getT()+'s'}:null,t===2?{time:getT()+'s'}:null,null);
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
    setTimeout(()=>endM2(t,'timeout'),1000);
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
      team.score++;team.state='correct';
      updateHead(side,{score:team.score});
      Arena.setSnap({[t===1?'t1':'t2']:{...team},lastCheer:side,cheerTime:Date.now()/1000});
      updateArenaHeader(t===1?{score:team.score}:null,t===2?{score:team.score}:null,null);
      floatLbl(document.getElementById('go-'+side),'+1 ✓','#10B981');
      Snd.move();
      if(hq){if(t===1)hq.t1ans=sel;else hq.t2ans=sel;}
      if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2BONUS);else G.t2timer=Math.max(M2MIN,G.t2timer-M2BONUS);
      team.pi=(team.pi+1)%team.players.length;
      if(t===1)G.t1ci=(G.t1ci+1)%G.qs1.length;else G.t2ci=(G.t2ci+1)%G.qs2.length;
      setTimeout(()=>{team.state='pull';},500);
    } else {
      Snd.wrong();flashPanel(side,'wrong');
      if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2PEN);else G.t2timer=Math.max(M2MIN,G.t2timer-M2PEN);
      if(hq){if(t===1)hq.t1ans=sel;else hq.t2ans=sel;}
      const arr=t===1?G.qs1:G.qs2;const ci2=t===1?G.t1ci:G.t2ci;
      const cq=arr[ci2];arr.splice(ci2,1);arr.push(cq);
      const og=document.getElementById('go-'+side);og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
    }
    const q=qHistory.find(q2=>q2.id===qid);
    if(q&&q.exp)showExp(side,q.exp,sel===correct);
    setTimeout(()=>{G[lock]=false;if(!G.over)loadM2Q(t);},DELAY_FEEDBACK);
  }

  function endM2(t,reason){
    if(G.over)return;G.over=true;stopM2T(1);stopM2T(2);clearResume();
    Arena.setSnap({over:true});
    const w=reason==='done'?t:(t===1?2:1);
    const loserSide=w===1?'right':'left';
    Snd.fall();
    Arena.setSnap({fallenSide:loserSide,fallProgress:0,
      t1:{...G.t1,state:w===1?'win':'fall'},t2:{...G.t2,state:w===2?'win':'fall'},over:true});
    const wn=w===1?'TIM ORANYE':'TIM BIRU';
    const wc=w===1?'#F97316':'#1E40AF';
    setTimeout(()=>showWin(wn,wc,'Tim Oranye','Tim Biru',G.t1.score,G.t2.score,w===1?'t1':'t2'),1800);
  }

  /* ═══════ MODE 3 (COZY) ═══════ */
  function buildHeadCozy(){
    buildHead('left',G.solo.name,0,'cozy');
    // Hide right panel
    const rp=document.getElementById('gp-right');if(rp){rp.style.display='none';}
    const sep=document.querySelector('.game-sep');if(sep){sep.style.display='none';}
    const lp=document.getElementById('gp-left');if(lp){lp.style.flex='1';}
  }

  function loadCozyQ(){
    const side='left';const solo=G.solo;
    if(solo.done||solo.ci>=solo.queue.length){
      // Finished!
      solo.done=true;
      setQ(side,'<span style="color:#10B981;font-weight:800">🎉 Selamat! Kamu sampai di FINISH!</span>',true);
      setOpts(side,[],null,'cozy');
      setTim(side,'∞','100%','#10B981');
      updateHead(side,{qi:'Selesai semua! 🎉'});
      Arena.setSnap({cozy:{correct:solo.correct,total:solo.total,skin:'#C68642',hair:'#1C0700'},over:true});
      Snd.finish();
      setTimeout(()=>showWinCozy(solo.name,solo.correct,solo.total),1500);
      return;
    }
    const q=solo.queue[solo.ci];
    if(!qHistory.find(q2=>q2.id===q.id))qHistory.push({...q,soloAns:-1});
    updateHead(side,{qi:`Soal ${solo.ci+1} dari ${solo.total}`,score:solo.correct});
    setQ(side,q.q);
    setOpts(side,q.opts,(i)=>ansCozy(i,q.ai),'cozy');
    setTim(side,'∞','100%','#10B981');
  }

  function ansCozy(sel,correct){
    if(G.cozyLock||G.over)return;
    G.cozyLock=true;const side='left';
    lockOpts(side,correct,sel);
    const solo=G.solo;const q=solo.queue[solo.ci];
    const hq=qHistory.find(q2=>q2.id===q.id);
    if(sel===correct){
      Snd.correct();flashPanel(side,'correct');
      solo.correct++;
      floatLbl(document.getElementById('go-'+side),'✓ Benar!','#10B981');
      if(hq)hq.soloAns=sel;
      Arena.setSnap({cozy:{correct:solo.correct,total:solo.total,skin:'#C68642',hair:'#1C0700'}});
      updateHead(side,{score:solo.correct});
      updateArenaHeader({score:solo.correct},null,null);
      Snd.cozyStep();
    } else {
      Snd.wrong();flashPanel(side,'wrong');
      floatLbl(document.getElementById('go-'+side),'Hampir!','#F59E0B');
      if(hq)hq.soloAns=sel;
      const og=document.getElementById('go-'+side);og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
    }
    // Always advance (no penalty in cozy)
    solo.ci++;
    if(q.exp)showExp(side,q.exp,sel===correct);
    setTimeout(()=>{G.cozyLock=false;loadCozyQ();},DELAY_FEEDBACK+200);
  }

  function showWinCozy(name,correct,total){
    clearResume();Confetti.start('#10B981');Snd.win();Arena.stopLoop();
    document.getElementById('w-trophy').textContent='🌿';
    document.getElementById('w-label').textContent='PERJALANAN SELESAI!';
    document.getElementById('w-name').textContent=name;
    document.getElementById('w-name').style.color='#10B981';
    document.getElementById('w-sub').textContent=`${correct} dari ${total} soal benar — Luar Biasa! 🎊`;
    document.getElementById('w-scores').innerHTML=`
      <div class="ws-item"><div class="ws-name">Benar</div><div class="ws-score" style="color:#10B981">${correct}</div></div>
      <div class="ws-vs">/</div>
      <div class="ws-item"><div class="ws-name">Total Soal</div><div class="ws-score" style="color:#64748B">${total}</div></div>`;
    go('s-winner');
  }

  /* ═══════ PANEL HELPERS ═══════ */
  function buildHead(side,name,score,col,isTeam){
    const el=document.getElementById('gph-'+side);
    const headClass=col==='t1'?'head-t1':(col==='t2'?'head-t2':'head-cozy');
    const nameClass=col==='t1'?'t1c':(col==='t2'?'t2c':'cozc');
    el.innerHTML=`<div class="gp-head-inner ${headClass}">
      <span class="gph-name ${nameClass}" id="gn-${side}">${name}</span>
      <div class="gph-right">
        <span class="gph-qi" id="gqi-${side}"></span>
        <div style="display:flex;align-items:baseline;gap:2px">
          <span class="gph-score ${nameClass} pop-target" id="gs-${side}">${score}</span>
          <span class="gph-max">${col==='cozy'?'benar':'poin'}</span>
        </div>
      </div>
    </div>`;
  }

  function updateHead(side,o){
    if(o.score!==undefined){const e=document.getElementById('gs-'+side);if(e){e.textContent=o.score;e.classList.remove('pop-anim');void e.offsetWidth;e.classList.add('pop-anim');}}
    if(o.qi!==undefined){const e=document.getElementById('gqi-'+side);if(e)e.textContent=o.qi;}
    if(o.name!==undefined){const e=document.getElementById('gn-'+side);if(e)e.textContent=o.name;}
  }

  function setQ(side,html,isH){const e=document.getElementById('gq-'+side);if(e){if(isH)e.innerHTML=html;else e.textContent=html;}}

  function setOpts(side,opts,cb,col){
    const og=document.getElementById('go-'+side);og.innerHTML='';
    if(!opts.length){og.innerHTML='<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#64748B;font-size:.86rem;font-weight:600">Menunggu...</div>';return;}
    ['A','B','C','D'].forEach((L,i)=>{const b=document.createElement('button');b.className='opt opt-'+col;b.innerHTML=`<span class="opt-l">${L}</span><span>${opts[i]}</span>`;b.onclick=()=>cb(i);og.appendChild(b);});
  }

  function lockOpts(side,correct,chosen){document.getElementById('go-'+side).querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add('ok');else if(i===chosen)b.classList.add('no');});}

  function setTim(side,text,w,bg){
    const bar=document.getElementById('gf-'+side),sec=document.getElementById('gt-'+side);
    if(bar){bar.style.width=w;bar.style.background=bg;bar.style.transition='none';}if(sec)sec.textContent=text;
  }

  /* ═══════ WINNER ═══════ */
  function showWin(name,color,n1,n2,s1,s2,winner){
    Snd.win();Arena.stopLoop();
    document.getElementById('w-trophy').textContent='🏆';
    document.getElementById('w-label').textContent='PEMENANG!';
    document.getElementById('w-name').textContent=name;
    document.getElementById('w-name').style.color=color;
    document.getElementById('w-sub').textContent='LUAR BIASA! 🎉';
    document.getElementById('w-scores').innerHTML=`
      <div class="ws-item"><div class="ws-name">${n1}</div><div class="ws-score" style="color:#F97316">${s1}</div></div>
      <div class="ws-vs">VS</div>
      <div class="ws-item"><div class="ws-name">${n2}</div><div class="ws-score" style="color:#1E40AF">${s2}</div></div>`;
    go('s-winner');Confetti.start(color);
  }

  /* ═══════ QUESTION LIST ═══════ */
  function buildQList(allQuestions=false){
    const scroll=document.getElementById('qlist-scroll');
    const sub=document.getElementById('qlist-sub');
    const source=allQuestions?QDB.map((q,i)=>({q:q.q,opts:q.o,ai:q.a,exp:q.exp,id:i,p1ans:-1,p2ans:-1})):qHistory;
    sub.textContent=allQuestions?`${QDB.length} soal tersedia`:`${qHistory.length} soal telah dimainkan`;
    scroll.innerHTML='';
    source.forEach((q,i)=>{
      const card=document.createElement('div');card.className='q-card';
      const optsHtml=q.opts.map((opt,j)=>{
        let cls='q-opt';let icon='';
        if(j===q.ai){cls+=' is-correct';icon='✅';}
        else if(j===q.p1ans||j===q.p2ans||j===q.t1ans||j===q.t2ans||j===q.soloAns){cls+=' p1-wrong';icon='❌';}
        return `<div class="${cls}"><span class="q-opt-lbl">${['A','B','C','D'][j]}</span><span>${opt}</span><span class="q-opt-icon">${icon}</span></div>`;
      }).join('');
      const expHtml=q.exp?`<div class="q-exp"><span class="q-exp-icon">💡</span>${q.exp}</div>`:'';
      card.innerHTML=`<div class="q-num">SOAL ${i+1}</div><div class="q-text">${q.q}</div><div class="q-opts">${optsHtml}</div>${expHtml}`;
      scroll.appendChild(card);
    });
  }

  function goQList(){buildQList(false);go('s-qlist');}
  function goQDB(){buildQListFull();go('s-qdb');}

  function buildQListFull(){
    const scroll=document.getElementById('qdb-scroll');
    if(!scroll)return;
    scroll.innerHTML='';
    QDB.forEach((q,i)=>{
      const card=document.createElement('div');card.className='q-card';
      const optsHtml=q.o.map((opt,j)=>{
        let cls='q-opt';let icon='';
        if(j===q.a){cls+=' is-correct';icon='✅';}
        return `<div class="${cls}"><span class="q-opt-lbl">${['A','B','C','D'][j]}</span><span>${opt}</span><span class="q-opt-icon">${icon}</span></div>`;
      }).join('');
      const expHtml=q.exp?`<div class="q-exp"><span class="q-exp-icon">💡</span>${q.exp}</div>`:'';
      card.innerHTML=`<div class="q-num">SOAL ${i+1}</div><div class="q-text">${q.q}</div><div class="q-opts">${optsHtml}</div>${expHtml}`;
      scroll.appendChild(card);
    });
  }

  /* ═══════ PATCH WINNER BUTTON ═══════ */
  document.querySelector('#s-winner .btn-hero').onclick=()=>goQList();

  /* ═══════ HOME / REMATCH ═══════ */
  function goHome(){
    Confetti.stop();Arena.stopLoop();G={};qHistory=[];
    const rp=document.getElementById('gp-right');if(rp)rp.style.display='';
    const sep=document.querySelector('.game-sep');if(sep)sep.style.display='';
    const hbar=document.getElementById('arena-hbar');if(hbar)hbar.style.display='none';
    go('s-home');
  }
  function rematch(){
    Confetti.stop();Arena.stopLoop();G={};qHistory=[];
    const rp=document.getElementById('gp-right');if(rp)rp.style.display='';
    const sep=document.querySelector('.game-sep');if(sep)sep.style.display='';
    buildSetup(mode);go('s-setup');
  }

  /* ═══════ RESIZE ═══════ */
  window.addEventListener('resize',()=>Arena.resize());
  window.addEventListener('orientationchange',()=>setTimeout(()=>Arena.resize(),160));

  /* ═══════ SETUP BUTTON PATCH ═══════ */
  document.querySelector('.howto-go-btn').onclick=()=>{buildSetup(mode);go('s-setup');};

  /* ═══════ INIT ═══════ */
  checkResume();

  return{go,toggleSound,selectMode,setCount,renderNI,startFromSetup,goHome,rematch,teamSiap,resumeGame,goQDB};
})();
