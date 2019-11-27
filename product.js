submit = document.querySelector('input.submit');
city = document.querySelector('.city2');
small = document.querySelector('small.city')

submit.addEventListener('click', function() {
    small.classList.add('error');
});