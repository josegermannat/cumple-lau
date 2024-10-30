const preguntasQuiz = [
    { frase: "Chaque jour_____beau", respuesta: ["est"] },
    { frase: "_____UH HAHA", respuesta: ["tiburonsin", "Tiburonsin"] },
    { frase: "laura es_____ se realista", respuesta: ["enana","linda","hermosa","perfecta","Enana","Linda","Hermosa","Perfecta"] },
    { frase: "El apodo q mas le gusta a German_____muy dificil", respuesta: ["chihui","Chihui"] },
    { frase: "bailarias conmigo de nuevo?_____ ", respuesta: ["si","Si"] },
    { frase: "Me contas un cuento?_____  aksjd se aprovechaba", respuesta: ["si","Si"] }

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
       <h1>Galería de Recuerdos</h1>

<section class="seccion-galeria">
    <h2>Tus Obras De Arte</h2>
    <div class="galeria">
        <div class="obra" >
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2016.10.45.jpeg?raw=true" alt="Descripción de la imagen 1" loading="lazy">
            <div class="descripcion">Una super serpiente q va hacia la luna JAJ</div>
        </div>
        <div class="obra" >
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2016.10.37.jpeg?raw=true" alt="Descripción de la imagen 2">
            <div class="descripcion">Un mapache super mega tierno</div>
        </div>
         <div class="obra" >
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2016.09.43.jpeg?raw=true" alt="Descripción de la imagen 3">
            <div class="descripcion">dijiste q lo querias compartir con alguien...</div>
        </div>
         <div class="obra" >
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2016.00.59.jpeg?raw=true" alt="Descripción de la imagen 1">
            <div class="descripcion">Mi dibujo favorito</div>
        </div>
         <div class="obra">
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2016.00.36.jpeg?raw=true" alt="Descripción de la imagen 1">
            <div class="descripcion">EL PRIMER DIBUJO Q ME MANDASTE AAA Q FINO</div>
        </div>
    </div>
</section>

<section class="seccion-galeria">
    <h2>Bonitos recuerdos a tu lado <3</h2>
    <div class="galeria">
        <div class="obra" >
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2015.51.54.jpeg?raw=true" alt="Descripción de la imagen 3">
            <div class="descripcion">la noche mas magica de mi vida</div>
        </div>
        <div class="obra">
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2015.54.20.jpeg?raw=true" alt="Descripción de la imagen 4">
            <div class="descripcion">Mira q fuerte...Mi gymcrush kasjd</div>
        </div>

         <div class="obra">
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2016.05.41.jpeg?raw=true" alt="Descripción de la imagen 5">
            <div class="descripcion">Nuestra primera salida</div>
        </div>
         
        <div class="obra">
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2015.55.21.jpeg?raw=true" alt="Descripción de la imagen 6">
            <div class="descripcion">KSADJAKSD Q GENIAL</div>
        </div>
          <div class="obra">
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/eff7815b-71dc-4b57-8333-b8653d1618c8.jpg?raw=true" alt="Descripción de la imagen 6">
            <div class="descripcion">q linda</div>
        </div>
        
    </div>
</section>

<section class="seccion-galeria">
    <h2>La mas bonita 💙</h2>
    <div class="galeria">
        <div class="obra" >
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2015.57.39.jpeg?raw=true" alt="Descripción de la imagen 5">
            <div class="descripcion">te mataste ese dia eh...pobrecita</div>
        </div>
        <div class="obra">
            <img src="https://github.com/josegermannat/cumple-lau/blob/main/WhatsApp%20Image%202024-10-27%20at%2016.02.13.jpeg?raw=true" alt="Descripción de la imagen 6">
            <div class="descripcion">esque la profe... kkjsadk</div>
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
        retroalimentacion.innerText = "akasjd re mamerta 💙 ";
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
        <h1>Felicidades<h1>
        <div class="caja-sorpresa">
            <a href=" https://josegermannat.github.io/flores-amarillas/" class="enlace-sorpresa">¡Tu sorpresa está presionando aquí! 💙</a>
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
