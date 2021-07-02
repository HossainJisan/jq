$(document).ready(function(){


// alert
// alert("Hello world");

// messege
 $('.bttn').click(function(){
	alert("Hello world");
});

// hide
$('#hide').click(function(){
	$('.messege').hide("slow");
});

// show
$('#show').click(function(){
	$('.messege').show("fast");
});

// toggle
$('#toggle').click(function(){
	$('.messege').toggle("slow");
});


});