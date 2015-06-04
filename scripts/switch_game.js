// Beento Variables
beenToCheckPoint = true;
beenToCastle = false;
beenToMarket = false;
beenToHome = false;


//

// Item Variables
sword = false;
//

/* Locations
The checkpoint = first time you are at the checkpoint with two Guards.
checkPoint = other times you arrive at the checkpoint.
Home
The Castle
The Market

*/

//Current location
currentLocation = "The checkpoint";
//


	
	

//Start of main Script

$(document).ready(function(){
	$("#console").fadeIn(2000);
	$("form").submit(function() {
		var input = $("#command_line").val().toUpperCase();
		console.log('input:' + input);
		console.log('Current Location:' + currentLocation);

	//Functions

		//default repsonse
	  	notKnown = function() {
				$("<p>You cannot " + "'" + input + "'" + ".</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		}
		//

		//resets text box (not working???)
		resetTextBox = function(){
		$("#command_line").val("");
		}
	//


	//HELP

	function getHelp (command) {
		return $("#message_help")
	}


		if (input === 'HELP'){
			var choice = input;
		

		}


		switch(input){
		case 'HELP':
			$("#message_help").clone().insertBefore("#placeholder").fadeIn(2000);		
		break;
		}

		resetTextBox();

	if(input != 'HELP'){	
		//begin switch for input variable
		switch(input) {			

			// Location/Look Around case
			case 'LOCATION':
			case 'LOOK AROUND':
				$("<p>You are at " + currentLocation + "</p>").insertBefore("#placeholder").hide().fadeIn(2000);
			break;
			
			// Go to location Cases
			//Castle
			case 'GO TO THE CASTLE':
			case 'CASTLE':
			case 'GO TO CASTLE':
				currentLocation = 'The Castle';
				beenToCastle = true;
				$("<p>You've decided to go to the Castle!</p>").insertBefore("#placeholder").hide().fadeIn(2000);
			
			break;
			//end Castle

			//Market
			case 'GO TO MARKET':
			case 'MARKET':
			case 'GO MARKET':
				currentLocation = 'The Market';
				beenToMarket = true;

				$("<p>Good choice! Once you get to the market, you'll be close to the Castle. There will be many things available to help you prepare to sneak inside and search for the Princess (or Prince if player is female). The Guards allow you to pass, but not before searching your cart for any valuable items.</p> <p>As the guards start searching the back of your cart, you look down and see the spot where you hid your knife and your money pouch. You only have a few seconds to take one and hide it in your cloak. If the guards notice, they'll definitely take both of them, or do something worse. Should you try and smuggle one or hope they don't find the hidding place in your cart?</p> <p>Type Smuggle or Wait to make your decision</p>").insertBefore("#placeholder").hide().fadeIn(2000);
			break;

			resetTextBox();
			
		} // end of first input Switch
	}//end of not HELP if

			if (input === 'SMUGGLE') {
				var choice = input;
				$("<p>You only have time to grab one. Which one do you want: The Money or The Knife?</p>").insertBefore("#placeholder").hide().fadeIn(2000);
			}

			else if (input === 'WAIT') {
				var choice = input;
				$("<p>You choose to wait and hope they don't find your hidden items.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
			}

			// else {
			// 	notKnown();
			// }

			resetTextBox();

			switch(choice){


			}//end choice switch





	// switch(input){
								
				
	// 			if(beenToMarket){
	// 				console.log("beenToMarket: " + beenToMarket);
	// 				console.log("input: " + input);
	// 			}
				
				




	


	});//end "form" submit function
	
});

