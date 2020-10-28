// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。

function answer(){
// Q 1
// document.getElementById("btn-test") = function()
var msg = document.getElementById("q1-text");
console.log (msg.textContent);


// Q 2
var msgSpan = document.getElementById("q2-text");
 msgSpan.textContent = "変わったよ";

console.log();

// // Q 3

var font = document.getElementById("q3-text");
 font.style.color = "red";


// // Q 4 (難)
// // 「for of」を使います。

var textcolor = document.querySelectorAll(".q4-text");
console.log(textcolor.length);

for (var i =0;i < textcolor.length;i++){
	console.log(textcolor[i]);
	textcolor[i].style.color = "red";
}

// for ofを使った方法 配列の数がいくつか意識せずに繰り返し処理を行える方法
// 新しく作った変数q4　に、繰り返している間、要素を一つずつ代入する

// for(let q4 of q4_text){
// 	console.log(q4);
// 	q4.style.color = "blue";
// }


// // Q 5

var haikei = document.getElementsByClass("q5-text");
console.log(haikei)
	for  (var i =0;i <haikei.lengh;i++){
 haikei.style[i].backgroundColor = 'blue';
}



// Q 6
let text = document.querySelector('#q6-text');
console.log(text)
// q6_text.addEvenListener('click',function(){
// 	this.style.color = 'red'
// })


// Q 7

// Q 8


// Q 9


// Q 10




}
