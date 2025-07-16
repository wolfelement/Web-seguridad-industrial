  const preguntas = document.querySelectorAll(".pregunta");

  preguntas.forEach(boton => {
    boton.addEventListener("click", () => {
      const respuesta = boton.nextElementSibling;
      respuesta.style.display = (respuesta.style.display === "block") ? "none" : "block";
    });
  });
