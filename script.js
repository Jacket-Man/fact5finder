
var x = 68;


function hello(){
	alert("hello world");
	
}
document.querySelector('#showx').addEventListener("click",showX);
function showX(){
	
	alert("x = " + x);
	
}

var xb = document.getElementById("xbox");

document.querySelector("#xbutton").addEventListener("click",putXInBox);

function putXInBox(){
	xb.innerHTML = x;
}

function red(){
	document.querySelector('body').style.backgroundColor = "#FF0000";
}
var addform = document.querySelector('#addform');

addform.btn.addEventListener("click",add);

function add(){
	
	var a = addform.a.value;
	var b = addform.b.value;
	var sum = parseInt(a) + parseInt(b);
	document.getElementById('additionresult').innerHTML = sum;
	
}

var styleform = document.querySelector('#styleform');
styleform.subsaqua.addEventListener("click", makeSubsAqua);

function makeSubsAqua(){
	var subs = document.getElementsByTagName('h3');
	for(var i = 0; i < subs.length; i++){
	subs[i].style.color = "#00FFFF";
	}
}


styleform.backimage.addEventListener("click", addbackimage);

function addbackimage(){
	document.querySelector('body').style.backgroundImage = "url('images/iscream.gif')";
	
}

var hY = document.querySelector('#hy');
hY.hpb.addEventListener("click", hypo);

function hypo(){
	var x = hy.x.value;
	var y = hy.y.value;
	var z = Math.hypot(x, y);
	
	document.getElementById("hyr");

	
}