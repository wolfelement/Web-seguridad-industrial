const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar= document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


function activarModoAdmin() {
  const clave = prompt("Ingrese clave de administrador:");
  if (clave === "admin") {
    document.getElementById("moduloAdmin").style.display = "flex";
    alert("Modo administrador activado.");
  } else {
    alert("Clave incorrecta.");
  }
}