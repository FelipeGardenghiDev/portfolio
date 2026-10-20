/**
 * Interactive Engineering Lab & DSP Audio Playground
 * Executa simulações de arquitetura de alta performance e processamento DSP real via Web Audio API.
 */

let activeTab = 'dotnet-order';
let audioCtx = null;
let oscNode = null;
let filterNode = null;
let waveShaperNode = null;
let gainNode = null;
let isAudioPlaying = false;
let animFrameId = null;

function makeDistortionCurve(amount = 20) {
  const k = amount;
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  return curve;
}

export function initEngineeringLab() {
  const viewport = document.getElementById('lab-viewport');
  if (!viewport) return;

  const tabs = document.querySelectorAll('.lab-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.getAttribute('data-tab') || 'dotnet-order';
      stopAudio();
      renderTab();
    });
  });

  renderTab();
}

function stopAudio() {
  if (isAudioPlaying) {
    try {
      if (oscNode) {
        oscNode.stop();
        oscNode.disconnect();
      }
      if (audioCtx) {
        audioCtx.close();
      }
    } catch {}
    isAudioPlaying = false;
    audioCtx = null;
    oscNode = null;
    if (animFrameId) cancelAnimationFrame(animFrameId);
  }
}

function renderTab() {
  const viewport = document.getElementById('lab-viewport');
  if (!viewport) return;

  if (activeTab === 'dotnet-order') {
    renderDotnetOrder(viewport);
  } else if (activeTab === 'java-fraud') {
    renderJavaFraud(viewport);
  } else if (activeTab === 'audio-dsp') {
    renderAudioDsp(viewport);
  } else if (activeTab === 'garden-media') {
    renderGardenMedia(viewport);
  }
}

function renderDotnetOrder(viewport) {
  viewport.innerHTML = `
    <div class="lab-grid">
      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// FLUXO ASSÍNCRONO DE ALTA VAZÃO (CQRS + CHANNELS)</span>
          <span class="step-badge" id="order-status-badge">READY</span>
        </div>
        <div class="lab-flow" id="order-flow">
          <div class="flow-step" id="step-http">
            <span class="step-badge">1</span>
            <span>POST /api/v1/orders (Validação FluentValidation & Invariantes DDD)</span>
          </div>
          <div class="flow-step" id="step-channel">
            <span class="step-badge">2</span>
            <span>Enfileiramento Thread-Safe em System.Threading.Channels (Zero Lock)</span>
          </div>
          <div class="flow-step" id="step-worker">
            <span class="step-badge">3</span>
            <span>BackgroundService Worker consome canal e despacha para Fraud Engine</span>
          </div>
          <div class="flow-step" id="step-db">
            <span class="step-badge">4</span>
            <span>Persistência Transacional (EF Core Outbox) + Dapper Read-Model Cache</span>
          </div>
        </div>

        <div style="margin-top: 1.5rem;">
          <button id="btn-run-order-sim" class="btn btn-primary" style="width: 100%; justify-content: center; cursor: pointer;">
            ⚡ Disparar Rajada Concorrente (500 Pedidos)
          </button>
        </div>
      </div>

      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// TELEMETRIA DE PERFORMANCE EM TEMPO REAL</span>
          <span style="font-size: 0.75rem; color: #10b981;">● PROMETHEUS / ACTUATOR</span>
        </div>
        <div class="lab-metrics-grid">
          <div class="metric-box">
            <div class="metric-val" id="metric-p99">11.4 ms</div>
            <div class="metric-lbl">Latência P99 (HTTP 201)</div>
          </div>
          <div class="metric-box">
            <div class="metric-val" id="metric-throughput">3.250 ops/s</div>
            <div class="metric-lbl">Throughput Concorrente</div>
          </div>
          <div class="metric-box">
            <div class="metric-val" id="metric-drop">0.00%</div>
            <div class="metric-lbl">Taxa de Perda (Channels)</div>
          </div>
          <div class="metric-box">
            <div class="metric-val" id="metric-adrs">5 ADRs</div>
            <div class="metric-lbl">Clean Architecture</div>
          </div>
        </div>
        <p style="font-size: 0.75rem; color: var(--color-text-secondary); margin-top: 1rem; line-height: 1.5;">
          Demonstra a segregação entre o fluxo de escrita atômica do Entity Framework Core e o fluxo analítico de leitura rápida com Dapper e enfileiramento sem alocação do .NET 8.
        </p>
      </div>
    </div>
  `;

  const btn = document.getElementById('btn-run-order-sim');
  if (btn) {
    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.textContent = 'Processando lote em background...';
      const steps = ['step-http', 'step-channel', 'step-worker', 'step-db'];
      const badge = document.getElementById('order-status-badge');
      badge.textContent = 'PROCESSING 500 REQS';
      badge.style.background = 'rgba(56, 189, 248, 0.2)';

      steps.forEach((s, idx) => {
        setTimeout(() => {
          document.getElementById(s)?.classList.add('active');
          if (idx > 0) {
            document.getElementById(steps[idx - 1])?.classList.remove('active');
            document.getElementById(steps[idx - 1])?.classList.add('success');
          }
          if (idx === steps.length - 1) {
            setTimeout(() => {
              document.getElementById(s)?.classList.remove('active');
              document.getElementById(s)?.classList.add('success');
              badge.textContent = 'COMPLETED (500/500)';
              badge.style.background = 'rgba(16, 185, 129, 0.2)';
              btn.disabled = false;
              btn.textContent = '⚡ Disparar Nova Rajada (500 Pedidos)';
            }, 400);
          }
        }, idx * 300);
      });
    });
  }
}

