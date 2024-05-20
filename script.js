document.addEventListener("DOMContentLoaded", function () {
  // Hacer que el modal 1 aparezca después de 1 segundo
  setTimeout(function () {
    var modal1 = document.querySelector(".banner");
    modal1.style.visibility = "visible";
    modal1.style.opacity = "1";
  }, 1000);

  document.querySelector(".button-accept").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".banner").style.display = "none";
  });

  document.querySelector(".button-preferences").addEventListener("click", function (event) {
    var modal2 = document.querySelector(".purposes-banner");
    event.preventDefault();
    document.querySelector(".banner").style.display = "none";
    document.querySelector(".purposes-banner").classList.remove("hidden");
    modal2.style.visibility = "visible";
    modal2.style.opacity = "1";
  });

  document.querySelector(".button-save").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".purposes-banner").style.display = "none";
  });

  document.querySelector(".button-decline").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".banner").style.display = "none";
  });

  var closeButton = document.querySelector(".button-x-close");
  closeButton.addEventListener("click", function () {
    event.preventDefault();
    document.querySelector(".purposes-banner").style.display = "none";
  });
});
