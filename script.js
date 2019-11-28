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


produit = document.querySelector('.produit')

produit.addEventListener('click', function() {
  hiddenMenu.classList.toggle('isOpen');
  menuBurger.classList.toggle('active');
})

propos = document.querySelector('.propos')

propos.addEventListener('click', function() {
  hiddenMenu.classList.toggle('isOpen');
  menuBurger.classList.toggle('active');
})

// Customisation //

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const prixf = document.getElementById('prixf');

select1.addEventListener('change', function(event) {
  const value = parseInt(event.target.value);
  result1.innerHTML = value * 8;
  prixf.innerHTML = parseInt(select1.value) * 8 + parseInt(select2.value) * 12 + parseInt(select3.value) * 100 + parseInt(select4.value) * 130 + "€";
});

select2.addEventListener('change', function(event) {
  const value = parseInt(event.target.value);
  result2.innerHTML = value * 12;
  prixf.innerHTML = parseInt(select1.value) * 8 + parseInt(select2.value) * 12 + parseInt(select3.value) * 100 + parseInt(select4.value) * 130 + "€";
});

select3.addEventListener('change', function(event) {
  const value = parseInt(event.target.value);
  result3.innerHTML = value * 100;
  prixf.innerHTML = parseInt(select1.value) * 8 + parseInt(select2.value) * 12 + parseInt(select3.value) * 100 + parseInt(select4.value) * 130 + "€";
});

select4.addEventListener('change', function(event) {
  const value = parseInt(event.target.value);
  result4.innerHTML = value * 130;
  prixf.innerHTML = parseInt(select1.value) * 8 + parseInt(select2.value) * 12 + parseInt(select3.value) * 100 + parseInt(select4.value) * 130 + "€";
});