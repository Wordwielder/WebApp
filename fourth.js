let arr1 = [1,2,3];
let arr2 = ["one", 2,"three"];
let arr3 = [[1,2,3,],["one", 2,"three"]];
let arr4 = [
  {name: "Fred",type:"object",luckyNumber:[5,7,13]},
  [
    {name : "Susan" , type:"object"},
    {name : "Anthony", type:"object"}
  ], 1, () => "arrays can contain functions too",
  "three"
];

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log("----------------------------------------------------------------");
console.log(arr1[0]);
console.log(arr1[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);
console.log(arr4[3]());

console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

arr1[4]= 5;
console.log(arr1);;
console.log(arr1.length);

console.log(arr2[10]);
console.log(arr2.length);
console.log("----------------------------------------------------------------");


let arr5 = new Array();
let arr6 =new Array(1,2,3);
let arr7 = new Array(2);
let arr8 = new Array("2");

console.log(arr5);
console.log(arr5.length);

console.log(arr6);
console.log(arr6.length);

console.log(arr7);
console.log(arr7.length);

console.log(arr8);
console.log(arr8.length);
console.log("----------------------------------------------------------------");
// push , pop을 사용하면 기존 배열을 충분히 스택처럼 활용가능하다
let arr9 = ["b" , "c" ,"d"];
console.log(arr9);

console.log(arr9.push("e"));
console.log(arr9);

console.log(arr9.pop());
console.log(arr9);
//unshift : 추가, shift :제거 이를 사용하면 선입선출의 큐를 구현가능함
console.log(arr9.unshift("a"));
console.log(arr9);

console.log(arr9.shift());
console.log(arr9);
console.log("----------------------------------------------------------------");
// 배열의 사본을 제공하는함수, 원본배열을 수정하지않는다. concat,slice 등
let arr10 = [1,2,3];
console.log(arr10);

console.log(arr10.concat(4,5,6));
console.log(arr10);


console.log(arr10.concat([4,5,6]));
console.log(arr10);


console.log(arr10.concat([4,5],6));
console.log(arr10);


console.log(arr10.concat([4,[5,6]]));
console.log(arr10);

console.log(arr10.concat( 'a' , 'b' , 'c')[arr10.length - 1]);
console.log("----------------------------------------------------------------");

let arr11 = [1,2,3,4,5];

console.log(arr11);

console.log(arr11.slice(3));
console.log(arr11);

console.log(arr11.slice(2,4));
console.log(arr11);

console.log(arr11.slice(-2));
console.log(arr11);

console.log(arr11.slice(1,-2));
console.log(arr11);


console.log(arr11.slice(-2,-1));
console.log(arr11);

console.log("----------------------------------------------------------------");
//배열 원본을 변경하는 함수 splice, 정해진 위치의 데이터를 추가하거나 정해진 위치의 데이터를 삭제함
//추가하거나 삭제하는함수. 1,2번째 인수는필수임. 두번째 인덱스가 0이면 추가, 0보다 큰 값은
//삭제할 원소의 개수. 첫번째 인덱스는 1번부터(0번항목 기준) 추가라는 뜻. 3번째 부터는 추가되는 데이터
// 이 함수 하나로 원하는 위치에 원소 추가, 삭제 가능함
let arr12 = [1,5,7];
console.log(arr12);

arr12.splice(1,0,2,3,4);
console.log(arr12);

arr12.splice(5,0,6);
console.log(arr12);

arr12.splice(1,2);
console.log(arr12);

arr12.splice(2,1,'a','b');
console.log(arr12);
console.log("----------------------------------------------------------------");
//같은 배열에서 특별한 인덱스로부터 정해진 갯수만큼 복사하여 덮어쓰기함
let arr13 = [1,2,3,4];
console.log(arr13);

arr13.copyWithin(1,2);
console.log(arr13);

arr13.copyWithin(2,0,2);
console.log(arr13);

arr13.copyWithin(0,3,-1);
console.log(arr13);
console.log("----------------------------------------------------------------");

let arr14 = new Array(5).fill(1);
console.log(arr14);

arr14.fill("a");
console.log(arr14);

arr14.fill("b",1);
console.log(arr14);

arr14.fill("c",2,4);
console.log(arr14);

arr14.fill(5.5, -4);
console.log(arr14);

arr14.fill(0,-3,-1);
console.log(arr14);
console.log("----------------------------------------------------------------")

let arr15 = [1,2,3,4,5];
console.log(arr15);

arr15.reverse();
console.log(arr15);

arr15 = [5,4,3,2,1,];
console.log(arr15);
//콜백 함수,사용자가 호출하는함수가아님
arr15.sort();
console.log(arr15);

arr15 = [{name:"Susanne"},{name : "JIM"}, {name : "Trevor"}, {name :"Amanda"}];
console.log(arr15);

arr15.sort();
console.log(arr15);

arr15.sort((a,b) => a.name[1] < b.name[1]);
console.log(arr15);
console.log("----------------------------------------------------------------")

const o = {name:"Jerry"};
let arr16 = [ 1,5,"a",o,true,5,[1,2],"9"];

console.log(o);
console.log(arr16);
//indexof :배열의 처음부터 검색, lastIndexOf:배열의 끝부터 검색
console.log(arr16.indexOf(5));
console.log(arr16.lastIndexOf(5));
console.log(arr16.indexOf("a"));
console.log(arr16.lastIndexOf("a"));
console.log(arr16.indexOf({name : "Jerry"}));
console.log(arr16.indexOf(o));
console.log(arr16.indexOf([1,2]));
console.log(arr16.indexOf("9"));
console.log(arr16.indexOf(9));

console.log(arr16.indexOf("a",5));
console.log(arr16.indexOf(5,5));
console.log(arr16.lastIndexOf(5,4));
console.log(arr16.lastIndexOf(true,3));
console.log("----------------------------------------------------------------")

let array = [1,5,2,5,4,3,5,7,6,9,10,11];
let searchResult = [];

let search;

search = array.indexOf(5,0);
while (search !== -1) {
  searchResult.push(search);
  search = array.indexOf(5,search + 1);

}

if (searchResult.length > 0) {
  console.log(searchResult);
} else {
  console.log("data not found!");
}
console.log("----------------------------------------------------------------")

let arr17 = [{id:5, name:"Judith"}, {id:7, name:"Francis"}];
console.log(arr17);

console.log(arr17.findIndex(o => o.id === 5));
console.log(arr17.findIndex(o => o.name === "Francis"));
console.log(arr17.findIndex(o => o === 3));
console.log(arr17.findIndex(o => o.id === 17));

console.log(arr17.find(o => o.id === 5));
console.log(arr17.find(o => o.id === 2));

let arr18 = [1,17,16,5,4,16,10,3,49];
console.log(arr18.find((x,i) => i > 2 && Number.isInteger(Math.sqrt(x))));
console.log("----------------------------------------------------------------")

let arr19 = [5,7,12,15,17];
console.log(arr19.some(x => x % 2 ===0 ));
console.log(arr19.some(x => Number.isInteger(Math.sqrt(x) ) ) );

let arr20 = [4,6,16,36];
console.log(arr20.every(x => x % 2 ===0 ));
console.log(arr20.every(x => Number.isInteger(Math.sqrt(x) ) ) );
console.log("----------------------------------------------------------------")

let cart = [ { name : "widget", price: 9.95}, {name : "Gadget", price:22.95}];
console.log(cart);
let names = cart.map( x => x.name);
console.log(names);

let prices = cart.map(x => x.price);
console.log(prices);

discountPrices = prices.map(x=> x * 0.8);
console.log(discountPrices);

let items = [ "widget","Gadget"];
let prices2 = [9.95,22.95];
console.log(items);
console.log(prices2);

let cart2 = items.map( (x,i) => ({name:x, price:prices2[i]}));
console.log(cart2);

console.log("----------------------------------------------------------------")

let cards = [];
for (let suit of ['H', 'C', 'D', 'S']) {
  for (let value = 1; value <=13; ++value){
    cards.push({suit,value});
  }
}
// filter함수는 말 그대로 원 배열을 콜백함수의 변화에 맞게 걸러내는 역할을 해 준다
console.log(cards);
console.log();
console.log(cards.filter( c => c.value === 2));
console.log();
console.log(cards.filter(c => c.suit === 'D'));
console.log();
console.log(cards.filter(c => c.value > 10));
console.log();
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));

