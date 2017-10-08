//To use this map I have to add google script after my js-file in html document// after that that I have to elicit function myMap here:

		function myMap() {
				var mapCanvas = document.getElementById("map");
				var mapOptions = {
				center: new google.maps.LatLng(43.64, -79.43),
				zoom: 12
				};
				var map = new google.maps.Map(mapCanvas, mapOptions);
				};




$(document).ready(function(){

//This ACCORDION cod alters default amaunt of blocks to show. I need the onle one block to be shown
// So when I open one block the other one collapses
 		$('.collapse').on('show.bs.collapse', function () {
   		 $otherPanels = $(this).parents('.panel-group').siblings('.panel-group');
    	$('.collapse',$otherPanels).removeClass('in');
		});
        
//This function allows me to animate numbers from zero to marginal(appointed in html number) and elicits funtion with class 'counter' here:
       $('.counter').each(function () {
    	  $(this).prop('Counter',0).animate({
        Counter: $(this).text()
   		 }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
       	 }
   		});
});	
// end counter





});//end ready