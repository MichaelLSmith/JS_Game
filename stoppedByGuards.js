var user = prompt("Disguised as a farmer on his way to Market, two guards stop you and demand to know your destination. You must get to the Castle to save the princess. If you're not ready yet, you can retreat back to your Home. Give them your answer.").toUpperCase();

switch(user) {
    case 'MARKET':
        var smuggle = prompt("Good choice! Once you get to the market, you'll be close to the Castle. Should you try and smuggle an item to help you? ").toUpperCase();
        if (smuggle === 'YES') {
          var item = prompt("You can smuggle one item to help you. Make your choice: Knife or Money").toUpperCase();
            if (item === 'KNIFE' || item === 'MONEY'){
              console.log("The Guards don't notice, and let you pass with the item.");
            }
             else {
                console.log("Be sure to choose to smuggle either a Knife or Money");        
             }
        } // end 1st if
          else { console.log("The Guards let you pass, but you'll be at a dissadvantage when you reach the market.");
          }
    break;


     case 'CASTLE':
        var fight = prompt("The guards try and arrest you. You must Fight or Run.").toUpperCase();
        
        if (fight === 'FIGHT') {
            if (weapon === 'SWORD' || weapon === 'AXE') {
                var result = Math.floor(Math.random() * 2);
                    if (result) {
                        console.log("You defeat the Guards. You disguise yourself as a guard, and make your way to the Castle.");
                    } 
                    else {console.log("The Guards defeat you. Game over!");}
            }
            else console.log("Choose to fight the guards with either a Sword or an Axe.");
        }
        else console.log("The Guards catch and kill you. Game Over!");
    break;   

    case 'HOME':
        var home = prompt("You tell them you're you will turn around. They are suspicious of you. Do you Walk or Run?").toUpperCase()
        if (home === ) {} else{};


        break;
    default:
        console.log("You can go to the Castle, Market, or retreat back Home.");
}; // end switch
