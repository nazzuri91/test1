var btn = document.getElementById("btn");
var backBtn = document.getElementById("backBtn");
var body = document.body;
var wrapper = document.querySelector(".wrapper");
var modle = document.querySelector(".row3");
btn.addEventListener("click", function(){
	body.classList.add("setOpacity");
	wrapper.classList.add("displayNone");
	modle.classList.add("displayBlock");
	modle.classList.add("clearOpacity");
}, false);

backBtn.addEventListener("click", function(){
	body.classList.remove("setOpacity");
	wrapper.classList.remove("displayNone");
	modle.classList.remove("displayBlock");
	modle.classList.remove("clearOpacity");
}, false);