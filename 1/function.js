// function test(引数) {
//   処理

//   戻り値
//   return 戻り値;
// }


// インプット引数なし
// アウトプットなし

function test(){
  console.log("test");
}

test();


// インプット引数あり
// アウトプット戻り値なし

const comment = "コメント";
const comment2 = "コメント2"

function getComment(string){
  console.log(string);
}

getComment("こめんと");
getComment(comment);
getComment(comment2);


// インプット引数なし
// アウトプット戻り値あり

function getNumberOfComment(){
  return 5;
}

console.log(getNumberOfComment());

const NumberOfComment = getNumberOfComment();
console.log(NumberOfComment);


// インプット2つ
// アウトプットもあり

function sumPrice(int1, int2){
  let int3 = int1 + int2;
  return int3;
}

const total = sumPrice(3,5);
console.log(total);