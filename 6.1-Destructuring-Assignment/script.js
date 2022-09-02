// Destructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Adiansyah Putra'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping test
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: 'adiansyah putra',
//   umur: 20,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: 'adiansyah putra', umur: 20 });
// console.log(nama);

// Assign ke variable baru
// const mhs = {
//   nama: 'adiansyah putra',
//   umur: 20,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
//   nama: 'adiansyah putra',
//   umur: 20,
//   email: 'adiansyah24@gma',
// };

// const { nama, umur, email = 'email@gmail.com' } = mhs;
// console.log(email);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: 'adiansyah putra',
//   umur: 20,
//   email: 'adiansyah24@gma',
// };

// const { nama: n, umur: u, email: e = 'email@gmail.com' } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
//   nama: 'adiansyah putra',
//   umur: 20,
//   email: 'adiansyah24@gma',
// };

// const { nama: n, ...value } = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai untuk function
const mhs = {
  id: 123,
  nama: 'adiansyah putra',
  umur: 20,
  email: 'adiansyah24@gma',
};

function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs));
