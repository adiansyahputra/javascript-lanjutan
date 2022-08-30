// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// creation phase pada Global Context
var nama = 'Adiansyah';
console.log(nama);

// nama var = undefined
// nama function = fn()
// hoisting
// window = global objek
// this = window

// execution phase
console.log(sayHello());

var nama = 'Adiansyah';
var umur = 33;

function sayHello() {
  return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}

// function membuat local Execution Content
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Adiansyah Putra';
// var username = '@adiansyahputra';

// function cetakURL(username) {
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//   console.log('ini a');

//   function b() {
//     console.log('ini b');

//     function c() {
//       console.log('ini c');
//     }

//     c();
//   }

//   b();
// }

// a();

function satu() {
  var nama = 'Sandhika';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);
