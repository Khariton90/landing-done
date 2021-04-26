export default function btnFixed(){
let scrollButton = document.querySelector('.btnPositionTop')
let scrollBottom = document.querySelector('.btnPositionBottom')
	let scrollDistance = window.scrollY;
	if(window.screen.width >= 1800){
if(scrollButton.offsetTop - document.querySelector('.navbar').clientHeight <= scrollDistance &&scrollDistance <= scrollBottom.offsetTop + scrollBottom.clientHeight){
	document.getElementById('iWant').classList.add('fixBtn');
}
else{
	document.getElementById('iWant').classList.remove('fixBtn');
}
	}
else{
if(scrollDistance < 1900 && scrollDistance > 1000){
	document.getElementById('iWant').classList.add('fixBtn');
}
else{
	document.getElementById('iWant').classList.remove('fixBtn');
}
}
}