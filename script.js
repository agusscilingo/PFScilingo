class Producto {
    constructor(nombre, sku, linea, precio, stock, descripcion) {
        this.nombre = nombre;
        this.sku = sku;
        this.linea = linea;
        this.precio = precio;
        this.stock = stock;
        this.descripcion = descripcion;
    }
}

//array de productos dinamico

//array de productos base

const productosBase = [
    { nombre: "Remera Tokio", sku: "1001", linea: "Remeras", precio: 8500, descripcion: "Remera 100% algodón overzise" },
    { nombre: "Remera Japan", sku: "1002", linea: "Remeras", precio: 8500, descripcion: "Remera 100% algodón overzise" },
    { nombre: "Remera Hawaii", sku: "1002", linea: "Remeras", precio: 8500, descripcion: "Remera 100% algodón overzise" },
    { nombre: "Remera Asia", sku: "1002", linea: "Remeras", precio: 8500, descripcion: "Remera 100% algodón overzise" },
    { nombre: "Remera Vietnam", sku: "1002", linea: "Remeras", precio: 8500, descripcion: "Remera 100% algodón overzise" },
    { nombre: "Remera Egipto", sku: "1002", linea: "Remeras", precio: 8500, descripcion: "Remera 100% algodón overzise" },
]

//guardar cosas en localstorage

const productos = JSON.parse(localStorage.getItem("productos")) || []
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const pedidos = JSON.parse(localStorage.getItem("pedidos")) || []

// agregar productos

const agregarProducto = ({ nombre, sku, linea, precio, stock, descripcion }) => {

    if (productos.some(prod => prod.sku === sku)) {
        console.warn("Ya existe un producto con ese sku")
    } else {
        const productoNuevo = new Producto(nombre, sku, linea, precio, stock, descripcion)
        productos.push(productoNuevo)
        //guarda el nuevo array de productos
        localStorage.setItem('productos', JSON.stringify(productos))
    }
}

const productosDExistentes = () => {
    if (productos.length === 0) {
        productosBase.forEach(prod => {
            let dato = JSON.parse(JSON.stringify(prod))
            agregarProducto(dato)
        }
        )
    }
}

const totalCarrito = () => {
    let total = carrito.reduce((acumulador, { precio, cantidad }) => {
        return acumulador + (precio * cantidad)
    }, 0)
    return total
}
const totalCarritoR = () => {
    const carritoTotal = document.getElementById("carritoTotal")
    carritoTotal.innerHTML = `Precio total: $ ${totalCarrito()}`
}

const agregarCarrito = (objetoCarrito) => {
    carrito.push(objetoCarrito)
    totalCarritoR()
}
