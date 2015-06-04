// Beento Variables
beenToCheckPoint = true;
beenToCastle = false;
beenToMarket = false;
beenToHome = false;

//

//Taken Action Variables
smuggled = false;
waited = false;


// Item Variables
knife = false;
money = false;
//

/* Locations
The checkpoint = first time you are at the checkpoint with two Guards.
checkPoint = other times you arrive at the checkpoint.
Home
The Castle
The Market

*/

//Global Variables location
var currentLocation = "The checkpoint";
var check;

//



//Reusable functions
    //Before Placeholder
    function beforePlace() {
			console.log("this is beforePlace");
			//insertBefore("#placeholder").hide().fadeIn(2000);
		}


  	//you can't do that
    function noCanDo() {
			$("<p>You can't do that right now. Type 'Help' for a list of actions or 'Location' to see where you are.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		}

	//Roll Die
	// pick a random number between 1 and 6 for our roll of the die. This is from http://www.codecademy.com/courses/conditionals-application/0/2
	function rollDie() {	 
		die = Math.floor(Math.random()*6 + 1);
		console.log("You rolled a "+die);
		return die;
	}

//default repsonse
  notKnown = function() {
			$("<p>I do not understand " + "'" + input + "'" + ".</p>").insertBefore("#placeholder").hide().fadeIn(2000);
	};
//

$(document).ready(function(){
	$("#console").fadeIn(2000);
	$("form").submit(function() {
		var input = $("#command_line").val().toUpperCase();
		//console.log('input:' + input);
		//console.log('Current Location:' + currentLocation);
		
		//begin input function
		
		function checkInput (command) {
	    var check;
	    //start list of inputs texts
			function isMarket () {
				currentLocation = 'The Market';
				beenToMarket = true;
				$("<p>Good choice! Once you get to the market, you'll be close to the Castle. There will be many things available to help you prepare to sneak inside and search for the Princess (or Prince if player is female). The Guards allow you to pass, but not before searching your cart for any valuable items.</p>").insertBefore("#placeholder").hide().fadeIn(2000);

					$("<p>As the guards start searching the back of your cart, you look down and see the spot where you hid your knife and your money pouch. You could reach under the edge of the tarpaulin and grab one of them. They are well hidden, but if the guards find them, you'll lose both of them. If the guards see you taking something, you'll catch their attention, and probably lose them. Should you try and smuggle one of them or wait, and hope they don't find the hidding place?</p>").insertBefore("#placeholder").hide().fadeIn(2000);

					$("<p>Type Smuggle or Wait to make your decision</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		    return check = 'MARKET';
	    	}
			function isSmuggle () {
				smuggled = true;
				if(currentLocation === 'The Market'){
				$("<p>The guards are getting close. You only have time to grab one. Which one do you want: The Money or The Knife?</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				}
				else {
					noCanDo();
				}
				return check = 'SMUGGLE';
			}
			function isKnife () {
				knife = true;
				$("<p>You </p>").insertBefore("#placeholder").hide().fadeIn(2000);
			}


			//Wait function
			function isWait (){
				waited = true;
				if(currentLocation === 'The Market'){
				$("<p>You choose to wait. You watch the guards walk around your cart, poking and prodding as they go. </p>").insertBefore("#placeholder").hide().fadeIn(2000);
				guardsSearch();
			}
				else {
					noCanDo();
				}
				return check = 'WAIT';
			}//end Wait

			//Functions at the Market
			function isSellCrops (){
				$("<p>You sell the crops in cart to a local vendor for a good price. You can use the money to buy some items to help with the recue.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
				return check = 'SELL CROPS';
			}
			
	    function isCastle () {
		    return check = 'CASTLE';
	    }
	    function isHome () {
	      $("<p>You have returned home.</p>").clone().insertBefore("#placeholder").fadeIn(2000);
				return check = 'HOME';
				
	    }
			function isHelp () {
				$("#message_help").clone().insertBefore("#placeholder").fadeIn(2000);
				return check = 'HELP';
			}
			function isLocation () {
				$("<p>You are at " + currentLocation + "</p>").clone().insertBefore("#placeholder").fadeIn(2000);
				console.log("Checkpoint " + beenToCheckPoint, "Castle " + beenToCastle, "Market " + beenToMarket, "Home " + beenToHome);
				return check = 'LOCATION';
			}

			var checks = {
				'GO TO MARKET': isMarket,
				'MARKET': isMarket,
				'GO MARKET': isMarket,
				'GO TO CASTLE': isCastle,
				'CASTLE': isCastle,
				'GO CASTLE': isCastle,
				'HOME': isHome,
				'GO HOME': isHome,
				'HELP': isHelp,
				'LOCATION': isLocation,
				'SMUGGLE': isSmuggle,
				'WAIT': isWait,
				'SELL CROPS': isSellCrops,
			};
	//console.log(checks[command]);
	return checks[command]();
}
var check = checkInput(input);
console.log("check= " + check);

//Actions outside of main function - used for secondary or non-input driven events
//This uses the check variable which is set to equal the last input value. I can't use
//input again because it would run the main function again.

	//Do Guards Find Knife and Money?
	function guardsSearch(){
		//if(check === 'WAIT'){

			rollDie();
			if(die <= 3){
				$("<p>The Guards find the items and you lose them. But at least they allow you to continue. Let's hope you can sell the crops in your cart and get some more money. You continue your way to the Market. When you arrive there...What do you want to do?</p>").insertBefore("#placeholder").hide().fadeIn(2000);
			}
			else if (die >3){
					$("<p>Your patience pays off. The guards don't find your items. They let you pass with both the knife and your money. You continue your way to the Market. When you arrive there...What do you want to do?</p>").insertBefore("#placeholder").hide().fadeIn(2000);
			}
		}
	




	});//end "form" submit function
	
});


