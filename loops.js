// console.log("loops");
// let Arr = [
//   40, 55, 11, 90, 18, 76, 24, 83, 66, 88, 46, 69, 48, 96, 42, 18, 13, 33, 4, 42,
// ];

// // let large = [];

// // let small = [];
// // for (let i = 0; i < Arr.length; i++) {
// //   if (Arr[i] > large) {
// //     large = Arr[i];
// //   } else if (Arr[i] < large) {
// //     small = Arr[i];
// //   }
// // }
// // console.log(large);
// let tek = [];
// let cift = [];

// for (let i = 0; i < Arr.length; i++) {
//   if (Arr[i] % 2 === 1) {
//     tek.push(Arr[i]);
//   } else {
//     cift.push(Arr[i]);
//   }
// }
// console.log(tek);
// console.log(cift);

// let tutulanSayi = Math.trunc(Math.random() * 10);
// console.log(tutulanSayi);
// let counter = 5;
// for (let i = 0; i < 5; i++) {
//   counter--;
//   let tahmin = prompt(
//     "Lutfen 1 ile 10 arasinda bir sayi giriniz.." +
//       counter +
//       " " +
//       "Kadar hakkiniz kaldi"
//   );
//   if (tahmin > 10 || tahmin < 0) {
//     alert("istenilen aralıkta bir sayı giriniz");
//   } else if (tahmin == tutulanSayi) {
//     alert("Tebrikler Kazandiniz!!!");
//     break;
//   } else if (tahmin > tutulanSayi) {
//     alert("Daha kucuk bir sayi giriniz");
//   } else {
//     alert("Daha buyuk bir sayi giriniz ");
//   }
// }
//? Donguler, bir kod bloğunu belirli bir koşula bağlı olarak tekrar tekrar çalıştırmak için kullanılan bir döngü yapısıdır.Bir başlangıç ifadesi, bir koşul ifadesi ve bir artırma/değiştirme ifadesi içerir.
​
//!==============================================
//! *************** FOR LOOP *****************
//!==============================================
​
//?for (başlangıç ifadesi; koşul ifadesi; artırma/değiştirme ifadesi) {
  //? Döngü gövdesi: Tekrarlanacak işlemler burada yer alır
//? }
​
// let total = []
// for(let i = 0 ; i <= 10 ; i++ ){
//     total.push(i)
// }
//console.log(total);
​
// let Arr1 = []
// for(let i = 0 ; i < 20 ; i++ ){
//     Arr.push(Math.trunc(Math.random() * 100 ))
// }
// console.log(Arr1);
// let Arr = [40, 55, 11, 90, 18, 76, 24, 83, 66, 88, 46, 69, 48, 96, 42, 18, 13, 33, 4, 42]
​
// //* Dizideki En buyuk ve En Kucuk sayiyi bulma 
​
// let largest = 0
// let smallest = Arr[0]
// for(let i = 0 ; i < Arr.length ; i++){
//     if(Arr[i] > largest){
//         largest = Arr[i]
//     }else if(Arr[i] < smallest){
//         smallest = Arr[i]
//     }
// } 
// console.log(largest);
// console.log(smallest);
​
// longNumArr = [1, 2, 3, 44, 5, 16, 17, 8, 9, 5, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 27, 31, 32, 33, 34, 35, 36, 37, 28, 39, 40, 41, 22, 34, 44, 45, 46, 47, 8, 4, 5]
​
//* Tekrar eden sayilari bulma
// let repeatingNumbers = []
// let counter = 0
// for(let i = longNumArr[0] ; i < longNumArr.length ; i++){
//     for(let j = longNumArr[0] ; j < longNumArr.length ; j++){
//         if(longNumArr[i] === longNumArr[j]){
//             counter++
//             if(counter >1){
//             repeatingNumbers.push(`Number ${longNumArr[i]} found ${counter} times in this array `)
            
