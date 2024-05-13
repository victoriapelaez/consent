document.addEventListener("DOMContentLoaded", function () {
  // Hacer que el modal 1 aparezca después de 1 segundo
  setTimeout(function () {
    var modal1 = document.querySelector(".modal-1");
    modal1.style.visibility = "visible";
    modal1.style.opacity = "1";
  }, 1000);

  document.querySelector("#accept").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".modal").style.display = "none";
  });

  document.querySelector("#preferences").addEventListener("click", function (event) {
    var modal2 = document.querySelector(".modal-2");
    event.preventDefault();
    document.querySelector(".modal-1").style.display = "none";
    document.querySelector(".modal-2").classList.remove("hidden");
    modal2.style.visibility = "visible";
    modal2.style.opacity = "1";
  });

  document.querySelector("#save").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".modal-2").style.display = "none";
  });

  var closeButton = document.getElementById("close");
  closeButton.addEventListener("click", function () {
    event.preventDefault();
    document.querySelector(".modal-2").style.display = "none";
  });
});
