// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = 'Adiansyah';
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const adi = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = 'Adiansyah';
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const adi = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: 'adi',
//   umur: 20,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     console.log(this);
//   },
// };

// const Mahasiswa = function () {
//   this.nama = 'Adiansyah';
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const adi = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
