//JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
$('#play').tap(function(){
	navigator.notification.beep(1);
});//tap reproducir

$('#pause').tap(function(){
	navigator.notification.vibrate(1000);
});//tap pausar

$('#stop').tap(function(){
	navigator.notification.vibrate(1000);
});//tap detener

$('#buscar').tap(function(){
	navigator.notification.vibrate(1000);
});//tap buscar

	},false); //devicereafy
});//ready 