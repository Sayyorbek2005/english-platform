






















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







//  ? Arraylar
//  !Array elon qilish
 /* let fruits = ["olma", "anor", "uzum",];
console.log(fruits); */ 
//   !Logda oddiy chaqirish
// console.log(fruits[0]);
// console.log(fruits[2]);
//  !Array ichida oxiridan qo'shish
// fruits.push("banan");
// console.log(fruits);
//  !Array ichidan boshidan qo'shish
// fruits.unshift("anjir");
// console.log(fruits);
//  !oxirgi elementni o'chirish
// fruits.pop();
// console.log(fruits);
//  !boshidagi elementni o'chirish
// fruits.shift();
// console.log(fruits);
//  !Uzunlikni aniqlash
// console.log(fruits.length);
//  !Array ichidagi elementni for sikli bilan chaqirish
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//  !Ikkinchi yo'li
// fruits.forEach(function (item, index) {
//     console.log(index +  ": " + item);
// })
//  !map() - har bir elementni 2 ga ko'paytirish
// let numbers = [1, 2, 3, 4, 5];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled);
//  !filter() - faqat juft sonlarni olish
 /* let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); */
//  !find() - 3 ga teng bo'lgan elementni topish
// let found = numbers.find(num => num === 3);
// console.log(found);
//  !reduce() - barcha elementlarni qo'shish
// let sum = numbers.reduce((acc, num) => acc + num, );
// console.log(sum);
//  !sort() - Sonlarni kichikdan kattaga tartiblash
// let sorted = numbers.sort((a, b)=> a - b);
// console.log(sorted);
//  !Bo'sh array
// let newArr = [];
// newArr.push("yangi element");
// console.log(newArr);
//  !for orqali ko'chirish
// for (let i = 0; i < fruits.length; i++) {
//     newArr.push(fruits[i]);
// }
// console.log(newArr);
//  !spread operator orqali ko'chirish
// newArr = [...fruits];
// console.log(newArr);
//  !slice bilan nusxa olish
// let slicedFruits = fruits.slice();
// console.log(slicedFruits);
//  !Birinchi elementni ikkinchisiga ko'chirish
// let cars = ["BMW", "Mercedes", "Audi"];
// let carsArray = [];
// carsArray.forEach(function (item){
//     if(item === "BMW") {
//         carsArray.push("Mercedes");
//     }
// });
// console.log(carsArray);