//         }
//         }
//     }
//     counter = 0
// }
// console.log(repeatingNumbers);
​
// let dizi = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 4, 9, 10, 1, 2, 5];
// let tekrarEdenSayilar = [];
​
// for (let i = 0; i < dizi.length; i++) {
//     for (let j = i + 1; j < dizi.length; j++) {
//         if (dizi[i] === dizi[j] && !tekrarEdenSayilar.includes(dizi[i])) {
//             tekrarEdenSayilar.push(dizi[i]);
//             break;
//         }
//     }
// }
​
// console.log("Tekrar eden sayılar: " + tekrarEdenSayilar);
​
​
//* Diziyi erken sonlandirma
​
// var dizi = [1, 2, 3, 4, 5];
​
// for (var i = 0; i < dizi.length; i++) {
//     if (dizi[i] === 3) {
//         break;
//     }
//     console.log(dizi[i]);
// }
​
//* Dizide donerken istedigin yerde sonlandirma 
//? Mesela cift sayilari ve tek sayilari bulan bir dongu olusturalim     
//  //!Tek sayilari Bulma
// let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0 
// for (let i = 0; i < dizi.length; i++) {
//     if (dizi[i] %2 === 0 ) {
//         continue;
//     }
//     console.log(dizi[i]);
// }
//  //! Cift sayilari bulma
// for (let i = 0; i < dizi.length; i++) {
//     if (dizi[i] %2 !== 0 ) {
//         continue;
//     }
//     console.log(dizi[i]);
// }
​
​
//* ==============================================
//* *************** GUESS NUMBER *****************
//* ==============================================
​
​
// let tutulansayi = Math.trunc(Math.random()*10)
// console.log(tutulansayi);
// let counter = 5 
// for(let i = 0 ; i < 5 ; i++){
//     counter--
//     let tahmin = prompt("Lutfen bir sayi giriniz")
//     if(tutulansayi == tahmin){
//        alert("Tebrikler dogru bildiniz");
//         break
//     }else if(i === 4){
//         alert("Maalesef tum haklarinizi kullandiniz!!!");
//         break
//     }
//     else{
//         alert(`${counter} hakkiniz kaldi`)
//     }
// }
​
//? for döngüsü ve for...in döngüsü arasında bazı farklar vardır:
//? Kullanım Amacı:
//? for döngüsü, belirli bir aralıkta veya belirli bir koşula bağlı olarak tekrarlanması gereken işlemleri kontrol etmek için kullanılır.
//? for...in döngüsü, bir nesnenin enumerable (numaralandırılabilir) özelliklerini dolaşmak için kullanılır.
//? Dolaşma Yapısı:
//? for döngüsü, genellikle bir başlangıç ifadesi, bir koşul ifadesi ve bir artırma/değiştirme ifadesi içeren bir yapı kullanır.
//? for...in döngüsü, bir nesnenin özelliklerini üzerinde gezinmek için kullanılır ve her döngü adımında özelliğin adını döndürür.
//? Nesneler Üzerinde Gezinme:
//? for döngüsü, doğrudan bir nesne üzerinde gezinme yeteneğine sahip değildir. Genellikle diziler veya iterable nesnelerle kullanılır.
//? for...in döngüsü, bir nesnenin enumerable özelliklerini dolaşır. Nesnenin özelliğinin adını (anahtarını) döndürür.
​
​
let isimler = ["Ahmet", "Ayşe", "Mehmet", "Fatma", "Ali", "Zeynep", "Mustafa", "Selin", "Emre", "Elif"]
​
​
//!==============================================
//! *************** FOR IN **********************
//!==============================================
​
// for(let isim in isimler){
//     console.log(isim);
// }
const products = [
    {
        name : "NT1-a Condenser Mikrofon",
        brand : "Rode",
        price : 2000
    },
    {
        name : "Iphone XS",
        brand : "Apple",
        price : 2000
    },
    {
        name : "M-AUDIO Keystation 61",
        brand : "M-Audio",
        price : 5000
    },
    {
        name : "Iphone 12",
        brand : "Apple",
        price : 3500
    },
    {
        name : "SmartLav Plus+ Yaka Mikrofonu",
        brand : "Rode",
        price : 2700
    }
]
​
// for(let product in products){
//     console.log(products[product]);
// }
​
// for(let i = 0 ; i < products.length ; i++){
//     console.log(products[i]);
// }
​
​
//!==============================================
//! *************** FOR OF **********************
//!==============================================
​
//? Sadece iterable (yinelenebilir) nesnelerle çalışır, yani diziler, dizilere benzer objeler (örneğin, String) veya Map, Set gibi veri yapıları gibi nesnelerle kullanılabilir.
//? Döngü, iterable nesnenin her bir elemanını otomatik olarak gezer.
//? Her bir döngü adımında, döngünün içine giren değişken, iterasyonun mevcut elemanına atanır.
//? Döngü gövdeleri otomatik olarak yönetilir ve her eleman için yürütülür.
//*Hem for...in hem de for...of ifadeleri bir şeyi yineler. Aralarındaki temel fark, üzerinde yineleme yaptıkları şeydir.
​
//* for...in ifadesi bir nesnenin numaralandırılabilir dize özelliklerini yinelerken, for...of ifadesi yinelenebilir nesnenin yinelenmek üzere tanımladığı değerleri yineler.
​
// for(let isim of isimler){
    //     console.log(isim);
// }    
for(let product of products){
    console.log(product);
}
​
​
​
​
​
//!==============================================
//! *************** WHILE LOOP **********************
//!==============================================
​
​
//* ==============================================
//* *************** GUESS NUMBER *****************
//* ==============================================
//! While dongusu
​
// let tutulanSayi = prompt("Lutfen bir sayi tutunuz")
// let counter = 5
// let i = 0 
// while(i < 5){
//     let tahmin = Math.trunc(Math.random()*10)
//     counter--
//     if(tahmin == tutulanSayi){
//         alert(`Bu sefer bildim Tuttugun sayi ${tahmin}`)
//         break
//     }else if(i ===4){
//         alert("Maalesef haklarim bitti sen kazandin!!!")
//         break
//     }else{
//         alert(`Bilemedim son ${counter} sansim `)
//     }
//     i++
// }
​
​
//!==============================================
//! *************** DO WHILE LOOP ***************
//!==============================================
​
// i  = 0;
// do {
// document.write( isimler[i] + "<br>");
// i++;
// console.log(isimler[i]);
// }  while(i < isimler.length-1);