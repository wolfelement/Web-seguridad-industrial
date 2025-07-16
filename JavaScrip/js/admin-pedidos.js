// Cargar pedidos al cargar la página
window.onload = function () {
  mostrarPedidos();
};

function agregarPedido() {
  const codigo = document.getElementById("codigo").value.trim();
  const cliente = document.getElementById("cliente").value.trim();
  const estado = document.getElementById("estado").value;

  if (codigo === "" || cliente === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  // Verificar si el código ya existe
  const existe = pedidos.some(p => p.codigo === codigo);
  if (existe) {
    alert("El código ya existe. Use otro.");
    return;
  }

  const nuevoPedido = {
    codigo,
    cliente,
    estado
  };

  pedidos.push(nuevoPedido);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));

  mostrarPedidos();
  limpiarCampos();
}

function limpiarCampos() {
  document.getElementById("codigo").value = "";
  document.getElementById("cliente").value = "";
  document.getElementById("estado").selectedIndex = 0;
}

function mostrarPedidos() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  const tabla = document.getElementById("tablaPedidos");
  tabla.innerHTML = "";

  pedidos.forEach((pedido, index) => {
    const fila = `
      <tr>
        <td>${pedido.codigo}</td>
        <td>${pedido.cliente}</td>
        <td>—</td>
        <td>
          <select onchange="actualizarEstado(${index}, this.value)">
            <option value="Pendiente" ${pedido.estado === "Pendiente" ? "selected" : ""}>Pendiente</option>
            <option value="En Proceso" ${pedido.estado === "En Proceso" ? "selected" : ""}>En Proceso</option>
            <option value="Enviado" ${pedido.estado === "Enviado" ? "selected" : ""}>Enviado</option>
            <option value="Entregado" ${pedido.estado === "Entregado" ? "selected" : ""}>Entregado</option>
          </select>
        </td>
        <td>
          <button onclick="eliminarPedido(${index})">Eliminar</button>
        </td>
      </tr>
    `;
    tabla.innerHTML += fila;
  });
}

function eliminarPedido(index) {
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  pedidos.splice(index, 1);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
  mostrarPedidos();
}

function actualizarEstado(index, nuevoEstado) {
  let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
  pedidos[index].estado = nuevoEstado;
  localStorage.setItem("pedidos", JSON.stringify(pedidos));
}
