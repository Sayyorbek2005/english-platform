// //  !Oddiy obyekt elon qilish
// const user = {
//     name: "Sayyor",
//     age: 19, 
//     isStudent: true
// };
// console.log(user.name);
// console.log(user);


// // !o'zgaruvchi qo'shish
// user.city = "samarkand";
// user.age = 25;
// console.log(user);



// //  !obyectning metodini chaqirish
// const user = {
//     name: "Sayyor",
//     age: 19,
//     greet: function (){
//         console.log("salom mening ismim" + this.name);
        
//     }
// };
// //  !Obyectning metodini chaqirish
// user.greet();

// //  !obyect ichida object
// const person = {
//     name: "ali",
//     contact:{
//         phone:"998901234567",
//         email: "asd@gmail.com"
//     }
// };
// console.log(person.contact.phone);
// console.log(person.contact.email);
// //   !obyectni funksiyaga uzatish va undan foydalanish
// function xoxlaganNom (buYergaxam){
//     console.log("Foydalanuvchi" + buYergaxam.name);   
// }
// xoxlaganNom(user);

// //  !Objectdan nusxa olish
// const newUser = {...user};

// console.log(newUser);

// //  !Obyectni bo'sh xolda elon qilish

// const demoUser = {};
// demoUser.name = "ali";
// demoUser.age = 30;
// console.log(demoUser);

// //   !delete propertyni o'chirish
// const salom = {name: "ali", age: 20};
// delete salom.age;
// console.log(salom);
// //   !in operator-obyectda property borligini tekshirish
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