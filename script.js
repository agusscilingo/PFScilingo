let nombre = prompt('Hola, coloque su nombre por favor');
let confirmar = confirm('Bienvedidx ' + nombre);

let edad = ('25');
console.log(edad);

let categoria = ('Buzos');
switch (categoria) {
    case 'Remeras':
        alert ('Elegiste la sección remeras')
        break;
    case 'Buzos':
        alert('Elegiste la sección buzos')
        break;
    case 'Tazas':
        alert('Elegiste la sección tazas')
        break;
    case 'Gorrxs':
        alert('Elegiste la sección gorrxs')
        break;
}

 function carrito (){
    const rem= prompt("¿Cuántos buzos negros quieres llevar?")
    const remdos=prompt('¿Cuántos buzos blancos quieres llevar?')
    return total= alert('Se han añadido al carrito ' + rem + ' buzos negros y ' + remdos + ' buzos blancos')
 }
 console.log(carrito())