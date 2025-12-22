const images = [
    "img/uzum-2.png",
    "img/uzum.png",
    "img/uzum-3.png",
    "img/uzum-4.png",
    "img/uzum-5.png"
  ];
  
  let current = 0;
  const imageElement = document.getElementById("slider-image");
  
  function showImage(index) {
    imageElement.src = images[index];
  }
  
  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }
  
  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
  // ?kirish joyidagi kodlar

let bosish = document.querySelector(".bosish");
console.log(bosish);
if(bosish === 1234){
  console.log("Salom, xush kelibsiz!");
} else {
  console.log("Xato parol, qaytadan urinib ko'ring!");
}

let login = document.querySelector(".login");
console.log(login);



let kirish = document.querySelector(".kirish");
console.log(kirish);
kirish.addEventListener("click", function() {
  login.style.display = "block";
  
});


 
 


//  ?Yana korsatish joyidagi kodlar
  let yana = document.querySelector(".yana-korsat");
  console.log(yana);
  
  yana.addEventListener("click", function() {
    nextyana.style.display = "block"
    yana.style.display = "none";
  });
  
  let nextyana = document.querySelector(".yana");
  console.log(nextyana);


  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const card = btn.closest('.product-card');
        const id = card.getAttribute('data-id');
        const name = card.querySelector('.product-name').textContent;
        const priceText = card.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace(/[^\d]/g, '')); // Extract only numbers for calculation
        const image = card.querySelector('img').src;

        if (cart[id]) {
            cart[id].quantity += 1;
        } else {
            cart[id] = {
                id,
                name,
                price,
                image,
                quantity: 1
            };
        }

        console.log(' Cart:', cart);
        renderCartItems(); // Har qo‘shilganda modalni yangilaydi
    });
});





































//  ?Obyekt kutubxona

//  !Oddiy obyekt elon qilish
// const user = {
//     name: "Sayyor",
//     age: 19, 
//     isStudent: true
// };
// console.log(user.name);
// console.log(user);


// !o'zgaruvchi qo'shish
// user.city = "samarkand";
// user.age = 25;
// console.log(user);



//  !obyectning metodini chaqirish
// const user = {
//     name: "Sayyor",
//     age: 19,
//     greet: function (){
//         console.log("salom mening ismim" + this.name);
        
//     }
// };
//  !Obyectning metodini chaqirish
// user.greet();

//  !obyect ichida object
// const person = {
//     name: "ali",
//     contact:{
//         phone:"998901234567",
//         email: "asd@gmail.com"
//     }
// };
// console.log(person.contact.phone);
// console.log(person.contact.email);
//   !obyectni funksiyaga uzatish va undan foydalanish
// function xoxlaganNom (buYergaxam){
//     console.log("Foydalanuvchi" + buYergaxam.name);   
// }
// xoxlaganNom(user);

//  !Objectdan nusxa olish
// const newUser = {...user};

// console.log(newUser);

//  !Obyectni bo'sh xolda elon qilish

// const demoUser = {};
// demoUser.name = "ali";
// demoUser.age = 30;
// console.log(demoUser);

//   !delete propertyni o'chirish
// const salom = {name: "ali", age: 20};
// delete salom.age;
// console.log(salom);
//   !in operator-obyectda property borligini tekshirish
//  const users = [
//     {
//         name: "ali",
//         age:25
//     },
//     {
//         name: "vali",
//         age: 30
//     }
//  ];
//  console.log(users[0].name);
//  console.log(users[1].age);

//  ?tayyor input java.script
// let name = document.querySelector(".ism");
// let email = document.querySelector(".gmail");
// let number = document.querySelector(".nomer");
// let message = document.querySelector(".area");

// let btn = document.querySelector(".btn-1");

// !Tugma bosilganda ma'lumotlarni konsolga chiqarish

//     btn.addEventListener("click", () => {
//         event.preventDefault();
//         console.log("Foydalanuvchi ma'lumotlari:");
//         console.log("-------------------------");
//         console.log(`Ism: ${name?.value || "Noma'lum"}`);
//         console.log(`Email: ${email?.value || "Noma'lum"}`);
//         console.log(`Telefon raqam: ${number?.value || "Noma'lum"}`);
//         console.log(`Xabar: ${message?.value || "Noma'lum"}`);
//         console.log("-------------------------");
//     });


// !Agar input hodisasini ishlatmoqchi bo'lsangiz, uni alohida validatsiya uchun ishlating
// document.addEventListener('input', function () {
//     name.style.borderColor = name.value.length >= 5 ? "green" : "red";
//     email.style.borderColor = email.value.length >= 10 ? "green" : "red";
//     number.style.borderColor = number.value.length === 13 ? "green" : "red";
//     message.style.borderColor = message.value.length >= 20 ? "green" : "red";
// });