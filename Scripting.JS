const body = document.body;
const blackBtn = document.querySelector('.black-btn');
const whiteBtn = document.querySelector('.white-btn');
const imageCard = document.getElementById('imageCard');
const cartButton = document.getElementById('cartButton');
const form = document.querySelector('.form-card');
const colorInput = document.getElementById('colorInput');

// imágenes
const blackCar = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800";
const whiteCar = "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800";

// imagen inicial
imageCard.style.backgroundImage = `url(${blackCar})`;

/* ===== NEGRO ===== */
blackBtn.addEventListener('click', () => {
    colorInput.value = "negro";

    body.style.background = "#0a0a0a";
    body.style.color = "white";

    document.querySelector('.product-card').style.background = "#1a1a1a";
    document.querySelector('.form-card').style.background = "#1a1a1a";

    cartButton.style.background = "#333";

    imageCard.style.backgroundImage = `url(${blackCar})`;
});

/* ===== BLANCO ===== */
whiteBtn.addEventListener('click', () => {
    colorInput.value = "blanco";

    body.style.background = "#f9fafb";
    body.style.color = "#111";

    document.querySelector('.product-card').style.background = "#ffffff";
    document.querySelector('.form-card').style.background = "#ffffff";

    cartButton.style.background = "#111";
    cartButton.style.color = "#fff";

    imageCard.style.backgroundImage = `url(${whiteCar})`;
});

/* ===== CARRITO ===== */
cartButton.addEventListener('click', () => {
    cartButton.textContent = "✔ Agregado";
    cartButton.style.background = "green";

    setTimeout(() => {
        cartButton.textContent = "Agregar al carrito";
        cartButton.style.background = "#333";
    }, 2000);
});

/* ===== VALIDACIÓN ===== */
form.addEventListener('submit', (e) => {
    const nombre = form.querySelector('input[name="nombre"]').value.trim();
    const edad = form.querySelector('input[name="edad"]').value;

    if (nombre === "" || edad === "") {
        e.preventDefault();
        alert("Completa todos los campos");
    }

    if (edad <= 0) {
        e.preventDefault();
        alert("Edad inválida");
    }
});