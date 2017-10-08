$(document).ready(function(){





//This ACCORDION cod alters default amaunt of blocks to show. I need the onle one block to be shown
// So when I open one block the other one collapses
 		$('.collapse').on('show.bs.collapse', function () {
   		 $otherPanels = $(this).parents('.panel-group').siblings('.panel-group');
    	$('.collapse',$otherPanels).removeClass('in');
		});
            
       
});















});//end ready