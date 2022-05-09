const myMap = new Map();

myMap.set("id", 3);
myMap.set("name","ホンダ");

console.log(myMap);

console.log(myMap.get("name"));


const valueList = myMap.values();

for ( value of valueList) {
  console.log(value);
}