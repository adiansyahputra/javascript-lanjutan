// Lexical Scope
// function init() {
//   let nama = 'adiansyah'; ->local variable
//   function tampilNama() { ->inner function (closure*)
//     console.log(nama); ->akses ke parent variable
//   }
//   tampilNama();
// }

// init();

// function init() {
//   // let nama = 'adiansyah';
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let panggilNama = init();
// panggilNama('adi');

// Kenapa menggunakan Closure ?
// "Untuk membuat Function Factories."
// -MDN
// "Untuk membuat Function method."
// -MDN

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam('adi'));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
