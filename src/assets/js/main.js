// Function to calculate the duration of the animation in milliseconds
function calculateAnimationDuration(framesPerSecond) {
    // Calculate the duration in milliseconds directly from frames per second
    return 1000 / framesPerSecond;
}

// Function to obtain the aspect ratio of the client browser's viewport
function getAspectRatio() {
    // Get the width and height of the viewport
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Calculate the aspect ratio by dividing width by height
    const aspectRatio = viewportWidth / viewportHeight;
    
    // Format the aspect ratio according to the cinematographic industry standard
    const standardFormat = `${viewportWidth} / ${viewportHeight}`;
    
    // Return the aspect ratio in the standard format
    return standardFormat;
}

// Golden Ratio Power Function
function goldenRatioPower(power) {
    const ratio = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--golden-ratio'));
    return Math.pow(ratio, power);
}


// Function that returns a Promise for the FPS
const getFPS = () =>
new Promise(resolve =>
requestAnimationFrame(t1 => 
requestAnimationFrame(t2 => 
resolve(1000 / (t2 - t1))
)
)
)

function randomGenCSS() {
    const noiseInt = getRandomInt(-3, 3);
    const noiseOut = getRandomInt(-1, 3);
    const shaking25y = randomDecimal(-0.3, 0.2);
    const shaking50y = randomDecimal(-0.3, 0.1);
    const shaking75y = randomDecimal(-0.2, 0.1);
    const shaking25x = randomDecimal(-0.5, 0.3);
    const shaking75x = randomDecimal(-0.3, 0.5);
    const opacitylighttitle = randomDecimal(0.89, 0.99);
    
    // Agrupa las actualizaciones y realiza una sola manipulación del DOM
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--noise-in', `${-noiseInt}px`);
    rootStyle.setProperty('--noise-out', `${-noiseOut}px`);
    rootStyle.setProperty('--shaking-25y', `${shaking25y}px`);
    rootStyle.setProperty('--shaking-50y', `${shaking50y}px`);
    rootStyle.setProperty('--shaking-75y', `${shaking75y}px`);
    rootStyle.setProperty('--shaking-25x', `${shaking25x}px`);
    rootStyle.setProperty('--shaking-75x', `${shaking75x}px`);
    rootStyle.setProperty('--opacity-light-title', `${opacitylighttitle}`);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDecimal(min, max) {
    return Math.random() * (max - min) + min;
}

// Utilizar requestAnimationFrame para optimizar las actualizaciones y mejorar la fluidez
function animate() {
    randomGenCSS();
    requestAnimationFrame(animate);
}

// Iniciar la animación
animate();



function updateAspectRatio() {
    const root = document.documentElement;
    const aspectRatio = window.innerWidth / window.innerHeight;
    console.log("Aspect Ratio:"+ aspectRatio)
    root.style.setProperty('--aspect-ratio', aspectRatio);
}

updateAspectRatio();
window.addEventListener('resize', updateAspectRatio);
window.addEventListener('load', updateAspectRatio);


function calculateTextSizes(baseFontSize, ratio, steps) {
    let sizes = [];
    let currentSize = baseFontSize;
    
    // Calcular tamaños ascendentes
    for (let i = 0; i < steps; i++) {
        sizes.push(currentSize);
        currentSize *= ratio;
    }
    
    // Calcular tamaños descendentes
    currentSize = baseFontSize / ratio;
    for (let i = 0; i < steps; i++) {
        sizes.unshift(currentSize);
        currentSize /= ratio;
    }
    
    console.log("H1 SIZE:"+ sizes[1]+ 'rem')
    // Actualizar variables CSS
    document.documentElement.style.setProperty('--h1-size', sizes[2] + 'rem');
    document.documentElement.style.setProperty('--h2-size', sizes[1] + 'rem');
    document.documentElement.style.setProperty('--h3-size', sizes[3] + 'rem');
    document.documentElement.style.setProperty('--h4-size', sizes[4] + 'rem');
    document.documentElement.style.setProperty('--h5-size', sizes[5] + 'rem');
    document.documentElement.style.setProperty('--h6-size', sizes[6] + 'rem');
    
    // Agrega las demás variables según sea necesario
    
}

// Obtener variables CSS
const baseFontSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--base-font-size'));
const goldenRatio = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--golden-ratio'));

// Llamar a la función para calcular los tamaños de texto
calculateTextSizes(baseFontSize, goldenRatio, 6); // Cambia el número de pasos según sea necesario

