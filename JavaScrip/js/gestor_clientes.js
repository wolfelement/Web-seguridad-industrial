let clientes = [];
let clienteEditando = null;

function agregarCliente() {
  const codigo = document.getElementById("codigo").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const apellidoP = document.getElementById("apellidoP").value.trim();
  const apellidoM = document.getElementById("apellidoM").value.trim();

if (!codigo || !nombre || !apellidoP || !apellidoM) {
  alert("Por favor completa todos los campos.");
  return;
}

if (!/^[0-9]+$/.test(codigo)) {
  alert("El código debe contener solo números.");
  return;
}

const soloTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

if (!soloTexto.test(nombre) || !soloTexto.test(apellidoP) || !soloTexto.test(apellidoM)) {
  alert("El nombre y apellidos deben contener solo letras.");
  return;
}


  if (clientes.some(c => c.codigo === codigo)) {
    alert("Ya existe un cliente con ese código.");
    return;
  }

  clientes.push({ codigo, nombre, apellidoP, apellidoM });
  mostrarClientes();
  limpiarFormulario();
}

function buscarCliente() {
  const codigo = document.getElementById("codigo").value.trim();
  const resultado = clientes.find(c => c.codigo === codigo);
  const lista = document.getElementById("listaClientes");
  lista.innerHTML = "";

  if (resultado) {
    const li = document.createElement("li");
    li.textContent = `🔍 [${resultado.codigo}] ${resultado.nombre} ${resultado.apellidoP} ${resultado.apellidoM}`;
    lista.appendChild(li);
  } else {
    lista.innerHTML = "<li>❌ Cliente no encontrado.</li>";
  }
}

function eliminarCliente() {
  const codigo = document.getElementById("codigo").value.trim();
  const index = clientes.findIndex(c => c.codigo === codigo);

  if (index !== -1) {
    clientes.splice(index, 1);
    alert("Cliente eliminado correctamente.");
    mostrarClientes();
    limpiarFormulario();
  } else {
    alert("Cliente no encontrado.");
  }
}

function ordenarClientes() {
  clientes.sort((a, b) => {
    const nombreA = `${a.apellidoP} ${a.apellidoM} ${a.nombre}`.toLowerCase();
    const nombreB = `${b.apellidoP} ${b.apellidoM} ${b.nombre}`.toLowerCase();
    return nombreA.localeCompare(nombreB);
  });
  mostrarClientes();
}

function mostrarClientes() {
  const lista = document.getElementById("listaClientes");
  lista.innerHTML = "";

  if (clientes.length === 0) {
    lista.innerHTML = "<li>No hay clientes registrados.</li>";
    return;
  }

  clientes.forEach((c, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. [${c.codigo}] ${c.nombre} ${c.apellidoP} ${c.apellidoM}`;
    lista.appendChild(li);
  });
}

function limpiarFormulario() {
  document.getElementById("codigo").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("apellidoP").value = "";
  document.getElementById("apellidoM").value = "";
  document.getElementById("codigo").focus();
}
function editarCliente() {
  const codigo = document.getElementById("codigo").value.trim();
  const cliente = clientes.find(c => c.codigo === codigo);

  if (!cliente) {
    alert("Cliente no encontrado.");
    return;
  }

  document.getElementById("nombre").value = cliente.nombre;
  document.getElementById("apellidoP").value = cliente.apellidoP;
  document.getElementById("apellidoM").value = cliente.apellidoM;

  clienteEditando = cliente;

  alert("Cliente cargado para edición. Modifica y presiona 'Guardar Cambios'.");
}
function guardarCambios() {
  if (!clienteEditando) {
    alert("No hay cliente cargado para editar.");
    return;
  }

  const nuevoNombre = document.getElementById("nombre").value.trim();
  const nuevoApellidoP = document.getElementById("apellidoP").value.trim();
  const nuevoApellidoM = document.getElementById("apellidoM").value.trim();

  const soloTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
  if (!soloTexto.test(nuevoNombre) || !soloTexto.test(nuevoApellidoP) || !soloTexto.test(nuevoApellidoM)) {
    alert("Nombre y apellidos deben contener solo letras.");
    return;
  }

  clienteEditando.nombre = nuevoNombre;
  clienteEditando.apellidoP = nuevoApellidoP;
  clienteEditando.apellidoM = nuevoApellidoM;

  mostrarClientes();
  limpiarFormulario();
  clienteEditando = null;

  alert("Cliente actualizado correctamente.");
}
