

i = 0;
while (i < 7) {
	$("<img>")									//create empty imag element
		.addClass("virus")						//add a class to this element
		.attr("src","Logos/corona-virus.svg")	//add the attribute SRC to the element
		.appendTo (".holder")					//add the element to the div .holder

	i++; //this is the short form of just saing "i = i + 1"
}

// here is a cleaner version

// 		for (i=0;i<50,i++){
// 			but im unsure how to use this properly
// 		}


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
	randomSpeed = Math.floor(Math.random()*300)+150 //before it was *600 + 200
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

//end of virus 





//below isn't working!!

// $(".virus").click(function(){
//   $(".virus").clone().appendTo("body");
// });	


window.onload = function () {
    var element = document.getElementById('midtermvideo');
    element.muted = "muted";
}



