'use strict';
/* ═══════════════════════════════════════
   QUESTIONS + EXPLANATIONS
═══════════════════════════════════════ */
const QDB=[
  {q:"Kota manakah yang ditetapkan sebagai ibu kota baru Republik Indonesia menggantikan Jakarta?",o:["Nusantara, Kalimantan Timur","Balikpapan, Kalimantan Timur","Samarinda, Kalimantan Timur","Palangkaraya, Kalimantan Tengah"],a:0,ex:"Nusantara adalah nama ibu kota baru Indonesia yang terletak di Kabupaten Penajam Paser Utara, Kalimantan Timur. Ditetapkan melalui UU No. 3 Tahun 2022."},
  {q:"Siapakah dua tokoh yang memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945?",o:["Soekarno & Mohammad Hatta","Soekarno & Sutan Sjahrir","Hatta & Ahmad Soebardjo","Soedirman & Soekarno"],a:0,ex:"Ir. Soekarno dan Drs. Mohammad Hatta membacakan teks proklamasi di Jalan Pegangsaan Timur No. 56, Jakarta, pada pukul 10.00 WIB."},
  {q:"Semboyan nasional Indonesia yang tertulis pada pita Garuda Pancasila adalah?",o:["Bhinneka Tunggal Ika","Satu Nusa Satu Bangsa","Tut Wuri Handayani","Ing Ngarso Sung Tulodo"],a:0,ex:"Bhinneka Tunggal Ika berasal dari Kitab Sutasoma karya Mpu Tantular, artinya 'Berbeda-beda tetapi tetap satu jua'. Menjadi moto resmi Indonesia."},
  {q:"Berapa jumlah provinsi Indonesia setelah pemekaran wilayah terbaru termasuk provinsi baru di Papua?",o:["38 Provinsi","34 Provinsi","36 Provinsi","40 Provinsi"],a:0,ex:"Setelah pemekaran Papua menjadi 6 provinsi (Papua, Papua Barat, Papua Selatan, Papua Tengah, Papua Pegunungan, Papua Barat Daya), total provinsi Indonesia menjadi 38."},
  {q:"W.R. Supratman menciptakan lagu Indonesia Raya yang pertama dikumandangkan pada Kongres Pemuda tahun?",o:["1928","1945","1920","1935"],a:0,ex:"Lagu Indonesia Raya pertama kali diperdengarkan pada Kongres Pemuda II, 28 Oktober 1928 di Batavia (Jakarta). W.R. Supratman memainkannya dengan biola."},
  {q:"Puncak Jaya merupakan puncak tertinggi Indonesia dan masuk Seven Summits. Berada di provinsi?",o:["Papua Tengah","Papua","Papua Barat Daya","Papua Selatan"],a:0,ex:"Puncak Jaya (Carstensz Pyramid) setinggi 4.884 mdpl berada di Pegunungan Sudirman, Papua Tengah. Merupakan puncak tertinggi di Oceania."},
  {q:"Danau Toba adalah danau vulkanik terbesar di dunia. Terbentuk akibat letusan supervulkan sekitar?",o:["74.000 tahun lalu","10.000 tahun lalu","100.000 tahun lalu","50.000 tahun lalu"],a:0,ex:"Danau Toba terbentuk dari letusan supervolcano Toba sekitar 74.000 tahun lalu — salah satu letusan terbesar dalam sejarah bumi. Luasnya ±1.130 km²."},
  {q:"Komodo (Varanus komodoensis) hidup endemik di Indonesia. Selain Pulau Komodo, juga hidup di?",o:["Pulau Rinca & Flores","Pulau Lombok","Pulau Timor","Pulau Sumbawa"],a:0,ex:"Komodo hidup di Pulau Komodo, Rinca, Gili Motang, dan pesisir Flores. Hewan ini dilindungi dalam Taman Nasional Komodo yang juga UNESCO World Heritage Site."},
  {q:"UNESCO mengakui Batik Indonesia sebagai Warisan Budaya Takbenda pada tahun?",o:["2009","2003","2012","2015"],a:0,ex:"Pada 2 Oktober 2009, UNESCO resmi mengakui Batik Indonesia. Tanggal tersebut kini diperingati sebagai Hari Batik Nasional."},
  {q:"Sungai Kapuas di Kalimantan Barat merupakan sungai terpanjang di Indonesia dengan panjang sekitar?",o:["1.143 km","820 km","920 km","980 km"],a:0,ex:"Sungai Kapuas sepanjang 1.143 km adalah sungai terpanjang di Indonesia. Mengalir dari Pegunungan Muller hingga ke Selat Karimata di Kalimantan Barat."},
  {q:"Tari Saman dengan gerakan tangan sangat cepat berasal dari suku Gayo di provinsi?",o:["Aceh","Sumatera Barat","Sumatera Utara","Kalimantan Timur"],a:0,ex:"Tari Saman berasal dari Gayo, Aceh. Diakui UNESCO sebagai Warisan Budaya Takbenda tahun 2011. Biasanya ditarikan oleh banyak penari pria secara serentak."},
  {q:"Candi Borobudur, candi Buddha terbesar di dunia, berlokasi di?",o:["Magelang, Jawa Tengah","Klaten, Jawa Tengah","Sleman, DI Yogyakarta","Bantul, DI Yogyakarta"],a:0,ex:"Candi Borobudur terletak di Magelang, Jawa Tengah. Dibangun sekitar abad ke-8-9 pada masa Dinasti Syailendra. Merupakan candi Buddha terbesar di dunia."},
  {q:"Buah Durian dikenal sebagai Raja Buah Asia Tenggara karena aroma dan rasanya yang kuat. Berasal dari?",o:["Asia Tenggara (termasuk Indonesia)","Amerika Selatan","Afrika Tropis","Asia Selatan"],a:0,ex:"Durian (Durio zibethinus) berasal dari hutan tropis Kalimantan dan Sumatera. Indonesia adalah salah satu produsen durian terbesar di dunia."},
  {q:"Pada lembar uang Rupiah seri 2022, pahlawan Kapitan Pattimura terdapat di pecahan berapa?",o:["Rp 1.000","Rp 5.000","Rp 2.000","Rp 500"],a:0,ex:"Kapitan Pattimura (Thomas Matulessy), pahlawan dari Maluku, tercetak di uang kertas Rp 1.000. Ia berjuang melawan penjajah Belanda di awal abad ke-19."},
  {q:"Hari Sumpah Pemuda diperingati 28 Oktober untuk mengenang ikrar persatuan pemuda pada tahun?",o:["1928","1945","1920","1908"],a:0,ex:"Sumpah Pemuda diikrarkan pada Kongres Pemuda II, 28 Oktober 1928. Isinya: satu tanah air (Indonesia), satu bangsa (Indonesia), satu bahasa (Indonesia)."},
  {q:"Presiden pertama RI, Ir. Soekarno, mendapat gelar insinyur dari sekolah tinggi yang kini menjadi?",o:["ITB (Institut Teknologi Bandung)","ITS (Institut Teknologi Surabaya)","UI (Universitas Indonesia)","UGM (Universitas Gadjah Mada)"],a:0,ex:"Soekarno lulus dari Technische Hoogeschool te Bandoeng (TH Bandung) tahun 1926 dengan gelar Insinyur Sipil. Sekolah ini kini dikenal sebagai ITB."},
  {q:"Di Selat Sunda terdapat gunung berapi aktif yang pernah meletus dahsyat tahun 1883, yaitu?",o:["Gunung Anak Krakatau","Gunung Raung","Gunung Papandayan","Gunung Merapi"],a:0,ex:"Krakatau meletus 27 Agustus 1883 dengan kekuatan dahsyat, memicu tsunami dan suaranya terdengar hingga Australia. Anak Krakatau muncul dari kaldera bekas letusan tersebut."},
  {q:"Tarian Kecak dari Bali menceritakan kisah epos Hindu yang berjudul?",o:["Ramayana","Mahabharata","Bharatayuda","Arjunawiwaha"],a:0,ex:"Tari Kecak menggambarkan kisah Ramayana — tentang Rama, Sita, dan Hanoman. Diciptakan sekitar tahun 1930-an oleh Wayan Limbak dan Walter Spies."},
  {q:"Pulau yang paling padat penduduknya di Indonesia dan menjadi pusat perekonomian adalah?",o:["Pulau Jawa","Pulau Sumatera","Pulau Kalimantan","Pulau Sulawesi"],a:0,ex:"Pulau Jawa dengan luas ±132.000 km² dihuni lebih dari 150 juta jiwa — sekitar 56% penduduk Indonesia. Menjadi pusat ekonomi, politik, dan budaya nasional."},
  {q:"Wayang kulit sebagai seni pertunjukan tradisional Indonesia diakui UNESCO pada tahun?",o:["2003","2009","2012","2016"],a:0,ex:"Wayang kulit ditetapkan UNESCO sebagai Masterpiece of Oral and Intangible Heritage of Humanity pada 7 November 2003. Dimainkan oleh dalang selama semalam suntuk."},
];

