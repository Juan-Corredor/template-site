const updateLinkState = (path) => {
    // Primero elimina la clase 'selected' de todos los enlaces
    document.querySelectorAll('.options__menu a').forEach(link => {
        link.classList.remove('selected');
    });

    // Luego añade la clase 'selected' al enlace correspondiente
    let linkId;
    switch(path) {
        case '/':
            linkId = 'link-home';
            break;
        case '/about':
            linkId = 'link-about';
            break;
        // Añade más casos aquí según sea necesario
    }

    const activeLink = document.getElementById(linkId);
    if (activeLink) {
        activeLink.classList.add('selected');
    }
};

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    // Encuentra el elemento <a> en la cadena de ancestros
    let target = event.target;
    while (target && target.nodeName !== 'A') {
        target = target.parentNode;
    }

    // Solo proceder si encontramos un elemento <a>
    if (target) {
        window.history.pushState({}, "", target.href);
        handleLocation();
    }
};

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about": "/pages/about.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
    updateLinkState(path);
};

window.onpopstate = handleLocation;
window.route = route;
handleLocation();