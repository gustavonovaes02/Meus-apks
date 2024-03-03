document.addEventListener('DOMContentLoaded', function () {
    // Aqui, você pode carregar dinamicamente a lista de aplicativos
    // Pode usar AJAX para buscar dados do servidor Python
    // Exemplo: fetch('/api/apps').then(response => response.json()).then(data => renderApps(data));
});

function renderApps(apps) {
    const appListSection = document.getElementById('app-list');
    appListSection.innerHTML = '';

    apps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        const img = document.createElement('img');
        img.src = app.image;
        img.alt = app.name;

        const appName = document.createElement('h3');
        appName.textContent = app.name;

        const appDescription = document.createElement('p');
        appDescription.textContent = app.description;

        appCard.appendChild(img);
        appCard.appendChild(appName);
        appCard.appendChild(appDescription);

        appListSection.appendChild(appCard);
    });
}