/* ═══════════════════════════════════════
   AUDIO ENGINE (dengan musik.mp3)
═══════════════════════════════════════ */
const Aud = (() => {
  let AC = null, on = true;
  let musicSrc = null, musicGain = null, masterGain = null, duckGain = null;
  let duckTout = null, musicPlaying = false, musicBuf = null, musicLoading = false;

  function ctx() {
    if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    return AC;
  }
  function initG() {
    if (masterGain) return;
    const c = ctx();
    masterGain = c.createGain(); masterGain.gain.value = on ? 1 : 0; masterGain.connect(c.destination);
    duckGain = c.createGain(); duckGain.gain.value = 1; duckGain.connect(masterGain);
    musicGain = c.createGain(); musicGain.gain.value = 0; musicGain.connect(masterGain);
  }
  function duck() {
    if (!duckGain) return;
    const c = ctx(), t = c.currentTime;
    duckGain.gain.cancelScheduledValues(t);
    duckGain.gain.setValueAtTime(duckGain.gain.value, t);
    duckGain.gain.linearRampToValueAtTime(0.1, t + 0.05);
    if (duckTout) clearTimeout(duckTout);
    duckTout = setTimeout(() => {
      if (!duckGain) return;
      const c2 = ctx(), t2 = c2.currentTime;
      duckGain.gain.cancelScheduledValues(t2);
      duckGain.gain.setValueAtTime(duckGain.gain.value, t2);
      duckGain.gain.linearRampToValueAtTime(1, t2 + 0.6);
    }, 650);
  }
  function osc(f, d, type, vol, delay) {
    if (!on) return;
    try {
      initG(); duck();
      const c = ctx(), t = c.currentTime + (delay || 0);
      const o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(duckGain);
      o.type = type || 'sine'; o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol || 0.13, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.start(t); o.stop(t + d + 0.05);
    } catch(e) {}
  }
  function sw(f1, f2, d, type, vol, delay) {
    if (!on) return;
    try {
      initG(); duck();
      const c = ctx(), t = c.currentTime + (delay || 0);
      const o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(duckGain);
      o.type = type || 'sine';
      o.frequency.setValueAtTime(f1, t); o.frequency.linearRampToValueAtTime(f2, t + d);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol || 0.11, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.start(t); o.stop(t + d + 0.05);
    } catch(e) {}
  }

  async function loadMusic() {
    if (musicBuf || musicLoading) return;
    musicLoading = true;
    try {
      initG();
      const res = await fetch('./musik.mp3');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const arr = await res.arrayBuffer();
      musicBuf = await ctx().decodeAudioData(arr);
      console.log('Musik loaded OK');
    } catch(e) {
      console.log('musik.mp3 tidak ditemukan:', e.message);
      musicBuf = null;
    }
    musicLoading = false;
  }

  function playMusic() {
    if (!on || !musicBuf || musicPlaying) return;
    try {
      initG();
      const c = ctx();
      musicSrc = c.createBufferSource();
      musicSrc.buffer = musicBuf; musicSrc.loop = true;
      musicSrc.connect(musicGain);
      musicSrc.start(0);
      musicPlaying = true;
      const t = c.currentTime;
      musicGain.gain.cancelScheduledValues(t);
      musicGain.gain.setValueAtTime(0, t);
      musicGain.gain.linearRampToValueAtTime(0.35, t + 1.5);
    } catch(e) { musicPlaying = false; }
  }
  function stopMusic() {
    if (!musicSrc) return;
    try {
      const c = ctx(), t = c.currentTime;
      musicGain.gain.cancelScheduledValues(t);
      musicGain.gain.setValueAtTime(musicGain.gain.value, t);
      musicGain.gain.linearRampToValueAtTime(0, t + 0.8);
      setTimeout(() => {
        try { musicSrc.stop(); musicSrc.disconnect(); } catch(e) {}
        musicSrc = null; musicPlaying = false;
      }, 900);
    } catch(e) { musicSrc = null; musicPlaying = false; }
  }
  function startMusic() { loadMusic().then(() => { if (on) playMusic(); }); }

  function toggle() {
    on = !on;
    if (masterGain) masterGain.gain.value = on ? 1 : 0;
    if (!on) { if (duckTout) { clearTimeout(duckTout); duckTout = null; } }
    if (on && musicBuf && !musicPlaying) playMusic();
    else if (!on && musicPlaying) stopMusic();
    return on;
  }

  return {
    startMusic, stopMusic,
    toggle() { return toggle(); },
    get on() { return on; },
    click()   { osc(660, .055, 'sine', .07); },
    correct() { [523,659,784].forEach((f,i) => osc(f,.14,'sine',.14,i*.08)); osc(1047,.35,'sine',.11,.25); sw(400,950,.15,'sine',.08,.35); },
    wrong()   { sw(260,110,.14,'sawtooth',.2); osc(100,.5,'sawtooth',.14,.14); },
    tick()    { osc(1100,.04,'square',.05); },
    tickW()   { osc(880,.07,'sine',.12); },
    tickD()   { osc(660,.09,'sine',.17); },
    timeUp()  { sw(350,140,.18,'square',.22); osc(110,.55,'sawtooth',.14,.18); },
    move()    { [720,560,440].forEach((f,i) => osc(f,.08,'sine',.1,i*.04)); },
    flag()    { [659,784,1047,784,1047,1319].forEach((f,i) => osc(f,.15,'sine',.2,i*.07)); },
    fall()    { [440,330,220,165].forEach((f,i) => osc(f,.2,'sine',.18,i*.1)); },
    select()  { sw(440,720,.12,'sine',.1); },
    ready()   { [440,554,659,880].forEach((f,i) => osc(f,.16,'sine',.17,i*.09)); },
    cd(n)     { const f=[0,349,415,494,587]; osc(f[n]||494,.24,'sine',.22); if(n===0)[523,659,784,1047].forEach((v,i)=>osc(v,.18,'sine',.19,i*.09)); },
    win()     { [523,659,784,659,784,1047,784,1047,1319,1047,1319,1568].forEach((f,i)=>osc(f,.16,'sine',.18,i*.1)); [523,659,784,880,1047].forEach((f,i)=>osc(f,.35,'triangle',.08,i*.08+.06)); },
    cozy()    { [523,659,784].forEach((f,i)=>osc(f,.18,'sine',.12,i*.09)); osc(1047,.4,'sine',.08,.3); },
  };
})();

