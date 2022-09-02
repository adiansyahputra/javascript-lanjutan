// Rest Parameter

// function myFunc() {
//   // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//   // return myArgs;
//   // return Array.from(arguments);
//   return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // let total = 0;
//   // for (const a of angka) {
//   //   total += a;
//   // }

//   // return total;

//   return angka.reduce((acc, curr) => acc + curr);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array destructuring
// const kelompok1 = ['adi', 'ansyah', 'putra', 'radit', 'pro'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// Object destructuring
// const team = {
//   pm: 'adi',
//   frontEnd1: 'ansyah',
//   frontEnd2: 'putra',
//   backEnd: 'radit',
//   ux: 'hendra',
//   devOps: 'Ferry',
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'adi', false, 10, true, 'doddy'));
