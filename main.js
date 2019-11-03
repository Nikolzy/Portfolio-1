

$("#menu").click(function(){
	let x = document.getElementById('myTopnav');

	if (x.className === "topnav"){
		x.className += " responsive";
	}
	else{
		x.className = "topnav";
	}
});


$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		let target = $(this).attr("href");
		bl_top = $(target).offset().top;
		$('body, html').animate({ scrollTop: bl_top}, 1000);
		return false;
	})
});
