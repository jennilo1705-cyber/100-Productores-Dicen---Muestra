const roundsData = [
    // --- RONDA 1 ---
    {
        title: "RONDA 1 - PREGUNTA 1",
        question: "Cuando elegimos una película para mirar en el cine o en casa, muchas veces miramos primero cuánto dura para organizarnos. ¿Cuánto es el tiempo promedio de duración de una película de cine?",
        multiplier: 1,
        answers: [
            { text: "1 hora 30 minutos (1:30:00)", points: 42 },
            { text: "2 horas (2:00:00)", points: 31 },
            { text: "1 hora 45 minutos (1:45:00)", points: 14 },
            { text: "2 horas 30 minutos (2:30:00)", points: 8 },
            { text: "1 hora (1:00:00)", points: 5 }
        ]
    },
    {
        title: "RONDA 1 - PREGUNTA 2",
        question: "En las películas los sonidos muchas veces se hacen con cosas que nada que ver. [REPRODUCIR BOLSITA DE PAPAS / CELOFÁN] ¿A qué se parece este sonido que escuchan por los parlantes?",
        multiplier: 1,
        answers: [
            { text: "Fuego de una fogata", points: 42 },
            { text: "Lluvia o tormenta fuerte", points: 28 },
            { text: "Papas fritas en aceite hirviendo", points: 15 },
            { text: "Una bolsita de golosinas o paquete de papas", points: 10 },
            { text: "Destapar una lata de gaseosa", points: 5 }
        ]
    },
    {
        title: "RONDA 1 - PREGUNTA 3",
        question: "Ir al cine es un clásico, pero cada uno tiene su hábito favorito al sentarse en la sala. ¿Qué comida o golosina no puede faltarte cuando vas al cine?",
        multiplier: 1,
        answers: [
            { text: "Palomitas de maíz / Pochoclos", points: 48 },
            { text: "Gaseosa / Vaso gigante de bebida", points: 26 },
            { text: "Chocolates / Golosinas", points: 12 },
            { text: "Nachos con queso", points: 8 },
            { text: "Gomitas o caramelos", points: 6 }
        ]
    },
    {
        title: "RONDA 1 - PREGUNTA 4 (MULTIPLICA X2)",
        question: "Estás en lo mejor de la película, bien concentrado, y de repente pasa algo en la sala o en tu casa. ¿Qué es lo más molesto que puede hacer alguien al lado tuyo mientras ven una película?",
        multiplier: 2,
        answers: [
            { text: "Hablar o hacer comentarios todo el tiempo", points: 36 },
            { text: "Usar el celular con la pantalla con mucho brillo", points: 25 },
            { text: "Masticar comida haciendo mucho ruido", points: 18 },
            { text: "Hacer spoiler o contar lo que va a pasar", points: 11 },
            { text: "Patear el asiento desde atrás", points: 6 },
            { text: "Quedarse dormido y roncando", points: 4 }
        ]
    },
    {
        title: "RONDA 1 - PREGUNTA 5 (TRIPLICA X3)",
        question: "Para cerrar la primera ronda, hablemos de los que nos pasa a todos cuando una pelicula es muy emotiva o atrapante... ¿Qué hacés cuando sabes que una pelicula te va a hacer llorar?",
        multiplier: 3,
        answers: [
            { text: "Preparar o agarrar pañuelitos de papel", points: 45 },
            { text: "Mirarla solo/a para que nadie me vea llorar", points: 25 },
            { text: "Aguantarme las ganas de llorar o disimular", points: 15 },
            { text: "Abrazar a quien esté al lado", points: 10 },
            { text: "Cambiar de canal/pelicula o poner pausa", points: 5 }
        ]
    },

    // --- RONDA 2 ---
    {
        title: "RONDA 2 - PREGUNTA 1",
        question: "Arrancamos la segunda ronda. Todos miramos contenidos en distintas pantallas y lugares. ¿En qué aparato o dispositivo miras tus videos o series habitualmente?",
        multiplier: 1,
        answers: [
            { text: "En el Celular", points: 40 },
            { text: "En el Televisor / Smart TV", points: 32 },
            { text: "En la Computadora / Notebook", points: 18 },
            { text: "En una Tablet", points: 7 },
            { text: "En un Proyector en casa", points: 3 }
        ]
    },
    {
        title: "RONDA 2 - PREGUNTA 2",
        question: "Ver películas de terror nos hace saltar del asiento. Pero siempre hay ruidos típicos que nos dan miedo... ¿Qué ruido típico de película de terror te da más miedo o escalofríos?",
        multiplier: 1,
        answers: [
            { text: "Una puerta rechinando al abrirse sola", points: 35 },
            { text: "Pasos lentos en el pasillo o techo", points: 24 },
            { text: "Un grito repentino", points: 16 },
            { text: "Risas o susurros de niños", points: 12 },
            { text: "El viento aullando o tormenta de noche", points: 8 },
            { text: "Reloj antiguo haciendo tic-tac", points: 5 }
        ]
    },
    {
        title: "RONDA 2 - PREGUNTA 3",
        question: "Para escuchar música, audios o videos todos tenemos nuestros accesorios preferidos. ¿Qué usas en tu vida diaria para escuchar música o audios?",
        multiplier: 1,
        answers: [
            { text: "Auriculares inalámbricos / In-ear", points: 38 },
            { text: "Parlante del teléfono celular directo", points: 24 },
            { text: "Parlante Bluetooth portátil", points: 17 },
            { text: "Auriculares grandes de vincha", points: 11 },
            { text: "Parlantes o equipo de música del auto", points: 6 },
            { text: "Equipo de música / Torre de sonido", points: 4 }
        ]
    },
    {
        title: "RONDA 2 - PREGUNTA 4 (MULTIPLICA X2)",
        question: "Vamos a poner un sonido por el parlante y nos dicen qué parece estar pasando... [REPRODUCIR FÉCULA O HARINA PISADA] ¿Qué superficie o lugar parece estar pisando alguien?",
        multiplier: 2,
        answers: [
            { text: "Nieve fresca al caminar", points: 40 },
            { text: "Arena de la playa", points: 25 },
            { text: "Hojas secas en el suelo", points: 16 },
            { text: "Piedritas / Gravilla del camino", points: 10 },
            { text: "Una bolsa de harina o fécula", points: 6 },
            { text: "Barro seco que se rompe", points: 3 }
        ]
    },
    {
        title: "RONDA 2 - PREGUNTA 5 (GRAN FINAL - TRIPLICA X3)",
        question: "Llegamos a la Gran Final. Para ganar el juego, piensen en lo que todos necesitamos para pasar una gran velada maratoneando películas o series... Nombra algo infaltable para disfrutar de una noche ideal de películas en casa.",
        multiplier: 3,
        answers: [
            { text: "Palomitas de maíz / Pochoclos", points: 30 },
            { text: "Una buena bebida (Gaseosa / Cerveza)", points: 22 },
            { text: "Manta o cobija suave", points: 14 },
            { text: "Apagar las luces del ambiente", points: 11 },
            { text: "Buena compañía (pareja, amigos o familia)", points: 9 },
            { text: "Almohadones / Buen sillón", points: 6 },
            { text: "Silenciar o alejar el celular", points: 5 },
            { text: "Helado o algo dulce de postre", points: 3 }
        ]
    }
];

