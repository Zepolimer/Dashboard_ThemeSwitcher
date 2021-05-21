let myCheckbox = document.querySelector(".switch input"),
    switcher = document.querySelector(".checkbox");


function clickHandler() {
    if (myCheckbox.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }
  }
  switcher.addEventListener('click', clickHandler);