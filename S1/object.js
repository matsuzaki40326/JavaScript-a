const array = [1,2,3];

console.log(array[1]);

const array2 = [
  ["赤","青","黄"],
  ["緑","紫","黒"]
]

console.log(array2[1][1]);

// オブジェクト
const member = {
  name: "ホンダ",
  height: 170,
  hobby: "サッカー"
}

console.log(member);
console.log(member.name);
console.log(member.height);

const member2 = {
  "honda": {
    height: 170,
    hobby: "サッカー"
  },
  "kagawa": {
    height: 165,
    hobby: "サッカー"
  }
}

console.log(member2.kagawa.height);

const member3 = {
  "1kumi": {
    honda: {
      height: 170,
      hobby: "サッカー"
    },
    kagawa: {}
  }
}

console.log(member3["1kumi"]["honda"]["hobby"]);
console.log(member3);