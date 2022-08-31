// Function Expression
// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama('adiansyah'));

// const tampilNama = (nama) => {
//   `Halo, ${nama}`;
// };

// console.log('putra');

// Arrow Function
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama('ADI', 'Malam'));

// Implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log('adiansyah putra');

// const tampilNama = () => 'Hello World!';
// console.log(tampilNama());

let mahasiswa = ['adiansyah putra', 'raditya hapusan', 'putra'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// kalau mau buat objek
let jumlahHuruf = mahasiswa.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
console.log(jumlahHuruf);
