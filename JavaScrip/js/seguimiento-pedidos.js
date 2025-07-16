function buscarPedido() {
  const codigoPedido = document.getElementById("codigoPedido").value.trim();
  const resultado = document.getElementById("resultadoSeguimiento");

  if (!codigoPedido) {
    resultado.innerHTML = "<p style='color:red;'>Por favor, ingrese un código de pedido.</p>";
    return;
  }

  const pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];

  const encontrado = pedidos.find(p => p.codigo.toUpperCase() === codigoPedido.toUpperCase());

  if (encontrado) {
    resultado.innerHTML = `
      <h3 style="color:green;">¡Pedido encontrado!</h3>
      <p><strong>Código:</strong> ${encontrado.codigo}</p>
      <p><strong>Cliente:</strong> ${encontrado.cliente}</p>
      <p><strong>Estado:</strong> ${encontrado.estado}</p>
    `;
  } else {
    resultado.innerHTML = "<p style='color:red;'>No se encontró ningún pedido con ese código.</p>";
  }
}
