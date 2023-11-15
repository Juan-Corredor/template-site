
// Contenidos de script-menu-lateral.js
const myMenuLateral = () => {
    //Ejecutar función en el evento click
    document.getElementById("btn_open_site").addEventListener("click", open_close_menu_principal);
    document.getElementById("btn_open_units").addEventListener("click", open_close_menu_units);
    document.getElementById('overlay').addEventListener('click', close_menu_main);
    document.getElementById('close-btn-main').addEventListener('click', close_menu_main);
    document.getElementById('close-btn-units').addEventListener('click', close_menu_main);

    //Variables del menú
    var side_menu = document.getElementById("menu_side-main");
    var side_menu_units = document.getElementById("menu_side_units");
    var button_menu_site = document.getElementById("btn_open_site");
    var button_menu_units = document.getElementById("btn_open_units");
    var body = document.getElementById("body");



    function close_menu_main() {
        close_menu(side_menu, button_menu_site)
        close_menu(side_menu_units, button_menu_units)
    }

    function close_menu(menu, button_menu) {
        body.classList.remove("body_move");
        menu.classList.remove("menu__side_move");
        button_menu.classList.remove("btn_open_move");
        overlay.style.display = 'none';
    }

    function togglemenu(menu, button_menu) {
        body.classList.toggle("body_move");
        menu.classList.toggle("menu__side_move");
        button_menu.classList.toggle("btn_open_move");
        // Toggle para el overlay
        if (window.innerWidth <= 900) {
            overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        }
    }

    //Evento para mostrar y ocultar menú
    function open_close_menu_principal() {
        togglemenu(side_menu, button_menu_site)
    }

    function open_close_menu_units() {
        togglemenu(side_menu_units, button_menu_units)
    }

}

// Contenidos de animation-scroll-site.js
const myScrollAnimation = () => {
    document.querySelectorAll('.a-enlaces').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contenidos de menu-accordion.js
function myMenuAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

// Ejecuta las funciones según sea necesario
myMenuLateral();
myScrollAnimation();
myMenuAccordion();
