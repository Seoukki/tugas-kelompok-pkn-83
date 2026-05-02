/* ═══════════════════════════════════════════════════════
   QUESTIONS DATABASE
═══════════════════════════════════════════════════════ */
const QDB = [
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

/* ═══════════════════════════════════════════════════════
   SOUND ENGINE
═══════════════════════════════════════════════════════ */
const Sound = (() => {
  let AC = null, on = true;
  function ctx() {
    if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === 'suspended') AC.resume();
    return AC;
  }
  function tone(f, d, type = 'sine', vol = 0.13, delay = 0) {
    if (!on) return;
    try {
      const c = ctx(), t = c.currentTime + delay;
      const o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = type; o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.start(t); o.stop(t + d + 0.05);
    } catch(e) {}
  }
  function sweep(f1, f2, d, type = 'sine', vol = 0.11, delay = 0) {
    if (!on) return;
    try {
      const c = ctx(), t = c.currentTime + delay;
      const o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = type;
      o.frequency.setValueAtTime(f1, t);
      o.frequency.linearRampToValueAtTime(f2, t + d);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.start(t); o.stop(t + d + 0.05);
    } catch(e) {}
  }
  return {
    toggle() { on = !on; return on; },
    click() { tone(660, .055, 'sine', .07); },
    correct() {
      [523,659,784].forEach((f,i) => tone(f,.13,'sine',.14,i*.07));
      tone(1047,.3,'sine',.1,.22);
      sweep(400,900,.14,'sine',.07,.32);
    },
    wrong() { sweep(300,140,.1,'sawtooth',.14); tone(130,.3,'sawtooth',.1,.1); },
    tick()  { tone(1100,.04,'square',.05); },
    tickW() { tone(880,.07,'sine',.11); },
    tickD() { tone(660,.09,'sine',.16); },
    timeUp() { sweep(400,180,.12,'square',.18); tone(150,.36,'sawtooth',.1,.12); },
    move() { [700,540].forEach((f,i) => tone(f,.07,'sine',.09,i*.04)); },
    select() { sweep(440,700,.1,'sine',.1); },
    ready() { [440,554,659,880].forEach((f,i) => tone(f,.15,'sine',.16,i*.08)); },
    penalty() { sweep(300,150,.1,'sawtooth',.13); tone(140,.2,'sawtooth',.08,.1); },
    cd(n) {
      const freqs = [0,349,415,494,587];
      tone(freqs[n] || 494, .22, 'sine', .2);
      if (n === 0) [523,659,784,1047].forEach((f,i) => tone(f,.16,'sine',.18,i*.08));
    },
    win() {
      [523,659,784,659,784,1047,784,1047,1319,1047,1319,1568]
        .forEach((f,i) => tone(f,.15,'sine',.17,i*.09));
      [523,659,784,880,1047].forEach((f,i) => tone(f,.3,'triangle',.07,i*.07+.05));
    },
  };
})();