console.log("----------------------------------------------------------------")

let arr21 = [5,7,2,4];
let sum = arr21.reduce( (a,x) => a += x,0);
//let sum = arr21.reduce( (a + x) => a +=x);
console.log(arr21);
console.log(sum);

let words = [ "Beachball", "Rodeo", "Angel", "Avrdvark", "Xylophone", "November", "Chocolate"];

let alphabetical = words.reduce ((a,x) => {
  if (!a[x[0]]) a[x[0]] = [];
  a[x[0]].push(x);
  return a;
}, {} );

console.log(words);
console.log(alphabetical);

let longWords =words.reduce ((a,w)=> w.length >6 ? a + " "+ w:a, "").trim();
console.log(longWords);

console.log("----------------------------------------------------------------")
//평균 분산 구하는 알고리즘

let data = [3.3, 5, 7.2,12,4,6, 10.3];
let stats = data.reduce ( (a,x) => {
  a.N++;
  let delta = x - a.mean;
  a.mean += delta / a.N;
  return a;
}, { N:0, mean:0, M2:0});
if (stats.N > 2) {
  stats.variance = stats.M2/(stats.N -1);
  stats.stdev = Math.sqrt(stats.variance);
}

console.log(stats);

console.log("----------------------------------------------------------------")


let product = {tv:5000,vtr:25000,camera:1500,tv:500000,keyboard:3500};