// --- GESTIÓN DE PUNTOS ACUMULADOS DE LOS 4 GRUPOS ---
let groupScores = { 1: 0, 2: 0, 3: 0, 4: 0 };

function addPointsToGroup(groupNum) {
    const currentQuestionScore = parseInt(totalScoreEl.textContent) || 0;
    if (currentQuestionScore > 0) {
        groupScores[groupNum] += currentQuestionScore;
        const scoreEl = document.getElementById(`score-group-${groupNum}`);
        if (scoreEl) {
            scoreEl.textContent = groupScores[groupNum];
        }
        playCorrectSound();
    }
}

// --- GESTIÓN DE AUDIOS PERSONALIZADOS ---
let customCorrectAudio = null;
let customWrongAudio = null;

document.addEventListener("DOMContentLoaded", () => {
    const correctInput = document.getElementById('input-correct-mp3');
    const wrongInput = document.getElementById('input-wrong-mp3');

    if (correctInput) {
        correctInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) customCorrectAudio = new Audio(URL.createObjectURL(file));
        });
    }

    if (wrongInput) {
        wrongInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) customWrongAudio = new Audio(URL.createObjectURL(file));
        });
    }
});

function playCorrectSound() {
    if (customCorrectAudio) {
        customCorrectAudio.currentTime = 0;
        customCorrectAudio.play().catch(e => console.error(e));
    } else {
        playSynthCorrectSound();
    }
}

function playWrongSound() {
    if (customWrongAudio) {
        customWrongAudio.currentTime = 0;
        customWrongAudio.play().catch(e => console.error(e));
    } else {
        playSynthWrongSound();
    }
}