/* ═══════════════════════════════════════════════════════
   ARENA / SVG ENGINE
═══════════════════════════════════════════════════════ */
const Arena = (() => {
  let vw = 1000, groundY = 160, charY = 58;
  const ROPE_Y_OFFSET = 76; // from charY to rope connection

  function resize() {
    const wrap = document.getElementById('arena-wrap');
    if (!wrap) return;
    const W = wrap.offsetWidth || window.innerWidth;
    const H = wrap.offsetHeight || 180;
    vw = Math.max(400, Math.round((W / H) * 200));
    document.getElementById('arena-svg').setAttribute('viewBox', `0 0 ${vw} 200`);
  }

  /* ── Draw a pixel-art character (front view) ── */
  function charSVG(cx, cy, flip, color, darkColor, name, isActive) {
    const sc = flip ? -1 : 1;
    const glow = isActive
      ? `<ellipse cx="0" cy="96" rx="28" ry="8" fill="${color}" opacity=".32"/>`
      : '';
    return `<g transform="translate(${cx},${cy}) scale(${sc},1)">
      ${glow}
      <ellipse cx="0" cy="96" rx="24" ry="6" fill="rgba(0,0,0,.22)"/>
      <!-- head border -->
      <rect x="-21" y="1" width="42" height="38" rx="5" fill="${darkColor}"/>
      <!-- head -->
      <rect x="-19" y="3" width="38" height="34" rx="4" fill="${color}"/>
      <!-- hair -->
      <rect x="-19" y="3" width="38" height="8" rx="4" fill="${darkColor}"/>
      <rect x="-19" y="9" width="38" height="2" fill="${color}" opacity=".4"/>
      <!-- eyes -->
      <rect x="-14" y="14" width="10" height="10" rx="2.5" fill="white"/>
      <rect x="4"   y="14" width="10" height="10" rx="2.5" fill="white"/>
      <rect x="-11" y="16" width="6" height="6" rx="1.5" fill="#111"/>
      <rect x="6"   y="16" width="6" height="6" rx="1.5" fill="#111"/>
      <rect x="-10" y="16" width="3" height="3" fill="white" opacity=".7"/>
      <rect x="7"   y="16" width="3" height="3" fill="white" opacity=".7"/>
      <!-- eyebrows -->
      <rect x="-14" y="10" width="11" height="3.5" rx="1.5" fill="${darkColor}"/>
      <rect x="3"   y="10" width="11" height="3.5" rx="1.5" fill="${darkColor}"/>
      <!-- mouth -->
      <rect x="-9" y="28" width="18" height="4.5" rx="2" fill="${darkColor}"/>
      <rect x="-7" y="29" width="14" height="2.5" rx="1.5" fill="white" opacity=".28"/>
      <!-- blush -->
      <ellipse cx="-14" cy="25" rx="5" ry="3" fill="white" opacity=".18"/>
      <ellipse cx="14"  cy="25" rx="5" ry="3" fill="white" opacity=".18"/>
      <!-- neck -->
      <rect x="-6" y="39" width="12" height="6" rx="1" fill="#FBBF24"/>
      <!-- shirt body -->
      <rect x="-19" y="45" width="38" height="24" rx="4" fill="${darkColor}"/>
      <rect x="-17" y="47" width="34" height="20" rx="3" fill="${color}"/>
      <rect x="-17" y="47" width="34" height="5.5" fill="${color}" opacity=".5"/>
      <!-- collar -->
      <rect x="-6" y="45" width="12" height="8" rx="2" fill="${darkColor}" opacity=".4"/>
      <!-- belt -->
      <rect x="-19" y="66" width="38" height="4.5" fill="${darkColor}"/>
      <rect x="-4"  y="66" width="8"  height="4.5" fill="#F59E0B"/>
      <!-- left arm -->
      <rect x="-33" y="46" width="15" height="12" rx="3.5" fill="${color}"/>
      <rect x="-42" y="48" width="11" height="9" rx="3" fill="#FBBF24"/>
      <!-- right arm -->
      <rect x="18"  y="46" width="15" height="12" rx="3.5" fill="${color}"/>
      <rect x="31"  y="48" width="12" height="9" rx="3" fill="#FBBF24"/>
      <!-- pants -->
      <rect x="-19" y="70.5" width="15" height="17" rx="3" fill="#1E3A8A"/>
      <rect x="4"   y="70.5" width="15" height="17" rx="3" fill="#1E3A8A"/>
      <rect x="-2"  y="70.5" width="4"  height="17" fill="#2563EB"/>
      <!-- shoes -->
      <rect x="-21" y="84" width="19" height="9" rx="3" fill="#111"/>
      <rect x="2"   y="84" width="19" height="9" rx="3" fill="#111"/>
      <rect x="-20" y="85" width="7"  height="3" rx="1" fill="#374151" opacity=".45"/>
      <rect x="3"   y="85" width="7"  height="3" rx="1" fill="#374151" opacity=".45"/>
      <!-- name label -->
      <text y="-5" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="10" font-weight="800" fill="white" opacity=".9">${name}</text>
    </g>`;
  }

  /* ── Draw a side-view character for team mode ── */
  function sideCharSVG(cx, cy, facingRight, color, darkColor, isActive) {
    const d = facingRight ? 1 : -1;
    const sz = 1; // scale unit, actual px controlled by cx/cy scaling
    const glow = isActive
      ? `<ellipse cx="${cx}" cy="${cy+3}" rx="22" ry="6" fill="${color}" opacity=".3"/>`
      : '';
    // lean-forward body tilt
    const bodyRot = `rotate(${d * -6},${cx},${cy - 30})`;
    return `
      ${glow}
      <ellipse cx="${cx}" cy="${cy+2}" rx="18" ry="5" fill="rgba(0,0,0,.2)"/>
      <!-- front leg -->
      <rect x="${cx + d*2}" y="${cy - 22}" width="10" height="22" rx="4"
        fill="#1E3A8A" transform="rotate(${d*12},${cx},${cy-22})"/>
      <!-- back leg -->
      <rect x="${cx - d*8}" y="${cy - 22}" width="10" height="22" rx="4"
        fill="${darkColor}" transform="rotate(${d*-8},${cx},${cy-22})"/>
      <!-- front shoe -->
      <rect x="${cx + d*4}" y="${cy - 4}" width="14" height="7" rx="3" fill="#111"/>
      <!-- back shoe -->
      <rect x="${cx - d*12}" y="${cy - 3}" width="14" height="7" rx="3" fill="#111"/>
      <!-- body -->
      <rect x="${cx - 13}" y="${cy - 52}" width="26" height="30" rx="5"
        fill="${color}" transform="${bodyRot}"/>
      <rect x="${cx - 11}" y="${cy - 50}" width="22" height="7" rx="3"
        fill="rgba(255,255,255,.15)" transform="${bodyRot}"/>
      <!-- holding-rope arm -->
      <line x1="${cx + d*12}" y1="${cy - 42}" x2="${cx + d*28}" y2="${cy - 36}"
        stroke="${color}" stroke-width="8" stroke-linecap="round"/>
      <rect x="${cx + d*24}" y="${cy - 41}" width="9" height="7" rx="3" fill="#FBBF24"/>
      <!-- other arm -->
      <line x1="${cx - d*10}" y1="${cy - 38}" x2="${cx - d*22}" y2="${cy - 28}"
        stroke="${darkColor}" stroke-width="7" stroke-linecap="round"/>
      <!-- head -->
      <rect x="${cx - 14}" y="${cy - 78}" width="28" height="26" rx="5" fill="${darkColor}"/>
      <rect x="${cx - 12}" y="${cy - 76}" width="24" height="22" rx="4" fill="${color}"/>
      <rect x="${cx - 12}" y="${cy - 76}" width="24" height="6" rx="3" fill="${darkColor}"/>
      <!-- eye (facing direction) -->
      <rect x="${cx + d*2}" y="${cy - 67}" width="9" height="8" rx="2" fill="white"/>
      <rect x="${cx + d*3}" y="${cy - 66}" width="5" height="5" rx="1.5" fill="#111"/>
      <rect x="${cx + d*3}" y="${cy - 66}" width="2" height="2" fill="white" opacity=".7"/>
      <!-- mouth -->
      <rect x="${cx - 5}" y="${cy - 57}" width="10" height="4" rx="2" fill="${darkColor}"/>
      ${isActive ? `<ellipse cx="${cx}" cy="${cy-86}" rx="12" ry="5" fill="${color}" opacity=".5"/>
      <text x="${cx}" y="${cy-80}" text-anchor="middle" font-family="Plus Jakarta Sans,sans-serif" font-size="9" font-weight="900" fill="${color}">GO!</text>` : ''}
    `;
  }

  /* ── Rope physics ── */
  // The rope sags between two anchor points
  function ropePath(x1, y1, x2, y2, sag = 8) {
    const mx = (x1 + x2) / 2, my = Math.max(y1, y2) + sag;
    return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
  }

  /* ── Static background elements ── */
  function bgSVG() {
    return `
      <!-- Stars -->
      <circle cx="${vw*.05}" cy="16" r="2" fill="white" opacity=".4"/>
      <circle cx="${vw*.13}" cy="9" r="1.5" fill="white" opacity=".55"/>
      <circle cx="${vw*.25}" cy="20" r="2" fill="white" opacity=".38"/>
      <circle cx="${vw*.40}" cy="7" r="1.5" fill="white" opacity=".6"/>
      <circle cx="${vw*.60}" cy="6" r="1.5" fill="white" opacity=".5"/>
      <circle cx="${vw*.75}" cy="18" r="2" fill="white" opacity=".42"/>
      <circle cx="${vw*.88}" cy="8" r="1.5" fill="white" opacity=".58"/>
      <circle cx="${vw*.94}" cy="24" r="2" fill="white" opacity=".35"/>
      <!-- Moon -->
      <circle cx="${vw*.92}" cy="26" r="16" fill="#FEF9C3"/>
      <circle cx="${vw*.95}" cy="20" r="12" fill="#1E3A8A"/>
      <!-- Ground line -->
      <rect x="0" y="155" width="${vw}" height="3" fill="#166534" opacity=".85"/>
      <!-- Crowd left -->
      <rect x="${vw*.01}" y="128" width="14" height="18" rx="3" fill="#EF4444" opacity=".48"/>
      <rect x="${vw*.04}" y="122" width="14" height="24" rx="3" fill="#FBBF24" opacity=".48"/>
      <rect x="${vw*.07}" y="125" width="14" height="21" rx="3" fill="#06B6D4" opacity=".48"/>
      <rect x="${vw*.10}" y="120" width="14" height="26" rx="3" fill="#8B5CF6" opacity=".48"/>
      <rect x="${vw*.13}" y="124" width="14" height="22" rx="3" fill="#F97316" opacity=".48"/>
      <rect x="${vw*.16}" y="119" width="14" height="27" rx="3" fill="#EC4899" opacity=".48"/>
      <!-- Crowd right -->
      <rect x="${vw*.77}" y="123" width="14" height="23" rx="3" fill="#10B981" opacity=".48"/>
      <rect x="${vw*.80}" y="118" width="14" height="28" rx="3" fill="#EF4444" opacity=".48"/>
      <rect x="${vw*.83}" y="122" width="14" height="24" rx="3" fill="#FBBF24" opacity=".48"/>
      <rect x="${vw*.86}" y="119" width="14" height="27" rx="3" fill="#8B5CF6" opacity=".48"/>
      <rect x="${vw*.89}" y="124" width="14" height="22" rx="3" fill="#06B6D4" opacity=".48"/>
      <rect x="${vw*.92}" y="120" width="14" height="26" rx="3" fill="#F97316" opacity=".48"/>
    `;
  }

  /* ── Center pole + flag ── */
  function flagSVG(fx) {
    return `<g id="flag-group" transform="translate(${fx},0)">
      <line x1="0" y1="60" x2="0" y2="156" stroke="#78350F" stroke-width="5" stroke-linecap="round"/>
      <rect x="-19" y="32" width="38" height="13" rx="2" fill="#DC2626"/>
      <rect x="-19" y="45" width="38" height="13" rx="2" fill="white"/>
      <rect x="-21" y="30" width="42" height="29" rx="3" fill="none" stroke="#78350F" stroke-width="1.8"/>
      <text x="0" y="47" text-anchor="middle" font-family="Bebas Neue,sans-serif" font-size="10" fill="white" letter-spacing="1">VS</text>
    </g>`;
  }

  /* ═══════════════════════════════
     PUBLIC: draw mode 1 (2 chars pulling rope)
  ═══════════════════════════════ */
  function drawM1(state) {
    resize();
    const { p1, p2 } = state;
    // positions: each char can move 0–42% of arena width
    const maxMove = vw * 0.40;
    const startX1 = vw * 0.08, startX2 = vw * 0.92;
    const cx1 = startX1 + (p1.score / 20) * maxMove;
    const cx2 = startX2 - (p2.score / 20) * maxMove;
    const cy = charY;
    const ropeAnchorX1 = cx1 + 34;  // right-hand anchor
    const ropeAnchorX2 = cx2 - 34;  // left-hand anchor (char is flipped)
    const ropeY = cy + ROPE_Y_OFFSET;
    const sag = Math.max(4, (ropeAnchorX2 - ropeAnchorX1) * 0.04);

    // flag follows score diff
    const diff = p1.score - p2.score;
    const flagX = vw / 2 + Math.max(-vw * 0.28, Math.min(vw * 0.28, (diff / 20) * vw * 0.24));

    document.getElementById('arena-svg').innerHTML = `
      ${bgSVG()}
      <!-- Rope shadow -->
      <path d="${ropePath(ropeAnchorX1, ropeY + 3, ropeAnchorX2, ropeY + 3, sag + 2)}"
        stroke="rgba(0,0,0,.18)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <!-- Rope -->
      <path id="rope-path" d="${ropePath(ropeAnchorX1, ropeY, ropeAnchorX2, ropeY, sag)}"
        stroke="#78350F" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="${ropePath(ropeAnchorX1, ropeY, ropeAnchorX2, ropeY, sag)}"
        stroke="#A16207" stroke-width="4" stroke-dasharray="13 9" fill="none" stroke-linecap="round" opacity=".65"/>
      <!-- Characters -->
      ${charSVG(cx1, cy, false, '#DC2626', '#991B1B', p1.name.slice(0,9), !p1.done)}
      ${charSVG(cx2, cy, true,  '#1D4ED8', '#1E3A8A', p2.name.slice(0,9), !p2.done)}
      ${flagSVG(flagX)}
      <!-- Scores in arena -->
      <text x="${vw*0.055}" y="190" text-anchor="middle" font-family="Bebas Neue,sans-serif" font-size="17" fill="#FCA5A5">${p1.score}</text>
      <text x="${vw*0.945}" y="190" text-anchor="middle" font-family="Bebas Neue,sans-serif" font-size="17" fill="#BFDBFE">${p2.score}</text>
    `;
  }

  /* ═══════════════════════════════
     PUBLIC: draw mode 2 (teams)
  ═══════════════════════════════ */
  function drawM2(state) {
    resize();
    const { t1, t2, cur } = state;
    const n1 = t1.players.length, n2 = t2.players.length;
    const areaW = vw * 0.40;
    const maxN = Math.max(n1, n2, 1);
    // char size based on team size
    const sz = Math.max(0.5, Math.min(1.4, 6 / maxN));
    // scale px: base char height ~100px, scale by sz
    // We'll space them evenly in their half
    const teamGroundY = 148;

    // Score diff → flag X
    const diff = t1.score - t2.score;
    const flagX = vw / 2 + Math.max(-vw * 0.3, Math.min(vw * 0.3, (diff / 7) * vw * 0.28));

    // Team 1 left side chars (facing right)
    let charsSVG = '';
    const spacing1 = areaW / (n1 + 0.5);
    let rAnchorX1 = vw * 0.02; // rightmost T1 char rope anchor
    for (let i = 0; i < n1; i++) {
      const cx = vw * 0.02 + spacing1 * (i + 0.75);
      const isAct = cur === 1 && t1.pi === i && !state.over;
      charsSVG += sideCharSVG(cx, teamGroundY, true, '#DC2626', '#991B1B', isAct);
      // connector rope between chars
      if (i < n1 - 1) {
        const nxcx = vw * 0.02 + spacing1 * (i + 1.75);
        charsSVG += `<line x1="${cx+22}" y1="${teamGroundY-36}" x2="${nxcx-22}" y2="${teamGroundY-36}" stroke="#DC2626" stroke-width="4" stroke-linecap="round" opacity=".3"/>`;
      }
      rAnchorX1 = cx + 28;
    }

    // Team 2 right side chars (facing left)
    const spacing2 = areaW / (n2 + 0.5);
    let lAnchorX2 = vw * 0.98;
    for (let i = 0; i < n2; i++) {
      const cx = vw * 0.98 - spacing2 * (i + 0.75);
      const isAct = cur === 2 && t2.pi === i && !state.over;
      charsSVG += sideCharSVG(cx, teamGroundY, false, '#1D4ED8', '#1E3A8A', isAct);
      if (i < n2 - 1) {
        const nxcx = vw * 0.98 - spacing2 * (i + 1.75);
        charsSVG += `<line x1="${cx-22}" y1="${teamGroundY-36}" x2="${nxcx+22}" y2="${teamGroundY-36}" stroke="#1D4ED8" stroke-width="4" stroke-linecap="round" opacity=".3"/>`;
      }
      lAnchorX2 = cx - 28;
    }

    const ry = teamGroundY - 36;
    const sag = Math.max(4, (lAnchorX2 - rAnchorX1) * 0.04);

    document.getElementById('arena-svg').innerHTML = `
      ${bgSVG()}
      <!-- Rope shadow -->
      <path d="${ropePath(rAnchorX1, ry + 3, lAnchorX2, ry + 3, sag + 2)}"
        stroke="rgba(0,0,0,.18)" stroke-width="6" fill="none" stroke-linecap="round"/>
      <!-- Rope -->
      <path d="${ropePath(rAnchorX1, ry, lAnchorX2, ry, sag)}"
        stroke="#78350F" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="${ropePath(rAnchorX1, ry, lAnchorX2, ry, sag)}"
        stroke="#A16207" stroke-width="4" stroke-dasharray="13 9" fill="none" stroke-linecap="round" opacity=".62"/>
      <!-- Characters -->
      ${charsSVG}
      ${flagSVG(flagX)}
      <!-- Scores -->
      <text x="${vw*0.04}" y="192" text-anchor="middle" font-family="Bebas Neue,sans-serif" font-size="15" fill="#FCA5A5">${t1.score}</text>
      <text x="${vw*0.96}" y="192" text-anchor="middle" font-family="Bebas Neue,sans-serif" font-size="15" fill="#BFDBFE">${t2.score}</text>
    `;
  }

  return { resize, drawM1, drawM2 };
})();

