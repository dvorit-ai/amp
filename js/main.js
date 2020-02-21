	$(".book").mousemove(function(e){

			$(this)
				.children(".hidden")
				.css({
					"top":e.clientY+15,
					"left":e.clientX+19
				})
		})


