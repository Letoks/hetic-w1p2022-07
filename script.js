// Menu Burger //

menu = document.querySelector('.menuBurger');
hiddenMenu = document.querySelector('.hiddenMenu');

menu.addEventListener('click', function() {
    hiddenMenu.classList.toggle('isOpen')
});


