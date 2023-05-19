// // // !fibonaci sorusu*********************
// /*let n1 = 1;
// let n2 = 1;
// let next;
// let i;
// let son;

// let num = prompt("lütfen bir sayi giriniz");
// while (num <= 0) {
//   num = prompt("lütfen sıfırdan büyüük bir sayı giriniz");
// }

// for (i = 1; i <= num; i++) {
//   son = n1;
//   next = n1 + n2;
//   n1 = n2;
//   n2 = next;
// }
// console.log(son);
// */
// //?*************************

// 5
// let toplam = 0;
// let n = +prompt("lütfen bir sayı giriniz");
// for (let i = 1; i <= n; i++) {
//   toplam += i;

// }
// console.log(toplam);
// let n = +prompt("kaç adet tamsayı istıyorsunuz ");
// let rasgele = 0;
// for (let i = 1; i <= n; i++) {
//   rasgele = Math.trunc(Math.random() * 100);
//   console.log(`${i} sayınız ${rasgele}`);
// }

// let sayı = +prompt("lütfen bir sayı giriniz");
// let sonuc = true;
// for (let i = 2; i < sayı; i++) {
//   if (sayı % i == 0) {
//     sonuc = false;

//     break;
//   }
// }
// console.log(sonuc > false ? "asaldır" : "sayınız asal değil");

// let number3 = +prompt("Please enter the number");
// let isPrime = number3>=2;
// for (let i = 2; i < number3; i++) {
//     if (number3 % i == 0) {
//     isPrime = false;
//     break;
//     }
// }
// console.log(isPrime>0 ? "Asal" : "Asal degil");

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let not = +prompt("lütfen notunuzu giriniz");

// while (not >= 100 || not < 0) {
//   console.log("notunuz sıfırdan  küçük yada yüzden büyük olamaz ");
//   not = prompt("tekrar notunuzu giriniz");
// }
// console.log("notunuz doğru");

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log("kamil");
//   } else {
//     console.log("arıcı");
//   }
// }

// let toplam = 0;
// for (let i = 50; i >= 1; i--) {
//   toplam += i;
//   console.log(i);
// }
// console.log(toplam);

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// let a = 0;
// while (a <= 10) {
//   if (a % 2 == 0) {
//     console.log(`çiftler:${a}`);
//   } else {
//     console.log(`tekler: ${a}`);
//   }
//   a++;
// }

// let b = 0;
// do {
//   console.log(b);
//   b++;
// } while (b <= 10);

// let c = 1;
// let toplam = 0;
// do {
//   if (c % 2 == 1) {
//     toplam += c;
//   }
//   c++;
// } while (c <= 20);
// console.log(toplam);

// let j = 0;
// while (j <= 10) {
//   j++;
//   if (j > 10) {
//     break;
//   }
//   if (j == 8) {
//     continue;
//   }
// }

// const daireAlan = (yarıcap) => Math.PI * (yarıcap * yarıcap);

// console.log(daireAlan(5).toFixed(1));

// function myFunction() {
//   carName = "volvo";
//   return carName;
// }
// const add = (n1, n2) => n1 + n2;
// const sub = (n1, n2) => n1 - n2;
// const mul = (n1, n2) => n1 * n2;
// const div = (n1, n2) => n1 / n2;

// const compute = (n1, n2, operator) => {
//   let result;
//   switch (operator) {
//     case "+":
// result=n1+n2
//       result = add(n1, n2);
//       break;
//     case "-":
//       result = sub(n1, n2);
//       break;
//     case "x":
//       result = mul(n1, n2);
//       break;
//     case "/":
//       result = div(n1, n2);
//       break;

//     default:
//       break;
//   }
//   return result;
// };
// const n1 = +prompt("first number");
// const n2 = +prompt("second number");
// const operator = prompt("operator:");

// console.log(`${n1}${operator}${n2} =${compute(n1, n2, operator)}`);

// const facto = (n) => {
//   let f = 1;
//   for (let i = n; i > 1; i--) {
//     f = f * i;
//   }
//   return f;
// };

// const number = +prompt("number");
// console.log(`facto(${number})=${facto(number)}`);
// küp(3);

// function küp(sayı) {
//   let sonuç = sayı * sayı * sayı;
// console.log(sonuç);
// }
// sonuç;

// function merhaba(isim) {
//   console.log("merhaba benim adım" + " " + isim);
// }
// merhaba("kamil");

// const isim = (isim = "veli") => {
//   console.log("merhaba benim adım" + " " + isim);
// };

// isim();

//  function sayı(a, b, c) {
//   return (a % b) * c;
// }

// console.log(sayı(8, 5, 10)); */
//  let n1 = prompt("lütfen yaşınızı giriniz ");

