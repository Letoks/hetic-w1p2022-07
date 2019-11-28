submit = document.querySelector("input.submit");

submit.addEventListener("click", function() {
  event.preventDefault();
  var test = 0;
  document.querySelectorAll("input").forEach(function(input) {
    if (input.checkValidity()) {
      test += 1;
    }
  });

  if (test == 13) {
    window.location.assign("confirmed.html");
  }
});
