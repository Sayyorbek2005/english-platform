let name = document.querySelector(".ism");
console.log(name.value);

let button = document.querySelector(".btn-1")
button.addEventListener("click", function() {
    console.log(`Hello ${name.value}`); 
    console.log("salom");
    
    
});