let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playSynthCorrectSound() {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        const now = ctx.currentTime;

        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        osc.frequency.setValueAtTime(783.99, now + 0.2);
        osc.frequency.setValueAtTime(1046.50, now + 0.3);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.5);
    } catch (e) {}
}

function playSynthWrongSound() {
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        const now = ctx.currentTime;

        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(80, now + 0.35);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);
    } catch (e) {}
}

let currentView = 'round';
let currentRoundIndex = 0;
let basePointsSum = 0;
let roundStrikeCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let fastMoneyGame1 = {
    p1: Array(5).fill().map(() => ({ text: "", points: "" })),
    p2: Array(5).fill().map(() => ({ text: "", points: "" }))
};

let fastMoneyGame2 = {
    p1: Array(5).fill().map(() => ({ text: "", points: "" })),
    p2: Array(5).fill().map(() => ({ text: "", points: "" }))
};

const boardGrid = document.getElementById('board-grid');
const normalPanel = document.getElementById('normal-panel');
const fastMoneyPanel = document.getElementById('fast-money-panel');
const mainScoreBox = document.getElementById('main-score-box');
const questionDisplayBox = document.getElementById('question-display-box');
const questionTextEl = document.getElementById('question-text');
const totalScoreEl = document.getElementById('total-score');
const roundTitleEl = document.getElementById('round-title');
const crossOverlay = document.getElementById('cross-overlay');
const crossContainer = document.getElementById('cross-container');
const fastCrossOverlay = document.getElementById('fast-cross-overlay');
const btnCross = document.getElementById('btn-cross-trigger');
const btnReset = document.getElementById('btn-reset');

function switchView(type, roundIdx = 0) {
    currentView = type;
    
    document.querySelectorAll('.round-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', type === 'round' && idx === roundIdx);
    });
    document.querySelectorAll('.fast-money-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', (type === 'fast1' && idx === 0) || (type === 'fast2' && idx === 1));
    });

    if (type === 'round') {
        currentRoundIndex = roundIdx;
        normalPanel.style.display = 'block';
        fastMoneyPanel.style.display = 'none';
        mainScoreBox.style.display = 'block';
        if (questionDisplayBox) questionDisplayBox.style.display = 'block';
        renderNormalRound();
    } else {
        normalPanel.style.display = 'none';
        fastMoneyPanel.style.display = 'block';
        mainScoreBox.style.display = 'none';
        if (questionDisplayBox) questionDisplayBox.style.display = 'none';
        renderFastMoney(type);
    }
}

function renderNormalRound() {
    const roundInfo = roundsData[currentRoundIndex];
    if (roundTitleEl) roundTitleEl.textContent = roundInfo.title;
    if (questionTextEl) questionTextEl.textContent = roundInfo.question;
    boardGrid.innerHTML = '';
    
    basePointsSum = 0;
    totalScoreEl.textContent = 0;

    const colLeft = document.createElement('div');
    colLeft.classList.add('board-column');
    
    const colRight = document.createElement('div');
    colRight.classList.add('board-column');

    roundInfo.answers.forEach((item, index) => {
        const row = document.createElement('div');
        row.classList.add('board-row');

        row.innerHTML = `
            <div class="row-closed">${index + 1}</div>
            <div class="row-open">
                <div class="answer-text">${item.text}</div>
                <div class="answer-points">${item.points}</div>
            </div>
        `;

        row.addEventListener('click', () => {
            if (!row.classList.contains('revealed')) {
                row.classList.add('revealed');
                playCorrectSound();
                basePointsSum += item.points;
                const finalCalculatedScore = basePointsSum * roundInfo.multiplier;
                totalScoreEl.textContent = finalCalculatedScore;
            }
        });

        if (index < 4) {
            colLeft.appendChild(row);
        } else {
            colRight.appendChild(row);
        }
    });

    boardGrid.appendChild(colLeft);
    boardGrid.appendChild(colRight);
}

