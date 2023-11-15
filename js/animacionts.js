
// Contenidos de script-menu-lateral.js
const myMenuLateral = () => {
    // Delegación de eventos: escucha en un elemento que sabemos que estará presente
    document.body.addEventListener("click", function(event) {
        // Verifica si el evento es del botón de abrir el menú principal
        if (event.target.matches("#btn_open_site")) {
            toggleMenu('menu_side-main', 'btn_open_site');
        }
        // Verifica si el evento es del botón de abrir las unidades
        else if (event.target.matches("#btn_open_units")) {
            toggleMenu('menu_side_units', 'btn_open_units');
        }
        // Verifica si el evento es del overlay o de los botones de cierre
        else if (event.target.matches('#overlay') || event.target.matches('.close-btn')) {
            closeMenuMain();
        }
    });
    
    // Función para abrir/cerrar menús
    function toggleMenu(menuId, buttonId) {
        const menu = document.getElementById(menuId);
        const button = document.getElementById(buttonId);
        const body = document.getElementById("body");
        const overlay = document.getElementById('overlay');
        
        if (menu && button) {
            body.classList.toggle("body_move");
            menu.classList.toggle("menu__side_move");
            button.classList.toggle("btn_open_move");

            // Toggle para el overlay
            if (window.innerWidth <= 900) {
                overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
            }
        }
    }
    
    // Función para cerrar los menús
    function closeMenuMain() {
        const sideMenu = document.getElementById("menu_side-main");
        const sideMenuUnits = document.getElementById("menu_side_units");
        const buttonMenuSite = document.getElementById("btn_open_site");
        const buttonMenuUnits = document.getElementById("btn_open_units");
        const body = document.getElementById("body");
        const overlay = document.getElementById('overlay');
        
        if (sideMenu && buttonMenuSite) {
            closeMenu(sideMenu, buttonMenuSite);
        }
        if (sideMenuUnits && buttonMenuUnits) {
            closeMenu(sideMenuUnits, buttonMenuUnits);
        }
    }
    
    function closeMenu(menu, button) {
        const body = document.getElementById("body");
        const overlay = document.getElementById('overlay');

        body.classList.remove("body_move");
        menu.classList.remove("menu__side_move");
        button.classList.remove("btn_open_move");
        overlay.style.display = 'none';
    }
};

function setHeightDivDescription() {
    window.onload = adjustHeight;
    window.onresize = adjustHeight;

    function adjustHeight() {
        var secondDiv = document.getElementById('getheigth'); // Este es el segundo div
        var thirdDiv = document.getElementById('setheigth'); // Este es el tercer div (el verde)
        var heightOfSecondDiv = secondDiv.offsetHeight; // Obtén la altura del segundo div

        if (window.innerWidth <= 700) {
            thirdDiv.style.maxHeight = 100 + '%'; // Ajusta la altura máxima del tercer div para que coincida
        } else {
            thirdDiv.style.maxHeight = heightOfSecondDiv + 'px'; // Ajusta la altura máxima del tercer div para que coincida
        }
    }
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
document.addEventListener('DOMContentLoaded', myMenuLateral);
myMenuAccordion();
setHeightDivDescription();
