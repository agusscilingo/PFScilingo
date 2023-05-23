let nombre = prompt('Hola, coloque su nombre por favor');
let confirmar = confirm('Bienvedidx ' + nombre);

//algoritmo

let categoria = prompt('¿Qué categoría quieres escoger?: \n Remeras \n Buzos \n Tazas \n Gorrxs');
switch (categoria) {
    case 'Remeras':
        alert('Elegiste la sección Remeras')
        break;
    case 'Buzos':
        alert('Elegiste la sección Buzos')
        break;
    case 'Tazas':
        alert('Elegiste la sección Tazas')
        break;
    case 'Gorrxs':
        alert('Elegiste la sección Gorrxs')
        break;
    default:
        alert('No escogiste ninguna categoría')
        break;
}

//funcion

function carrito() {
    const rem = prompt("¿Cuántos artículos de color negro quieres llevar?");
    const remdos = prompt('¿Cuántos artículos de color blanco quieres llevar?');
    return ('Se han añadido al carrito ' + rem + ' articulos negros y ' + remdos + ' articulos blancos');
}
console.log(carrito())