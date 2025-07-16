// scripts/simulador-cotizacion.js

document.addEventListener("DOMContentLoaded", () => {
const productos = [
  { nombre: "Casco Básico", precio: 45 },
  { nombre: "Casco Avanzado", precio: 90 },
  { nombre: "Guantes Anticorte", precio: 75 },
  { nombre: "Botas de Seguridad", precio: 120 },
  { nombre: "Overol Industrial", precio: 150 },
  { nombre: "Chaleco Reflectante", precio: 60 },
  { nombre: "Arnés de Seguridad", precio: 180 },
  { nombre: "Esmeril Angular", precio: 380 },
  { nombre: "Taladro Percutor", precio: 420 },
  { nombre: "Soldadora Inverter", precio: 650 },
  { nombre: "Compresora de Aire", precio: 1100 },
  { nombre: "Llave Stilson 14\"", precio: 80 },
  { nombre: "Llave Francesa 12\"", precio: 70 },
  { nombre: "Disco de Corte Metal", precio: 25 },
  { nombre: "Lentes de Seguridad", precio: 35 },
  { nombre: "Camisa de Trabajo", precio: 85 },
  { nombre: "Pantalón Industrial", precio: 100 },
  { nombre: "Cinta Métrica 5m", precio: 35 },
  { nombre: "Pulidora Industrial", precio: 480 },
  { nombre: "Maquinaria Hidráulica", precio: 15000 }
];

  const lista = document.getElementById("listaProductos");
  const totalCotizacion = document.getElementById("totalCotizacion");

  productos.forEach((producto, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${producto.nombre}</td>
      <td>S/ ${producto.precio.toFixed(2)}</td>
      <td><input type="number" min="0" value="0" class="cantidad" data-index="${index}" style="width: 60px;"></td>
      <td class="subtotal">S/ 0.00</td>
    `;

    lista.appendChild(fila);
  });

  lista.addEventListener("input", (e) => {
    if (e.target.classList.contains("cantidad")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      const cantidad = parseInt(e.target.value) || 0;
      const precio = productos[index].precio;
      const subtotal = cantidad * precio;

      e.target.closest("tr").querySelector(".subtotal").textContent = `S/ ${subtotal.toFixed(2)}`;

      calcularTotal();
    }
  });

  function calcularTotal() {
    let total = 0;
    document.querySelectorAll(".subtotal").forEach(td => {
      const valor = parseFloat(td.textContent.replace("S/", "")) || 0;
      total += valor;
    });
    totalCotizacion.textContent = `S/ ${total.toFixed(2)}`;
  }
});
