let son = 8;
let tub = true;

if (son < 2) tub = false;
for (let i = 2; i <= Math.sqrt(son); i++) {
  if (son % i === 0) {
    tub = false;
    
  }
}
console.log(tub ? "Tub son" : "Tub emas");