// Beento Variables
beenToCorridor = true;
//

// Item Variables
sword = false;
//

//Current location
currentLocation = "forest";
//

$(document).ready(function(){

	$("#console").fadeIn(2000);

	$("form").submit(function() {
		var input = $("#command_line").val();
		console.log('input:' + input)
		console.log('Current Location:' + currentLocation)

		//begin switch for input variable

		// switch(input) {
		
		//     case 'HELP':

		    


		//help
		if (input === "help") {
			$("#message_help").clone().insertBefore("#placeholder").fadeIn(2000);
		}
		//


		//take commands
		if (input === "take sword" && currentLocation == "nCorridor") {
			sword = true;
			$("<p>You picked up the sword.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		}

		else if (input === "take sword" && currentLocation != "nCorridor") {
			$("<p>There is no sword here!</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		}
		// end take commands

		//default response
		else {
			$("<p>I do not understand " + "'" + input + "'" + ".</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		}
		//

		// go commands
		if (input === "go west" && currentLocation === "nCorridor") {
			currentLocation = "Wcorridor"
			$("<p>You are now in the North Corridor.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		}

		else if (input === "go west" && currentLocation != "nCorridor"){
			$("<p>You can't go that way.</p>").insertBefore("#placeholder").hide().fadeIn(2000);
		}

		//inventory

		// else if (input === "inventory") {
		// 	//sword
		// 	if (sword === true) {
		// 		swrd = "Sword <br />"
		// 	}
		// 	else {
		// 		swrd = "";
		// 	}
		// 	//end sword
		// }
		// else {
		// 	$('<p>Inventory:<br />' + swrd + 'more items' + '</p>').insertBefore("#placeholder").fadeIn(1000);
		// }


	});//end "form" submit function
	
	//resets text box
	$("#command_line").val("");
	//
	
});

