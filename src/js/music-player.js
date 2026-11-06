/**
 * Music Player & Web Audio Visualizer
 * Provides an interactive audio experience with track switching,
 * real-time waveform visualizer (Web Audio API synthesis + canvas), and playback controls.
 */

const TRACKS = [
  {
    id: 1,
    title: 'Quebre As Correntes (Ao Vivo)',
    artist: 'Banda Revanche (Tributo Fresno)',
    duration: '3:42',
    genre: 'Emo Rock / Live',
    tempo: 145,
    key: 'E menor'
  },
  {
    id: 2,
    title: 'Revanche (Ao Vivo)',
    artist: 'Banda Revanche',
    duration: '4:15',
    genre: 'Emo Rock / Live',
    tempo: 138,
    key: 'D maior'
  },
  {
    id: 3,
    title: 'Linha de Frente',
    artist: 'Patrulha 7 (Álbum de Estúdio)',
    duration: '3:18',
    genre: 'Rock Alternativo / Baixo Autoral',
    tempo: 128,
    key: 'A menor'
  },
  {
    id: 4,
    title: 'MidwestAmp DSP Audio Demo',
    artist: 'Felipe Gardenghi (C++17 CLAP/VST3)',
    duration: '2:50',
    genre: 'Kinsella Clean & 90s Crunch Simulator',
    tempo: 120,
    key: 'F# menor'
  },
  {
    id: 5,
    title: 'VisuChord Bimanual Synth Jam',
    artist: 'Felipe Gardenghi (Tone.js & Web MIDI)',
    duration: '2:14',
    genre: 'Computer Vision AI Synth',
    tempo: 110,
    key: 'C maior'
  }
];

