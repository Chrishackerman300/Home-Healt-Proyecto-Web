//Variables
const formulario = document.querySelector('#formulario')
const inputNombre = document.querySelector('#nombre')
const inputEmail = document.querySelector('#email')
const inputReport = document.querySelector('#report')
const btnSubmit = document.querySelector('#btn-submit')
const btnReset = document.querySelector('#btn-reset')
const spinner = document.querySelector('.spinner-container')

//Expreciones Regulares
const regexNombre = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"
const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

//objeto
const datosAyuda = {
    nombre: '',
    email: '',
    report: ''
}

//Events Liteners
cargarFunciones()

function cargarFunciones(){
    inputNombre.addEventListener('blur', validarFormulario)
    inputEmail.addEventListener('blur', validarFormulario)
    inputReport.addEventListener('blur', validarFormulario)
    formulario.addEventListener('submit', enviarEmail)
    btnReset.addEventListener('click', e => {
        e.preventDefault()

        datosAyuda.nombre = ''
        datosAyuda.email = ''
        datosAyuda.report = ''

        formulario.reset()

        comprobarDatos()

        console.log(datosAyuda)
    })
}

//Functions

//Function Validar Formulario
function validarFormulario(e){
    const valor = e.target
    const elemento = e.target

    if(valor.value.trim() === ''){
        mostrarAlerta(`El campo ${valor.id} esta vacio`, elemento.parentElement)

        console.log(datosAyuda)

        comprobarDatos()
        return
    }

    //Validar Nombre
    if(valor.id === 'nombre'){
        if(valor.value.match(regexNombre) !== null){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 300)

            datosAyuda.nombre = valor.value.trim().toLowerCase()

            console.log(datosAyuda)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
    }

    //Validar Email
    if(valor.id === 'email'){
        const resultado = regexEmail.test(valor.value)

        if(resultado === true){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 300)

            datosAyuda.email = valor.value.trim().toLowerCase()

            console.log(datosAyuda)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
    }

    //Validar Report
    if(valor.id === 'report'){
        if(valor.value.trim() === ''){
            mostrarAlerta(`El campo ${valor.id} esta vacio`, elemento.parentElement)

            console.log(datosAyuda)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campor es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 300)

            datosAyuda.report = valor.value.trim().toLowerCase()

            console.log(datosAyuda)

            comprobarDatos()
            return
        }
    }
}

//Function Mostrar Alerta
function mostrarAlerta(mensaje, referencia){

    limpiarAlerta(referencia)

    const alerta = document.createElement('div')
    alerta.classList.add('alerta')
    alerta.textContent = mensaje

    referencia.appendChild(alerta)
}

//Function Limpiar Alerta
function limpiarAlerta(elemento){
    const alert = elemento.querySelector('.alerta')

    if(alert){
        alert.remove()
    }
}

//Function Comprobar Datos
function comprobarDatos(){
    if(Object.values(datosAyuda).includes('')){
        btnSubmit.classList.remove('opacity')
        btnSubmit.disabled = true
    }
    else{
        btnSubmit.classList.add('opacity')
        btnSubmit.disabled = false
    }
}

//Function Enviar Email
function enviarEmail(e){
    e.preventDefault()

    spinner.classList.add('show-spinner')

    setTimeout(() => {
        spinner.classList.remove('show-spinner')
        alert('Enviado con Exito')
    }, 2500)
}