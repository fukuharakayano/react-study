import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<p>a</p>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/**
 * テンプレート文字列
 */

// const name = "福原";

// const age = 27;
// //私は福原です。年齢は27歳です。

// const message1 = "私は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私は${name}です。年齢は${age}です。`;
// console.log(message2);

// function func1(str) {
//   return str;
// }

// console.log(func1("func1です"));

// const func2 = (str1, str2) => {
//   return `${str1}/${str2}`;
// };

// console.log(func2("aaaa", "bbbb"));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です}`;

// /**
//  * デフォルト値
//  */

// const sayHallo = (name = "デフォルト値") => {
//   return console.log(`こんにちは${name}さん`);
// };

// sayHallo();

/**
 * スプレッド構文
 */

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, ...arr3] = arr2;

// console.log(num1);
// // console.log(num2);
// console.log(arr3);

//配列のコピーや結合

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map filter
 */

// const nameArr = ["田中", "佐藤", "山田"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log([...nameArr]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => {
//   return console.log(`${index + 1}番目は${name}さん`);
// });

// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "田中") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

const num = "1300";

console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力して";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100
    ? "１００を超えています！！！！！！！！！！！！！！！！！！！"
    : "OK";
};
console.log(checkSum(50, 51));
