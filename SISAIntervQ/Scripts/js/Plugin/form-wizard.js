
// Form-Wizard.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -


$(document).ready(function() {



	// FORM WIZARD
	// =================================================================
	// Require Bootstrap Wizard
	// http://vadimg.com/twitter-bootstrap-wizard-example/
	// =================================================================

	// CIRCULAR FORM WIZARD
	// =================================================================
	$('#demo-step-wz').bootstrapWizard({
		tabClass		: 'wz-steps',
		nextSelector: '.next-tab',

        
		//previousSelector	: '.previous',
		onTabClick: function(tab, navigation, index) {
			return false;
		},
		//onInit : function(){
		//	$('#demo-step-wz').find('.finish').hide().prop('disabled', true);
		//},
		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index + 1;
            var $cust=$total-1
			var $percent = (index/$cust) * 100;
			var wdt = 100/$total;
			var lft = wdt*index;
			var margin = (100 / $total) / 2;
			$('#step').text($current);
			$('#stepTotal').text($total);
		   
			$('#demo-step-wz').find('.progress-bar').css({ width: $percent + '%', 'margin': 0 + 'px '});

			if ($current == 1) {
			    $('#demo-step-wz').find('.secand-tab').hide();
			    $('#demo-step-wz').find('.first-tab').show();
			    $('#demo-step-wz').find('.finish').hide();
			}
			else if ($current == 2) {
			    $('#demo-step-wz').find('.secand-tab').show();
			    $('#demo-step-wz').find('.first-tab').hide();
			    $('#demo-step-wz').find('.finish').hide();
			}
			else {
			    $('#demo-step-wz').find('.secand-tab').hide();
			    $('#demo-step-wz').find('.first-tab').hide();
			    $('#demo-step-wz').find('.finish').show();
			}

		}
	});


});
