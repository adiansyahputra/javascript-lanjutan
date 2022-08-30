// Cara untuk membuat Object pada javascript
// 1. Object Literal
// let mahasiswa = {
//   nama: 'Sandhika',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = (porsi) => {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   };

//   return mahasiswa;
// }

// let adi = Mahasiswa('adi', 95);

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = (porsi) => {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };

  this.main = (jam) => {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat main!`);
  };
}

let adi = new Mahasiswa('adi', 95);
