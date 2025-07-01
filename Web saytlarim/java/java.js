alert("salom dunyo");
alert("MEning ismim sayyor!");


let button = document.querySelector(".btn");
console.log(button);
let modal = document.querySelector(".salom")
console.log(modal);

button.addEventListener("click", function () {
console.log("Sayyor you clciked me");
modal.style.display = "none"

button.style.backgroundColor = "red";

button.style.color = "white";

button.style.padding = "10px";

button.style.border = "none";

button.style.borderRadius = "5px";
button.innerHTML = "Sayyor";

})


let remove = document.querySelector(".remove");

console.log(remove);

remove.addEventListener("click", function(){
    modal.style.display = "block"
//     button.innerHTML = "click";
//     button.style.backgroundColor = "transparent";

// button.style.color = "black";

// button.style.padding = "2px";

// button.style.border = "1px solid black";

// button.style.borderRadius = "3px";



})




