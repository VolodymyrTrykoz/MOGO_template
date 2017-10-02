$(document).ready(function(){



//Making fixed navigation after scrolling
		$( window ).scroll( function () {
			var bo = $( window).scrollTop();
				if ( bo > 1000 ){
					$('.second_nav').css({
						'position':'fixed',
						'z-index': '10',
		                'top':'0px',
		                'bottom':'0px',
		                'background-color':'#95e1d3',
		                'height':'80px',
		                'width':'100%',
		                'transition-duration': '0.3s',

					});//end css
				};//end if bo > 1000
				

				if ( bo < 1000 ){
					$('.second_nav').css({
						'position':'relative',
		                'bottom':'0px',
		                'background-color':'transparent',
		                'width':'100%'
		                
					});//end css
				};//end if bo < 1000



//This ACCORDION cod alters default amaunt of blocks to show. I need the onle one block to be shown so here how it works
 		$('.collapse').on('show.bs.collapse', function () {
   		 $otherPanels = $(this).parents('.panel-group').siblings('.panel-group');
    	$('.collapse',$otherPanels).removeClass('in');
		});
            
       

// this funktion does not work/ I will back to this problem later/ I wanted an arrow to chsnge classes after changing aria-expanded attribute
 		$(function () {
    	if ($('#headingOne').attr('aria-expanded') === "true") {
        $(this).find("fa-angle-down").toggleClass("fa-angle-up");
    }
});


});














	/*
	 if ( $(window).scrollTop() >= 1600 ) {

                $('#second_nav').css({
                    'height':'50px',
                    'padding':'5px',
                    'position':'fixed',
                    'top':'0px',
                    'left':'50%',
                    'margin-left':'-160px',
                    'bottom':'0px',
                    'background-color':'#95e1d3'
                });
            } 
	*/
});//end ready