// function oy(n1) {
//   if (n1 < 0) {
//     yaş = prompt("sıfırdan büyük bir sayı giriniz");
//   } else if (n1 >= 18) {
//     console.log("oy kullanabilirsiniz");
//   } else {
//     console.log("oy kullanamazsınız");
//   }
//   return yaş;
// }

// oy(50);
// function işlem(p1, p2, p3) {
//   console.log(p1);
//   console.log(p2);
//   console.log(p3);
// }
// işlem(`ali`, 4, [1, 2, 3]);

// function calFahrenheit(deg) {}
//? *******************

/*let sayı = prompt("bir sayı giriniz");
let toplam = 0;
for (let i = 0; i <= sayı; i++) {
  toplam += i;
}
console.log("toplam sayı:", toplam);*/

/*for (let i = 1; i <= 10; i++) {
  let number = Math.round(Math.random() * 100);
  console.log(number);
}
let i = 1;
while (i <= 10) {
  console.log("merhaba");
  i++;
}*/

// let number1 = prompt("lütlen bir sayı giriniz");

// while (number1 < 0 || number1 > 100) {
//   console.log("tekrar sayı girmeniz gerekecek");
//   number1 = +prompt("0-100  arasında bir sayı giriniz");
// }
// console.log(number1);

/*do {
  number = +prompt("Please enter the number (0-100)");
} while (number < 0 || number > 100);
console.log(number);*/

// let number7 = 0;
// let total = 0;
// let count7 = 0;
// let avarage = 0;

// do {
//   number7 = prompt("lütfen notlarınızı giriniz");
//   if (number7 == "q" || number7 == "Q") {
//     console.log("işlem tamamlandı");
//   } else {
//     total += Number(number7);
//     count7++;
//   }
// } while (!(number7 == "q" || number7 == "Q"));
// avarage = total / count7;
// console.log(avarage);

//? ÖRNEK 8 - SLAYT 13
//? Tahmin Oyunu

/*// * AÇIKLAMA =>  İlk olarak 0-100 arası rastgele sayı oluşturuyoruz. Daha sonra kullanıcıdan bir tahminde bulunmasını istiyoruz. Kullanıcı her tahminde bulunduğunda sayacı 1 artırıyoruz. Kullanıcının tahminine göre düşük veya yüksek yazdırıyoruz. Kullanıcı sayıyı doğru tahmin ederse doğru tahmin ettiğini yazdırıyoruz. Tahmin edemezse tahmin edemediğini ve tahmin etmesi gereken sayıyı yazdırıyoruz.

//* let guess => Kullanıcının tahmini
const number8 = Math.round(Math.random() * 100); // Rastgele oluşturulan sayı
let count8 = 1; // Kullanıcının kaçıncı hakkında olduğunu gösteren sayaç

do {
  let guess8 = +prompt("Please enter the guess");
  if (number8 > guess8) {
    console.log("number is bigger than your guess");
  } else if (number8 < guess8) {
    console.log("number is lower than your guess");
  } else {
    console.log(`
        Congratulations. You know on ${count8}. guess. Number is ${number8}`);
    break;
  }
  count8++;
  if (count8 > 5) {
    console.log(`You did not know. Number is ${number8}`);
    break;
  }
} while (count8 <= 5);*/

//? ******* selman hoca sorular********

// soru-1 1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları konsola yazdırınız ?

// let a = [1, 2, 3, 4, 5]
// let sayac = 0

// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i)
//     sayac++
//   }
// }
// console.log(sayac)

// soru-2 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let sayac = 0
// let toplam = 0

// while (sayac < 5) {
//   let sayi = +prompt('Lütfen Bir sayı giriniz')
//   toplam += sayi

//   sayac++
// }

// console.log(toplam / sayac);

// soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while)

// let durum = true
// let sum = 0

// while (durum) {
//   let sayi = +prompt('Sayı giriniz')

//   if (sayi < 0) {

//     durum = false
//     continue
//   }

//   sum += sayi
// }

// console.log(sum)

// let durum1 = true
// let sum2 = 0

// while (durum1) {
//   let sayi = +prompt('Sayı giriniz')

//   if (sayi < 0) {

//     break
//   }

//   sum2 += sayi
// }

// console.log(sum2)

// soru-4 sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.

// soru-5 Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)

// soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız ?  // 0 1 1 2 3 5 8 13

// soru-7 Aşağıdaki çıktıyı konsola yazdırınız

// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
// // * * * * *
// ​
// let stars = ''
// for (let i = 0; i < 5; i++) {
//   stars += '\n'
//   for (let j = 0; j < 5; j++) {
//     stars += '* '
//   }
// }
// console.log(stars)

// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?

// 0
// 00
// 000
// 0000
// 00000
// 000000

// let i = 1;
// for (let i = 1; i <= 19; i++) {
//   let i = i - 1 + (i - 2);
//   console.log(i);
// }

// let n1 = 1;
// let n2 = 1;
// let next;
// let i;
// let son;
// let num = prompt("lütfen bir sayı giriniz");
// while (num <= 0) {
//   num = prompt("lütfen sıfırdan büyük bir sayı giriniz");
// }

// for (i = 1; i <= num; i++) {
//   son = n1;
//   next = n1 + n2;
//   n1 = n2;
//   n2 = next;
// }
// console.log(son);

/* let num;
do {
    num = +prompt('Enter a number.')
} while (num<0); */

//? ****************

// 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

// console.log(calFahrenheit(30)) // output: 86

// output: 86

// function calFahrenheit(deg) {
//   let fahr = (deg * 9) / 5 + 32;

//   return fahr;
// }
// console.log(calFahrenheit(30));

// 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh

let str = "hello world";

console.log(reverseString("hello world"));

function reverseString(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

// 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?
// const string = 'selles'
// console.log(isPalindrome(string)) // output: true​// const string = 'alila'

// console.log(isPalindrome(string)) // output: true

// function isPalindrome(str) {
//   let newStr = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }

//   if (str == newStr) {
//     return true
//   } else {
//     return false
//   }
// }

// 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?(includes)
// console.log(findVowels('hello world')) // output: eoo
// let deneme = "hello world";
// console.log(findVowels('hello world')) // output: eoo

// const str1 = "hello world";

// function findVowels(str) {
//   let vowels = "";
//   let sesliler = "aeıioöuü";

//   for (let i = 0; i < str.length; i++) {
//     if (sesliler.includes(str[i])) {
//       vowels += str[i];
//     }
//   }

//   return vowels;
// }

// console.log(findVowels("hello world"));

// }//******** */
// findVowels();
// 5- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) // output: 28

function tam(sayi) {
  let toplam = 0;
  for (let i = 1; i <= sayi; i++) {
    if (sayi % i == 0) {
      toplam += i;
    }
  }
  return toplam;
}
console.log(tam(12));

//* ikinci yöntem
// const sayi = 24 // 24 12 8 6 4 3 2 1

// function sumOfDivisors(num) {
//   let list = []
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       list.push(i)
//       console.log(i)
//     }
//   }

//   return list
// }
// console.log(sumOfDivisors(sayi))

// 6- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true

// function asalMi(sayı1) {
//   for (let i = 2; i < sayı1; i++) {
//     if (sayı1 % i == 0) {
//       console.log(false);
//       break;
//     } else {
//       console.log(true);
//       break;
//     }
//   }
// }
// asalMi(13);

// 7- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.
// console.log(factorial(5)) // output: 120

function fakto(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fakto(n - 1);
  }
}

console.log(fakto(5));

// 8- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 9
k = [1, 2, 3, 4];
for (let i = 0; i <= k.length; i++) {
  if (k[i] > k[i + 1]) {
  }
} //********* */

// 9- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 45

let toplam = 0;
// let g = [1, 2, 3, 4];

function toplam5(g) {
  for (let i = 0; i < g.length; i++) {
    toplam += g[i];
  }

  console.log(toplam);
}
toplam5([1, 2, 3, 4]);
// 10-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.
let toplam3 = 0;
function kelimeSay(n1) {
  toplam3 = console.log(n1.split(" "));
  // return toplam3;
}
let güncel = kelimeSay("ben yarın düğüne gideceğim");

// console.log(findWordCount('hello world')) // output: 2

// 11- Girilen bir sayının pozitif çarpanlarını bulan bir fonksiyon yazınız
// console.log(findPositiveDivisors(12)) // output: [1, 2, 3, 4, 6, 12]
function pozitif(k) {
  for (let i = 1; i <= k; i++) {
    if (k % i == 0) {
      console.log(i);
    }
  }
}
pozitif(12);

//! **********tw1************
// let input1 = "days. big make things little";

// let son = "";
// function output(input1) {
//   input1 = input1.split(" ");
//   for (let i = input1.length - 1; i >= 0; i--) {
//     son += input1[i] + " ";
//   }
//   return son;
// }
// console.log(output(input1));

// //! ********* tw2**********
// let cümle = "Clarusway Rocks!";

// function ttersi(cümle) {
//   let son = "";
//   for (let i = cümle.length - 1; i >= 0; i--) {
//     son += cümle[i];
//   }
//   return son;
// }
// console.log(ttersi(cümle));
