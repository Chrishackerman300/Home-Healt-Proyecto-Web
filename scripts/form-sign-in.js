//Variables
const formulario = document.querySelector('#formulario')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const iconPassword = document.querySelector('.bi-eye-fill')
const btnSubmit = document.querySelector('#btn-submit')
const btnReset = document.querySelector('#btn-reset')
const spinner = document.querySelector('.spinner-container')


//Expresiones Regulares
const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/

const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/

//Objeto
const datosSesion = {
    email: '',
    password: ''
};

//Events Listeners
cargarEventos()

function cargarEventos(){
    inputEmail.addEventListener('blur', validarSesion)
    inputPassword.addEventListener('blur', validarSesion)
    iconPassword.addEventListener('click', mostrarPassword)
    formulario.addEventListener('submit', enviarEmail)
    btnReset.addEventListener('click', e => {
        e.preventDefault()

        datosSesion.email = ''
        datosSesion.password = ''

        formulario.reset()

        console.log(datosSesion)

        comprobarDatos()
    })
}

//Functions

//Validar campos
function validarSesion(e){
    const valor = e.target
    const elemento = e.target

    if(valor.value.trim() === ''){
        mostrarAlerta(`El campo ${valor.id} esta vacio`, elemento.parentElement)

        comprobarDatos()
        return
    }

    //validar Email
    if(valor.id === 'email'){
        const resultado = regexEmail.test(valor.value)

        if(resultado === true){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 400)

            datosSesion.email = valor.value.trim().toLowerCase()

            console.log(datosSesion)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
    }

    //Validar Password
    if(valor.id === 'password'){
        if(valor.value.match(regexPassword) !== null){
            mostrarAlerta('Password Fuerte', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 400)

            datosSesion.password = valor.value.trim().toLowerCase()

            console.log(datosSesion)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('Password Debil', elemento.parentElement)

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

function limpiarAlerta(elemento){
    const alert = elemento.querySelector('.alerta')

    if(alert){
        alert.remove()
    }
}

//Mostrar Passowrd
function mostrarPassword(e){
    e.preventDefault()

    if(password.type === 'password'){
        password.type = 'text'
        iconPassword.classList.remove('bi-eye-fill')
        iconPassword.classList.add('bi-eye-slash-fill')
    }
    else{
        password.type = 'password'
        iconPassword.classList.remove('bi-eye-slash-fill')
        iconPassword.classList.add('bi-eye-fill')
    }
}

//Comprobar Datos
function comprobarDatos(){
    if(Object.values(datosSesion).includes('')){
        btnSubmit.classList.remove('opacity')
        btnSubmit.disabled = true
    }
    else{
        btnSubmit.classList.add('opacity')
        btnSubmit.disabled = false
    }
}

//Enviar Email
function enviarEmail(e){
    e.preventDefault()

    spinner.classList.add('show-spinner')

    setTimeout(() => {
        spinner.classList.remove('show-spinner')
        alert('Incio de Sesion con Exito!')
    }, 2500)
}