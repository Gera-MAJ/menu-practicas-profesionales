
const practicas = document.getElementById("practicas")
const listaPracticas = document.getElementById("listaPracticas")
const normativos = document.getElementById("normativos")
const listaNormativos = document.getElementById("listaNormativos")


//con este mouseover, es cuando se pasa el mouse por encima
practicas.addEventListener('mouseover', ()=>{
    
    listaPracticas.style.display = "block"    
})

//la característica mouseout es para cuando el dejan de pasar por encima con el mouse. 
listaPracticas.addEventListener('mouseout', ()=>{   
    listaPracticas.style.display = 'none'       
})

normativos.addEventListener("mouseover", () => {
    listaNormativos.style.display = 'block'
})

listaNormativos.addEventListener("mouseout", () => {
    listaNormativos.style.display = "none"
})