function renderFastMoney(type) {
    const fastTitleEl = document.getElementById('fast-panel-title');
    if (fastTitleEl) fastTitleEl.textContent = type === 'fast1' ? "DINERO RÁPIDO - JUEGO 1" : "DINERO RÁPIDO - JUEGO 2";

    const fastGrid = document.getElementById('fast-grid');
    fastGrid.innerHTML = '';

    const currentGame = type === 'fast1' ? fastMoneyGame1 : fastMoneyGame2;

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        row.classList.add('fast-row');

        row.innerHTML = `
            <div class="fast-cell">
                <input type="text" class="fast-input-text p1-text" placeholder="Resp. ${i + 1}" value="${currentGame.p1[i].text}">
                <input type="text" class="fast-score-btn p1-score" placeholder="0" value="${currentGame.p1[i].points}" maxlength="3">
            </div>

            <div class="fast-cell">
                <input type="text" class="fast-input-text p2-text" placeholder="Resp. ${i + 1}" value="${currentGame.p2[i].text}">
                <input type="text" class="fast-score-btn p2-score" placeholder="0" value="${currentGame.p2[i].points}" maxlength="3">
            </div>
        `;

        const p1Text = row.querySelector('.p1-text');
        const p1Score = row.querySelector('.p1-score');

        p1Text.addEventListener('input', (e) => currentGame.p1[i].text = e.target.value.toUpperCase());
        
        p1Score.addEventListener('change', (e) => {
            const val = parseInt(e.target.value);
            currentGame.p1[i].points = e.target.value;
            if (val === 0) {
                triggerCross();
            } else if (!isNaN(val) && val > 0) {
                playCorrectSound();
            }
            calculateFastTotal();
        });

        const p2Text = row.querySelector('.p2-text');
        const p2Score = row.querySelector('.p2-score');

        p2Text.addEventListener('input', (e) => currentGame.p2[i].text = e.target.value.toUpperCase());
        
        p2Score.addEventListener('change', (e) => {
            const val = parseInt(e.target.value);
            currentGame.p2[i].points = e.target.value;
            if (val === 0) {
                triggerCross();
            } else if (!isNaN(val) && val > 0) {
                playCorrectSound();
            }
            calculateFastTotal();
        });

        fastGrid.appendChild(row);
    }

    calculateFastTotal();
}

function calculateFastTotal() {
    const currentGame = currentView === 'fast1' ? fastMoneyGame1 : fastMoneyGame2;
    let total = 0;

    currentGame.p1.forEach(item => {
        const p = parseInt(item.points);
        if (!isNaN(p)) total += p;
    });

    currentGame.p2.forEach(item => {
        const p = parseInt(item.points);
        if (!isNaN(p)) total += p;
    });

    const fastTotalEl = document.getElementById('fast-total-score');
    if (fastTotalEl) {
        fastTotalEl.textContent = total;
    }
}

let crossTimeout;
function triggerCross() {
    playWrongSound();

    if (currentView === 'round') {
        roundStrikeCount[currentRoundIndex]++;
        
        if (roundStrikeCount[currentRoundIndex] > 3) {
            roundStrikeCount[currentRoundIndex] = 1;
        }

        const strikes = roundStrikeCount[currentRoundIndex];

        crossContainer.innerHTML = '';
        for (let i = 0; i < strikes; i++) {
            const span = document.createElement('span');
            span.classList.add('neon-cross');
            span.textContent = '❌';
            crossContainer.appendChild(span);
        }

        crossOverlay.classList.add('active');
        clearTimeout(crossTimeout);
        crossTimeout = setTimeout(() => {
            crossOverlay.classList.remove('active');
        }, 1500);

    } else {
        fastCrossOverlay.classList.add('active');
        clearTimeout(crossTimeout);
        crossTimeout = setTimeout(() => {
            fastCrossOverlay.classList.remove('active');
        }, 1500);
    }
}

if (btnCross) btnCross.addEventListener('click', triggerCross);

if (btnReset) {
    btnReset.addEventListener('click', () => {
        groupScores = { 1: 0, 2: 0, 3: 0, 4: 0 };
        for(let g = 1; g <= 4; g++) {
            const el = document.getElementById(`score-group-${g}`);
            if(el) el.textContent = 0;
        }

        if (currentView === 'round') {
            roundStrikeCount[currentRoundIndex] = 0;
            renderNormalRound();
        } else if (currentView === 'fast1') {
            fastMoneyGame1.p1 = Array(5).fill().map(() => ({ text: "", points: "" }));
            fastMoneyGame1.p2 = Array(5).fill().map(() => ({ text: "", points: "" }));
            renderFastMoney('fast1');
        } else {
            fastMoneyGame2.p1 = Array(5).fill().map(() => ({ text: "", points: "" }));
            fastMoneyGame2.p2 = Array(5).fill().map(() => ({ text: "", points: "" }));
            renderFastMoney('fast2');
        }
    });
}

switchView('round', 0);
