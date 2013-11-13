(function(window,undefined){
	var birdHTML = '<div class="bird"> <div class="head"></div><div class="tuft"></div><div class="beak"></div><div class="body"></div><div class="tail"></div> <div class="right-leg1"></div>  <div class="right-leg2"></div> <div class="right-leg3"></div> <div class="right-leg4"></div> <div class="right-leg5"></div> <div class="left-leg1"></div> <div class="left-leg2"></div>   <div class="left-leg3"></div> <div class="left-leg4"></div> <div class="left-leg5"></div></div>​'
	$('img').each(function(){
		var $img = $(this);
		if ($img.height() >= 40 && $img.width() >= 40) {
	        $(birdHTML).appendTo('body').css({
	        	'top':$img.offset().top + $img.height()-55,
	        	'left':$img.offset().left + $img.width() - 66,
	        	'position':'absolute'
	        });
	    }
	});
})(window)
