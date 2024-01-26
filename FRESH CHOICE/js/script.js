let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');


menu.addEventlistener('click', () =>{
	menu.Classlist.toggle('fa-times');
	navbar.Classlist.toggle('active');
});

window.onscroll = () =>{
	menu.Classlist.romove('fa-times');
	navbar.Classlist.remove('active');

	if(window.scrolly > 150){
		header.Classlist.add('active');
	}else{
		header.Classlist.remove('active');
    }

}
let countDate = new Date('june 1, 2023 00:00:00').getTime();

function countDown(){

	let now = new Date().getTime();
	gap = countDate - now;

	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;

	let d = Math.floor(gap / (day));
	let h = Math.floor((gap % (day)) / (hour));
	let m = Math.floor((gap % (hour)) / (minute));
	let s = Math.floor((gap % (minute)) / (second));

	document.getElmentById('day').innerText = d;
	document.getElmentById('hour').inneText = h;
	document.getElmentById('minute').inneText  = m;
	document.getElmentById('second').inneText  = s;

}

setInterval(function(){
	countdown();
},1000)