export function initMusicPlayer() {
  const playBtn = document.getElementById('music-play-btn');
  const prevBtn = document.getElementById('music-prev-btn');
  const nextBtn = document.getElementById('music-next-btn');
  const trackItems = document.querySelectorAll('.music-track-item');
  const titleEl = document.getElementById('music-current-title');
  const artistEl = document.getElementById('music-current-artist');
  const currentTimeEl = document.getElementById('music-current-time');
  const totalTimeEl = document.getElementById('music-total-time');
  const progressFill = document.getElementById('music-progress-fill');
  const progressBar = document.getElementById('music-progress-bar');
  const canvas = document.getElementById('music-visualizer-canvas');

  if (!playBtn || !canvas) return;

  let currentTrackIdx = 0;
  let isPlaying = false;
  let progressSec = 0;
  let timerInterval = null;
  let animId = null;

  // Web Audio Context for synthesized demo sound
  let audioCtx = null;
  let synthOsc1 = null;
  let synthOsc2 = null;
  let synthGain = null;

  function initAudioCtx() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function startSynthesizer() {
    initAudioCtx();
    if (!audioCtx) return;

    try {
      synthGain = audioCtx.createGain();
      synthGain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      synthGain.connect(audioCtx.destination);

      synthOsc1 = audioCtx.createOscillator();
      synthOsc1.type = 'sawtooth';
      synthOsc1.frequency.setValueAtTime(164.81, audioCtx.currentTime); // E3

      synthOsc2 = audioCtx.createOscillator();
      synthOsc2.type = 'triangle';
      synthOsc2.frequency.setValueAtTime(82.41, audioCtx.currentTime); // E2

      synthOsc1.connect(synthGain);
      synthOsc2.connect(synthGain);

      synthOsc1.start();
      synthOsc2.start();
    } catch (e) {
      // AudioContext policy fallback
    }
  }

  function stopSynthesizer() {
    try {
      if (synthGain && audioCtx) {
        synthGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        setTimeout(() => {
          if (synthOsc1) { synthOsc1.stop(); synthOsc1.disconnect(); synthOsc1 = null; }
          if (synthOsc2) { synthOsc2.stop(); synthOsc2.disconnect(); synthOsc2 = null; }
          if (synthGain) { synthGain.disconnect(); synthGain = null; }
        }, 120);
      }
    } catch (e) {}
  }

  // Visualizer Canvas Drawing Loop
  const ctx = canvas.getContext('2d');
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * (window.devicePixelRatio || 1);
    canvas.height = rect.height * (window.devicePixelRatio || 1);
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let phase = 0;
  function renderVisualizer() {
    if (!ctx) return;
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const barCount = 42;
    const barWidth = (w / barCount) - 3;
    const baseHeight = isPlaying ? 0.6 : 0.15;

    for (let i = 0; i < barCount; i++) {
      const x = i * (barWidth + 3);
      let barH;
      if (isPlaying) {
        const factor = Math.sin((i * 0.3) + phase) * 0.5 + 0.5;
        const wave2 = Math.cos((i * 0.15) - phase * 1.5) * 0.3 + 0.3;
        barH = ((factor + wave2) * 0.5 * h * baseHeight) + 6;
      } else {
        barH = Math.sin((i * 0.2) + phase * 0.2) * 4 + 6;
      }

      const y = (h - barH) / 2;
      
      // Warm amber to bright flame gradient
      const grad = ctx.createLinearGradient(0, y, 0, y + barH);
      grad.addColorStop(0, '#f59e0b');
      grad.addColorStop(1, '#ef4444');

      ctx.fillStyle = isPlaying ? grad : 'rgba(245, 158, 11, 0.25)';
      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, barH, 2);
      ctx.fill();
    }

    phase += isPlaying ? 0.08 : 0.02;
    animId = requestAnimationFrame(renderVisualizer);
  }
  animId = requestAnimationFrame(renderVisualizer);

  function parseDurationToSec(durStr) {
    const parts = durStr.split(':').map(Number);
    return parts[0] * 60 + parts[1];
  }

  function formatSec(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function selectTrack(idx, autoPlay = true) {
    currentTrackIdx = (idx + TRACKS.length) % TRACKS.length;
    const track = TRACKS[currentTrackIdx];
    
    if (titleEl) titleEl.textContent = track.title;
    if (artistEl) artistEl.textContent = `${track.artist} · ${track.genre}`;
    if (totalTimeEl) totalTimeEl.textContent = track.duration;
    
    progressSec = 0;
    if (currentTimeEl) currentTimeEl.textContent = '0:00';
    if (progressFill) progressFill.style.width = '0%';

    trackItems.forEach((item, i) => {
      item.classList.toggle('active', i === currentTrackIdx);
    });

    if (autoPlay) {
      startPlay();
    }
  }

  function startPlay() {
    isPlaying = true;
    updatePlayBtnIcon();
    startSynthesizer();
    clearInterval(timerInterval);
    const track = TRACKS[currentTrackIdx];
    const totalSec = parseDurationToSec(track.duration);

    timerInterval = setInterval(() => {
      progressSec += 1;
      if (progressSec > totalSec) {
        selectTrack(currentTrackIdx + 1, true);
        return;
      }
      if (currentTimeEl) currentTimeEl.textContent = formatSec(progressSec);
      if (progressFill) {
        const pct = (progressSec / totalSec) * 100;
        progressFill.style.width = `${pct}%`;
      }
    }, 1000);
  }

  function pausePlay() {
    isPlaying = false;
    updatePlayBtnIcon();
    stopSynthesizer();
    clearInterval(timerInterval);
  }

  function togglePlay() {
    if (isPlaying) {
      pausePlay();
    } else {
      startPlay();
    }
  }

  function updatePlayBtnIcon() {
    if (!playBtn) return;
    if (isPlaying) {
      playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      `;
      playBtn.setAttribute('aria-label', 'Pausar áudio');
    } else {
      playBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      `;
      playBtn.setAttribute('aria-label', 'Reproduzir áudio');
    }
  }

  // Event Listeners
  playBtn.addEventListener('click', togglePlay);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      selectTrack(currentTrackIdx - 1, isPlaying);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      selectTrack(currentTrackIdx + 1, isPlaying);
    });
  }

  trackItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
      selectTrack(idx, true);
    });
  });

  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const track = TRACKS[currentTrackIdx];
      const totalSec = parseDurationToSec(track.duration);
      progressSec = totalSec * pct;
      if (currentTimeEl) currentTimeEl.textContent = formatSec(progressSec);
      if (progressFill) progressFill.style.width = `${pct * 100}%`;
    });
  }

  // Stop music when switching to tech persona to not play unwanted audio
  window.addEventListener('persona-change', (e) => {
    if (e.detail && e.detail.persona === 'tech') {
      if (isPlaying) pausePlay();
    }
  });

  // Init first track UI
  selectTrack(0, false);
}
