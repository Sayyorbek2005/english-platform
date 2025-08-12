// script.js
const character = {
    name: 'Alisa',
    age: 25,
    health: 100
};

document.getElementById('name').innerText = character.name;
document.getElementById('age').innerText = character.age;
document.getElementById('health').innerText = character.health;


function changeName() {
    const newName = prompt("Yangi ism yoz:");
    if(newName && newName.trim().length > 0){
        character.name = newName;
        document.getElementById('name').innerText = character.name;
    }
}


function increaseHealth() {
    if(character.health >= 100) return alert("Maksimal jon!");
    character.health += 10;
    updateHealth();
}


function decreaseHealth() {
    if(character.health <= 0) return alert("Minimal jon!");
    character.health -= 10;
    updateHealth();
}


function updateHealth(){
    document.getElementById('health').innerText = Math.max(Math.min(character.health, 100), 0); 
}