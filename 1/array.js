// const fruits = new Array();
const fruits = [//シンタックスシュガー（簡単に書く書き方）
  "りんご",
  "バナナ"
];
console.log(fruits);


fruits.push("みかん");
console.log(fruits);


//callback 関数の中に関数
fruits.forEach((function(input){
  console.log(input);
}));

//一般的な関数の作り方
// function getItem(){}

//コールバック関数 名前がない関数(無名関数・匿名関数)

// ES6 アロー関数
// 関数の名前あり
const getItem = () => {
  console.log("アロー")
};
getItem();

//　関数の名前なし
fruits.forEach(input => console.log(input));


// Allay.filter
const scores = [10, 20, 30, 40];

const newScores = scores.filter((value) => {
  return value >= 30;
});

console.log(newScores);

// Array.find

const members = ["ホンダ", "カガワ","ナガトモ"];

const member = members.find((value) => value === "ナガトモ");

console.log(member);

// Array.map 配列をもとに新しい配列を作る

const userList = [10,20,30,40];

const userIdList = userList.map(value => `user_${value}`
);

console.log(userIdList);
console.table(userIdList);

