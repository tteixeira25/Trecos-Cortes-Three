document.querySelectorAll('.dots').forEach(dot => {
    dot.addEventListener('click', function (event) {
        event.preventDefault(); // evita que o link seja seguido
        let wrapper = this.closest('.link-wrapper');
        wrapper.classList.toggle('active');
    });
});

function copyLink(link) {
    const textarea = document.createElement("textarea");
    textarea.value = link;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    closeMenu();
}

function closeMenu() {
    const allMenus = document.querySelectorAll('.options-menu');
    allMenus.forEach(menu => {
        menu.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    const optionsMenus = document.querySelectorAll('.options-menu');
    optionsMenus.forEach(menu => {
        if (!menu.contains(event.target) && !event.target.closest('.link-wrapper')) {
            menu.style.display = 'none';
        }
    });
});