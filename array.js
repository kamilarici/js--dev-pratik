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

let a = sayilar.shift();
console.log(a);
console.log(sayilar);
let c = ogrenciler.shift();
console.log(c);
console.log(ogrenciler);

// !DEC
function ahmet() {
  console.log("aaaaa");
}

// ! EXP
const mehmet = function () {
  console.log("aaaaa");
};

// ! ARROW
const fatma = () => {
  console.log("aaaaa");
};
