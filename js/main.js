	$(".book").mousemove(function(e){

			$(this)
				.children(".hidden")
				.css({
					"top":e.clientY+15,
					"left":e.clientX+19
				})
		})

$(".close").click(function(){
	$(this)
		.parent(".hidden")
		.attr("style","")
		.css({
		"display":"none"
		})

	// setTimeout(function(){
	// 	$(".hidden").attr("style","")
	// },500)
	})

	
//start of virus 
//pulled from https://codepen.io/stezu/pen/cmLrI 

$(".virus").each(function(){
	randomTop = Math.floor(Math.random()*$(window).height())
	randomLeft = Math.floor(Math.random()*$(window).width())
	randomSpeed = Math.floor(Math.random()*600)+200
	randomWidth = Math.floor(Math.random()*80)+50

	$(this)
		.css({
			"top":randomTop,
			"left":randomLeft,
			"width":randomWidth,
			"height":randomWidth,
		})
		.marqueeify({
			"speed":randomSpeed
		});

})



$(".virus").click(function(){
  $(".virus").clone().appendTo("body");
});



//end of virus 


