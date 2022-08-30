// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM : Tidak efektif untuk objek yang banyak
// let mahasiswa = {
//   nama: 'Sandhika',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
// const methodMahasiswa = {
//   makan: (porsi) => {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
//   main: (jam) => {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },
//   tidur: (jam) => {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let adi = Mahasiswa('adi', 95);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = (porsi) => {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   this.main = (jam) => {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat main!`);
//   };
// }

// let adi = new Mahasiswa('adi', 95);

// versi Prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, Selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, Selamat main!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, Selamat tidur!`;
// };

// let adi = new Mahasiswa('adi', 90);

// versi Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat main!`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat tidur!`;
  }
}

let adiii = new Mahasiswa('adiii', 92);
