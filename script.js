const preguntasQuiz = [
    { frase: "Eres como una _____ porque traes alegría a mi vida.", respuesta: ["estrella"] },
    { frase: "Siempre iluminas mi _____ con tu sonrisa.", respuesta: ["día", "dia"] },
    { frase: "Contigo, cada momento es una _____ inolvidable.", respuesta: ["aventura"] },
    { frase: "Tu risa es la _____ que alegra mis días.", respuesta: ["melodía"] },
    { frase: "Eres el _____ de mi corazón.", respuesta: ["amor"] }
];

let preguntaActual = 0;
let respuestasCompletadas = [];

function mostrarSeccion(idSeccion) {
    const contenedorJuego = document.getElementById('contenedorJuego');
    contenedorJuego.innerHTML = '';

    switch (idSeccion) {
        case 'galeriaRecuerdos':
            mostrarGaleriaRecuerdos();
            break;

        case 'quiz':
            mostrarQuiz();
            break;

        case "mostrarTeAmos":
            mostrarTeAmos();
            break;
    }

    contenedorJuego.classList.remove('oculto');
    fadeIn(contenedorJuego);
}

function mostrarGaleriaRecuerdos() {
    const contenedorJuego = document.getElementById('contenedorJuego');
    contenedorJuego.innerHTML = `
       <h2>Galería de Recuerdos</h2>

<section class="seccion-galeria">
    <h3>Tus Obras De Arte</h3>
    <div class="galeria">
        <div class="obra" onclick="mostrarFoto('link-imagen1', 'Descripción 1 de obra')">
            <img src="https://dochub.com/german23-03-09/ALzmZB7wM14pJLewX8J560/whatsapp-image-2024-10-27-at-16-00-36-jpeg" alt="Descripción de la imagen 1">
            <div class="descripcion">Descripción 1 de obra</div>
        </div>
        <div class="obra" onclick="mostrarFoto('link-imagen2', 'Descripción 2 de obra')">
            <img src="https://dochub.com/german23-03-09/dbnaAMqK9mqbNgXKGNXJm0/whatsapp-image-2024-10-27-at-16-00-59-jpeg?gdiExists=1C6JBuxPkjW76hd36wCosa40SKFvu8tum" alt="Descripción de la imagen 2">
            <div class="descripcion">Descripción 2 de obra</div>
        </div>
         <div class="obra" onclick="mostrarFoto('link-imagen1', 'Descripción 3 de obra')">
            <img src="https://dochub.com/german23-03-09/xP5LzojKa8OEbrGR7ZDlO3/whatsapp-image-2024-10-27-at-16-09-43-jpeg" alt="Descripción de la imagen 3">
            <div class="descripcion">Descripción 1 de obra</div>
        </div>
         <div class="obra" onclick="mostrarFoto('link-imagen1', 'Descripción 1 de obra')">
            <img src="https://dochub.com/german23-03-09/orO7lgeVL0vZN2lVjMP2p5/whatsapp-image-2024-10-27-at-16-10-37-jpeg" alt="Descripción de la imagen 1">
            <div class="descripcion">Descripción 1 de obra</div>
        </div>
         <div class="obra" onclick="mostrarFoto('link-imagen1', 'Descripción 1 de obra')">
            <img src="https://dochub.com/german23-03-09/qd0E4NeKgrOP1JaRJ9LYyj/whatsapp-image-2024-10-27-at-16-10-45-jpeg" alt="Descripción de la imagen 1">
            <div class="descripcion">Descripción 1 de obra</div>
        </div>
    </div>
</section>

<section class="seccion-galeria">
    <h3>Nuestras Salidas</h3>
    <div class="galeria">
        <div class="obra" onclick="mostrarFoto('link-imagen3', 'Descripción 1 de salida')">
            <img src="link-imagen3" alt="Descripción de la imagen 3">
            <div class="descripcion">Descripción 1 de salida</div>
        </div>
        <div class="obra" onclick="mostrarFoto('link-imagen4', 'Descripción 2 de salida')">
            <img src="link-imagen4" alt="Descripción de la imagen 4">
            <div class="descripcion">Descripción 2 de salida</div>
        </div>
    </div>
</section>

<section class="seccion-galeria">
    <h3>Otros Recuerdos</h3>
    <div class="galeria">
        <div class="obra" onclick="mostrarFoto('link-imagen5', 'Descripción 1 de recuerdo')">
            <img src="link-imagen5" alt="Descripción de la imagen 5">
            <div class="descripcion">Descripción 1 de recuerdo</div>
        </div>
        <div class="obra" onclick="mostrarFoto('link-imagen6', 'Descripción 2 de recuerdo')">
            <img src="link-imagen6" alt="Descripción de la imagen 6">
            <div class="descripcion">Descripción 2 de recuerdo</div>
        </div>
    </div>
</section>

<button class="boton" onclick="volver()">Volver</button>
    `;
}


function mostrarQuiz() {
    const contenedorJuego = document.getElementById('contenedorJuego');
    contenedorJuego.innerHTML = `
        <h1>Para que te diviertas... y para ver qué tan buena memoria tienes</h1>
        <p id="frase">${preguntasQuiz[preguntaActual].frase}</p>
        <input type="text" class="input" id="respuesta" placeholder="Escribe tu respuesta aquí">
        <button class="boton" onclick="verificarRespuesta()">Enviar</button>
        <div id="retroalimentacion"></div>
        <div id="fraseCompletada"></div>
        <button class="boton" onclick="volver()">Volver</button>`;
        
    fadeIn(document.getElementById('frase')); // Animación de la frase
}

