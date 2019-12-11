
let cla = document.querySelector(".head");
window.addEventListener("scroll", (event)=>{
	if(window.scrollY>=30){
		cla.style.background = "brown";
		cla.style.transitionProperty = "background";
		cla.style.transitionDuration = "3s";
	}else{
		cla.style.background = "rgba(0,0,0,0.5)";
	};
});



let nav = document.querySelector("section");
window.addEventListener("scroll", (event)=>{
	if(window.scrollY>=30){
		nav.style.background = "black";
		nav.style.transitionProperty = "background";
		nav.style.transitionDuration = "5s";
	}else{
		nav.style.background = "cyan";
	};
});


let form = document.querySelector("form");
let btn = document.querySelector(".buttontwo");
let ul = document.querySelector("#name");
let task = [];
form.addEventListener("submit",(e)=> {
	let data = document.querySelector(".buttonOne");
	let task;
	if(localStorage.getItem("todos")===null){
		task =[];
	}else {
		task = JSON.parse(localStorage.getItem("todos"));
	}
    task.push(data.value);
    localStorage.setItem("todos",JSON.stringify(task));
	console.log(task);
	// e.preventDefault();
	// console.log(task);
	//  

});
let tem = JSON.parse(localStorage.getItem("todos"));
tem.forEach(el=>{
	let li =document.createElement("li");
    li.innerHTML=`${el}`;
    li.style.color ="white";
    ul.appendChild(li);
    console.log(tem);

});












































