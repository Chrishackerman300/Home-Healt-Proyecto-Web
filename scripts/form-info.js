//Variables 
const inputNombre = document.querySelector('#nombre')
const inputApellidos = document.querySelector('#apellidos')
const inputEmail = document.querySelector('#email')
const btnSubmit = document.querySelector('#btn-submit')
const btnReset = document.querySelector('#btn-reset')
const formulario = document.querySelector('#formulario')
const spinner = document.querySelector('.spinner-container')

//Expreciones Regulares
const regexNombre = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"
const regexApellido ="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"
const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

//Objeto
const datosInfo = {
    nombre: '',
    apellidos: '',
    email: ''
}

//Events Listeners
cargarFunciones()

function cargarFunciones(){
    inputNombre.addEventListener('blur', validarFormulario)
    inputApellidos.addEventListener('blur', validarFormulario)
    inputEmail.addEventListener('blur', validarFormulario)
    formulario.addEventListener('submit', enviarEmail)
    btnReset.addEventListener('click', e => {
        e.preventDefault()

        datosInfo.nombre = ''
        datosInfo.apellidos = ''
        datosInfo.email = ''

        formulario.reset()

        comprobarDatos()

        console.log(datosInfo)
    })
}

//Functions

//Function validar formulario
function validarFormulario(e){
    const valor = e.target
    const elemento = e.target

    //Si nuestro input esta vacio ejecutara el siguiente if
    if(valor.value.trim() === ''){
        
        //Si esta vacio se ejecutará la función mostrarAlerta
        mostrarAlerta(`El campo ${valor.id} esta vacio`, elemento.parentElement)

        console.log(datosInfo)

        comprobarDatos();
        return
    }

    //Validar Nombre
    if(valor.id === 'nombre'){
        if(valor.value.match(regexNombre) !== null){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            //Si es correcto el nombre se ejecutara esta fn y despues de 300ms se eliminara la alerta
            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 300)

            //Llenaremos nuestro objeto con los datos del input
            datosInfo.nombre = valor.value.trim().toLowerCase()

            console.log(datosInfo)

            comprobarDatos();
            return
        }
        else {
            mostrarAlerta('el campo es invalido', elemento.parentElement)
            
            comprobarDatos();
            return
        }
    }

    //Validar Apellidos
    if(valor.id === 'apellidos'){
        if(valor.value.match(regexApellido) !== null){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 300)

            datosInfo.apellidos = valor.value.trim().toLowerCase()

            console.log(datosInfo)

            comprobarDatos();
            return
        }
        else{
            mostrarAlerta('el campo es invalido', elemento.parentElement)
            
            comprobarDatos();
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

            datosInfo.email = valor.value.trim().toLowerCase()

            console.log(datosInfo)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('el campo es invalido', elemento.parentElement)
            
            comprobarDatos();
            return
        }
    }
}

//Function mostrar alerta
function mostrarAlerta(mensaje, referencia){

    //Llamaremos a nuestra fn limpiar alerta
    limpiarAlerta(referencia)

    const alert = document.createElement('div')
    alert.classList.add('alerta')
    alert.textContent = mensaje

    referencia.appendChild(alert)
}

//Function limpiar alerta
function limpiarAlerta(elemento){
    const alerta = elemento.querySelector('.alerta')

    if(alerta){
        alerta.remove();
    }
}

//Function comprobar datos
function comprobarDatos(){
    if(Object.values(datosInfo).includes('')){
        btnSubmit.classList.add('opacity')
        btnSubmit.disabled  = true
    }
    else{
        btnSubmit.classList.remove('opacity')
        btnSubmit.disabled  = false
    }
}

//Function enviar email
function enviarEmail(e){
    e.preventDefault()

    spinner.classList.add('show-spinner')

    setTimeout(() => {
        spinner.classList.remove('show-spinner')

        alert('Información Evniada con exito')
    }, 2500)
}