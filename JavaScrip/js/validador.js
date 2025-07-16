// scripts/validador.js

// Espera a que el DOM cargue completamente
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formularioContacto");
  const mensajeValidacion = document.getElementById("mensajeValidacion");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación del nombre (solo letras y espacios)
    if (!/^[A-Za-z\s]{3,}$/.test(nombre)) {
      mostrarMensaje("Ingrese un nombre válido (solo letras y al menos 3 caracteres).", "red");
      return;
    }

    // Validación del correo electrónico
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      mostrarMensaje("Ingrese un correo electrónico válido.", "red");
      return;
    }

    // Validación del teléfono (solo números, mínimo 6 dígitos)
    if (!/^\d{6,}$/.test(telefono)) {
      mostrarMensaje("Ingrese un número de teléfono válido (mínimo 6 dígitos).", "red");
      return;
    }

    // Validación del mensaje (mínimo 10 caracteres)
    if (mensaje.length < 10) {
      mostrarMensaje("El mensaje debe tener al menos 10 caracteres.", "red");
      return;
    }

    // Si pasa todas las validaciones
    mostrarMensaje("Formulario enviado correctamente. ¡Gracias por contactarnos!", "green");
    formulario.reset();
  });

  function mostrarMensaje(texto, color) {
    mensajeValidacion.textContent = texto;
    mensajeValidacion.style.color = color;
  }
});
