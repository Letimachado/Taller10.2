document.addEventListener("DOMContentLoaded", () => {
    const datoGuardado = localStorage.getItem("datos");
    if (datoGuardado) {
      const mostrar = document.getElementById("data");
      mostrar.textContent = datoGuardado;
    }
  });