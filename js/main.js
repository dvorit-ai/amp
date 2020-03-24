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

$(".virus").each(function(){
	randomTop = Math.floor(Math.random()*$(window).height())
	randomLeft = Math.floor(Math.random()*$(window).width())
	randomSpeed = Math.floor(Math.random()*400)+300

	$(this)
		.css({
			"top":randomTop,
			"left":randomLeft
		})
		.marqueeify({
			"speed":randomSpeed
		});

})

//end of virus 








// $(document).ready(function() {
//   animateDiv();

// });

// function makeNewPosition() {

//   // Get viewport dimensions (remove the dimension of the div)
//   var h = $(window).height() - 50;
//   var w = $(window).width() - 50;

//   var nh = Math.floor(Math.random() * h);
//   var nw = Math.floor(Math.random() * w);

//   return [nh, nw];

// }

// function animateDiv() {
//   var newq = makeNewPosition();
//   $('.a').animate({
//     top: newq[0],
//     left: newq[1]
//   },1300, function() {
//     animateDiv();
//   });

// };