function verificarRespuesta() {
    const respuesta = document.getElementById('respuesta').value.trim().toLowerCase();
    const respuestasCorrectas = preguntasQuiz[preguntaActual].respuesta.map(a => a.toLowerCase());
    const retroalimentacion = document.getElementById('retroalimentacion');
    const inputRespuesta = document.getElementById('respuesta');

    if (respuestasCorrectas.includes(respuesta)) {
        respuestasCompletadas.push(respuesta);
        preguntaActual++;

        if (preguntaActual < preguntasQuiz.length) {
            setTimeout(() => mostrarQuiz(), 1500); 
        } else {
            mostrarFraseCompletada();
        }
    } else {
        retroalimentacion.innerText = "Respuesta incorrecta. Intenta otra vez.";
        // Cambiar el borde y el placeholder en caso de error
        inputRespuesta.classList.add('error');
        inputRespuesta.placeholder = "Respuesta incorrecta. Intenta otra vez.";

        setTimeout(() => {
            inputRespuesta.classList.remove('error');
            inputRespuesta.placeholder = "Escribe tu respuesta aquí";
        }, 2000);
    }
}


function mostrarFraseCompletada() {
    const fraseCompletada = document.getElementById('fraseCompletada');
    fraseCompletada.innerHTML = `
        <div class="caja-sorpresa">
            <a href="tu-pagina.html" class="enlace-sorpresa">¡Tu sorpresa está presionando aquí! 💙</a>
        </div>
    `;

    // Animación para el enlace
    const enlaceSorpresa = document.querySelector('.enlace-sorpresa');
    enlaceSorpresa.classList.add('fadeIn'); // Asegúrate de que esta clase esté definida en tu CSS para la animación
}

function volver() {
    const contenedorJuego = document.getElementById('contenedorJuego');
    contenedorJuego.classList.add('oculto');
    preguntaActual = 0; 
    respuestasCompletadas = []; 
}

function fadeIn(element) {
    element.style.opacity = 0; 
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

function mostrarTeAmos() {
    const contenedorJuego = document.getElementById('contenedorJuego');
    contenedorJuego.innerHTML = ''; // Limpiar el contenedor

    const idiomas = {
        español: "Te amo",
        inglés: "I love you",
        francés: "Je t'aime",
        italiano: "Ti amo",
        alemán: "Ich liebe dich",
        portugués: "Eu te amo",
        ruso: "Я тебя люблю",
        árabe: "أحبك",
        chino: "我爱你",
        japonés: "愛してる",
        coreano: "사랑해요",
        griego: "Σ' αγαπώ",
        hebreo: "אני אוהב אותך",
        turco: "Seni seviyorum",
        húngaro: "Szeretlek",
        checo: "Miluji tě",
        sueco: "Jag älskar dig",
        danés: "Jeg elsker dig",
        finlandés: "Rakastan sinua",
        tailandés: "ฉันรักคุณ",           
        malayo: "Saya cinta padamu",
        vietnamita: "Anh yêu em",
        filipino: "Mahal kita",
        búlgaro: "Обичам те",
        eslovaco: "Ľúbim ťa",
        esloveno: "Ljubim te",
        letón: "Es tevi miilu",
        lituano: "Aš tave myliu",
        islandés: "Ég elska þig",
        ucraniano: "Я тебе люблю",
        serbio: "Волим те",
        croata: "Volim te",
        montenegrino: "Volim te",
        bosnio: "Volim te",
        macedonio:"Те сакам",
        albanés: "Të dua",
        maltés: "Inhobbok",
        kurdo: "Ez hej te dikim",
        persa: "دوستت دارم",
        tamil: "நான் உன்னை காதலிக்கிறேன்",
        telugu: "నేను నిన్ను ప్రేమిస్తున్నాను",
        kannada: "ನಾನು ನಿನ್ನ ಪ್ರೀತಿಸುತ್ತಿದ್ದೇನೆ",
        bengalí: "আমি তোমায় ভালবাসি",
        birmano: "ငါမင်းကိုချစ်တယ်",
        tagalo: "Mahal kita",
        lao: "ຂໍອະໄພ",
        georgiano: "მიყვარხარ",
        armenio: "Ես սիրում եմ քեզ",
        uzbeko: "Men seni sevaman",
        kazajo: "Мен сені сүйемін"
    };

    let delay = 0;
    let frasesPorColumna = 5;
    let columnaActual = document.createElement("div");
    columnaActual.className = "columna";
    contenedorJuego.appendChild(columnaActual);

    Object.values(idiomas).forEach((frase, index) => {
        if (index > 0 && index % frasesPorColumna === 0) {
            // Crear una nueva columna después de cada 5 frases
            columnaActual = document.createElement("div");
            columnaActual.className = "columna";
            contenedorJuego.appendChild(columnaActual);
        }

        setTimeout(() => {
            const fraseElemento = document.createElement("p");
            fraseElemento.className = "frase-animada";
            fraseElemento.style.opacity = 0; // Iniciar con opacidad 0
            fraseElemento.textContent = frase;

            fadeIn(fraseElemento);
            columnaActual.appendChild(fraseElemento);
        }, delay);

        delay += 200;
    });
}
