let name = document.querySelector(".ism");
console.log(name.value);

let button = document.querySelector(".btn-1");
let sa = document.querySelector(".sa");

button.addEventListener("click", function(event) {
    event.preventDefault();
    sa.innerHTML = "Sayyor";
});