// Beento Variables
beenToCorridor = true;
//

// Item Variables
sword = false;
//

//Current location
currentLocation = "nCorridor";
//

$(document).ready(function(){
	$("form").submit(function() {
		var input = $("#command_line").val();

		if (input === "help") {
			$("#message_help").clone().insertBefore("placeholder").fadeIn(1000);
		}
	});
	
	$("#command_line").val("");
	
});