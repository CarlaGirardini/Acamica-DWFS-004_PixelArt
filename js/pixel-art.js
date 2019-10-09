// Declaración de variables globales

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
var colorPersonalizado = document.getElementById('color-personalizado'); // El que se elige con la rueda de color
var clickMouse = false;
var botonBorrar = document.getElementById('borrar');
var imgBatman = document.getElementById('batman');
var imgWonder = document.getElementById('wonder');
var imgFlash = document.getElementById('flash');
var imgInvisible = document.getElementById('invisible');

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

function paletaDeColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    var nuevoColor = document.createElement('div');
    paleta.appendChild(nuevoColor);
    nuevoColor.style.backgroundColor = nombreColores[i];
    nuevoColor.className = 'color-paleta';
  }
}
paletaDeColores();

function crearPixeles() {
  let contador = 1;
  while (contador <= 1750) {
    var nuevoPixel = document.createElement('div');
    nuevoPixel.className = 'pixel-grilla';
    grillaPixeles.appendChild(nuevoPixel);
    contador++;
  }
}
crearPixeles();

function modificarBackground(e) {
  let colorFondo = e.target.style.backgroundColor;
  indicadorDeColor.style.backgroundColor = colorFondo;
}
paleta.addEventListener('click', modificarBackground);

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    let colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;
  })
);

// Los tres eventos que siguen son para ver si el mouse está clickeado o no y pintar cuando lo está

grillaPixeles.addEventListener('mousedown', (e) => {
  clickMouse = true;
  pintarPixeles(e); // Llamando a la función acá, puedo pintar con un click
});

grillaPixeles.addEventListener('mouseover', (e) => {
  if (clickMouse) {
    pintarPixeles(e);
  }
});

grillaPixeles.addEventListener('mouseup', (e) => {
  clickMouse = false;
});

function pintarPixeles(e) {
  if (clickMouse) {
    e.target.style.backgroundColor = indicadorDeColor.style.backgroundColor;
  }
}

// La siguiente función es para el botón 'borrar'

function borrarTodo() {
  let $pixelesGrilla = $('.pixel-grilla');
  $pixelesGrilla.animate({ 'background-color': 'white' }, 1500);
}

botonBorrar.addEventListener('click', borrarTodo);

// Los siguientes eventos son para cargar los superhéroes


imgBatman.addEventListener('click', () => cargarSuperheroe(batman));
imgWonder.addEventListener('click', () => cargarSuperheroe(wonder));
imgFlash.addEventListener('click', () => cargarSuperheroe(flash));
imgInvisible.addEventListener('click', () => cargarSuperheroe(invisible));

// Guardar imagen

var botonGuardar = document.getElementById('guardar');

botonGuardar.addEventListener('click', guardarPixelArt);