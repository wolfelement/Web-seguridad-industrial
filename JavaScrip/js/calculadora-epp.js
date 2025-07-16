// JavaScript: calculadora-epp.js

// Diccionario de equipos recomendados por tipo de trabajo
const recomendacionesEPP = {
  construccion: [
    { nombre: "Casco de Seguridad", imagen: "imagenes/casco basico.webp", descripcion: "Protege la cabeza contra impactos y caídas de objetos." },
    { nombre: "Botas de Seguridad", imagen: "imagenes/Botin-Delta-Plus-Caderousse-S3-CI-SRC-CALZADO-DE-SEGURIDAD.jpg", descripcion: "Botas con puntera de acero para trabajos pesados." },
    { nombre: "Chaleco Salvavidas", imagen: "imagenes/seccion imagen3.webp", descripcion: "Alta visibilidad y seguridad en entornos riesgosos." }
  ],
  mineria: [
    { nombre: "Casco Endurance", imagen: "imagenes/Casco-Endurance-Plus-Visor-PW54.jpg", descripcion: "Casco con visor ideal para trabajos mineros." },
    { nombre: "Lámpara Minera", imagen: "imagenes/Catalogo Lampara Minera.png", descripcion: "Fuente de luz para zonas con poca visibilidad." },
    { nombre: "Guante de Cuero", imagen: "imagenes/Guante de cuero de badana.webp", descripcion: "Resistente al corte, abrasión y fricción." }
  ],
  quimica: [
    { nombre: "Protección Química", imagen: "imagenes/Proteccion quimica.jpg", descripcion: "Protege contra sustancias químicas peligrosas." },
    { nombre: "Gafas de Seguridad", imagen: "imagenes/Gajas de Seguridad.jpg", descripcion: "Evita el contacto de productos químicos con los ojos." },
    { nombre: "Respirador Moldex", imagen: "imagenes/respirador Moldexxxxx.webp", descripcion: "Protección respiratoria contra gases y vapores." }
  ],
  electrico: [
    { nombre: "Cable Eléctrico", imagen: "imagenes/Cable Electrico.webp", descripcion: "Cableado especializado para conexiones seguras." },
    { nombre: "Guantes Aislantes", imagen: "imagenes/guantes aisllantes.webp", descripcion: "Aislantes contra corriente eléctrica." },
    { nombre: "Botas con Punta de Acero", imagen: "imagenes/Botin-Delta-Plus-Caderousse-S3-CI-SRC-CALZADO-DE-SEGURIDAD.jpg", descripcion: "Evita descargas eléctricas al trabajar con corriente." }
  ],
  mecanico: [
    { nombre: "Llave Inglesa", imagen: "imagenes/Llave Loro.jpg", descripcion: "Herramienta básica para ajustar tuercas y tornillos." },
    { nombre: "Martillo", imagen: "imagenes/martillo.jpg", descripcion: "Uso general para reparaciones y construcción." },
    { nombre: "Protección Auditiva", imagen: "imagenes/OreJeras MOL.jpg", descripcion: "Reduce la exposición a ruidos fuertes." }
  ]
};

function calcularEPP() {
  const tipo = document.getElementById("tipoTrabajo").value;
  const contenedor = document.getElementById("resultadoEPP");
  contenedor.innerHTML = ""; // Limpiar contenido anterior

  if (!tipo || !recomendacionesEPP[tipo]) {
    contenedor.innerHTML = "<p style='color:red;'>Por favor, selecciona un tipo de trabajo válido.</p>";
    return;
  }

  const equipos = recomendacionesEPP[tipo];

  let contenido = "<div class='grid-epp'>";
  equipos.forEach(equipo => {
    contenido += `
      <div class="epp-card">
        <img src="${equipo.imagen}" alt="${equipo.nombre}" class="epp-img">
        <h3>${equipo.nombre}</h3>
        <p>${equipo.descripcion}</p>
      </div>`;
  });
  contenido += "</div>";

  contenedor.innerHTML = contenido;
}
