~~~
const formulario = document.querySelector('form');
~~~
 Esta línea crea una constante llamada formulario y la inicializa con el primer elemento form que se encuentra en el documento HTML.
~~~
formulario.addEventListener('submit', function(evento) { ... });
~~~
 Esta línea agrega un event listener al formulario. Cuando se envía el formulario, se ejecutará la función proporcionada como segundo argumento. En este caso, la función toma el evento como argumento y previene que el formulario se envíe automáticamente. Luego, obtiene los valores de los campos del formulario, los muestra en la consola y limpia los campos del formulario.

~~~
const nombre = formulario.querySelector('#nombre').value;
~~~
 Esta línea define una constante llamada nombre y la inicializa con el valor del campo de entrada de texto con el id "nombre" en el formulario.

~~~
const email = formulario.querySelector('#email').value;
~~~
 Esta línea define una constante llamada email y la inicializa con el valor del campo de entrada de correo electrónico con el id "email" en el formulario.

~~~
const mensaje = formulario.querySelector('#mensaje').value;
~~~

 Esta línea define una constante llamada mensaje y la inicializa con el valor del campo de entrada de texto con el id "mensaje" en el formulario.

~~~
console.log(Nombre: ${nombre});
~~~

 Esta línea muestra el valor de la constante nombre en la consola del navegador.

~~~
console.log(Email: ${email});
~~~
 Esta línea muestra el valor de la constante email en la consola del navegador.

~~~
console.log(Mensaje: ${mensaje});
~~~


 Esta línea muestra el valor de la constante mensaje en la consola del navegador.


~~~
formulario.reset();
~~~

 Esta línea limpia los campos del formulario.

// Obtener todos los botones "Agregar al carrito"
const botones = document.querySelectorAll('button');

// Agregar un evento de escucha para cada botón "Agregar al carrito"
~~~
botones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Obtener el título del producto y mostrarlo en la consola
    const titulo = boton.parentNode.querySelector('h3').textContent;
    console.log(`Producto agregado al carrito: ${titulo}`);
  });
});
~~~
~~~
const botones = document.querySelectorAll('button');
~~~
 Esta línea crea una constante llamada botones y la inicializa con todos los elementos button que se encuentran en el documento HTML.

~~~
botones.forEach(function(boton) { ... });
~~~
 Esta línea itera sobre cada elemento button en la constante botones y agrega un event listener para cada uno. Cuando se hace clic en el botón, se ejecutará la función de flecha proporcionada como segundo argumento. En este caso, la función obtiene el título del producto al que pertenece el botón y lo muestra en la consola.

~~~
const titulo = boton.parentNode.querySelector('h3').textContent;
~~~

 Esta línea define una constante llamada titulo y la inicializa con el texto del elemento h3 del padre del botón actual.


~~~
console.log(Producto agregado al carrito: ${titulo});
~~~

 Esta línea muestra el mensaje "Producto agregado al carrito" junto con el valor de la constante titulo en la consola del navegador.

// Obtener el elemento del slider
~~~
const slider = document.querySelector('.slider');
~~~
// Obtener todos los elementos de imagen en el slider
~~~
const slides = slider.querySelectorAll('img');
~~~
// Establecer el índice de la imagen actual en 0

~~~
let currentSlide = 0;
~~~

// Función para mostrar la diapositiva siguiente
~~~
function nextSlide() {
  // Ocultar la diapositiva actual
  slides[currentSlide].classList.remove

  ~~~