/* ═══════════════════════════════════════════════════════
   CONFETTI
═══════════════════════════════════════════════════════ */
const Confetti = (() => {
  let raf = null;
  function start(winColor) {
    const cv = document.getElementById('cf-canvas');
    const ctx = cv.getContext('2d');
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    const cols = [winColor, '#F59E0B', '#16A34A', '#DC2626', '#1D4ED8', '#FBBF24', '#EF4444'];
    const ps = Array.from({length: 130}, () => ({
      x: Math.random() * cv.width, y: Math.random() * -cv.height,
      w: Math.random() * 12 + 5, h: Math.random() * 6 + 3,
      r: Math.random() * Math.PI * 2, rs: Math.random() * .1 - .05,
      vx: Math.random() * 2 - 1, vy: Math.random() * 4 + 2,
      c: cols[Math.floor(Math.random() * cols.length)]
    }));
    function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => {
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c; ctx.globalAlpha = .82;
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h); ctx.restore();
        p.x += p.vx; p.y += p.vy; p.r += p.rs;
        if (p.y > cv.height + 20) { p.y = -20; p.x = Math.random() * cv.width; }
      });
      raf = requestAnimationFrame(draw);
    }
    stop(); draw();
  }
  function stop() {
    if (raf) { cancelAnimationFrame(raf); raf = null; }
    const cv = document.getElementById('cf-canvas');
    if (cv) cv.getContext('2d').clearRect(0, 0, cv.width, cv.height);
  }
  return { start, stop };
})();

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
function shuffle(a) {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}
function prepQueue() {
  return shuffle(QDB).map((q, idx) => {
    const ans = q.o[q.a];
    const opts = shuffle([...q.o]);
    return { q: q.q, opts, ai: opts.indexOf(ans), id: idx };
  });
}
function floatLabel(el, text, color) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  const d = document.createElement('div');
  d.className = 'float-lbl';
  d.textContent = text;
  d.style.cssText = `left:${r.left + r.width/2 - 20}px;top:${r.top + r.height*.3}px;color:${color}`;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 1000);
}

