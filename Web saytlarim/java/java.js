// let color = document.querySelector(".color")

// color.style.color = " red"

// color.addEventListener("mouseover",  () =>{
//     color.style.color = "blue"
// })
let button = document.querySelector(".button-1")

// button.addEventListener("mouseover", () =>{
//     button.style.color = "blue"```

// })
button.addEventListener("mouseover", () =>{
    button.style.backgroundColor = "blue"
    button.style.color = "white"
})

button.addEventListener("mouseout", () =>{
    button.style.backgroundColor = "white"
    button.style.color = "blue"
})
    
