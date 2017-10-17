  //I was trying to trigger this function binding to scroolTop event but after compleating loading and next scroll numbers start to count backward
  $(window).scroll(function(){
    var bo = $('html').scrollTop();/*
    /*$('#reasons_wrapper').text(bo);*/

          if ( bo > 1000 ) 
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

  });


// end counter









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
        

//I know that this is wrong way because when I click on parent, the aroow don't moves ((
//angle rotator
  $('.fa-angle-down').click(function(){
     $(this).toggleClass('fa-icon--opend');
  });//end click

    



});//end ready