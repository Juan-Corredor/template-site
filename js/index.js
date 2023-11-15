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

const updateLinkState = (path) => {
    // Primero elimina la clase 'selected' de todos los enlaces
    document.querySelectorAll('.options__menu a').forEach(link => {
        link.classList.remove('selected');
    });

    // Luego añade la clase 'selected' al enlace correspondiente
    let linkId;
    switch (path) {
        case '/':
            linkId = 'link-home';
            break;
        case '/introduction':
            linkId = 'link-about';
            break;
        // Añade más casos aquí según sea necesario
    }

    const activeLink = document.getElementById(linkId);
    if (activeLink) {
        activeLink.classList.add('selected');
    }
};

const loadComponentOnce = async (componentPath, placeholderId) => {
    const placeholder = document.getElementById(placeholderId);

    // Solo carga el contenido si aún no ha sido cargado
    if (!placeholder.innerHTML.trim()) {
        const response = await fetch(componentPath);
        const content = await response.text();
        placeholder.innerHTML = content;
    }
};

const initializePage = async () => {
    // Carga el nav y el footer una sola vez
    await loadComponentOnce('./pages/menu-lateral.html', 'nav-placeholder');
    await loadComponentOnce('./pages/footer.html', 'footer-placeholder');

    // Luego realiza las actualizaciones y asignaciones de eventos necesarias
    const path = window.location.pathname;
    updateLinkState(path);
    myScrollAnimation();

};

document.addEventListener('DOMContentLoaded', initializePage);