/* ═══════════════════════════════════════
   ARENA ENGINE
═══════════════════════════════════════ */
const Arena = (() => {
  const CVS = {}, CX = {}, DIM = {}, RAFS = {}, TIMES = {}, STATES = {};

  function getCV(id) {
    if (!CVS[id]) { CVS[id] = document.getElementById(id); CX[id] = CVS[id].getContext('2d'); }
    return { cv: CVS[id], cx: CX[id] };
  }
  function resize(id, wrapId) {
    const w = document.getElementById(wrapId); if (!w) return;
    const { cv, cx } = getCV(id);
    const W = w.offsetWidth, H = w.offsetHeight, dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = W * dpr; cv.height = H * dpr; cv.style.width = W + 'px'; cv.style.height = H + 'px';
    cx.scale(dpr, dpr); DIM[id] = { W, H };
  }
  function setState(id, s) { STATES[id] = Object.assign({}, STATES[id] || {}, s); }
  function startLoop(id, wrapId) {
    if (RAFS[id]) return;
    TIMES[id] = 0;
    (function lp(ts) { TIMES[id] = ts * 0.001; draw(id, wrapId); RAFS[id] = requestAnimationFrame(lp); })(0);
  }
  function stopLoop(id) { if (RAFS[id]) { cancelAnimationFrame(RAFS[id]); RAFS[id] = null; } }
  function triggerFall(id, side) {
    const s = STATES[id]; if (!s || !s[side]) return;
    s[side].falling = true; s[side].fallAngle = 0; s[side].fallSpd = 0.055;
  }

  /* ── BG ── */
  function drawBG(cx, W, H, T) {
    const sky = cx.createLinearGradient(0, 0, 0, H * .48);
    sky.addColorStop(0, '#060D2E'); sky.addColorStop(1, '#0F2D73');
    cx.fillStyle = sky; cx.fillRect(0, 0, W, H * .48);
    const gnd = cx.createLinearGradient(0, H * .48, 0, H);
    gnd.addColorStop(0, '#14532D'); gnd.addColorStop(.45, '#0A2B16'); gnd.addColorStop(1, '#061409');
    cx.fillStyle = gnd; cx.fillRect(0, H * .48, W, H * .52);
    cx.fillStyle = 'rgba(74,222,128,.3)'; cx.fillRect(0, H * .48, W, 2.5);
    // Stars
    for (let i = 0; i < 10; i++) {
      const sx = [.06,.13,.22,.34,.44,.62,.73,.82,.89,.95][i];
      const sy = [.14,.08,.19,.06,.17,.07,.15,.09,.18,.07][i];
      cx.globalAlpha = .32 + .28 * Math.sin(T * 1.1 + i * 1.7);
      cx.fillStyle = '#fff'; cx.beginPath(); cx.arc(sx * W, sy * H, 1.1, 0, Math.PI * 2); cx.fill();
    }
    cx.globalAlpha = 1;
    cx.fillStyle = '#FEFCE8'; cx.beginPath(); cx.arc(W * .91, H * .17, W * .018, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = '#0F2D73'; cx.beginPath(); cx.arc(W * .914, H * .13, W * .013, 0, Math.PI * 2); cx.fill();
    drawCrowd(cx, W, H, T);
  }

  /* ── CROWD ── */
  function drawCrowd(cx, W, H, T) {
    const seg = [
      [.02,.21,'#EF4444'],[.05,.19,'#FBBF24'],[.07,.21,'#06B6D4'],[.10,.19,'#A78BFA'],
      [.12,.21,'#F97316'],[.14,.19,'#EC4899'],[.16,.21,'#34D399'],[.18,.19,'#60A5FA'],
      [.78,.21,'#EF4444'],[.81,.19,'#FBBF24'],[.83,.21,'#8B5CF6'],[.86,.19,'#10B981'],
      [.88,.21,'#F97316'],[.90,.19,'#EC4899'],[.93,.21,'#60A5FA'],[.96,.19,'#34D399'],
    ];
    const SKINS = ['#C68642','#D4A07A','#8B5040','#C68642','#D4A07A'];
    seg.forEach(([sx, hf, sc], i) => {
      const bob = Math.sin(T * 2.8 + i) * .016;
      const px = sx * W, ch = hf * H + bob * H, py = H * .48 - ch;
      const armUp = Math.sin(T * 3.5 + i * 1.3) > .15;
      const skin = SKINS[i % SKINS.length];
      const sw2 = W * .026;
      cx.globalAlpha = .72;
      // Pants
      cx.fillStyle = '#1F2937'; cx.fillRect(px - sw2 * .28, py + ch * .72, sw2 * .22, ch * .28);
      cx.fillStyle = '#374151'; cx.fillRect(px + sw2 * .06, py + ch * .72, sw2 * .22, ch * .28);
      // Shoes
      cx.fillStyle = '#111';
      cx.beginPath(); cx.ellipse(px - sw2 * .17, H * .48, sw2 * .17, 3.5, 0, 0, Math.PI * 2); cx.fill();
      cx.beginPath(); cx.ellipse(px + sw2 * .17, H * .48, sw2 * .17, 3.5, 0, 0, Math.PI * 2); cx.fill();
      // Body
      cx.fillStyle = sc; cx.beginPath(); cx.roundRect(px - sw2 * .36, py + ch * .22, sw2 * .72, ch * .52, sw2 * .12); cx.fill();
      // Arms
      cx.strokeStyle = sc; cx.lineWidth = Math.max(1.5, sw2 * .24); cx.lineCap = 'round';
      cx.globalAlpha = .65;
      if (armUp) {
        cx.beginPath(); cx.moveTo(px - sw2 * .36, py + ch * .35); cx.lineTo(px - sw2 * .55, py + ch * .04); cx.stroke();
        cx.beginPath(); cx.moveTo(px + sw2 * .36, py + ch * .35); cx.lineTo(px + sw2 * .55, py + ch * .04); cx.stroke();
        cx.fillStyle = skin;
        cx.beginPath(); cx.arc(px - sw2 * .56, py + ch * .01, sw2 * .13, 0, Math.PI * 2); cx.fill();
        cx.beginPath(); cx.arc(px + sw2 * .56, py + ch * .01, sw2 * .13, 0, Math.PI * 2); cx.fill();
      } else {
        cx.beginPath(); cx.moveTo(px - sw2 * .36, py + ch * .38); cx.lineTo(px - sw2 * .5, py + ch * .62); cx.stroke();
        cx.beginPath(); cx.moveTo(px + sw2 * .36, py + ch * .38); cx.lineTo(px + sw2 * .5, py + ch * .62); cx.stroke();
      }
      // Head
      cx.globalAlpha = .8;
      cx.fillStyle = skin; cx.beginPath(); cx.arc(px, py + ch * .12, sw2 * .29, 0, Math.PI * 2); cx.fill();
      cx.fillStyle = '#1A0800'; cx.beginPath(); cx.arc(px, py + ch * .1, sw2 * .27, Math.PI, 0, false); cx.fill();
      cx.fillStyle = 'white';
      cx.beginPath(); cx.ellipse(px - sw2 * .1, py + ch * .14, sw2 * .075, sw2 * .065, 0, 0, Math.PI * 2); cx.fill();
      cx.beginPath(); cx.ellipse(px + sw2 * .1, py + ch * .14, sw2 * .075, sw2 * .065, 0, 0, Math.PI * 2); cx.fill();
      cx.fillStyle = '#111';
      cx.beginPath(); cx.arc(px - sw2 * .1, py + ch * .14, sw2 * .036, 0, Math.PI * 2); cx.fill();
      cx.beginPath(); cx.arc(px + sw2 * .1, py + ch * .14, sw2 * .036, 0, Math.PI * 2); cx.fill();
      if (armUp) {
        cx.strokeStyle = 'rgba(255,255,255,.55)'; cx.lineWidth = 1.2;
        cx.beginPath(); cx.arc(px, py + ch * .19, sw2 * .1, .1, Math.PI - .1, false); cx.stroke();
      }
      cx.globalAlpha = 1;
    });
  }

  /* ── FLAG (stays at center, characters walk to it) ── */
  function drawFlag(cx, W, H, T) {
    const fx = W * .5, py = H * .48, ph = H * .35;
    cx.shadowColor = 'rgba(220,38,38,.3)'; cx.shadowBlur = 10;
    cx.strokeStyle = '#92400E'; cx.lineWidth = 5.5; cx.lineCap = 'round';
    cx.shadowOffsetX = 2; cx.shadowOffsetY = 2;
    cx.beginPath(); cx.moveTo(fx, py); cx.lineTo(fx, py - ph); cx.stroke();
    cx.shadowColor = 'transparent'; cx.shadowBlur = 0; cx.shadowOffsetX = 0; cx.shadowOffsetY = 0;
    const wv = Math.sin(T * 3.8) * .065;
    const fw = W * .055, fh = H * .11;
    cx.save(); cx.translate(fx, py - ph);
    const g1 = cx.createLinearGradient(0, 0, fw, fh * .5);
    g1.addColorStop(0, '#DC2626'); g1.addColorStop(1, '#B91C1C');
    cx.fillStyle = g1; cx.beginPath(); cx.moveTo(0, 0);
    cx.quadraticCurveTo(fw * .5 + wv * W, fh * .12, fw, 0);
    cx.quadraticCurveTo(fw * .5 + wv * W, fh * .62, fw, fh * .5);
    cx.lineTo(0, fh * .5); cx.closePath(); cx.fill();
    cx.fillStyle = '#f4f4f4'; cx.beginPath(); cx.moveTo(0, fh * .5);
    cx.quadraticCurveTo(fw * .5 + wv * W, fh * .62, fw, fh * .5);
    cx.quadraticCurveTo(fw * .5 + wv * W, fh * 1.12, fw, fh);
    cx.lineTo(0, fh); cx.closePath(); cx.fill();
    cx.restore();
    // Glow when captured
    const s = STATES['arena-cv'] || STATES['cozy-cv'];
    if (s && s.winner) {
      const gc = s.winner === 'p1' || s.winner === 't1' ? '#F97316' : (s.winner === 'p2' || s.winner === 't2' ? '#1E3A8A' : '#7C3AED');
      cx.save();
      cx.shadowColor = gc; cx.shadowBlur = 20 + 8 * Math.sin(T * 6);
      cx.fillStyle = gc + '55'; cx.beginPath(); cx.arc(fx, py - ph * .5, 18, 0, Math.PI * 2); cx.fill();
      cx.restore();
    }
    cx.fillStyle = 'rgba(0,0,0,.28)'; cx.beginPath(); cx.ellipse(fx, py + 2, 8, 3, 0, 0, Math.PI * 2); cx.fill();
  }

  /* ── HUMAN (front-view, fluid walking animation) ── */
  function drawHuman(cx, x, y, tc, tcd, skin, hair, flip, walking, falling, fallA, celebrate, idx) {
    cx.save(); cx.translate(x, y);
    if (fallA > 0) {
      const fy = 96;
      cx.translate(flip ? -22 : 22, fy);
      cx.rotate((flip ? 1 : -1) * fallA);
      cx.translate(flip ? 22 : -22, -fy);
    }
    if (flip) cx.scale(-1, 1);
    const T2 = (TIMES['arena-cv'] || TIMES['cozy-cv'] || 0);
    const phase = T2 * 4.5 + idx * 1.2;
    // Walking motion
    const lean = walking ? Math.sin(phase) * .055 : (celebrate ? Math.sin(T2 * 9) * .08 : 0);
    const legSwing = walking ? Math.sin(phase) * .32 : 0;
    const armSwing = walking ? Math.sin(phase + Math.PI) * .28 : (celebrate ? .7 : 0);
    const bodyBob = walking ? Math.abs(Math.sin(phase)) * 3 : 0; // vertical bob
    cx.translate(0, -bodyBob);
    cx.rotate(lean);

    // Shadow
    cx.fillStyle = 'rgba(0,0,0,.25)';
    const shadowScale = 1 - bodyBob / 30;
    cx.beginPath(); cx.ellipse(0, 96 + bodyBob, 20 * shadowScale, 5 * shadowScale, 0, 0, Math.PI * 2); cx.fill();

    // ── LEGS ──
    const legColors = ['#1F2937', '#374151'];
    [-7, 7].forEach((ox, li) => {
      cx.save(); cx.translate(ox, 75);
      const rot = li === 0 ? -legSwing : legSwing;
      cx.rotate(rot);
      cx.fillStyle = legColors[li]; cx.beginPath(); cx.roundRect(-6, 0, 12, 23, 3); cx.fill();
      // Shoe
      cx.fillStyle = '#111'; cx.beginPath(); cx.roundRect(-8, 20, 18, 9, 4); cx.fill();
      cx.fillStyle = 'rgba(255,255,255,.08)'; cx.beginPath(); cx.roundRect(-7, 20, 8, 3.5, 2); cx.fill();
      cx.restore();
    });

    // ── BODY ──
    cx.save(); cx.translate(0, 46);
    const bg = cx.createLinearGradient(-18, 0, 18, 29); bg.addColorStop(0, tc); bg.addColorStop(1, tcd);
    cx.fillStyle = tcd; cx.beginPath(); cx.roundRect(-19, -1, 38, 31, 5); cx.fill();
    cx.fillStyle = bg; cx.beginPath(); cx.roundRect(-18, 0, 36, 29, 4); cx.fill();
    cx.fillStyle = 'rgba(255,255,255,.16)'; cx.beginPath(); cx.roundRect(-16, 0, 32, 7, 3); cx.fill();
    // Number badge
    cx.fillStyle = 'rgba(255,255,255,.3)'; cx.beginPath(); cx.roundRect(-6, 8, 12, 12, 3); cx.fill();
    cx.fillStyle = 'rgba(255,255,255,.88)'; cx.font = 'bold 11px Bebas Neue,sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle';
    cx.fillText(idx + 1, 0, 15);
    // Belt
    cx.fillStyle = 'rgba(0,0,0,.35)'; cx.fillRect(-18, 26, 36, 5);
    cx.fillStyle = '#D97706'; cx.beginPath(); cx.roundRect(-5, 26, 10, 5, 2); cx.fill();
    cx.restore();

    // ── ARMS ──
    const rAng = (-28 - armSwing * 40) * Math.PI / 180;
    cx.save(); cx.translate(18, 49); cx.rotate(rAng);
    cx.fillStyle = tc; cx.beginPath(); cx.roundRect(-5, 0, 11, 19, 4); cx.fill();
    cx.fillStyle = skin; cx.beginPath(); cx.roundRect(-5, 13, 11, 11, 4); cx.fill();
    cx.restore();
    const lAng = (24 + armSwing * 30) * Math.PI / 180;
    cx.save(); cx.translate(-18, 51); cx.rotate(lAng);
    cx.fillStyle = tcd; cx.beginPath(); cx.roundRect(-5, 0, 11, 17, 4); cx.fill();
    cx.fillStyle = skin; cx.beginPath(); cx.roundRect(-5, 11, 11, 10, 4); cx.fill();
    cx.restore();

    // ── HEAD ──
    const headBob = walking ? Math.sin(phase * 2) * 1.5 : 0;
    cx.save(); cx.translate(0, 3 - headBob);
    const hd = skin === '#C68642' ? '#A0673A' : skin === '#D4A07A' ? '#B8825C' : '#7A3D28';
    cx.fillStyle = hd; cx.beginPath(); cx.roundRect(-6, 40, 12, 8, 2); cx.fill();
    cx.fillStyle = hd; cx.beginPath(); cx.roundRect(-19, 2, 38, 38, 6); cx.fill();
    const hg = cx.createLinearGradient(-18, 3, 16, 38); hg.addColorStop(0, skin); hg.addColorStop(1, hd);
    cx.fillStyle = hg; cx.beginPath(); cx.roundRect(-18, 3, 36, 36, 5); cx.fill();
    cx.fillStyle = hair; cx.beginPath(); cx.roundRect(-18, 3, 36, 9, 5); cx.fill();
    cx.beginPath(); cx.roundRect(-19, 5, 5, 14, 3); cx.fill();
    cx.beginPath(); cx.roundRect(14, 5, 5, 14, 3); cx.fill();
    // Brow
    const brow = walking && !celebrate ? .07 : 0;
    cx.fillStyle = hair;
    cx.save(); cx.translate(-9, 17); cx.rotate(brow); cx.beginPath(); cx.roundRect(-5, -2, 10, 3.5, 2); cx.fill(); cx.restore();
    cx.save(); cx.translate(9, 17); cx.rotate(-brow); cx.beginPath(); cx.roundRect(-5, -2, 10, 3.5, 2); cx.fill(); cx.restore();
    // Eyes
    cx.fillStyle = 'white';
    cx.beginPath(); cx.roundRect(-15, 20, 11, 10, 3); cx.fill();
    cx.beginPath(); cx.roundRect(4, 20, 11, 10, 3); cx.fill();
    cx.fillStyle = idx % 3 === 0 ? '#7C3AED' : '#1E40AF';
    cx.beginPath(); cx.arc(-9, 25, 4, 0, Math.PI * 2); cx.fill();
    cx.beginPath(); cx.arc(9, 25, 4, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = '#111';
    cx.beginPath(); cx.arc(-9, 25, 2.5, 0, Math.PI * 2); cx.fill();
    cx.beginPath(); cx.arc(9, 25, 2.5, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = 'rgba(255,255,255,.8)';
    cx.beginPath(); cx.arc(-8, 23, 1.1, 0, Math.PI * 2); cx.fill();
    cx.beginPath(); cx.arc(10, 23, 1.1, 0, Math.PI * 2); cx.fill();
    // Nose
    cx.strokeStyle = 'rgba(0,0,0,.18)'; cx.lineWidth = 1.5; cx.lineCap = 'round';
    cx.beginPath(); cx.moveTo(-3, 29); cx.lineTo(-4, 33); cx.lineTo(4, 33); cx.stroke();
    // Mouth
    cx.strokeStyle = 'rgba(0,0,0,.3)'; cx.lineWidth = 2;
    if (celebrate) {
      cx.beginPath(); cx.arc(0, 34, 6, .12, Math.PI - .12, false); cx.stroke();
      cx.fillStyle = 'rgba(255,220,100,.8)';
      [{ x: -14, y: 14 }, { x: 14, y: 14 }].forEach(s => {
        cx.beginPath(); cx.arc(s.x, s.y + Math.sin(T2 * 9 + s.x) * 2, 3.5, 0, Math.PI * 2); cx.fill();
      });
    } else if (fallA > 1.2) {
      cx.strokeStyle = 'rgba(255,0,0,.7)'; cx.lineWidth = 2;
      [[-13,22,-6,28],[-6,22,-13,28],[6,22,13,28],[13,22,6,28]].forEach(([x1,y1,x2,y2]) => {
        cx.beginPath(); cx.moveTo(x1,y1); cx.lineTo(x2,y2); cx.stroke();
      });
    } else if (walking) {
      cx.beginPath(); cx.moveTo(-8, 36); cx.quadraticCurveTo(0, 39, 8, 36); cx.stroke();
      cx.fillStyle = 'rgba(255,255,255,.55)'; cx.beginPath(); cx.roundRect(-6, 35, 12, 3, 2); cx.fill();
    } else {
      cx.beginPath(); cx.arc(0, 35, 5, .15, Math.PI - .15, false); cx.stroke();
    }
    // Blush
    cx.fillStyle = 'rgba(220,120,100,.18)';
    cx.beginPath(); cx.ellipse(-15, 31, 6, 4, 0, 0, Math.PI * 2); cx.fill();
    cx.beginPath(); cx.ellipse(15, 31, 6, 4, 0, 0, Math.PI * 2); cx.fill();
    cx.restore();
    cx.restore();
  }

  /* ── SIDE HUMAN (supporters) ── */
  function drawHumanSide(cx, x, y, tc, tcd, skin, hair, facingR, cheer, idx) {
    const T2 = TIMES['arena-cv'] || 0;
    cx.save(); cx.translate(x, y); if (!facingR) cx.scale(-1, 1);
    const lean = cheer ? Math.sin(T2 * 5.5 + idx) * .1 : .02;
    cx.rotate(-lean);
    cx.fillStyle = 'rgba(0,0,0,.2)'; cx.beginPath(); cx.ellipse(0, 4, 15, 4, 0, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = '#1F2937'; cx.beginPath(); cx.roundRect(-5, -22, 9, 22, 3); cx.fill();
    cx.fillStyle = '#374151'; cx.beginPath(); cx.roundRect(3, -22, 8, 22, 3); cx.fill();
    cx.fillStyle = '#111'; cx.beginPath(); cx.roundRect(-3, -3, 15, 8, 4); cx.fill();
    cx.save(); cx.translate(0, -23); cx.rotate(-lean * .4);
    cx.fillStyle = tcd; cx.beginPath(); cx.roundRect(-12, -32, 24, 33, 5); cx.fill();
    cx.fillStyle = tc; cx.beginPath(); cx.roundRect(-11, -31, 22, 31, 4); cx.fill();
    cx.fillStyle = 'rgba(255,255,255,.14)'; cx.beginPath(); cx.roundRect(-10, -31, 20, 7, 3); cx.fill();
    if (cheer) {
      const wa = (-75 + Math.sin(T2 * 5 + idx) * 12) * Math.PI / 180;
      cx.save(); cx.translate(11, -20); cx.rotate(wa);
      cx.fillStyle = tc; cx.beginPath(); cx.roundRect(-4, 0, 9, 20, 4); cx.fill();
      cx.fillStyle = skin; cx.beginPath(); cx.roundRect(-4, 15, 9, 10, 4); cx.fill();
      cx.restore();
      cx.save(); cx.translate(-11, -20); cx.rotate(-wa);
      cx.fillStyle = tcd; cx.beginPath(); cx.roundRect(-4, 0, 9, 18, 4); cx.fill();
      cx.fillStyle = skin; cx.beginPath(); cx.roundRect(-4, 13, 9, 9, 4); cx.fill();
      cx.restore();
    }
    cx.restore();
    cx.save(); cx.translate(3, -72);
    const hd = skin === '#C68642' ? '#A0673A' : '#B8825C';
    cx.fillStyle = hd; cx.beginPath(); cx.roundRect(-13, -1, 27, 26, 5); cx.fill();
    cx.fillStyle = skin; cx.beginPath(); cx.roundRect(-12, 1, 25, 23, 4); cx.fill();
    cx.fillStyle = hair; cx.beginPath(); cx.roundRect(-12, 1, 25, 7, 4); cx.fill();
    cx.fillStyle = 'white'; cx.beginPath(); cx.roundRect(5, 8, 9, 8, 2.5); cx.fill();
    cx.fillStyle = '#1E40AF'; cx.beginPath(); cx.arc(10, 12, 3.5, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = '#111'; cx.beginPath(); cx.arc(10, 12, 2, 0, Math.PI * 2); cx.fill();
    cx.fillStyle = 'rgba(255,255,255,.8)'; cx.beginPath(); cx.arc(11, 11, 1, 0, Math.PI * 2); cx.fill();
    if (cheer) {
      cx.strokeStyle = 'rgba(0,0,0,.28)'; cx.lineWidth = 1.5;
      cx.beginPath(); cx.moveTo(4, 19); cx.quadraticCurveTo(10, 21, 14, 19); cx.stroke();
    }
    cx.restore();
    cx.restore();
  }

  /* ── PHYSICS UPDATE ── */
  function updatePhysics(s) {
    ['p1', 'p2', 't1', 't2', 'solo'].forEach(k => {
      const p = s[k]; if (!p || !p.falling) return;
      if (!p.fallSpd) p.fallSpd = 0.055;
      p.fallAngle = (p.fallAngle || 0) + p.fallSpd;
      p.fallSpd += 0.004;
      if (p.fallAngle >= Math.PI / 2) { p.fallAngle = Math.PI / 2; }
    });
  }

  /* ── DRAW ── */
  function draw(id, wrapId) {
    if (!DIM[id]) resize(id, wrapId);
    const { cx } = getCV(id);
    const { W, H } = DIM[id];
    const T = TIMES[id] || 0;
    const s = STATES[id] || {};
    cx.clearRect(0, 0, W, H);
    drawBG(cx, W, H, T);
    updatePhysics(s);
    drawFlag(cx, W, H, T);
    const SKINS = ['#C68642', '#D4A07A', '#8B5040', '#C68642', '#D4A07A'];
    const HAIRS = ['#1A0800', '#3B1A0A', '#0A0A0A', '#3B1A0A', '#1A0800'];
    const FLAGS_X = W * .5;

    if (s.mode === 1) {
      // Characters walk TOWARD center flag
      const p1sc = (s.p1 || {}).score || 0, p2sc = (s.p2 || {}).score || 0;
      // P1 starts at left, walks right toward flag (W*.5)
      const p1x = W * .08 + (p1sc / 20) * (W * .38);
      const p2x = W * .92 - (p2sc / 20) * (W * .38);
      const cy = H * .36;
      // Draw 3 chars per side
      for (let i = 0; i < 3; i++) {
        const ox = (i - 1) * W * .055, oy = i === 1 ? 0 : H * .025;
        const fa = s.p1 && s.p1.falling ? Math.min(Math.PI / 2, s.p1.fallAngle || 0) : 0;
        drawHuman(cx, p1x + ox, cy + oy, '#F97316', '#C2410C', SKINS[i], HAIRS[i], false,
          !!(s.p1 && s.p1.walking) && !s.over, fa > 0, fa, s.winner === 'p1' && i === 1, i);
      }
      for (let i = 0; i < 3; i++) {
        const ox = (1 - i) * W * .055, oy = i === 1 ? 0 : H * .025;
        const fa = s.p2 && s.p2.falling ? Math.min(Math.PI / 2, s.p2.fallAngle || 0) : 0;
        drawHuman(cx, p2x + ox, cy + oy, '#1E3A8A', '#1e2d5a', SKINS[(i+1)%5], HAIRS[(i+2)%5], true,
          !!(s.p2 && s.p2.walking) && !s.over, fa > 0, fa, s.winner === 'p2' && i === 1, i);
      }
      cx.font = `bold ${H * .09}px Bebas Neue,sans-serif`; cx.textAlign = 'center';
      cx.fillStyle = 'rgba(249,115,22,.55)'; cx.fillText(p1sc, W * .055, H * .97);
      cx.fillStyle = 'rgba(96,165,250,.55)'; cx.fillText(p2sc, W * .945, H * .97);

    } else if (s.mode === 2) {
      const t1 = s.t1 || { score: 0, players: [], pi: 0 };
      const t2 = s.t2 || { score: 0, players: [], pi: 0 };
      const n1 = t1.players.length || 1, n2 = t2.players.length || 1;
      const areaW = W * .38;
      const sp1 = Math.min(areaW / Math.max(n1, .7), W * .1);
      const sp2 = Math.min(areaW / Math.max(n2, .7), W * .1);
      // Active player walks, supporters cheer from side
      const t1x = W * .07 + (t1.score / 20) * W * .38;
      const t2x = W * .93 - (t2.score / 20) * W * .38;
      // Supporters
      for (let i = 0; i < n1; i++) {
        if (i === t1.pi) continue;
        const sx = W * .03 + (i % Math.ceil(n1 / 2)) * sp1 * .8;
        drawHumanSide(cx, sx, H * .82, '#F97316', '#C2410C', SKINS[i%5], HAIRS[i%5], true, !s.over, i);
      }
      for (let i = 0; i < n2; i++) {
        if (i === t2.pi) continue;
        const sx = W * .97 - (i % Math.ceil(n2 / 2)) * sp2 * .8;
        drawHumanSide(cx, sx, H * .82, '#1E3A8A', '#1e2d5a', SKINS[(i+2)%5], HAIRS[(i+1)%5], false, !s.over, i);
      }
      const t1fa = t1.falling ? Math.min(Math.PI / 2, t1.fallAngle || 0) : 0;
      const t2fa = t2.falling ? Math.min(Math.PI / 2, t2.fallAngle || 0) : 0;
      drawHuman(cx, t1x, H * .36, '#F97316', '#C2410C', SKINS[0], HAIRS[0], false,
        !t1.falling && !s.over, t1fa > 0, t1fa, s.winner === 't1', 0);
      drawHuman(cx, t2x, H * .36, '#1E3A8A', '#1e2d5a', SKINS[1], HAIRS[1], true,
        !t2.falling && !s.over, t2fa > 0, t2fa, s.winner === 't2', 0);
      cx.font = `bold ${H * .08}px Bebas Neue,sans-serif`; cx.textAlign = 'center';
      cx.fillStyle = 'rgba(249,115,22,.55)'; cx.fillText(t1.score, W * .044, H * .97);
      cx.fillStyle = 'rgba(96,165,250,.55)'; cx.fillText(t2.score, W * .956, H * .97);

    } else if (s.mode === 3) {
      // Cozy: solo char walks from left to flag at center
      const solo = s.solo || { score: 0 };
      const sx = W * .07 + (solo.score / 20) * (FLAGS_X - W * .1);
      const fa = solo.falling ? Math.min(Math.PI / 2, solo.fallAngle || 0) : 0;
      drawHuman(cx, sx, H * .38, '#7C3AED', '#5B21B6', '#C68642', '#1A0800', false,
        !solo.falling && !s.over, fa > 0, fa, s.winner === 'solo', 0);
      cx.font = `bold ${H * .09}px Bebas Neue,sans-serif`; cx.textAlign = 'center';
      cx.fillStyle = 'rgba(167,139,250,.55)'; cx.fillText(solo.score, W * .5, H * .97);
    }
  }

  return { resize, setState, startLoop, stopLoop, triggerFall };
})();

/* ═══════════════════════════════════════
   HOME CANVAS (particles + garuda)
═══════════════════════════════════════ */
(function () {
  // Particles
  let pcv, pcx, PW, PH, ps = [];
  function initP() {
    pcv = document.getElementById('home-particles'); if (!pcv) return;
    pcx = pcv.getContext('2d'); resizeP();
    const cols = ['#DC2626', '#EF4444', '#F59E0B', '#ffffff'];
    for (let i = 0; i < 45; i++) ps.push({ x: Math.random() * PW, y: Math.random() * PH, r: Math.random() * 2 + .8, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * .45 + .1 });
    (function lp() { pcx.clearRect(0, 0, PW, PH); ps.forEach(p => { pcx.globalAlpha = p.a; pcx.fillStyle = p.c; pcx.beginPath(); pcx.arc(p.x, p.y, p.r, 0, Math.PI * 2); pcx.fill(); p.x += p.vx; p.y += p.vy; if (p.x < 0) p.x = PW; if (p.x > PW) p.x = 0; if (p.y < 0) p.y = PH; if (p.y > PH) p.y = 0; }); pcx.globalAlpha = 1; requestAnimationFrame(lp); })();
  }
  function resizeP() { if (!pcv) return; PW = pcv.offsetWidth; PH = pcv.offsetHeight; const d = window.devicePixelRatio || 1; pcv.width = PW * d; pcv.height = PH * d; pcx.scale(d, d); }
  window.addEventListener('resize', resizeP);
  window.addEventListener('load', () => setTimeout(initP, 100));

  // Garuda animation
  (function () {
    const cv = document.getElementById('garuda-cv'); if (!cv) return;
    const cx = cv.getContext('2d'); let t = 0;
    (function lp() {
      cx.clearRect(0, 0, 110, 100);
      const bob = Math.sin(t * .85) * 3, lean = Math.sin(t * .5) * .04;
      cx.save(); cx.translate(55, 52 + bob); cx.rotate(lean);
      cx.fillStyle = '#DC2626'; cx.beginPath(); cx.arc(0, -2, 16, 0, Math.PI * 2); cx.fill();
      cx.fillStyle = '#DC2626'; cx.beginPath(); cx.ellipse(7, -7, 5, 7, .3, 0, Math.PI * 2); cx.fill();
      cx.fillStyle = 'white'; cx.beginPath(); cx.arc(8, -6, 3, 0, Math.PI * 2); cx.fill();
      cx.fillStyle = '#111'; cx.beginPath(); cx.arc(9, -6, 1.5, 0, Math.PI * 2); cx.fill();
      cx.fillStyle = 'rgba(255,255,255,.8)'; cx.beginPath(); cx.arc(9.5, -6.5, .7, 0, Math.PI * 2); cx.fill();
      const wf = Math.sin(t * 2) * .08;
      cx.fillStyle = '#DC2626';
      cx.save(); cx.translate(-2, 0); cx.rotate(-Math.PI / 6 - wf); cx.beginPath(); cx.moveTo(0, 0); cx.lineTo(-30, -12); cx.lineTo(-25, 4); cx.lineTo(-15, 6); cx.closePath(); cx.fill(); cx.restore();
      cx.save(); cx.translate(-2, 0); cx.rotate(-Math.PI / 6 - wf * .8); cx.fillStyle = '#B91C1C'; cx.beginPath(); cx.moveTo(0, 0); cx.lineTo(-28, -8); cx.lineTo(-22, 6); cx.closePath(); cx.fill(); cx.restore();
      cx.fillStyle = '#DC2626'; cx.beginPath(); cx.moveTo(-6, 10); cx.lineTo(-12, 26); cx.lineTo(-2, 18); cx.lineTo(8, 26); cx.lineTo(6, 10); cx.closePath(); cx.fill();
      cx.restore(); t += .04; requestAnimationFrame(lp);
    })();
  })();
})();

/* ═══════════════════════════════════════
   CONFETTI
═══════════════════════════════════════ */
const Confetti = (() => {
  let raf = null;
  function start(wc) {
    const cv = document.getElementById('cf-cv'), ct = cv.getContext('2d');
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    const cols = [wc, '#F59E0B', '#16A34A', '#DC2626', '#1E3A8A', '#FBBF24', '#EF4444'];
    const ps = Array.from({ length: 150 }, () => ({ x: Math.random() * cv.width, y: Math.random() * -cv.height, w: Math.random() * 14 + 5, h: Math.random() * 6 + 3, r: Math.random() * Math.PI * 2, rs: Math.random() * .13 - .065, vx: Math.random() * 2.4 - 1.2, vy: Math.random() * 5 + 2, c: cols[Math.floor(Math.random() * cols.length)] }));
    function draw() { ct.clearRect(0, 0, cv.width, cv.height); ps.forEach(p => { ct.save(); ct.translate(p.x, p.y); ct.rotate(p.r); ct.fillStyle = p.c; ct.globalAlpha = .88; ct.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ct.restore(); p.x += p.vx; p.y += p.vy; p.r += p.rs; if (p.y > cv.height + 20) { p.y = -20; p.x = Math.random() * cv.width; } }); raf = requestAnimationFrame(draw); }
    stop(); draw();
  }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } const cv = document.getElementById('cf-cv'); if (cv) cv.getContext('2d').clearRect(0, 0, cv.width, cv.height); }
  return { start, stop };
})();

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */
function shuffle(a) { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }
function prepQ() { return shuffle(QDB).map((q, idx) => { const ans = q.o[q.a]; const opts = shuffle([...q.o]); return { q: q.q, opts, ai: opts.indexOf(ans), id: idx, ex: q.ex, p1t: 0, p2t: 0, t1t: 0, t2t: 0, ct: 0, p1ans: -1, p2ans: -1, t1ans: -1, t2ans: -1, cans: -1 }; }); }
function floatLbl(el, text, color) { if (!el) return; const r = el.getBoundingClientRect(); const d = document.createElement('div'); d.className = 'float-lbl'; d.textContent = text; d.style.cssText = `left:${r.left + r.width / 2 - 22}px;top:${r.top + r.height * .28}px;color:${color}`; document.body.appendChild(d); setTimeout(() => d.remove(), 1150); }
function flashPanel(side, type) { const fl = document.getElementById('pfl-' + side); if (!fl) return; fl.className = 'pflash fl-' + type; setTimeout(() => { fl.className = 'pflash'; }, 780); }

/* ═══════════════════════════════════════
   APP CONTROLLER
═══════════════════════════════════════ */
const App = (() => {
  let cur = 's-home', mode = 1, G = {}, teamCounts = [3, 3], qHistory = [], setupPhase = 0;
  let savedState = null; // for resume

  /* ── navigate ── */
  function go(id) {
    Aud.click();
    const o = document.getElementById(cur), n = document.getElementById(id);
    if (!n || id === cur) return;
    o.classList.add('leaving'); setTimeout(() => o.classList.remove('active', 'leaving'), 280);
    n.classList.add('active'); cur = id;
    if (id === 's-home') { setTimeout(() => Aud.startMusic(), 400); updateResumeBtn(); }
  }
  function updateResumeBtn() {
    const btn = document.getElementById('resume-btn');
    if (btn) btn.style.display = savedState ? '' : 'none';
  }
  function tryResume() {
    if (!savedState) return;
    G = savedState.G; mode = savedState.mode; qHistory = savedState.qHistory;
    resumeGame();
  }

  /* ── sound ── */
  function toggleSound() { const on = Aud.toggle(); document.getElementById('snd-btn').textContent = on ? '🔊 Suara' : '🔇 Mati'; }

  /* ── about tabs ── */
  function switchTab(n) {
    document.querySelectorAll('.atab').forEach((t, i) => t.classList.toggle('active', i === n));
    document.querySelectorAll('.about-panel').forEach((p, i) => p.classList.toggle('active', i === n));
    if (n === 2) buildAboutQList();
  }
  function buildAboutQList() {
    const el = document.getElementById('about-qlist'); if (!el) return;
    if (el.childElementCount > 0) return; // already built
    el.innerHTML = '';
    QDB.forEach((q, i) => {
      const card = document.createElement('div'); card.className = 'aq-card';
      card.innerHTML = `<div class="aq-num">SOAL ${i + 1}</div><div class="aq-q">${q.q}</div><div class="aq-ans">✅ ${q.o[q.a]}</div><div class="aq-exp">${q.ex}</div>`;
      el.appendChild(card);
    });
  }

  /* ── howto ── */
  const HT = {
    1: { badge: '⚔️ MODE 1', title: 'Rebut Bendera', sub: '2 Pemain — Layar Dibagi 2', steps: [
      { i: '🏁', t: 'Rebut Bendera', d: 'Karaktermu berjalan menuju bendera di tengah lapangan setiap jawaban benar. Yang pertama sampai, MENANG!', p: 'Jawab cepat dan tepat!', pc: 'pill-r' },
      { i: '⏱️', t: '70 Detik', d: 'Waktu 70 dtk per pemain. Jawab benar −3 dtk, salah −5 dtk dari sisa waktumu!', p: '−3 benar · −5 salah', pc: 'pill-a' },
      { i: '📋', t: '20 Soal', d: 'Jawab 20 soal pengetahuan Indonesia. Soal yang salah balik ke antrian sampai dijawab benar!', p: 'Soal salah = antri ulang', pc: 'pill-r' },
      { i: '💥', t: 'Kalah!', d: 'Waktu habis = kalah. Lawan merebut bendera duluan = kalah. Karakter yang kalah akan jatuh dramatis!', p: 'Yang duluan = JUARA!', pc: 'pill-r' },
    ]},
    2: { badge: '🤝 MODE 2', title: 'Tim Battle', sub: '2 Tim — Maks 20 Peserta/Tim', steps: [
      { i: '🏁', t: 'Rebut Bendera Tim', d: 'Wakil tim berjalan ke bendera setiap jawaban benar. Suporter bersemangat di pinggir!', p: 'Rebut bendera untuk tim!', pc: 'pill-r' },
      { i: '👥', t: 'Setup Bergantian', d: 'Masukkan nama Tim Merah dulu → Siap → lalu isi nama Tim Biru. Layar tampil lengkap!', p: 'Tim Merah dulu, lalu Tim Biru', pc: 'pill-a' },
      { i: '⏱️', t: '70 Detik/Peserta', d: 'Peserta bergantian menjawab dalam tim. Setiap peserta punya 70 dtk. Benar −3, salah −5.', p: '−3 benar · −5 salah', pc: 'pill-a' },
      { i: '🏆', t: 'Pemenang', d: 'Tim yang wakilnya merebut bendera pertama MENANG! Tim kalah jatuh dramatis!', p: 'Semangat bersama tim!', pc: 'pill-g' },
    ]},
    3: { badge: '☕ COZY', title: 'Cozy Mode', sub: 'Solo Player — Santai Tanpa Waktu', steps: [
      { i: '🏁', t: 'Jalan Santai', d: 'Karaktermu berjalan pelan-pelan ke bendera setiap jawaban benar. Tidak ada tekanan waktu!', p: 'Santai dan nikmati!', pc: 'pill-c' },
      { i: '🧠', t: '20 Soal Indonesia', d: 'Jawab 20 soal pengetahuan umum Indonesia. Soal salah muncul lagi sampai dijawab benar.', p: 'Belajar dari kesalahan!', pc: 'pill-c' },
      { i: '📖', t: 'Ada Penjelasan!', d: 'Di akhir permainan, lihat daftar soal beserta penjelasan jawaban yang lengkap dan informatif.', p: 'Wawasan bertambah!', pc: 'pill-g' },
      { i: '🎉', t: 'Selesai!', d: 'Setelah semua 20 soal terjawab benar, karakter merebut bendera dengan penuh kemenangan!', p: 'Selamat belajar!', pc: 'pill-g' },
    ]},
  };

  function buildHowto(key) {
    const h = HT[key];
    document.getElementById('hw-badge').textContent = h.badge;
    document.getElementById('hw-title').textContent = h.title;
    document.getElementById('hw-sub').textContent = h.sub;
    document.getElementById('hw-steps').innerHTML = h.steps.map(s =>
      `<div class="hstep"><div class="hs-ico">${s.i}</div><div class="hs-title">${s.t}</div><div class="hs-desc">${s.d}</div><span class="hs-pill ${s.pc}">${s.p}</span></div>`
    ).join('');
  }
  function selectMode(m) { Aud.select(); mode = m; buildHowto(m); go('s-howto'); }

  /* ── SETUP ── */
  function buildSetup(m) {
    setupPhase = 0;
    const stage = document.getElementById('setup-stage');
    const goBtn = document.getElementById('setup-go');
    if (m === 1) {
      stage.innerHTML = `
        <div class="split-pane st1">
          <div class="stp-hd">🟠 Pemain 1 — Oranye</div>
          <div class="setup-single"><div class="stp-lbl">NAMA PEMAIN 1</div>
          <input id="ni-p1" class="setup-inp" type="text" placeholder="Nama kamu…" maxlength="14" autocomplete="off" inputmode="text"></div>
        </div>
        <div class="split-div"></div>
        <div class="split-pane st2">
          <div class="stp-hd">🔵 Pemain 2 — Biru</div>
          <div class="setup-single"><div class="stp-lbl">NAMA PEMAIN 2</div>
          <input id="ni-p2" class="setup-inp" type="text" placeholder="Nama kamu…" maxlength="14" autocomplete="off" inputmode="text"></div>
        </div>`;
      goBtn.textContent = '⚔ MASUK ARENA!';
      goBtn.style.background = 'linear-gradient(135deg,#FBBF24,#B45309)';
    } else if (m === 2) {
      teamCounts = [3, 3]; buildTeamPhase(0);
    } else {
      stage.innerHTML = `
        <div class="split-pane st3" style="max-width:520px;margin:auto;flex:none;width:100%">
          <div class="stp-hd">☕ Cozy Mode</div>
          <div class="setup-single">
            <div class="stp-lbl">NAMA KAMU</div>
            <input id="ni-cozy" class="setup-inp" type="text" placeholder="Nama kamu…" maxlength="14" autocomplete="off" inputmode="text">
            <div style="font-size:.82rem;color:var(--gray);text-align:center;max-width:280px;margin-top:.4rem">Santai, tanpa batas waktu. Belajar Indonesia sambil bermain!</div>
          </div>
        </div>`;
      goBtn.textContent = '☕ MULAI SANTAI!';
      goBtn.style.background = 'linear-gradient(135deg,#A78BFA,#7C3AED)';
    }
  }

  function buildTeamPhase(phase) {
    const stage = document.getElementById('setup-stage');
    const goBtn = document.getElementById('setup-go');
    if (phase === 0) {
      stage.innerHTML = `<div class="split-pane st1" style="max-width:520px;margin:auto;flex:none;width:100%">
        <div class="stp-hd">🟠 Tim Oranye — Setup</div>
        <div class="cnt-row"><div class="cnt-lbl">Jumlah Peserta</div>
        <div class="cnt-ctrl"><button class="cnt-btn" onclick="App.setCount(1,-1)">−</button><div class="cnt-val" id="cv-1">3</div><button class="cnt-btn" onclick="App.setCount(1,1)">+</button></div></div>
        <div class="names-grid" id="ng-1"></div></div>`;
      renderNI(1);
      goBtn.textContent = '✅ Tim Oranye Siap →';
      goBtn.style.background = 'linear-gradient(135deg,#F97316,#C2410C)';
      setupPhase = 0;
    } else {
      const t1p = getPlayers(1);
      G._t1p = t1p;
      stage.innerHTML = `
        <div class="split-pane st1" style="max-width:340px">
          <div class="stp-hd">🟠 Tim Oranye</div>
          <div class="ready-badge">✅ Siap! (${t1p.length} peserta)</div>
          <div style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:.3rem;padding:.3rem .1rem">
            ${t1p.map((p, i) => `<div style="font-size:.82rem;color:var(--dark);font-weight:600;display:flex;align-items:center;gap:6px"><div class="mn">${i+1}</div>${p}</div>`).join('')}
          </div>
        </div>
        <div class="split-div"></div>
        <div class="split-pane st2">
          <div class="stp-hd">🔵 Tim Biru — Setup</div>
          <div class="cnt-row"><div class="cnt-lbl">Jumlah Peserta</div>
          <div class="cnt-ctrl"><button class="cnt-btn" onclick="App.setCount(2,-1)">−</button><div class="cnt-val" id="cv-2">3</div><button class="cnt-btn" onclick="App.setCount(2,1)">+</button></div></div>
          <div class="names-grid" id="ng-2"></div>
        </div>`;
      renderNI(2);
      goBtn.textContent = '⚔ MASUK ARENA!';
      goBtn.style.background = 'linear-gradient(135deg,#FBBF24,#B45309)';
      setupPhase = 1;
    }
  }

  function setupAction() {
    if (mode === 2 && setupPhase === 0) { Aud.ready(); buildTeamPhase(1); return; }
    startFinal();
  }

  function setCount(t, d) { teamCounts[t-1] = Math.max(1, Math.min(20, teamCounts[t-1]+d)); document.getElementById('cv-'+t).textContent = teamCounts[t-1]; renderNI(t); Aud.click(); }
  function renderNI(t) {
    const g = document.getElementById('ng-'+t); if (!g) return;
    g.innerHTML = '';
    for (let i = 1; i <= teamCounts[t-1]; i++) {
      const row = document.createElement('div'); row.className = 'name-row';
      row.innerHTML = `<div class="name-num">${i}</div><input class="name-inp" id="ni-t${t}-${i}" type="text" placeholder="Peserta ${i}" maxlength="14" autocomplete="off" inputmode="text">`;
      g.appendChild(row);
    }
  }
  function getPlayers(t) { const n = teamCounts[t-1], ps = []; for (let i = 1; i <= n; i++) { const v = document.getElementById(`ni-t${t}-${i}`); ps.push(v && v.value.trim() || `Peserta ${i}`); } return ps; }

  function startFinal() {
    Aud.ready(); qHistory = [];
    if (mode === 1) {
      const n1 = document.getElementById('ni-p1').value.trim() || 'Pemain 1';
      const n2 = document.getElementById('ni-p2').value.trim() || 'Pemain 2';
      G = { mode: 1, over: false,
        p1: { name: n1, queue: prepQ(), correct: new Set(), ci: 0, timer: 70, tInt: null, locked: false, done: false, score: 0, walking: false },
        p2: { name: n2, queue: prepQ(), correct: new Set(), ci: 0, timer: 70, tInt: null, locked: false, done: false, score: 0, walking: false },
      };
    } else if (mode === 2) {
      const t1p = G._t1p || getPlayers(1), t2p = getPlayers(2);
      G = { mode: 2, over: false,
        t1: { players: t1p, score: 0, pi: 0, ansT: [] }, t2: { players: t2p, score: 0, pi: 0, ansT: [] },
        qs1: prepQ(), qs2: prepQ(), qi1: 0, qi2: 0,
        t1lock: false, t2lock: false, t1tInt: null, t2tInt: null, t1timer: 70, t2timer: 70,
        t1cor: new Set(), t2cor: new Set(), t1ci: 0, t2ci: 0, t1done: false, t2done: false,
      };
    } else {
      const cn = document.getElementById('ni-cozy').value.trim() || 'Pemain';
      G = { mode: 3, over: false, solo: { name: cn, queue: prepQ(), correct: new Set(), ci: 0, locked: false, done: false, score: 0 } };
    }
    runCD(() => startGame());
  }

  /* ── COUNTDOWN ── */
  function runCD(cb) {
    go('s-countdown'); Aud.stopMusic();
    const el = document.getElementById('cdn'); let n = 3;
    function tick() { el.textContent = n > 0 ? n : 'MULAI!'; el.classList.remove('cd-pop'); void el.offsetWidth; el.classList.add('cd-pop'); Aud.cd(n); if (n-- > 0) setTimeout(tick, 1100); else setTimeout(cb, 1000); }
    tick();
  }

  /* ── GAME START ── */
  function startGame() {
    if (G.mode === 3) {
      Arena.resize('cozy-cv', 'cozy-wrap');
      Arena.setState('cozy-cv', { mode: 3, solo: { ...G.solo, score: 0 }, over: false });
      buildCozyHead(); loadCozyQ(); go('s-cozy');
      Arena.startLoop('cozy-cv', 'cozy-wrap');
    } else {
      Arena.resize('arena-cv', 'arena-wrap');
      if (G.mode === 1) {
        Arena.setState('arena-cv', { mode: 1, p1: { name: G.p1.name, score: 0, walking: false, falling: false, fallAngle: 0 }, p2: { name: G.p2.name, score: 0, walking: false, falling: false, fallAngle: 0 }, over: false });
        buildHead('left', G.p1.name, 0, 't1'); buildHead('right', G.p2.name, 0, 't2');
        buildArenaHdr();
        loadM1Q('p1'); loadM1Q('p2');
      } else {
        Arena.setState('arena-cv', { mode: 2, t1: { players: G.t1.players, score: 0, pi: 0, falling: false, fallAngle: 0 }, t2: { players: G.t2.players, score: 0, pi: 0, falling: false, fallAngle: 0 }, over: false });
        buildHead('left', 'Tim Oranye', 0, 't1', true); buildHead('right', 'Tim Biru', 0, 't2', true);
        buildArenaHdr();
        loadM2Q(1); loadM2Q(2);
      }
      go('s-game'); Arena.startLoop('arena-cv', 'arena-wrap');
    }
    Aud.select();
    savedState = null; updateResumeBtn();
  }

  function resumeGame() { startGame(); }

  /* ── ARENA HEADER ── */
  function buildArenaHdr() {
    const h = document.getElementById('arena-header'); if (!h) return;
    if (G.mode === 1) {
      h.innerHTML = `<div class="ah-side"><span class="ah-score t1c" id="ahs1">0</span><span class="ah-name t1c">${G.p1.name}</span><span class="ah-time t1bg t1c" id="aht1">70s</span></div>
        <div class="ah-center"><div class="ah-vs">VS</div><div class="ah-pips" id="ah-pips"></div></div>
        <div class="ah-side" style="flex-direction:row-reverse"><span class="ah-score t2c" id="ahs2">0</span><span class="ah-name t2c" style="text-align:right">${G.p2.name}</span><span class="ah-time t2bg t2c" id="aht2">70s</span></div>`;
    } else {
      h.innerHTML = `<div class="ah-side"><span class="ah-score t1c" id="ahs1">0</span><span class="ah-name t1c">Tim Oranye</span><span class="ah-time t1bg t1c" id="aht1">70s</span></div>
        <div class="ah-center"><div class="ah-vs">⚔</div><div class="ah-pips" id="ah-pips"></div></div>
        <div class="ah-side" style="flex-direction:row-reverse"><span class="ah-score t2c" id="ahs2">0</span><span class="ah-name t2c" style="text-align:right">Tim Biru</span><span class="ah-time t2bg t2c" id="aht2">70s</span></div>`;
    }
    const pips = document.getElementById('ah-pips'); if (!pips) return;
    for (let i = 0; i < 10; i++) { const p = document.createElement('div'); p.className = 'ah-pip'; p.id = 'pip' + i; pips.appendChild(p); }
  }
  function updateAHdr(side, score, time) {
    const n = side === 'left' ? '1' : '2';
    const s = document.getElementById('ahs' + n); if (s) s.textContent = score;
    const t = document.getElementById('aht' + n); if (t) t.textContent = time + 's';
    // pips
    const p1s = G.mode === 1 ? G.p1.score : G.t1.score;
    const p2s = G.mode === 1 ? G.p2.score : G.t2.score;
    for (let i = 0; i < 10; i++) {
      const pip = document.getElementById('pip' + i); if (!pip) continue;
      const pct = (i + .5) / 10;
      pip.className = 'ah-pip' + (p1s / 20 > pct ? ' p1' : p2s / 20 > (1 - pct) ? ' p2' : '');
    }
  }

  /* ── COZY HEADER ── */
  function buildCozyHead() {
    const h = document.getElementById('cozy-header'); if (!h) return;
    h.innerHTML = `<div class="ah-side"><span class="ah-score t3c" id="ah-cs">0</span><span class="ah-name t3c">${G.solo.name}</span></div>
      <div class="ah-center"><span style="font-size:.72rem;color:rgba(167,139,250,.6);font-weight:700;letter-spacing:2px">PROGRESS</span><div class="ah-pips" id="ah-cpips"></div></div>
      <div style="width:60px"></div>`;
    const pips = document.getElementById('ah-cpips'); if (!pips) return;
    for (let i = 0; i < 20; i++) { const p = document.createElement('div'); p.className = 'ah-pip'; p.id = 'cpip' + i; pips.appendChild(p); }
  }
  function updateCozyHdr(score) {
    const e = document.getElementById('ah-cs'); if (e) { e.textContent = score; e.classList.remove('pop-anim'); void e.offsetWidth; e.classList.add('pop-anim'); }
    for (let i = 0; i < 20; i++) { const p = document.getElementById('cpip' + i); if (p) p.className = 'ah-pip' + (i < score ? ' p1' : ''); }
  }

  /* ── MODE 1 ── */
  const M1T = 70, M1B = 3, M1P = 5, M1MIN = 8;
  function nextM1(ps) { for (let i = 0; i < ps.queue.length; i++) { const idx = (ps.ci + i) % ps.queue.length; if (!ps.correct.has(ps.queue[idx].id)) { ps.ci = idx; return ps.queue[idx]; } } return null; }

  function loadM1Q(p) {
    const ps = G[p], side = p === 'p1' ? 'left' : 'right';
    stopM1T(p);
    const q = nextM1(ps);
    if (!q) { ps.done = true; ps.walking = false; setQ(side, '<span style="color:#16A34A;font-weight:700">✅ Semua selesai!</span>', true); setOpts(side, [], null, 't1'); setTim(side, '✔', '100%', '#16A34A'); if (!G.over) endM1(p, 'done'); return; }
    if (!qHistory.find(h => h.id === q.id)) qHistory.push({ ...q });
    updateHead(side, { qi: `Sisa ${ps.queue.length - ps.correct.size}` });
    setQ(side, q.q);
    setOpts(side, q.opts, i => ansM1(p, i, q.ai), p === 'p1' ? 't1' : 't2');
    startM1T(p);
  }

  function startM1T(p) {
    const ps = G[p], side = p === 'p1' ? 'left' : 'right', col = p === 'p1' ? 't1' : 't2';
    const bar = document.getElementById('gtf-' + side), sec = document.getElementById('gts-' + side);
    bar.style.transition = 'none'; bar.style.width = (ps.timer / M1T * 100) + '%';
    bar.className = 'gt-fill ' + col; void bar.offsetWidth; bar.style.transition = 'width 1s linear,background .4s';
    const upd = () => {
      sec.textContent = ps.timer + 's';
      if (ps.timer <= 8) { bar.classList.add('dang'); bar.classList.remove('warn'); sec.className = 'gt-sec ' + col + ' dang'; }
      else if (ps.timer <= 20) { bar.classList.add('warn'); bar.classList.remove('dang'); sec.className = 'gt-sec ' + col + ' warn'; }
      else { bar.classList.remove('warn', 'dang'); sec.className = 'gt-sec ' + col; }
      updateAHdr(side, ps.score, ps.timer);
    };
    upd();
    ps.tInt = setInterval(() => {
      if (ps.locked || ps.done) return;
      ps.timer--; bar.style.width = Math.max(0, ps.timer / M1T * 100) + '%'; upd();
      if (ps.timer <= 8) Aud.tickD(); else if (ps.timer <= 20) Aud.tickW(); else if (ps.timer % 15 === 0) Aud.tick();
      if (ps.timer <= 0) { clearInterval(ps.tInt); ps.walking = false; endM1(p, 'timeout'); }
    }, 1000);
  }
  function stopM1T(p) { if (G[p] && G[p].tInt) { clearInterval(G[p].tInt); G[p].tInt = null; } }

  function ansM1(p, sel, correct) {
    if (G[p].locked || G.over) return;
    G[p].locked = true; stopM1T(p);
    const ps = G[p], side = p === 'p1' ? 'left' : 'right';
    lockOpts(side, correct, sel);
    const q = ps.queue[ps.ci]; const hq = qHistory.find(h => h.id === q.id);
    const tUsed = M1T - ps.timer; if (hq) { if (p === 'p1') { hq.p1ans = sel; hq.p1t = tUsed; } else { hq.p2ans = sel; hq.p2t = tUsed; } }
    if (sel === correct) {
      Aud.correct(); flashPanel(side, 'c');
      ps.correct.add(q.id); ps.score++; ps.timer = Math.max(M1MIN, ps.timer - M1B);
      ps.ci = (ps.ci + 1) % ps.queue.length;
      updateHead(side, { score: ps.score });
      // Walking animation on
      ps.walking = true;
      Arena.setState('arena-cv', { [p]: { name: ps.name, score: ps.score, walking: true, falling: false, fallAngle: 0 } });
      floatLbl(document.getElementById('go-' + side), '-' + M1B + 's ✓', '#16A34A');
      Aud.move();
      if (ps.score >= 20 && !G.over) { endM1(p, 'flag'); return; }
      setTimeout(() => {
        ps.walking = false; Arena.setState('arena-cv', { [p]: { ...STATES_p(p), walking: false } });
        ps.locked = false; loadM1Q(p);
      }, 1100);
    } else {
      Aud.wrong(); flashPanel(side, 'w');
      ps.timer = Math.max(M1MIN, ps.timer - M1P);
      const c = ps.queue[ps.ci]; ps.queue.splice(ps.ci, 1); ps.queue.push(c);
      if (ps.ci >= ps.queue.length) ps.ci = 0;
      floatLbl(document.getElementById('go-' + side), '-' + M1P + 's', '#EF4444');
      const og = document.getElementById('go-' + side); og.classList.remove('opts-shake'); void og.offsetWidth; og.classList.add('opts-shake');
      setTimeout(() => { ps.locked = false; loadM1Q(p); }, 1100);
    }
  }
  function STATES_p(p) { const ps = G[p]; return { name: ps.name, score: ps.score, walking: ps.walking, falling: false, fallAngle: 0 }; }

  function endM1(p, reason) {
    if (G.over) return; G.over = true;
    stopM1T('p1'); stopM1T('p2'); G.p1.walking = false; G.p2.walking = false;
    const winner = reason === 'timeout' ? (p === 'p1' ? 'p2' : 'p1') : p;
    const loser = winner === 'p1' ? 'p2' : 'p1';
    Arena.setState('arena-cv', { over: true, winner, p1: { ...STATES_p('p1'), walking: false }, p2: { ...STATES_p('p2'), walking: false } });
    Aud.flag();
    setTimeout(() => { Arena.triggerFall('arena-cv', loser); Aud.fall(); }, 1300);
    setTimeout(() => showWin(G[winner].name, winner === 'p1' ? '#F97316' : '#1E3A8A', G.p1.name, G.p2.name, G.p1.score, G.p2.score), 3400);
  }

  /* ── MODE 2 ── */
  const M2T = 70, M2B = 3, M2P = 5, M2MIN = 8;
  function nextM2(t) { const qs = t===1?G.qs1:G.qs2, cor = t===1?G.t1cor:G.t2cor; let ci = t===1?G.t1ci:G.t2ci; for (let i=0;i<qs.length;i++){const idx=(ci+i)%qs.length;if(!cor.has(qs[idx].id)){if(t===1)G.t1ci=idx;else G.t2ci=idx;return qs[idx];}}return null; }

  function loadM2Q(t) {
    const side = t===1?'left':'right', col = t===1?'t1':'t2';
    stopM2T(t); if(t===1&&G.t1done)return; if(t===2&&G.t2done)return;
    const q = nextM2(t);
    if (!q) { if(t===1)G.t1done=true;else G.t2done=true; setQ(side,'<span style="color:#16A34A;font-weight:700">✅ Tim selesai!</span>',true); setOpts(side,[],null,col); setTim(side,'✔','100%','#16A34A'); if(!G.over)endM2(t,'flag'); return; }
    if (!qHistory.find(h=>h.id===q.id)) qHistory.push({...q});
    const team = t===1?G.t1:G.t2;
    updateHead(side, { name: (t===1?'🟠 ':'🔵 ')+team.players[team.pi], qi: `Sisa ${(t===1?G.qs1:G.qs2).length-(t===1?G.t1cor.size:G.t2cor.size)}` });
    setQ(side, q.q); setOpts(side, q.opts, i=>ansM2(t,i,q.ai), col); startM2T(t);
  }

  function startM2T(t) {
    const side=t===1?'left':'right', col=t===1?'t1':'t2';
    const bar=document.getElementById('gtf-'+side), sec=document.getElementById('gts-'+side);
    if(t===1)G.t1timer=M2T;else G.t2timer=M2T;
    const getT=()=>t===1?G.t1timer:G.t2timer; const setT=v=>{if(t===1)G.t1timer=v;else G.t2timer=v;};
    bar.style.transition='none';bar.style.width='100%';bar.className='gt-fill '+col;void bar.offsetWidth;bar.style.transition='width 1s linear';
    sec.textContent=getT()+'s'; sec.className='gt-sec '+col;
    const ti=setInterval(()=>{
      if(G.over)return; setT(getT()-1);
      bar.style.width=Math.max(0,getT()/M2T*100)+'%'; sec.textContent=getT()+'s';
      updateAHdr(side,t===1?G.t1.score:G.t2.score,getT());
      if(getT()<=8){bar.classList.add('dang');sec.className='gt-sec '+col+' dang';Aud.tickD();}
      else if(getT()<=20){bar.classList.add('warn');sec.className='gt-sec '+col+' warn';Aud.tickW();}
      if(getT()<=0){clearInterval(ti);if(t===1)G.t1tInt=null;else G.t2tInt=null;timeUpM2(t);}
    },1000);
    if(t===1)G.t1tInt=ti;else G.t2tInt=ti;
  }
  function stopM2T(t){if(t===1&&G.t1tInt){clearInterval(G.t1tInt);G.t1tInt=null;}if(t===2&&G.t2tInt){clearInterval(G.t2tInt);G.t2tInt=null;}}

  function timeUpM2(t){if(G.over)return;const lk=t===1?'t1lock':'t2lock';if(G[lk])return;G[lk]=true;Aud.timeUp();const side=t===1?'left':'right';const ci=t===1?G.t1ci:G.t2ci;const qs=t===1?G.qs1:G.qs2;if(ci<qs.length)lockOpts(side,qs[ci].ai,-1);setTimeout(()=>endM2(t,'timeout'),1300);}

  function ansM2(t,sel,correct){
    const lk=t===1?'t1lock':'t2lock';if(G[lk]||G.over)return;G[lk]=true;stopM2T(t);
    const side=t===1?'left':'right';lockOpts(side,correct,sel);
    const team=t===1?G.t1:G.t2;const qs=t===1?G.qs1:G.qs2;const ci=t===1?G.t1ci:G.t2ci;
    const hq=qHistory.find(h=>h.id===qs[ci].id);const tU=(t===1?M2T-G.t1timer:M2T-G.t2timer);
    if(sel===correct){
      Aud.correct();flashPanel(side,'c');(t===1?G.t1cor:G.t2cor).add(qs[ci].id);team.score++;
      updateHead(side,{score:team.score});Arena.setState('arena-cv',{t1:{...G.t1},t2:{...G.t2}});
      floatLbl(document.getElementById('go-'+side),'-'+M2B+'s ✓','#16A34A');Aud.move();
      if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2B);else G.t2timer=Math.max(M2MIN,G.t2timer-M2B);
      if(hq){if(t===1){hq.t1ans=sel;hq.t1t=tU;}else{hq.t2ans=sel;hq.t2t=tU;}}
      team.pi=(team.pi+1)%team.players.length;Arena.setState('arena-cv',{t1:{...G.t1},t2:{...G.t2}});
      if(t===1)G.t1ci=(G.t1ci+1)%G.qs1.length;else G.t2ci=(G.t2ci+1)%G.qs2.length;
      if(team.score>=20&&!G.over){endM2(t,'flag');return;}
      setTimeout(()=>{G[lk]=false;loadM2Q(t);},1100);
    } else {
      Aud.wrong();flashPanel(side,'w');
      if(t===1)G.t1timer=Math.max(M2MIN,G.t1timer-M2P);else G.t2timer=Math.max(M2MIN,G.t2timer-M2P);
      if(hq){if(t===1){hq.t1ans=sel;hq.t1t=tU;}else{hq.t2ans=sel;hq.t2t=tU;}}
      const arr=t===1?G.qs1:G.qs2,ci2=t===1?G.t1ci:G.t2ci;const cq=arr[ci2];arr.splice(ci2,1);arr.push(cq);
      const og=document.getElementById('go-'+side);og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
      setTimeout(()=>{G[lk]=false;loadM2Q(t);},1100);
    }
  }

  function endM2(t,reason){
    if(G.over)return;G.over=true;stopM2T(1);stopM2T(2);
    const winner=reason==='timeout'?(t===1?2:1):t;const loser=winner===1?'t2':'t1';
    Arena.setState('arena-cv',{over:true,winner:winner===1?'t1':'t2',t1:{...G.t1},t2:{...G.t2}});
    Aud.flag();
    setTimeout(()=>{Arena.triggerFall('arena-cv',loser);Aud.fall();},1300);
    setTimeout(()=>showWin(winner===1?'TIM ORANYE':'TIM BIRU',winner===1?'#F97316':'#1E3A8A','Tim Oranye','Tim Biru',G.t1.score,G.t2.score),3400);
  }

  /* ── COZY ── */
  function nextCozy(ps){for(let i=0;i<ps.queue.length;i++){const idx=(ps.ci+i)%ps.queue.length;if(!ps.correct.has(ps.queue[idx].id)){ps.ci=idx;return ps.queue[idx];}}return null;}

  function loadCozyQ(){
    const ps=G.solo;const q=nextCozy(ps);
    if(!q){ps.done=true;Arena.setState('cozy-cv',{over:true,winner:'solo',solo:{...ps}});Aud.flag();setTimeout(()=>showWin(ps.name,'#7C3AED',ps.name,'—',ps.score,'—'),1800);return;}
    if(!qHistory.find(h=>h.id===q.id))qHistory.push({...q});
    updateCozyHdr(ps.score);
    const ph=document.getElementById('gph-cozy');
    ph.innerHTML=`<div class="gph-inner gph-t3"><span class="gph-nm t3c">${ps.name}</span><div class="gph-rt"><span class="gph-qi" id="gqi-cozy">Sisa ${ps.queue.length-ps.correct.size}</span><div style="display:flex;align-items:baseline;gap:2px"><span class="gph-sc t3c pop-target" id="gs-cozy">${ps.score}</span><span class="gph-mx">/20</span></div></div></div>`;
    document.getElementById('gq-cozy').textContent=q.q;
    const og=document.getElementById('go-cozy');og.innerHTML='';
    ['A','B','C','D'].forEach((L,i)=>{const b=document.createElement('button');b.className='opt';b.innerHTML=`<span class="opt-l">${L}</span><span>${q.opts[i]}</span>`;b.onclick=()=>ansCozy(i,q.ai);og.appendChild(b);});
  }

  function ansCozy(sel,correct){
    const ps=G.solo;if(ps.locked||G.over)return;ps.locked=true;
    const og=document.getElementById('go-cozy');og.querySelectorAll('.opt').forEach(b=>b.disabled=true);
    og.querySelectorAll('.opt')[correct].classList.add('ok');
    const q=ps.queue[ps.ci];const hq=qHistory.find(h=>h.id===q.id);if(hq){hq.cans=sel;hq.ct=0;}
    if(sel===correct){
      Aud.cozy();ps.correct.add(q.id);ps.score++;ps.ci=(ps.ci+1)%ps.queue.length;
      Arena.setState('cozy-cv',{solo:{...ps,score:ps.score}});
      const e=document.getElementById('gs-cozy');if(e){e.textContent=ps.score;e.classList.remove('pop-anim');void e.offsetWidth;e.classList.add('pop-anim');}
      updateCozyHdr(ps.score);
    } else {
      if(og.querySelectorAll('.opt')[sel])og.querySelectorAll('.opt')[sel].classList.add('no');
      Aud.wrong();const c=ps.queue[ps.ci];ps.queue.splice(ps.ci,1);ps.queue.push(c);if(ps.ci>=ps.queue.length)ps.ci=0;
      og.classList.remove('opts-shake');void og.offsetWidth;og.classList.add('opts-shake');
    }
    setTimeout(()=>{ps.locked=false;loadCozyQ();},1200);
  }

  /* ── PANEL HELPERS ── */
  function buildHead(side,name,score,col,isTeam){
    const el=document.getElementById('gph-'+side);
    el.innerHTML=`<div class="gph-inner gph-${col}"><span class="gph-nm ${col}c" id="gn-${side}">${name}</span><div class="gph-rt"><span class="gph-qi" id="gqi-${side}"></span><div style="display:flex;align-items:baseline;gap:2px"><span class="gph-sc ${col}c" id="gs-${side}">${score}</span><span class="gph-mx">${isTeam?'poin':' poin'}</span></div></div></div>`;
  }
  function updateHead(side,o){
    if(o.score!==undefined){const e=document.getElementById('gs-'+side);if(e){e.textContent=o.score;e.classList.remove('pop-anim');void e.offsetWidth;e.classList.add('pop-anim');}}
    if(o.qi!==undefined){const e=document.getElementById('gqi-'+side);if(e)e.textContent=o.qi;}
    if(o.name!==undefined){const e=document.getElementById('gn-'+side);if(e)e.textContent=o.name;}
  }
  function setQ(side,html,isH){const e=document.getElementById('gq-'+side);if(isH)e.innerHTML=html;else e.textContent=html;}
  function setOpts(side,opts,cb,col){
    const og=document.getElementById('go-'+side);og.innerHTML='';
    if(!opts.length){og.innerHTML='<div style="flex:1;display:flex;align-items:center;justify-content:center;color:var(--gray);font-size:.86rem;font-weight:600">🎉 Selesai!</div>';return;}
    ['A','B','C','D'].forEach((L,i)=>{const b=document.createElement('button');b.className='opt';b.innerHTML=`<span class="opt-l">${L}</span><span>${opts[i]}</span>`;b.onclick=()=>cb(i);og.appendChild(b);});
  }
  function lockOpts(side,correct,chosen){document.getElementById('go-'+side).querySelectorAll('.opt').forEach((b,i)=>{b.disabled=true;if(i===correct)b.classList.add('ok');else if(i===chosen)b.classList.add('no');});}
  function setTim(side,text,w,bg){const bar=document.getElementById('gtf-'+side),sec=document.getElementById('gts-'+side);if(bar){bar.style.transition='none';bar.style.width=w;bar.style.background=bg;}if(sec)sec.textContent=text;}

  /* ── WINNER ── */
  function showWin(name,color,n1,n2,s1,s2){
    Aud.win(); Arena.stopLoop('arena-cv'); Arena.stopLoop('cozy-cv');
    document.getElementById('win-name').textContent=name;
    document.getElementById('win-name').style.color=color;
    document.getElementById('win-scores').innerHTML=`<div class="ws-item"><div class="ws-nm">${n1}</div><div class="ws-sc" style="color:#F97316">${s1}</div></div>${s2!=='—'?`<div class="ws-vs">VS</div><div class="ws-item"><div class="ws-nm">${n2}</div><div class="ws-sc" style="color:#1E3A8A">${s2}</div></div>`:''}`;
    // Save for resume (allow play again from home)
    savedState = { G: JSON.parse(JSON.stringify({...G, p1: G.p1?{...G.p1,correct:null,tInt:null}:undefined, p2: G.p2?{...G.p2,correct:null,tInt:null}:undefined})), mode, qHistory: [] };
    go('s-winner'); Confetti.start(color);
    // Build qlist in background
    setTimeout(buildQList, 500);
  }

  /* ── QLIST ── */
  function goQList(){go('s-qlist');}
  function buildQList(){
    const scroll=document.getElementById('ql-scroll');
    const l1=G.mode===1?G.p1.name:(G.mode===2?'Tim Oranye':(G.solo?G.solo.name:'Solo'));
    const l2=G.mode===1?G.p2.name:(G.mode===2?'Tim Biru':'—');
    document.getElementById('ql-sub').textContent=`${qHistory.length} soal · ${l1}${l2!=='—'?' vs '+l2:''}`;
    scroll.innerHTML='';
    qHistory.forEach((q,i)=>{
      const card=document.createElement('div');card.className='q-card';
      const tTags = G.mode===1?`<span class="q-time-t1">${l1}: ${q.p1t||'-'}s</span><span class="q-time-t2">${l2}: ${q.p2t||'-'}s</span>`:
        G.mode===2?`<span class="q-time-t1">${l1}: ${q.t1t||'-'}s</span><span class="q-time-t2">${l2}: ${q.t2t||'-'}s</span>`:
        `<span class="q-time-t3">${l1}</span>`;
      const opts=q.opts.map((opt,j)=>{
        let cls='q-opt',ico='';
        if(j===q.ai){cls+=' correct';ico='✅';}
        else if(j===(G.mode===1?q.p1ans:G.mode===2?q.t1ans:q.cans)||j===(G.mode===1?q.p2ans:G.mode===2?q.t2ans:-1)){cls+=' wrong';ico='❌';}
        return`<div class="${cls}"><span class="q-opt-l">${['A','B','C','D'][j]}</span><span>${opt}</span><span class="q-opt-ico">${ico}</span></div>`;
      }).join('');
      card.innerHTML=`<div class="q-num">SOAL ${i+1}<div class="q-time-tags">${tTags}</div></div><div class="q-text">${q.q}</div><div class="q-explain">💡 ${q.ex}</div><div class="q-opts">${opts}</div>`;
      scroll.appendChild(card);
    });
  }

  /* ── HOME ── */
  function goHome(){Confetti.stop();Arena.stopLoop('arena-cv');Arena.stopLoop('cozy-cv');G={};qHistory=[];go('s-home');setTimeout(()=>Aud.startMusic(),600);}
  function rematch(){Confetti.stop();Arena.stopLoop('arena-cv');Arena.stopLoop('cozy-cv');G={};qHistory=[];savedState=null;buildSetup(mode);go('s-setup');}

  /* ── RESIZE ── */
  window.addEventListener('resize',()=>{Arena.resize('arena-cv','arena-wrap');Arena.resize('cozy-cv','cozy-wrap');});
  window.addEventListener('orientationchange',()=>setTimeout(()=>{Arena.resize('arena-cv','arena-wrap');Arena.resize('cozy-cv','cozy-wrap');},180));

  /* ── TOUCH SCROLL (fixed: allow taps, allow pinch-zoom, block only overscroll bounce) ── */
  let lastY = 0;
  document.addEventListener('touchstart', e => { lastY = e.touches[0].clientY; }, { passive: true });
  document.addEventListener('touchmove', e => {
    // Never block multi-touch (pinch-zoom must work)
    if (e.touches.length > 1) return;

    const dy = e.touches[0].clientY - lastY;
    lastY = e.touches[0].clientY;

    // Never block interactive elements — tap jari geser sedikit tidak boleh diblok
    const tag = e.target.tagName;
    if (tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.target.closest('button,input,textarea,select')) return;

    // Izinkan scroll dalam container yang memang bisa di-scroll
    const el = e.target.closest('.ql-scroll,.names-grid,.about-scroll,.mlist');
    if (el) {
      const atTop = el.scrollTop <= 0;
      const atBot = el.scrollTop >= el.scrollHeight - el.clientHeight - 1;
      // Hanya blok jika sudah di ujung atas/bawah (mencegah overscroll bounce)
      if (dy > 0 && atTop) { e.preventDefault(); return; }
      if (dy < 0 && atBot) { e.preventDefault(); return; }
      return; // biarkan scroll berjalan
    }

    // Blok overscroll/bounce di area lain (canvas, background, dll)
    e.preventDefault();
  }, { passive: false });

  // Init
  Aud.startMusic();
  setTimeout(updateResumeBtn, 200);

  return { go, toggleSound, switchTab, selectMode, setCount, renderNI, setupAction, goHome, rematch, goQList, tryResume };
})();
