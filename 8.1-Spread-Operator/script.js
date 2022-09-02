// Spread Operator
// memecah iterables menjadi single element

// const mhs = ['adi', 'ansyah', 'putra'];
// console.log(...mhs[0]);

// Menggabungkan 2 array
// const mhs = ['adi', 'ansyah', 'putra'];
// const dosen = ['ade', 'hendra', 'wanda'];
// const orang = [...mhs, 'adiansyah putra', ...dosen];
// // const orang = mhs.concat(dosen);
// console.log(orang);

// meng-copy array
// const mhs = ['adi', 'ansyah', 'putra'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'FAJAR';
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
