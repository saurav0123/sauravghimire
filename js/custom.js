$(document).ready(function() {
  	$("#owl-demo").owlCarousel({
		navigation : false,
		slideSpeed : 600,
		paginationSpeed : 500,
		singleItem : true,
		autoPlay:true,
		stopOnHover : true,
		navigationText : ["<",">"],
		transitionStyle : "fade",
    });
	$("#owl-demo1").owlCarousel({
	     navigation : true,
	     navigationText : ["",""],
	     autoPlay: 3000,
	     items : 2,
	     itemsDesktop : [1199,2],
	     itemsDesktopSmall : [979,1],
	     stopOnHover : true,
	     autoHeight: true,
	});
});
