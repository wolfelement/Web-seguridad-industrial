let total = 0;

function agregarProducto(nombre, precio) {
  const tabla = document.querySelector("#tablaCotizacion tbody");
  const fila = document.createElement("tr");

  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = nombre;

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent = "S/ " + precio;

  const celdaAccion = document.createElement("td");
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function () {
    fila.remove();
    total -= precio;
    actualizarTotal();
  };
  celdaAccion.appendChild(botonEliminar);

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaAccion);

  tabla.appendChild(fila);

  total += precio;
  actualizarTotal();
}

function actualizarTotal() {
  document.getElementById("total").textContent = "Total: S/ " + total;
}

function vaciarCarrito() {
  const tabla = document.querySelector("#tablaCotizacion tbody");
  tabla.innerHTML = "";
  total = 0;
  actualizarTotal();
}


function finalizarCompra() {
  if (total === 0) {
    alert("No hay productos para comprar.");
  } else {
    alert("✅ Compra realizada con éxito.\nTotal pagado: S/ " + total);
    vaciarCarrito();
  }
}
