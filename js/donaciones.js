
//Registro Donante
const nombre = document.getElementById("nombreDonante")
const apellido = document.getElementById("apellidoDonante")
const cumpleaños = document.getElementById("cumpleañosDonante")
const documento = document.getElementById("documentoDonante")
const telefono = document.getElementById("telefonoDonante")
const email = document.getElementById("emailDonante")
const tarjeta = document.getElementById("tarjetaDonante")
const guardarBtn = document.getElementById("guardarBtn")

document.getElementById("nombreDonanteFinal").textContent = localStorage.getItem("nombreGuardado") || "indefinido"
document.getElementById("apellidoDonanteFinal").textContent = localStorage.getItem("apellidoGuardado") || "indefinido"
document.getElementById("cumpleañosDonanteFinal").textContent = localStorage.getItem("cumpleañosGuardado") || "indefinido"
document.getElementById("documentoDonanteFinal").textContent = localStorage.getItem("documentoGuardado") || "indefinido"
document.getElementById("telefonoDonanteFinal").textContent = localStorage.getItem("telefonoGuardado") || "indefinido"
document.getElementById("emailDonanteFinal").textContent = localStorage.getItem("emailGuardado") || "indefinido"
document.getElementById("tarjetaDonanteFinal").textContent = localStorage.getItem("tarjetaGuardado") || "indefinido"

function validarTodo() {
    if (nombre.value.trim() === "" || apellido.value.trim() === "" || cumpleaños.value.trim() === "" || documento.value.trim() === "" || telefono.value.trim() === "" || email.value.trim() === "" || tarjeta.value.trim() === ""
    ) {
        alert("Por favor, completa todos los campos antes de guardar.")
    return false
    }
    return true
}

guardarBtn.addEventListener("click", () => {
    if (validarTodo() === false) {
        alert("Por favor, completa todos los campos antes de guardar.")
    } else {
        localStorage.setItem("nombreGuardado", nombre.value)
        localStorage.setItem("apellidoGuardado", apellido.value)
        localStorage.setItem("cumpleañosGuardado", cumpleaños.value)
        localStorage.setItem("documentoGuardado", documento.value)
        localStorage.setItem("telefonoGuardado", telefono.value)
        localStorage.setItem("emailGuardado", email.value)
        localStorage.setItem("tarjetaGuardado", tarjeta.value)

        document.getElementById("nombreDonanteFinal").textContent = nombre.value
        document.getElementById("apellidoDonanteFinal").textContent = apellido.value
        document.getElementById("cumpleañosDonanteFinal").textContent = cumpleaños.value
        document.getElementById("documentoDonanteFinal").textContent = documento.value
        document.getElementById("telefonoDonanteFinal").textContent = telefono.value
        document.getElementById("emailDonanteFinal").textContent = email.value
        document.getElementById("tarjetaDonanteFinal").textContent = tarjeta.value

        alert("registro guardado con éxito.")
    }
})

//Enviar Donaciones
const boton = document.getElementById("botonDonar")
boton.addEventListener("click", () => {
const montoUnico = document.getElementById("montoUnico")
const seleccion = document.querySelector("input[name='monto']:checked") 
/*el queryselector sirve para que en caso de que elija monto unico lo verifique*/

if (!seleccion){ /*en caso de que no haya seleccionado ninguna opcion*/
    alert("por favor, elija una de las opciones")
    return
}

if (seleccion.value === "otro") {

    if (montoUnico.value === "" || isNaN(montoUnico.value) /*verifica si es un numero (lo tuve que buscar)*/ || Number(montoUnico.value) <= 0) {
        alert("Ingrese un monto valido en el campo de texto.")
        return
        }
    alert("Donación seleccionada: $" + montoUnico.value)
    } else {
        alert("Donación seleccionada: $" + seleccion.value)
    }
})