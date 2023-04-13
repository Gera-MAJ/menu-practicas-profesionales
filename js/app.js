
const practicas = document.getElementById("practicas")
const listaPracticas = document.getElementById("listaPracticas")
const normativos = document.getElementById("normativos")
const listaNormativos = document.getElementById("listaNormativos")

//con este mouseover, es cuando se pasa el mouse por encima
practicas.addEventListener('mouseover', function(event){
    listaPracticas.style.display = "block"
})
//la característica mouseout es para cuando el dejan de pasar por encima con el mouse. 
practicas.addEventListener('mouseout', function(event){
    listaPracticas.style.display = 'none'
})

normativos.addEventListener("mouseover", () => {
    listaNormativos.style.display = 'block'
})

normativos.addEventListener("mouseout", () => {
    listaNormativos.style.display = "none"
})

