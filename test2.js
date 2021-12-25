function toggleClassMenu(e, Menu) {
    console.log("toggleClassMenu");
    Menu.classList.add("menu--animatable");
    Menu.classList.add("menu--visible");
  }
  
function onTransitionEnd(e, Menu) {
    console.log("onTransitionEnd");
    Menu.classList.remove("menu--animatable");
}

function main()
{
    var mainMenu = document.querySelector(".menu"),
    button = document.querySelector(".myButton");
    mainMenu.addEventListener("transitionend", function(e){ onTransitionEnd(e, mainMenu)}, false);
    button.addEventListener("click", function(e){ toggleClassMenu(e, mainMenu)}, false);
}

document.addEventListener("DOMContentLoaded", main);