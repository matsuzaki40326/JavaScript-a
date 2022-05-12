// if (条件) {
//   trueなら実行
// } else {
//   falseなら実行
// }


const height = 90;
if (height == "90") {
  console.log(`身長は${height}cmです`);
}

// == 一致
// ===　型も一致

if (height === "90") {
  console.log(`身長は${height}cmです`);
}else{
  console.log(`身長は厳密には90cmではありません`);
}

const signal = "blue";

if(signal === "red") {
  console.log("止まれ");
}else if(signal === "yellow"){
  console.log("一旦停止");
}else{
  console.log("進む")
}

const speed = 60;
if(signal === "blue"){
  if(speed >= 60){ //ネスト
    console.log("スピード違反");
  }
}

// 三項演算子
// if else
// 条件 ? true : false

// const score = 80;
// const comment = score > 80 ? "good" : "not good"
// console.log(comment);



// 繰り返し
// for 繰り返しの回数を指定
// for in あまり使われない
// for of (ES6) 使いやすい

const scores = [10,20,30];

//one of them
for( score of scores ){
  console.log(score);
}

// for(初期値;　繰り返す条件;増減)

for(let i = 0; i <= 10; i++){
  console.log(i);
}


// switch

const data = 1;

switch(data) {
  case 1:
    console.log("1です");
    break;
  case 2:
    console.log("2です");
    break;
  case 3:
    console.log("3です");
    break;
  default:
    console.log('1,2,3ではありません');
    break;
}

if(data === 1){
  console.log(1);
}
if(data === 2){
  console.log(2);
}
if(data === 3){
  console.log(3);
}