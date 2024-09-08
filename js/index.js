const datoIngresado = document.getElementById("inputText");
const boton = document.getElementById("buttonText");

boton.addEventListener("click", (e)=> {
    localStorage.setItem("datos", datoIngresado.value)
    datoIngresado.value = "";
})