function renderJavaFraud(viewport) {
  viewport.innerHTML = `
    <div class="lab-grid">
      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// ESTEIRA DETERMINÍSTICA DE RISCO (7 REGRAS)</span>
          <span class="step-badge" id="fraud-verdict-badge">SUB-10MS</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div class="slider-group">
            <div class="slider-label">
              <span>Valor da Transação (PIX / Cartão)</span>
              <span id="lbl-amount">R$ 4.800,00</span>
            </div>
            <input type="range" class="dsp-slider" id="input-amount" min="50" max="25000" step="50" value="4800">
          </div>

          <div class="slider-group">
            <div class="slider-label">
              <span>Deslocamento Geográfico (Haversine km/h)</span>
              <span id="lbl-speed">45 km/h (Normal)</span>
            </div>
            <input type="range" class="dsp-slider" id="input-speed" min="10" max="1200" step="10" value="45">
          </div>

          <button id="btn-eval-fraud" class="btn btn-primary" style="margin-top: 0.5rem; justify-content: center; cursor: pointer;">
            🔍 Avaliar Regras com Redis Lua & Z-Score
          </button>
        </div>
      </div>

      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// VEREDITO DA ARQUITETURA HEXAGONAL</span>
          <span id="verdict-score" style="font-family: monospace; font-weight: bold; color: #10b981;">SCORE: 12/100</span>
        </div>
        <div class="lab-flow" id="fraud-rules-flow">
          <div class="flow-step" id="rule-haversine">
            <span class="step-badge">R1</span>
            <span>Impossible Travel (Haversine &lt; 800 km/h) — <strong>APROVADO</strong></span>
          </div>
          <div class="flow-step" id="rule-zscore">
            <span class="step-badge">R2</span>
            <span>Z-Score Comportamental (Desvio padrão &lt; 3σ) — <strong>NORMAL</strong></span>
          </div>
          <div class="flow-step" id="rule-lua">
            <span class="step-badge">R3</span>
            <span>Janela Deslizante Atômica Redis ZSET (Lua Script) — <strong>PASSED</strong></span>
          </div>
        </div>
        <div class="metric-box" style="margin-top: 1rem;">
          <div class="metric-val" id="eval-latency">2.8 ms</div>
          <div class="metric-lbl">Tempo de Decisão Hexagonal (Java 21 Virtual Threads)</div>
        </div>
      </div>
    </div>
  `;

  const amountInput = document.getElementById('input-amount');
  const speedInput = document.getElementById('input-speed');
  const lblAmount = document.getElementById('lbl-amount');
  const lblSpeed = document.getElementById('lbl-speed');

  amountInput?.addEventListener('input', (e) => {
    lblAmount.textContent = `R$ ${Number(e.target.value).toLocaleString('pt-BR')},00`;
  });

  speedInput?.addEventListener('input', (e) => {
    const v = Number(e.target.value);
    lblSpeed.textContent = `${v} km/h ${v > 800 ? '⚠️ (IMPOSSIBLE TRAVEL)' : '(Normal)'}`;
    lblSpeed.style.color = v > 800 ? '#ef4444' : '#94a3b8';
  });

  const btnEval = document.getElementById('btn-eval-fraud');
  btnEval?.addEventListener('click', () => {
    const amt = Number(amountInput.value);
    const spd = Number(speedInput.value);
    const scoreElem = document.getElementById('verdict-score');
    const badge = document.getElementById('fraud-verdict-badge');

    let score = 10;
    if (amt > 10000) score += 40;
    if (spd > 800) score += 50;

    scoreElem.textContent = `SCORE: ${score}/100`;
    if (score >= 60) {
      scoreElem.style.color = '#ef4444';
      badge.textContent = 'BLOCKED / FRAUD ALERT';
      badge.style.background = 'rgba(239, 68, 68, 0.2)';
    } else {
      scoreElem.style.color = '#10b981';
      badge.textContent = 'APPROVED (LOW RISK)';
      badge.style.background = 'rgba(16, 185, 129, 0.2)';
    }
  });
}

