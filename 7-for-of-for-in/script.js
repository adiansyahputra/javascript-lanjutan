// for..of
// const mhs = ['adi', 'putra', 'ansyah'];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = 'adiansyah';
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ['adi', 'putra', 'ansyah'];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments

// function jumlahAngka() {
//   // return arguments.reduce((a, i) => a + i);
//   // arguments.forEach((a) => (jumlah += a));
//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: 'adiansyah',
  umur: 20,
  email: 'adi@gmail.com',
};

for (const m in mhs) {
  console.log(mhs[m]);
}
