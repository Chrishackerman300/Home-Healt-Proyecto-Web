document.addEventListener('DOMContentLoaded', () => {
    //Variables
    const openMenu = document.querySelector('#open-btn')
    const menu = document.querySelector('#sidebar')
    const closeMenu = document.querySelector('#close-btn')
    const openSubmenu = document.querySelector('#submenu-btn')
    const submenu = document.querySelector('#submenu')

    //EventsListeners
    cargarFunciones()

    //Funciones
    function cargarFunciones(){
        openMenu.addEventListener('click', abrirMenu)
        closeMenu.addEventListener('click', cerrarMenu)
        openSubmenu.addEventListener('click', abrirSubmenu)
    }

    //Funcion Abrir Menu
    function abrirMenu(){
        //Agregar classList.add active a la variable "menu" para desglozar el menu en css
        menu.classList.add('active')
        console.log('Abrir Menu')
    }

    //Funcion Cerrar Menu
    function cerrarMenu(){
        //Agregar classList.remove active a la variable "menu" para eliminar el menu en css
        menu.classList.remove('active')
        console.log('cerrando el menu')
    }

    //Funcion Abrir y Cerrar submenu
    function abrirSubmenu(){
        //Si nuestra variable submenu contiene la clase submenu-active, cierra el submenu
        if(submenu.classList.contains('submenu-active')){
            submenu.classList.remove('submenu-active')
            console.log('Cerrando submenu')
        }
        else{
            //Si nuestra variable submenu no contiene la clase submenu-active, abre el submenu
            submenu.classList.add('submenu-active')
            console.log('Abriendo submenu')
        }
    }
})

