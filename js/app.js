
// Obtener todos los elementos del menú con submenús
const menuItems = document.querySelectorAll(".has-submenu a");

// Recorrer cada elemento del menú y agregar un event listener para el evento "mouseover"
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("mouseover", () => {
    const submenu = menuItem.querySelector(".submenu");
    if (submenu) {
      submenu.style.display = "block";
    }
  });

  // Agregar un event listener para el evento "mouseout"
  menuItem.addEventListener("mouseout", () => {
    const submenu = menuItem.querySelector(".submenu");
    if (submenu) {
      submenu.style.display = "none";
    }
  });
});
