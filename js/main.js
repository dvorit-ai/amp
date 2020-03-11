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