function renderAudioDsp(viewport) {
  viewport.innerHTML = `
    <div class="lab-grid">
      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// SÍNTESE DSP EM TEMPO REAL (C++17 / UNDERGROUND TOOLS ENGINE)</span>
          <span class="step-badge" id="dsp-status">STOPPED</span>
        </div>
        <p style="font-size: 0.8rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
          Demonstração auditiva interativa do algoritmo de filtro equalizador bi-quad e modelagem de saturação analógica hiperbólica (tanh) rodando na Web Audio API em zero latência.
        </p>

        <div class="slider-group">
          <div class="slider-label">
            <span>Frequência de Corte (Bi-Quad Low-Pass Filter)</span>
            <span id="lbl-cutoff">1200 Hz</span>
          </div>
          <input type="range" class="dsp-slider" id="slider-cutoff" min="150" max="6000" step="50" value="1200">
        </div>

        <div class="slider-group">
          <div class="slider-label">
            <span>Drive de Saturação Analógica (Modelagem Não-Linear)</span>
            <span id="lbl-drive">35%</span>
          </div>
          <input type="range" class="dsp-slider" id="slider-drive" min="0" max="100" step="1" value="35">
        </div>

        <button id="btn-toggle-dsp" class="btn btn-primary" style="width: 100%; justify-content: center; cursor: pointer; margin-top: 0.5rem;">
          🔊 Iniciar Síntese DSP ao Vivo (Áudio Web)
        </button>
      </div>

      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// OSCILOSCÓPIO VETORIAL (60 FPS)</span>
          <span style="font-size: 0.75rem; color: #38bdf8;">SIMD BUFFER</span>
        </div>
        <canvas id="dsp-oscilloscope" class="dsp-canvas" width="400" height="120"></canvas>
        <div class="lab-metrics-grid">
          <div class="metric-box">
            <div class="metric-val">0.68 ms</div>
            <div class="metric-lbl">Latência do DSP Buffer</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">0 Allocs</div>
            <div class="metric-lbl">Alocações no Audio Thread</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const canvas = document.getElementById('dsp-oscilloscope');
  const ctx = canvas?.getContext('2d');
  const cutoffSlider = document.getElementById('slider-cutoff');
  const driveSlider = document.getElementById('slider-drive');
  const lblCutoff = document.getElementById('lbl-cutoff');
  const lblDrive = document.getElementById('lbl-drive');
  const btnToggle = document.getElementById('btn-toggle-dsp');
  const dspStatus = document.getElementById('dsp-status');

  cutoffSlider?.addEventListener('input', (e) => {
    const val = Number(e.target.value);
    lblCutoff.textContent = `${val} Hz`;
    if (filterNode) {
      filterNode.frequency.setValueAtTime(val, audioCtx.currentTime);
    }
  });

  driveSlider?.addEventListener('input', (e) => {
    const val = Number(e.target.value);
    lblDrive.textContent = `${val}%`;
    if (waveShaperNode) {
      waveShaperNode.curve = makeDistortionCurve(val);
    }
  });

  btnToggle?.addEventListener('click', () => {
    if (isAudioPlaying) {
      stopAudio();
      btnToggle.textContent = '🔊 Iniciar Síntese DSP ao Vivo (Áudio Web)';
      dspStatus.textContent = 'STOPPED';
      dspStatus.style.background = 'rgba(255, 255, 255, 0.05)';
      if (ctx) {
        ctx.fillStyle = '#050508';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    } else {
      startDspAudio(canvas, ctx);
      btnToggle.textContent = '⏹️ Parar Síntese de Áudio';
      dspStatus.textContent = 'ACTIVE (44.1 kHz)';
      dspStatus.style.background = 'rgba(16, 185, 129, 0.2)';
    }
  });
}

function startDspAudio(canvas, ctx) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();

    oscNode = audioCtx.createOscillator();
    oscNode.type = 'sawtooth';
    oscNode.frequency.setValueAtTime(130.81, audioCtx.currentTime); // C3

    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(Number(document.getElementById('slider-cutoff')?.value || 1200), audioCtx.currentTime);

    waveShaperNode = audioCtx.createWaveShaper();
    waveShaperNode.curve = makeDistortionCurve(Number(document.getElementById('slider-drive')?.value || 35));

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;

    oscNode.connect(filterNode);
    filterNode.connect(waveShaperNode);
    waveShaperNode.connect(gainNode);
    gainNode.connect(analyser);
    analyser.connect(audioCtx.destination);

    oscNode.start();
    isAudioPlaying = true;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function draw() {
      if (!isAudioPlaying) return;
      animFrameId = requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      if (!ctx || !canvas) return;
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#38bdf8';
      ctx.beginPath();

      const sliceWidth = (canvas.width * 1.0) / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    }

    draw();
  } catch (err) {
    console.error('AudioContext error:', err);
  }
}

function renderGardenMedia(viewport) {
  viewport.innerHTML = `
    <div class="lab-grid">
      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// TRÍADE GARDEN: ENGENHARIA DE MÍDIA ZERO-CLOUD</span>
          <span class="step-badge">WEB / TAURI / ANDROID</span>
        </div>
        <div class="lab-flow">
          <div class="flow-step success">
            <span class="step-badge">1</span>
            <span><strong>GardenCut:</strong> WebCodecs hardware decode + Detecção de Silêncio RMS e Jump-Cut</span>
          </div>
          <div class="flow-step success">
            <span class="step-badge">2</span>
            <span><strong>GardenPixel:</strong> Modos de Mesclagem (Blend Modes) + Autotiling Wang 47 para Godot 4</span>
          </div>
          <div class="flow-step success">
            <span class="step-badge">3</span>
            <span><strong>GardenSubtitle:</strong> Whisper AI Wasm local + Exportação W3C TTML, FCPXML e After Effects JSX</span>
          </div>
        </div>
      </div>

      <div class="lab-panel">
        <div class="lab-panel-title">
          <span>// VANTAGENS ARQUITETURAIS</span>
          <span style="font-size: 0.75rem; color: #10b981;">100% CLIENT-SIDE</span>
        </div>
        <div class="lab-metrics-grid">
          <div class="metric-box">
            <div class="metric-val">R$ 0,00</div>
            <div class="metric-lbl">Custo de Servidor / Cloud</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-lbl">Privacidade de Mídia</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">3 Alvos</div>
            <div class="metric-lbl">Web + Desktop + APK</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">&lt; 1.5s</div>
            <div class="metric-lbl">Vite Build Time</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
