// Obtener el formulario de contacto
const formulario = document.querySelector('form');

// Agregar un evento de escucha para enviar el formulario
formulario.addEventListener('submit', function(evento) {
  // Prevenir que el formulario se envíe automáticamente
  evento.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = formulario.querySelector('#nombre').value;
  const email = formulario.querySelector('#email').value;
  const mensaje = formulario.querySelector('#mensaje').value;

  // Mostrar los valores del formulario en la consola
  console.log(`Nombre: ${nombre}`);
  console.log(`Email: ${email}`);
  console.log(`Mensaje: ${mensaje}`);

  // Limpiar los campos del formulario
  formulario.reset();
});

// Obtener todos los botones "Agregar al carrito"
const botones = document.querySelectorAll('button');

// Agregar un evento de escucha para cada botón "Agregar al carrito"
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Obtener el título del producto y mostrarlo en la consola
    const titulo = boton.parentNode.querySelector('h3').textContent;
    console.log(`Producto agregado al carrito: ${titulo}`);
  });
});

// Obtener el elemento del slider
const slider = document.querySelector('.slider');

// Obtener todos los elementos de imagen en el slider
const slides = slider.querySelectorAll('img');

// Establecer el índice de la imagen actual en 0
let currentSlide = 0;

// Función para mostrar la diapositiva siguiente
function nextSlide() {
  // Ocultar la diapositiva actual
  slides[currentSlide].classList.remove('active');

  // Avanzar el índice de la diapositiva actual
  currentSlide++;

  // Si el índice es mayor que el número de diapositivas, volver al inicio
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Mostrar la siguiente diapositiva
  slides[currentSlide].classList.add('active');
}

// Establecer un intervalo de tiempo para cambiar las diapositivas automáticamente cada 5 segundos
setInterval(nextSlide, 5000);



var count = 0;
var counter = document.getElementById("counter");

function increment() {
  count++;
  counter.innerHTML = count;
  changeColor();
}

function decrement() {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
    changeColor();
  }
}

function changeColor() {
  var colors = ["#ff00de", "#00ffea", "#ff00ff", "#00ff00", "#ffff00", "#00ffff", "#ff0000", "#0000ff"];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  counter.style.color = randomColor;
}