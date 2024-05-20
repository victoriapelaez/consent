document.addEventListener("DOMContentLoaded", function () {
  function showElementAfterDelay(selector, delay) {
    setTimeout(function () {
      var element = document.querySelector(selector);
      element.style.visibility = "visible";
      element.style.opacity = "1";
    }, delay);
  }

  function hideElement(selector) {
    document.querySelector(selector).style.display = "none";
  }


  function handleHideButtonClick(buttonSelectors, elementToHide) {
    buttonSelectors.forEach(function (buttonSelector) {
      document.querySelector(buttonSelector).addEventListener("click", function (event) {
        event.preventDefault();
        hideElement(elementToHide);
      });
    });
  }

  showElementAfterDelay(".banner", 1000);

  document.querySelector(".button-preferences").addEventListener("click", function (event) {
    event.preventDefault();
    hideElement(".banner");
    var modal2 = document.querySelector(".purposes-banner");
    modal2.classList.remove("hidden");
    modal2.style.visibility = "visible";
    modal2.style.opacity = "1";
  });

  handleHideButtonClick([".button-accept", ".button-decline", ".button-decline-all", ".button-accept-all"], ".banner");

  handleHideButtonClick([".button-x-close", ".button-save"], ".purposes-banner");
});

