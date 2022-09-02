// 1. HTML Fragments
// const mhs = {
//   nama: 'adi',
//   umur: 20,
//   nim: '123',
//   email: 'adi@gmaill.com',
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class='nim'>${mhs.nim}</span>
// </div>`;

// document.body.innerHTML = el;

// 2. Looping
// const mhs = [
//   {
//     nama: 'adi',
//     email: 'adi@gmail.com',
//   },
//   {
//     nama: 'ansyah',
//     email: 'ansyah@gmail.com',
//   },
//   {
//     nama: 'putra',
//     email: 'putra@gmail.com',
//   },
// ];

// const el = `<div class="mhs">
//   ${mhs
//     .map(
//       (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//     )
//     .join('')}
// </div>`;

// document.body.innerHTML = el;

// 3. Conditionals
// ternary
// const lagu = {
//   judul: 'Kau Adalah',
//   penyanyi: 'Isyana Saraswati',
//   feat: 'Rayi Putra',
// };

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
  nama: 'adiansyah',
  semester: 5,
  mataKuliah: ['Rekayasa Web', 'Analisis dan Perancangan Sistem Informasi', 'Pemrograman Sistem Interaktif', 'PSBO'],
};

function cetakMataKuliah(mataKuliah) {
  return `
  <ol>
  ${mataKuliah.map((mk) => `<li>${mk}</li>`).join('')}
  </ol>
  `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
