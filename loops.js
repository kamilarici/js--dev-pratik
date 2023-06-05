console.log("loops");
let Arr = [
  40, 55, 11, 90, 18, 76, 24, 83, 66, 88, 46, 69, 48, 96, 42, 18, 13, 33, 4, 42,
];

// let large = [];

// let small = [];
// for (let i = 0; i < Arr.length; i++) {
//   if (Arr[i] > large) {
//     large = Arr[i];
//   } else if (Arr[i] < large) {
//     small = Arr[i];
//   }
// }
// console.log(large);
let tek = [];
let cift = [];

for (let i = 0; i < Arr.length; i++) {
  if (Arr[i] % 2 === 1) {
    tek.push(Arr[i]);
  } else {
    cift.push(Arr[i]);
  }
}
console.log(tek);
console.log(cift);

let tutulanSayi = Math.trunc(Math.random() * 10);
console.log(tutulanSayi);
let counter = 5;
for (let i = 0; i < 5; i++) {
  counter--;
  let tahmin = prompt(
    "Lutfen 1 ile 10 arasinda bir sayi giriniz.." +
      counter +
      " " +
      "Kadar hakkiniz kaldi"
  );
  if (tahmin > 10 || tahmin < 0) {
    alert("istenilen aralıkta bir sayı giriniz");
  } else if (tahmin == tutulanSayi) {
    alert("Tebrikler Kazandiniz!!!");
    break;
  } else if (tahmin > tutulanSayi) {
    alert("Daha kucuk bir sayi giriniz");
  } else {
    alert("Daha buyuk bir sayi giriniz ");
  }
}
