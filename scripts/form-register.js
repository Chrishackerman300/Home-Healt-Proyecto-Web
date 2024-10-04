//Variables
const formulario = document.querySelector('#formulario')
const inputNombre = document.querySelector('#nombre')
const inputAPP = document.querySelector('#apellidoP')
const inputAPM = document.querySelector('#apellidoM')
const inputPhone = document.querySelector('#phone')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const iconPassword = document.querySelector('.bi-eye-fill')
const btnSubmit = document.querySelector('#btn-submit')
const btnReset = document.querySelector('#btn-reset')
const spinner = document.querySelector('.spinner-container')

//Expresiones Regulares
const regexNombre = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"
const regexApellidos ="^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$"
const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/


//Objeto
const datosRegistro = {
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    phone: '',
    email: '',
    password: ''
}

//Events Listeners
cargarEventos()

function cargarEventos(){
    inputNombre.addEventListener('blur', validarRegistro)
    inputAPP.addEventListener('blur', validarRegistro)
    inputAPM.addEventListener('blur', validarRegistro)
    inputPhone.addEventListener('blur', validarRegistro)
    inputEmail.addEventListener('blur', validarRegistro)
    inputPassword.addEventListener('blur', validarRegistro)
    iconPassword.addEventListener('click', mostrarPassword)
    formulario.addEventListener('submit', enviarEmail)
    btnReset.addEventListener('click', e => {
        e.preventDefault()

        datosRegistro.nombre = ''
        datosRegistro.apellidoP = ''
        datosRegistro.apellidoM = ''
        datosRegistro.phone = ''
        datosRegistro.email = ''
        datosRegistro.password = ''

        formulario.reset()

        console.log(datosRegistro)
        comprobarDatos()
    })
}

//Functinos
function validarRegistro(e){
    const valor = e.target
    const elemento = e.target

    //Validar si los input estan vacios
    if(valor.value.trim() === ''){
        
        //Si estan vacios ejecutara la siguiente function
        mostrarAlerta(`El campo ${valor.id} esta vacio`, elemento.parentElement)

        comprobarDatos()
        return
    }

    //Validar Nombre
    if(valor.id === 'nombre'){
        if(valor.value.match(regexNombre) !== null){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            //Esta fn eliminara la alerta despues de 400ms
            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 400)

            //Llenado el obj con los datos del usuario
            datosRegistro.nombre = valor.value.trim().toLowerCase() 

            console.log(datosRegistro)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
    }

    //Validar Apellidos
    if(valor.id === 'apellidoP'){
        if(valor.value.match(regexApellidos) !== null){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 400)

            datosRegistro.apellidoP = valor.value.trim().toLowerCase()
    
            console.log(datosRegistro)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
    }

    if(valor.id === 'apellidoM'){
        if(valor.value.match(regexApellidos) !== null){
            mostrarAlerta('El campo es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 400)

            datosRegistro.apellidoM = valor.value.trim().toLowerCase()
    
            console.log(datosRegistro)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
    }

    //Validar Phone
    if(valor.id === 'phone'){
        if(valor.value.trim() === ''){
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es valido', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 400)

            datosRegistro.phone = valor.value.trim().toLowerCase() 

            console.log(datosRegistro)

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
            }, 400)

            datosRegistro.email = valor.value.trim().toLowerCase() 

            console.log(datosRegistro)

            comprobarDatos()
            return
        }
        else{
            mostrarAlerta('El campo es invalido', elemento.parentElement)

            comprobarDatos()
            return
        }
    }

    //Validar Passowrd
    if(valor.id === 'password'){
        if(valor.value.match(regexPassword) !== null){
            mostrarAlerta('Password Fuerte', elemento.parentElement)

            setTimeout(() => {
                limpiarAlerta(elemento.parentElement)
            }, 400)

            datosRegistro.password = valor.value.trim().toLowerCase() 

            console.log(datosRegistro)

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

    //Ejecutando al fn limpiarAlerta
    limpiarAlerta(referencia)

    const alerta = document.createElement('div')
    alerta.classList.add('alerta')
    alerta.textContent = mensaje

    referencia.appendChild(alerta)
}

//Function Limpiar Alerta
function limpiarAlerta(elemento){
    const alert = elemento.querySelector('.alerta')

    //Si hay mas de un elemento con la clase alerta eliminar las demas alertas
    if(alert){
        alert.remove()
    }
}

//Function Mostrar Password
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

//Function Comprobar Datos
function comprobarDatos(){
    if(Object.values(datosRegistro).includes('')){
        btnSubmit.classList.add('opacity')
        btnSubmit.disabled = true
    }
    else{
        btnSubmit.classList.remove('opacity')
        btnSubmit.disabled = false
    }
}

//Function Enviar Email
function enviarEmail(e){
    e.preventDefault()

    spinner.classList.add('show-spinner')

    setTimeout(() => {
        spinner.classList.remove('show-spinner')
        alert('Registro con Exito')
    }, 2500)
}