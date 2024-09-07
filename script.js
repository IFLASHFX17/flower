const canvas = document.getElementById('gardenCanvas');
const ctx = canvas.getContext('2d');

// Ajusta el tamaño del canvas para que se adapte al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Parámetros del jardín
const sunflowerCount = 15; // Menos girasoles para mejor visualización
const sunflowerSize = 80; // Tamaño del girasol
const sunflowerPetalLength = sunflowerSize; // Longitud de los pétalos
const sunflowerPetalWidth = sunflowerSize / 2; // Ancho de los pétalos
const groundHeight = 100; // Altura del césped

// Color del césped y cielo
const grassColor = '#228B22'; // Verde césped
const skyColor = '#87CEEB'; // Azul cielo

// Función para dibujar un girasol
function drawSunflower(x, y) {
    // Tallo
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + sunflowerSize);
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'green';
    ctx.stroke();

    // Pétalos
    ctx.fillStyle = 'yellow';
    const petalCount = 12; // Número de pétalos
    const angleStep = (Math.PI * 2) / petalCount;
    for (let i = 0; i < petalCount; i++) {
        const angle = angleStep * i;
        const petalX = x + Math.cos(angle) * sunflowerSize;
        const petalY = y + Math.sin(angle) * sunflowerSize;
        ctx.beginPath();
        ctx.ellipse(petalX, petalY, sunflowerPetalWidth, sunflowerPetalLength, angle, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Centro del girasol
    ctx.beginPath();
    ctx.arc(x, y - sunflowerSize / 2, sunflowerSize / 3, 0, Math.PI * 2);
    ctx.fillStyle = 'brown';
    ctx.fill();
}

// Función para dibujar el césped
function drawGrass() {
    ctx.fillStyle = grassColor;
    ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);
}

// Función para dibujar el jardín
function drawGarden() {
    drawGrass();
    for (let i = 0; i < sunflowerCount; i++) {
        const x = Math.random() * (canvas.width - sunflowerSize);
        const y = canvas.height - groundHeight + Math.random() * (groundHeight - sunflowerSize);
        drawSunflower(x + sunflowerSize / 2, y);
    }
}

// Dibujar el jardín
drawGarden();