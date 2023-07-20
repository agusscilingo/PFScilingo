const carritocolor = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito</h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalbutton);

    //carritoviews

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carrito.className = "modal-content";
        carritoContent.innerHTML = `
         <img src="${product.img}">
         <h3>${product.nombre}</h3>
         <p>${product.precio}$</p>
         <span class="restar"> - </span>
         <p>Cantidad: ${product.cantidad}</p>
         <span class="sumar"> + </span>
         <p>Total: ${product.cantidad * product.precio}</p>
         <span class="borrar-producto"> ❌ </span>
         
        `;

        modalContainer.append(carritoContent);

        //restar

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--;
            }
            saveLocal();
            carritocolor();
        });

        //sumar

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            carritocolor();
        });




        //borrarproduct

        let eliminar = carritoContent.querySelector(".borrar-producto");

        eliminar.addEventListener("click", () => {
            eliminarProductos(product.id);
        });

    
    });

    //total compra

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalcompra = document.createElement("div")
    totalcompra.className = "total-content"
    totalcompra.innerHTML = `Total a pagar: $ ${total}`;
    modalContainer.append(totalcompra);


    saveLocal();

}


verCarrito.addEventListener("click", carritocolor);

const eliminarProductos = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    carritocolor();
};

//contador carrito

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

//cantidades carrito




