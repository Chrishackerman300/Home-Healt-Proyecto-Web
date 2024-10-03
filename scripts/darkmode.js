document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const darkBtn = document.querySelector('#darkmode-btn')
    const body = document.querySelector('body')

    //EventsListeners
    cargarFunciones()

    //Funciones
    function cargarFunciones(){
        darkBtn.addEventListener('click', darkmodeFn)
    }

    //Funcion Darkmode
    function darkmodeFn(){
        if(body.classList.contains('darkmode')){
            body.classList.remove('darkmode')
            console.log('Desactivando Darkmode')
        }
        else{
            body.classList.add('darkmode')
            console.log('Activando Darkmode')
        }
    }
})