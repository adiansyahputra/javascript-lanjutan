// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=53993ae&s=pokemon',
//   success: (movies) => console.log(movies),
// });

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(this.responseText);
//     console.log(mahasiswa);
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open('GET', 'http://www.omdbapi.com/?apikey=53993ae&s=pokemon');
// xhr.send();

// fetch('http://www.omdbapi.com/?apikey=53993ae&s=pokemon')
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('janji telah ditepati');
//   } else {
//     reject('ingkar janji');
//   }
// });

// janji1.then((response) => console.log('OK! : ' + response)).catch((response) => console.log('NOT OK! ' + response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('tidak ditepati setelah beberapa waktu!');
//     }, 2000);
//   }
// });

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log('selesai menunggu!'))
//   .then((response) => console.log('OK! : ' + response))
//   .catch((response) => console.log('NOT OK! : ' + response));
// console.log('selesai');

// Promise.all()
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: 'adi',
        sutradara: 'adi',
        aktor: 'adi',
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: 'JKT',
        temp: 26,
        kondisi: 'Cerah berawan',
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