/* ═══════════════════════════════════════════════════════
   MAIN APP CONTROLLER
═══════════════════════════════════════════════════════ */
const App = (() => {
  let currentScreen = 's-home';
  let gameMode = 1;
  let teamCounts = [3, 3];
  let cfCB = null;
  let G = {}; // game state

  /* ── screen transitions ── */
  function go(id) {
    Sound.click();
    const cur = document.getElementById(currentScreen);
    const next = document.getElementById(id);
    if (!next) return;
    cur.classList.add('exit');
    setTimeout(() => { cur.classList.remove('active', 'exit'); }, 320);
    next.classList.add('active');
    currentScreen = id;
  }

  /* ── sound toggle ── */
  function toggleSound() {
    const on = Sound.toggle();
    document.getElementById('snd-txt').textContent = on ? 'Suara Aktif' : 'Suara Mati';
    const svg = document.getElementById('snd-svg');
    svg.innerHTML = on
      ? '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>'
      : '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
  }

  /* ── mode select ── */
  function selectMode(m) {
    Sound.select();
    gameMode = m;
    buildSetupScreen(m);
    go('s-setup');
  }

  /* ════════════════════════════════════════
     SETUP SCREEN BUILDER
  ════════════════════════════════════════ */
  function buildSetupScreen(m) {
    const lEl = document.getElementById('setup-left');
    const rEl = document.getElementById('setup-right');
    if (m === 1) {
      // Mode 1: single name input per side
      lEl.innerHTML = `
        <div class="setup-header setup-header-r">👤 Pemain 1 — Merah</div>
        <div class="player-name-big">
          <div class="pnb-label pnb-label-r">NAMA PEMAIN 1</div>
          <input id="ni-p1" class="name-inp-big r" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off">
        </div>`;
      rEl.innerHTML = `
        <div class="setup-header setup-header-b">👤 Pemain 2 — Biru</div>
        <div class="player-name-big">
          <div class="pnb-label pnb-label-b">NAMA PEMAIN 2</div>
          <input id="ni-p2" class="name-inp-big b" type="text" placeholder="Nama kamu..." maxlength="14" autocomplete="off">
        </div>`;
    } else {
      // Mode 2: team setup
      teamCounts = [3, 3];
      lEl.innerHTML = buildTeamSetup(1);
      rEl.innerHTML = buildTeamSetup(2);
      renderTeamNames(1); renderTeamNames(2);
    }
  }

  function buildTeamSetup(t) {
    const col = t === 1 ? 'r' : 'b';
    const label = t === 1 ? '🔴 Tim Merah' : '🔵 Tim Biru';
    return `
      <div class="setup-header setup-header-${col}">${label}</div>
      <div class="player-count-row">
        <div class="pc-lbl">Jumlah Peserta</div>
        <div class="pc-ctrl">
          <button class="pc-btn pc-btn-${col}" onclick="App.setCount(${t},-1)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19 13H5v-2h14v2z"/></svg>
          </button>
          <div class="pc-val pc-val-${col}" id="pc-val-${t}">3</div>
          <button class="pc-btn pc-btn-${col}" onclick="App.setCount(${t},1)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
          </button>
        </div>
      </div>
      <div class="setup-names" id="sn-${t}"></div>`;
  }

  function setCount(t, d) {
    teamCounts[t-1] = Math.max(1, Math.min(20, teamCounts[t-1] + d));
    document.getElementById('pc-val-' + t).textContent = teamCounts[t-1];
    renderTeamNames(t);
    Sound.click();
  }

  function renderTeamNames(t) {
    const n = teamCounts[t-1];
    const col = t === 1 ? 'r' : 'b';
    const grid = document.getElementById('sn-' + t);
    if (!grid) return;
    grid.innerHTML = '';
    for (let i = 1; i <= n; i++) {
      const row = document.createElement('div');
      row.className = 'name-row';
      row.innerHTML = `<div class="name-num name-num-${col}">${i}</div>
        <input class="name-inp name-inp-${col}" id="ni-t${t}-${i}"
          type="text" placeholder="Peserta ${i}" maxlength="14" autocomplete="off">`;
      grid.appendChild(row);
    }
  }

  function getTeamPlayers(t) {
    const n = teamCounts[t-1], ps = [];
    for (let i = 1; i <= n; i++) {
      const v = document.getElementById(`ni-t${t}-${i}`);
      ps.push((v && v.value.trim()) || `Peserta ${i}`);
    }
    return ps;
  }

  /* ── start from setup ── */
  function startFromSetup() {
    Sound.ready();
    if (gameMode === 1) {
      const n1 = (document.getElementById('ni-p1').value.trim() || 'Pemain 1');
      const n2 = (document.getElementById('ni-p2').value.trim() || 'Pemain 2');
      G = { mode: 1 };
      G.p1 = { name: n1, queue: prepQueue(), correct: new Set(), ci: 0, timer: 90, tInt: null, locked: false, done: false, score: 0 };
      G.p2 = { name: n2, queue: prepQueue(), correct: new Set(), ci: 0, timer: 90, tInt: null, locked: false, done: false, score: 0 };
      G.over = false;
    } else {
      const t1p = getTeamPlayers(1), t2p = getTeamPlayers(2);
      G = {
        mode: 2, over: false,
        t1: { players: t1p, score: 0, pi: 0 },
        t2: { players: t2p, score: 0, pi: 0 },
        qs: prepQueue(), qi: 0, cur: 1,
        timer: 20, tInt: null, locked: false,
      };
    }
    runCountdown(() => startGame());
  }

  /* ── countdown ── */
  function runCountdown(cb) {
    cfCB = cb;
    go('s-countdown');
    const el = document.getElementById('cd-num');
    let n = 3;
    function tick() {
      el.textContent = n > 0 ? n : 'MULAI!';
      el.classList.remove('cd-pop'); void el.offsetWidth; el.classList.add('cd-pop');
      Sound.cd(n);
      if (n-- > 0) setTimeout(tick, 1000);
      else setTimeout(() => { if (cfCB) cfCB(); }, 920);
    }
    tick();
  }

  /* ══════════════════════════════════════════
     GAME START
  ══════════════════════════════════════════ */
  function startGame() {
    Arena.resize();
    if (G.mode === 1) startM1();
    else startM2();
    go('s-game');
    Sound.select();
  }

  /* ════════════════════════════════════
     MODE 1 LOGIC
  ════════════════════════════════════ */
  const M1 = {
    BONUS: 5, PENALTY: 5, MIN: 10, MAX: 90,

    start() {
      // Build panel headers
      buildPanelHeader('left', G.p1.name, G.p1.score, 'r');
      buildPanelHeader('right', G.p2.name, G.p2.score, 'b');
      Arena.drawM1(G);
      this.loadQ('p1'); this.loadQ('p2');
    },

    getNext(ps) {
      const n = ps.queue.length;
      for (let i = 0; i < n; i++) {
        const idx = (ps.ci + i) % n;
        if (!ps.correct.has(ps.queue[idx].id)) { ps.ci = idx; return ps.queue[idx]; }
      }
      return null;
    },

    loadQ(p) {
      const ps = G[p], side = p === 'p1' ? 'left' : 'right';
      this.stopTimer(p);
      const q = this.getNext(ps);
      if (!q) {
        ps.done = true;
        document.getElementById('gq-' + side).innerHTML = '<span style="color:#16A34A;font-weight:700">✅ Semua soal selesai!</span>';
        document.getElementById('go-' + side).innerHTML = '<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#6B7280;font-size:.88rem;font-weight:600">Menunggu lawan...</div>';
        document.getElementById('gtv-' + side).textContent = '✔';
        document.getElementById('gtf-' + side).style.cssText = 'width:100%;background:#16A34A';
        if (!G.over) endM1(p, 'done');
        return;
      }
      const rem = ps.queue.length - ps.correct.size;
      updateHeader(side, { qinfo: `Sisa ${rem}` });
      document.getElementById('gq-' + side).textContent = q.q;
      renderOptions(side, q.opts, (sel) => this.answer(p, sel, q.ai));
      this.startTimer(p);
    },

    startTimer(p) {
      const ps = G[p], side = p === 'p1' ? 'left' : 'right';
      const bar = document.getElementById('gtf-' + side);
      const val = document.getElementById('gtv-' + side);
      const col = p === 'p1' ? 'r' : 'b';
      bar.style.transition = 'none';
      bar.style.width = (ps.timer / M1.MAX * 100) + '%';
      bar.className = 'gp-tfill gp-tfill-' + col;
      void bar.offsetWidth;
      bar.style.transition = 'width 1s linear, background .4s';
      const upd = () => {
        val.textContent = ps.timer + 's';
        if (ps.timer <= 10) { bar.classList.add('danger'); val.className = 'gp-tval gp-tval-' + col + ' danger'; }
        else if (ps.timer <= 25) { bar.classList.add('warn'); bar.classList.remove('danger'); val.className = 'gp-tval gp-tval-' + col + ' warn'; }
        else { bar.classList.remove('warn','danger'); val.className = 'gp-tval gp-tval-' + col; }
      };
      upd();
      ps.tInt = setInterval(() => {
        if (ps.locked || ps.done) return;
        ps.timer--;
        bar.style.width = Math.max(0, ps.timer / M1.MAX * 100) + '%';
        upd();
        if (ps.timer <= 10) Sound.tickD();
        else if (ps.timer <= 25) Sound.tickW();
        else if (ps.timer % 15 === 0) Sound.tick();
        if (ps.timer <= 0) { clearInterval(ps.tInt); endM1(p, 'timeout'); }
      }, 1000);
    },

    stopTimer(p) {
      if (G[p] && G[p].tInt) { clearInterval(G[p].tInt); G[p].tInt = null; }
    },

    answer(p, sel, correct) {
      if (G[p].locked || G.over) return;
      G[p].locked = true;
      this.stopTimer(p);
      const ps = G[p], side = p === 'p1' ? 'left' : 'right';
      lockOptions(side, correct, sel);
      if (sel === correct) {
        Sound.correct();
        ps.correct.add(ps.queue[ps.ci].id);
        ps.score++;
        ps.timer = Math.min(M1.MAX, ps.timer + M1.BONUS);
        ps.ci = (ps.ci + 1) % ps.queue.length;
        updateHeader(side, { score: ps.score });
        floatLabel(document.getElementById('go-' + side), '+' + M1.BONUS + 's', '#16A34A');
        Sound.move();
        Arena.drawM1(G);
      } else {
        Sound.wrong();
        ps.timer = Math.max(M1.MIN, ps.timer - M1.PENALTY);
        const cur = ps.queue[ps.ci];
        ps.queue.splice(ps.ci, 1); ps.queue.push(cur);
        if (ps.ci >= ps.queue.length) ps.ci = 0;
        floatLabel(document.getElementById('go-' + side), '-' + M1.PENALTY + 's', '#EF4444');
        Sound.penalty();
        const panel = document.getElementById('gp-' + side);
        panel.classList.remove('shake-anim'); void panel.offsetWidth; panel.classList.add('shake-anim');
      }
      setTimeout(() => { ps.locked = false; M1.loadQ(p); }, 800);
    },
  };

  function startM1() { M1.start(); }

  function endM1(p, reason) {
    if (G.over) return; G.over = true;
    M1.stopTimer('p1'); M1.stopTimer('p2');
    const winner = reason === 'done' ? p : (p === 'p1' ? 'p2' : 'p1');
    const wname = G[winner].name;
    const wcolor = winner === 'p1' ? '#DC2626' : '#1D4ED8';
    setTimeout(() => showWinner(wname, wcolor, G.p1.name, G.p2.name, G.p1.score, G.p2.score), 650);
  }

  /* ════════════════════════════════════
     MODE 2 LOGIC
  ════════════════════════════════════ */
  const M2_WIN = 7, M2_QTIMER = 20;

  function startM2() {
    buildM2Headers();
    Arena.drawM2(G.m2 || G);
    loadM2Q();
  }

  function buildM2Headers() {
    buildPanelHeader('left', 'Tim Merah', 0, 'r', true);
    buildPanelHeader('right', 'Tim Biru', 0, 'b', true);
  }

  function loadM2Q() {
    const m = G;
    stopM2Timer();
    if (m.qi >= m.qs.length) { endM2(m.t1.score >= m.t2.score ? 1 : 2, 'done'); return; }
    const team = m.cur === 1 ? m.t1 : m.t2;
    const pname = team.players[team.pi];
    const side = m.cur === 1 ? 'left' : 'right';
    const oside = m.cur === 1 ? 'right' : 'left';
    const col = m.cur === 1 ? 'r' : 'b';
    const colHex = m.cur === 1 ? '#DC2626' : '#1D4ED8';
    // Update turn display
    updateHeader(side, { qinfo: `${pname} | Giliran mu!` });
    updateHeader(oside, { qinfo: `${team.players[team.pi]} sedang main` });
    // Timer color
    const fillEl = document.getElementById('gtf-' + side);
    const valEl  = document.getElementById('gtv-' + side);
    if (fillEl) fillEl.className = 'gp-tfill gp-tfill-' + col;
    if (valEl)  valEl.className  = 'gp-tval gp-tval-' + col;
    const fillElO = document.getElementById('gtf-' + oside);
    const valElO  = document.getElementById('gtv-' + oside);
    if (fillElO) { fillElO.style.width = '0%'; }
    if (valElO)  { valElO.textContent = '—'; }
    const q = m.qs[m.qi];
    // Show question only on active side, other side shows waiting
    document.getElementById('gq-' + side).textContent = q.q;
    document.getElementById('gq-' + oside).textContent = '⏳ Menunggu giliran...';
    renderOptions(side, q.opts, (sel) => answerM2(sel, q.ai));
    document.getElementById('go-' + oside).innerHTML = '<div style="flex:1;display:flex;align-items:center;justify-content:center;color:#6B7280;font-size:.88rem;font-weight:600;gap:6px">⏳ Giliran lawan</div>';
    startM2Timer(side, col);
  }

  function startM2Timer(side, col) {
    const m = G; m.timer = M2_QTIMER;
    const bar = document.getElementById('gtf-' + side);
    const val = document.getElementById('gtv-' + side);
    bar.style.transition = 'none'; bar.style.width = '100%';
    void bar.offsetWidth; bar.style.transition = 'width 1s linear';
    bar.className = 'gp-tfill gp-tfill-' + col;
    bar.classList.remove('warn','danger');
    val.textContent = m.timer + 's';
    m.tInt = setInterval(() => {
      m.timer--;
      bar.style.width = Math.max(0, m.timer / M2_QTIMER * 100) + '%';
      val.textContent = m.timer + 's';
      if (m.timer <= 5) { bar.classList.add('danger'); Sound.tickD(); }
      else if (m.timer <= 10) { bar.classList.add('warn'); Sound.tickW(); }
      if (m.timer <= 0) { clearInterval(m.tInt); m2TimeUp(); }
    }, 1000);
  }

  function stopM2Timer() {
    if (G.tInt) { clearInterval(G.tInt); G.tInt = null; }
  }

  function m2TimeUp() {
    if (G.locked || G.over) return;
    G.locked = true; Sound.timeUp();
    const side = G.cur === 1 ? 'left' : 'right';
    lockOptions(side, G.qs[G.qi].ai, -1);
    setTimeout(advM2, 850);
  }

  function answerM2(sel, correct) {
    if (G.locked || G.over) return;
    G.locked = true; stopM2Timer();
    const side = G.cur === 1 ? 'left' : 'right';
    lockOptions(side, correct, sel);
    if (sel === correct) {
      Sound.correct();
      const team = G.cur === 1 ? G.t1 : G.t2;
      team.score++;
      updateHeader(G.cur === 1 ? 'left' : 'right', { score: team.score });
      floatLabel(document.getElementById('go-' + side), '+1', G.cur === 1 ? '#DC2626' : '#1D4ED8');
      Sound.move();
      Arena.drawM2(G);
      if (team.score >= M2_WIN && !G.over) { setTimeout(() => endM2(G.cur, 'win'), 700); return; }
    } else {
      Sound.wrong();
    }
    setTimeout(advM2, 850);
  }

  function advM2() {
    const team = G.cur === 1 ? G.t1 : G.t2;
    team.pi = (team.pi + 1) % team.players.length;
    G.cur = G.cur === 1 ? 2 : 1;
    G.qi++; G.locked = false;
    loadM2Q();
  }

  function endM2(t, reason) {
    if (G.over) return; G.over = true; stopM2Timer();
    const wname = t === 1 ? 'TIM MERAH' : 'TIM BIRU';
    const wcolor = t === 1 ? '#DC2626' : '#1D4ED8';
    setTimeout(() => showWinner(wname, wcolor, 'Tim Merah', 'Tim Biru', G.t1.score, G.t2.score), 650);
  }

  /* ════════════════════════════════════
     PANEL UI HELPERS
  ════════════════════════════════════ */
  function buildPanelHeader(side, name, score, col, isTeam) {
    const el = document.getElementById('gh-' + side);
    el.innerHTML = `<div style="background:${col==='r'?'#FEF2F2':'#EFF6FF'};border:2px solid ${col==='r'?'rgba(220,38,38,.2)':'rgba(29,78,216,.2)'};padding:.32rem .6rem;border-radius:9px;display:flex;align-items:center;justify-content:space-between;width:100%">
      <span class="gph-name gph-name-${col}" id="gph-name-${side}">${name}</span>
      <div class="gph-right">
        <span class="gph-qinfo" id="gph-qi-${side}"></span>
        <div style="display:flex;align-items:baseline;gap:2px">
          <span class="gph-score gph-score-${col}" id="gph-sc-${side}">${score}</span>
          <span class="gph-scoremax">${isTeam?'/7':' poin'}</span>
        </div>
      </div>
    </div>`;
  }

  function updateHeader(side, opts) {
    if (opts.score !== undefined) {
      const el = document.getElementById('gph-sc-' + side);
      if (el) { el.textContent = opts.score; el.classList.remove('pop-anim'); void el.offsetWidth; el.classList.add('pop-anim'); }
    }
    if (opts.qinfo !== undefined) {
      const el = document.getElementById('gph-qi-' + side);
      if (el) el.textContent = opts.qinfo;
    }
  }

  function renderOptions(side, opts, cb) {
    const og = document.getElementById('go-' + side);
    og.innerHTML = '';
    const labels = ['A','B','C','D'];
    opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerHTML = `<span class="opt-lbl">${labels[i]}</span><span>${opt}</span>`;
      btn.onclick = () => cb(i);
      og.appendChild(btn);
    });
  }

  function lockOptions(side, correct, chosen) {
    const og = document.getElementById('go-' + side);
    og.querySelectorAll('.opt-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === correct) btn.classList.add('correct');
      else if (i === chosen) btn.classList.add('wrong');
    });
  }

  /* ════════════════════════════════════
     WINNER
  ════════════════════════════════════ */
  function showWinner(name, color, n1, n2, s1, s2) {
    Sound.win();
    document.getElementById('w-name').textContent = name;
    document.getElementById('w-name').style.color = color;
    document.getElementById('w-scores').innerHTML = `
      <div class="ws-item"><div class="ws-name">${n1}</div><div class="ws-score" style="color:#DC2626">${s1}</div></div>
      <div class="ws-vs">VS</div>
      <div class="ws-item"><div class="ws-name">${n2}</div><div class="ws-score" style="color:#1D4ED8">${s2}</div></div>`;
    go('s-winner');
    Confetti.start(color);
  }

  function goHome() {
    Confetti.stop();
    // reset inputs
    ['ni-p1','ni-p2'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    G = {};
    go('s-home');
  }

  function rematch() {
    Confetti.stop();
    G = {};
    buildSetupScreen(gameMode);
    go('s-setup');
  }

  /* ════════════════════════════════════
     RESIZE
  ════════════════════════════════════ */
  function onResize() {
    if (currentScreen === 's-game') {
      if (G.mode === 1 && G.p1) Arena.drawM1(G);
      else if (G.mode === 2 && G.t1) Arena.drawM2(G);
    }
  }
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', () => setTimeout(onResize, 150));

  // public API
  return {
    go, toggleSound, selectMode, setCount, renderTeamNames,
    startFromSetup, goHome, rematch,
  };
})();
