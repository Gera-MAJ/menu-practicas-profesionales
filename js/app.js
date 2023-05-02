
const practicas = document.getElementById("practicas")
const listaPracticas = document.getElementById("listaPracticas")
const normativos = document.getElementById("normativos")
const listaNormativos = document.getElementById("listaNormativos")


//con este mouseover, es cuando se pasa el mouse por encima
practicas.addEventListener('mouseover', ()=>{  
    listaPracticas.style.display = "block"    
})

listaPracticas.addEventListener('mouseover', () => {
    listaPracticas.style.display = 'block'
})
//la característica mouseout es para cuando el dejan de pasar por encima con el mouse. 
listaPracticas.addEventListener('mouseout', ()=>{   
    listaPracticas.style.display = 'none'       
})

practicas.addEventListener('mouseout', ()=>{   
    listaPracticas.style.display = 'none'       
})

normativos.addEventListener("mouseover", () => {
    listaNormativos.style.display = 'block'
})

listaNormativos.addEventListener('mouseover', ()=> {
    listaNormativos.style.display = 'block'
})

listaNormativos.addEventListener("mouseout", () => {
    listaNormativos.style.display = "none"
})

normativos.addEventListener('mouseout', ()=>{   
    listaNormativos.style.display = 'none'       
})




// Obtener todos los elementos del menú con submenús
const menuItems = document.querySelectorAll("nav li");

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
