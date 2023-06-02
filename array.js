// ! ***************************************array metotlar
const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ["sezer", "ali", "hasan", "ayse"];

const ogrenciler = [
  { id: 12, isim: "sezer", yas: 30 },
  { id: 22, isim: "hasan", yas: 15 },
  { id: 32, isim: "fatma", yas: 55 },
  { id: 13, isim: "nuriye", yas: 19 },
  { id: 92, isim: "kemal", yas: 45 },
  { id: 15, isim: "mustafa", yas: 75 },
  { id: 44, isim: "ceren", yas: 30 },
];

const y =
  ogrenciler.map((x) => x.yas).reduce((x, y) => x + y) / ogrenciler.length;
console.log(y);
// let a = ogrenciler.yas.reduce((x, y) => x + y);

// çift 40 büyük maaş toplamı
//! ******************************************
const tam = ogrenciler2
  .filter((x) => x.id % 2 === 0 && x.yas > 40)
  .reduce((x, y) => x + y.maas, 0);
console.log(tam);
// let c = ogrenciler.push({ id: 15, isim: "kml", yas: 33 });
// console.log(c);
// console.log(ogrenciler);
// // let a = sayilar.map((item) => item * 3);
// console.log(a);
// let a = isimler.concat(sayilar);
// console.log(a);
// let a = ogrenciler.filter((x) => x.yas > 20 && x.yas < 46);
// console.log(a);
// let a = ogrenciler.find((item) => item.yas > 30);
// console.log(a);
// console.log(ogrenciler);
// let a = ogrenciler.filter((item) => item.id % 2 === 1);
// console.log(a);
// console.log(ogrenciler);
// let a = sayilar.forEach(function (sayi) {
//   console.log(sayi * 2);
// });
// console.log(sayilar);
// let a = isimler.includes(`ali`);
// console.log(a);

// let a = ogrenciler.find((item) => item.id === 32);
// console.log(a);
// console.log(ogrenciler);

// let a = isimler.splice(1);
// console.log(a);
// console.log(isimler);

// let a = sayilar.splice(2, 0, 44, 55);
// console.log(a);
// console.log(sayilar);

// let b = isimler.slice(1, 3);
// console.log(b);
// console.log(isimler);
// let a = sayilar.slice(1, 5);
// console.log(a);
// console.log(sayilar);

// let c = ogrenciler.push('id: 15, isim:"kml", yas: 33');
// console.log(c);
// console.log(ogrenciler);
// let a = sayilar.push(2222);
// console.log(a);
// console.log(sayilar);

// let b = isimler.push("kamil");
// console.log(b);
// console.log(isimler);
// let c = ogrenciler.pop();
// console.log(c);
// console.log(ogrenciler);
// let d = sayilar.unshift(100);
// console.log(d);
// console.log(sayilar);

// let e = isimler.unshift("noah");
// console.log(isimler);

// let a = sayilar.pop();
// console.log(a);
// console.log(sayilar);

// let b = isimler.pop();
// console.log(b);
// console.log(isimler);
// let f=
// let a = sayilar.shift();
// console.log(a);
// console.log(sayilar);
// let c = ogrenciler.shift();
// console.log(c);
// console.log(ogrenciler);

// // !DEC
// function ahmet() {
//   console.log("aaaaa");
// }

// // ! EXP
// const mehmet = function () {
//   console.log("aaaaa");
// };

// // ! ARROW
// const fatma = () => {
//   console.log("aaaaa");
// };
