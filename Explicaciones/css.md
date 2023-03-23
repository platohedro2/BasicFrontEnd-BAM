
~~~

/* Estilos para el encabezado */
~~~
Este es un comentario que indica que los estilos que siguen a continuación son para el encabezado.
~~~
header { ... }
~~~

Este selector aplica los estilos a todos los elementos header en el documento. Los estilos incluyen un color de fondo, color de texto y un relleno de 10 píxeles.
~~~
header h1 { ... }
~~~
 Este selector aplica los estilos al elemento h1 dentro de un elemento header.

~~~
header nav ul { ... }
~~~
 Este selector aplica los estilos al elemento ul dentro de un elemento nav dentro de un elemento header.

~~~
header nav li { ... }
~~~

 Este selector aplica los estilos al elemento li dentro de un elemento ul dentro de un elemento nav dentro de un elemento header.
~~~
header nav a { ... }
~~~

 Este selector aplica los estilos al elemento a dentro de un elemento li dentro de un elemento ul dentro de un elemento nav dentro de un elemento header.

~~~
/* Estilos para el formulario de contacto */
~~~

Este es un comentario que indica que los estilos que siguen a continuación son para el formulario de contacto.

~~~
form { ... }
~~~ 

Este selector aplica los estilos al elemento form en el documento. Los estilos incluyen un margen horizontal automático y una anchura máxima de 600 píxeles.

~~~
form label { ... }
~~~

 Este selector aplica los estilos a los elementos label dentro de un elemento form. Los estilos incluyen una pantalla de bloque y un margen inferior de 5 píxeles.

~~~
form input, form textarea { ... }
~~~ 

Este selector aplica los estilos a los elementos input y textarea dentro de un elemento form. Los estilos incluyen un borde de 1 píxel sólido de color gris claro, un relleno de 5 píxeles y una anchura del 100% del contenedor.

~~~
form input[type="submit"] { ... }
~~~

 Este selector aplica los estilos al elemento input de tipo submit dentro de un elemento




~~~
#counter {
	font-size: 144px;
	margin-top: 50px;
	text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #004cff, 0 0 70px #1100ff, 0 0 80px #002aff, 0 0 100px #002aff;
}

~~~
* #counter: Este selector CSS aplica los estilos a un elemento con el id "counter".

* font-size: 144px;: Este estilo establece el tamaño de fuente a 144px.

* margin-top: 50px;: Este estilo establece un margen superior de 50px.

* text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #004cff, 0 0 70px #1100ff, 0 0 80px #002aff, 0 0 100px #002aff;: Este estilo establece una sombra de texto con varios niveles de profundidad y colores.

~~~

.button {
	display: inline-block;
	padding: 10px 20px;
	margin: 20px;
	font-size: 24px;
	border: 2px solid #fff;
	border-radius: 50px;
	box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #186d31, 0 0 70px #01f452, 0 0 80px #04ff00, 0 0 100px #00ff2a;
	background-color: #fff;
	color: #000;
	text-shadow: 0 0 10px #00ff7b, 0 0 20px #23db0a, 0 0 30px #00ff1e, 0 0 40px #00f010;
	cursor: pointer;
}

~~~

.button: Este selector CSS aplica los estilos a un elemento con la clase "button".

display: inline-block;: Este estilo establece la visualización del elemento como un bloque en línea.

padding: 10px 20px;: Este estilo establece el relleno interno de 10px en la parte superior e inferior y 20px en los lados izquierdo y derecho.

margin: 20px;: Este estilo establece un margen de 20px en todos los lados del elemento.

font-size: 24px;: Este estilo establece el tamaño de fuente a 24px.

border: 2px solid #fff;: Este estilo establece un borde sólido de 2px de ancho con un color blanco (#fff).

border-radius: 50px;: Este estilo establece un radio de borde de 50px.

box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #186d31, 0 0 70px #01f452, 0 0 80px #04ff00, 0 0 100px #00ff2a;: Este estilo establece una sombra de caja con varios niveles de profundidad y colores.

background-color: #fff;: Este estilo establece el color de fondo del elemento en blanco (#fff).

color: #000;: Este estilo establece el color de texto en negro (#000).

text-shadow: 0 0 10px #00ff7b, 0 0 20px #23db0a, 0 0 30px #00ff1e, 0 0 40px #00f010;: Este estilo establece una sombra de texto con varios niveles de profundidad y colores.

cursor: pointer;: Este estilo establece el cursor del mouse como un puntero para indicar que el elemento es interactivo.

~~~
.button:hover {
	background-color: #ff00de;
	color: #fff;
	text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0


70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de;: Este estilo establece una sombra de texto con varios niveles de profundidad y colores cuando el cursor se coloca encima del botón.

box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de;: Este estilo establece una sombra de caja con varios niveles de profundidad y colores cuando el cursor se coloca encima del botón.

.limite-alcanzado {
  color: red;
}
.limite-alcanzado: Este selector CSS aplica los estilos a un elemento con la clase "limite-alcanzado".

color: red;: Este estilo establece el color de texto en rojo (#ff0000).

.nueva{
    text-align: center;
    background-color: #908989;
}
.nueva: Este selector CSS aplica los estilos a un elemento con la clase "nueva".

text-align: center;: Este estilo establece la alineación del texto en el centro.

background-color: #908989;: Este estilo establece el color de fondo en gris (#908989).