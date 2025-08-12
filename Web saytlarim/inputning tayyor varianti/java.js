let name = document.querySelector(".ism");
let email = document.querySelector(".gmail");
let number = document.querySelector(".nomer");
let message = document.querySelector(".area");

let btn = document.querySelector(".btn-1");

// Tugma bosilganda ma'lumotlarni konsolga chiqarish

    btn.addEventListener("click", () => {
        event.preventDefault();
        console.log("Foydalanuvchi ma'lumotlari:");
        console.log("-------------------------");
        console.log(`Ism: ${name?.value || "Noma'lum"}`);
        console.log(`Email: ${email?.value || "Noma'lum"}`);
        console.log(`Telefon raqam: ${number?.value || "Noma'lum"}`);
        console.log(`Xabar: ${message?.value || "Noma'lum"}`);
        console.log("-------------------------");
    });


// Agar input hodisasini ishlatmoqchi bo'lsangiz, uni alohida validatsiya uchun ishlating
document.addEventListener('input', function () {
    name.style.borderColor = name.value.length >= 5 ? "green" : "red";
    email.style.borderColor = email.value.length >= 10 ? "green" : "red";
    number.style.borderColor = number.value.length === 13 ? "green" : "red";
    message.style.borderColor = message.value.length >= 20 ? "green" : "red";
});