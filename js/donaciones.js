
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

        function crearEnlace(){
            const link = document.createElement("a")
            link.id = "enlaceExito"
            link.textContent = "Enviar Donaciones"
            link.href = "pages/EnviarDonaciones.html"
            document.getElementById("InfoUsuario").appendChild(link)
        }

        if (localStorage.getItem("linkCreado") === "true") {
            crearEnlace()
        }

        function validarTodo() {
            if (nombre.value.trim() === "" || 
            apellido.value.trim() === "" || 
            cumpleaños.value.trim() === "" || 
            documento.value.trim() === "" || 
            telefono.value.trim() === "" || 
            email.value.trim() === "" || 
            tarjeta.value.trim() === "" 
            ) {
                alert("Por favor, completa todos los campos antes de guardar.")
                return false
            }
            if (nombre.value.trim().length < 3) {
                alert("El nombre no es valido.")
                return false
            }
            if (apellido.value.trim().length < 3) {
                alert("El apellido no es valido.")
                return false
            }
            if (!email.value.includes("@gmail.com")) {
                alert("El email no es valido.")
                return false
            }
            if (documento.value.trim().length !== 8) {
                alert("El documento no es valido.")
                return false
            }
            if (telefono.value.trim().length < 8){
                alert("El numero de telefono no es valido.")
                return false
            }
            if (tarjeta.value.trim().lenght < 14){
                alert("La tarjeta no es valida.")
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

                alert("registro guardado con éxito. Para finalizar con la donacion, precione el boton Enviar Donaciones")

                if (!document.getElementById("enlaceExito")) {
                    crearEnlace()
                    localStorage.setItem("linkCreado", "true")
                }
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
