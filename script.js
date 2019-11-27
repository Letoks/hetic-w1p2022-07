// Menu Burger //

menu = document.querySelector('.menuBurger');
hiddenMenu = document.querySelector('.hiddenMenu');

menu.addEventListener('click', function() {
    hiddenMenu.classList.toggle('isOpen')
});


const menuBurger = document.querySelector('.menuBurger');

menuBurger.addEventListener('click', function() {
  menuBurger.classList.toggle('active');
})