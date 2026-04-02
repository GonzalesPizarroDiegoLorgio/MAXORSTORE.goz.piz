function addToCart() {
  const name = document.getElementById('product-name').textContent;
  const price = document.getElementById('product-price').textContent;

  const item = {
    name: name,
    price: price,
    quantity: 1
  };

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Verifica si ya está en el carrito
  const existing = cart.find(p => p.name === item.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(item);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`"${item.name}" se agregó al carrito.`);
}

function buyNow() {
  alert("Gracias por tu compra. Redirigiendo a la pasarela de pago...");

  // Aquí puedes redirigir a PayPal o MercadoPago:
  // window.location.href = "https://www.paypal.com/paylink/tu-enlace";
}

// Arreglo de rutas de imagen local
const images = [
  "imagenes/producto-juguetes/monopolio.png",
  "imagenes/producto-juguetes/monopoly_imgen2.png",
  "imagenes/producto-juguetes/monopoly_imgen3.png"
];

let currentIndex = 0;

function showImage(index) {
  const carouselImage = document.getElementById('carousel-image');
  if (carouselImage) {
    carouselImage.src = images[index];
  }
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Carga la primera imagen al iniciar
document.addEventListener("DOMContentLoaded", () => {
  showImage(currentIndex);
});
