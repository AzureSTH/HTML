function cart() {
	window.open("https://static.mi.com/cart/");
}

function countDown() {
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	//console.log(hour + ":" + min + ":" + sec);
	var count = hour / 2;
	count = Math.floor(count);
	var session = count * 2;
	//	console.log(session);
	var sesCounts = document.getElementById("ses");
	if(session < 10) {
		sesCounts.innerHTML = "0" + session + ":00场";
	} else {
		sesCounts.innerHTML = session + ":00场";
	}
	var currentSec = sec + min * 60 + hour * 3600;
	//console.log(currentSec);
	var deadLine = (session + 2) * 3600;
	//console.log(deadLine);
	var leftTime = deadLine - currentSec;
	//console.log(leftTime);
	var leftSec = leftTime % 60;
	var temp1 = leftTime / 60;
	var leftMin = temp1 % 60;
	var leftHour = temp1 / 60;
	leftHour = Math.floor(leftHour);
	leftMin = Math.floor(leftMin);
	leftSec = Math.floor(leftSec);
	//console.log(leftHour+":"+leftMin+":"+leftSec);
	document.getElementById("hour").innerHTML = "0" + leftHour;
	if(leftMin < 10) {
		document.getElementById("min").innerHTML = "0" + leftMin;
	} else {
		document.getElementById("min").innerHTML = leftMin;
	}
	if(leftSec < 10) {
		document.getElementById("sec").innerHTML = "0" + leftSec;
	} else {
		document.getElementById("sec").innerHTML = leftSec;
	}
}
window.setInterval("countDown()", 1000);

function forward() {
	var intros = document.getElementsByClassName("intro");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	for(var i = 0; i < 4; i++) {
		intros[i].parentNode.style.display = "block";
		intros[i + 4].parentNode.style.display = "none";
	}
	$("#left").removeClass("sty");
	$("#right").addClass("sty");
}

function backward() {
	var intros = document.getElementsByClassName("intro");
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	for(var i = 4; i < 8; i++) {
		intros[i].parentNode.style.display = "block";
		intros[i - 4].parentNode.style.display = "none";
	}
	//	left.style.cursor = "pointer";
	//	left.style.color = "#b0b0b0";
	//	right.style.cursor="default";
	//	right.style.color="#E0E0E0";
	$("#left").addClass("sty");
	$("#right").removeClass("sty");
}

function forwardRecom() {
	var intros = document.getElementsByClassName("intro1");
	var forward = document.getElementById("forward");
	var backward = document.getElementById("backward");
	for(var i = 0; i < 5; i++) {
		intros[i].parentNode.style.display = "block";
		intros[i + 5].parentNode.style.display = "none";
	}
	//	forward.style.cursor = "default";
	//	forward.style.color = "#e0e0e0";
	//	backward.style.cursor = "pointer";
	//	backward.style.color = "#b0b0b0";
	$("#forward").removeClass("sty");
	$("#backward").addClass("sty");
}

function backwardRecom() {
	var intros = document.getElementsByClassName("intro1");
	var forward = document.getElementById("forward");
	var backward = document.getElementById("backward");
	for(var i = 5; i < 10; i++) {
		intros[i].parentNode.style.display = "block";
		intros[i - 5].parentNode.style.display = "none";
	}
	//	forward.style.cursor = "pointer";
	//	forward.style.color = "#b0b0b0";
	//	backward.style.cursor="default";
	//	backward.style.color="#E0E0E0";
	$("#forward").addClass("sty");
	$("#backward").removeClass("sty");
}

function mOver(obj) {
	if(obj.className == "mob1") {
		var comment = document.getElementsByClassName("com1");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	} else if(obj.className == "mob2") {
		var comment = document.getElementsByClassName("com2");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	} else if(obj.className == "mob3") {
		var comment = document.getElementsByClassName("com3");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	} else if(obj.className == "mob4") {
		var comment = document.getElementsByClassName("com4");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	} else if(obj.className == "mob5") {
		var comment = document.getElementsByClassName("com5");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	} else if(obj.className == "mob6") {
		var comment = document.getElementsByClassName("com6");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	} else if(obj.className == "mob7") {
		var comment = document.getElementsByClassName("com7");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	} else if(obj.className == "mob8") {
		var comment = document.getElementsByClassName("com8");
		comment[0].style.display = "block";
		comment[0].style.opacity = "initial";
		comment[0].style.visibility="visible";
		comment[0].style.transition="all ease-out .7s";
		comment[0].style.transform="translateY(-73px)";
	}
}

function mOut(obj) {
	if(obj.className == "mob1") {
		var comment = document.getElementsByClassName("com1");
		comment[0].style.transform="translateY(0px)";
		comment[0].style.opacity = "0";	
		comment[0].style.visibility="hidden";
//		top: 1792px;
//		left: 588px;
	} else if(obj.className == "mob2") {
		var comment = document.getElementsByClassName("com2");
		comment[0].style.transform="translateY(0px)";
//		comment[0].style.display = "none";
		comment[0].style.opacity = "0";
	} else if(obj.className == "mob3") {
		var comment = document.getElementsByClassName("com3");
		comment[0].style.transform="translateY(0px)";
//		comment[0].style.display = "none";
		comment[0].style.opacity = "0";
	} else if(obj.className == "mob4") {
		var comment = document.getElementsByClassName("com4");
		comment[0].style.transform="translateY(0px)";
//		comment[0].style.display = "none";
		comment[0].style.opacity = "0";
	} else if(obj.className == "mob5") {
		var comment = document.getElementsByClassName("com5");
		comment[0].style.transform="translateY(0px)";
//		comment[0].style.display = "none";
		comment[0].style.opacity = "0";
	} else if(obj.className == "mob6") {
		var comment = document.getElementsByClassName("com6");
		comment[0].style.transform="translateY(0px)";
//		comment[0].style.display = "none";
		comment[0].style.opacity = "0";
	} else if(obj.className == "mob7") {
		var comment = document.getElementsByClassName("com7");
		comment[0].style.transform="translateY(0px)";
//		comment[0].style.display = "none";
		comment[0].style.opacity = "0";
	} else if(obj.className == "mob8") {
		var comment = document.getElementsByClassName("com8");
		comment[0].style.transform="translateY(0px)";
//		comment[0].style.display = "none";
		comment[0].style.opacity = "0";
	}
}