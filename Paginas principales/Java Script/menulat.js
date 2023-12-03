function toggleMenu() {
    var menu = document.getElementById("menulat");
    var main = document.getElementById("main");
  
    if (menu.style.width === "250px") {
      menu.style.width = "0";
      main.style.marginLeft = "0";
    } else {
      menu.style.width = "250px";
      main.style.marginLeft = "250px";
    }
  }
  
  // Asigna la función al evento de clic en la imagen y el botón de menú
  document.getElementById("menu-btn").onclick = toggleMenu;

  