//making variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//prompt the fight to see what happens:
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


// Create function named "fight"
var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } // end of while loop
}; // end of fight function

for (var i = 0; i < enemyNames.length; i++) {
  //tell player what round your in
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators!" + (i+1));
  }
  else {
    window.alert("You have lost your robot in battle! Game Over!")
  }
  //pick new enemy based on index
  var pickedEnemyName = enemyNames[i];

  //enemy health
  enemyHealth = 50;

  //pass the pickedEnemyName var's value into the fight function!!
  fight(pickedEnemyName);
}
 

//test switch/case:
// switch(promptFight){
//     case "FIGHT":
//     case "fight":
//       for (var i = 0; i < enemyNames.length; i++) {
//         var pickedEnemyName = enemyNames[i];
//         enemyHealth = 50;
//         fight(pickedEnemyName);
//       }
//         break;
//     case "SKIP":
//     case "skip":
//         var confirmSkip = window.confirm("Are you sure you'd like to quit?");
//         if(confirmSkip) {
//             window.alert(playerName + " has decided to skip this fight. Goodbye!");
//             // subtract money from playerMoney for skipping
//             playerMoney = playerMoney - 10;
//             console.log("playerMoney", playerMoney)
//         }
//         else {
//           for (var i = 0; i < enemyNames.length; i++) {
//             var pickedEnemyName = enemyNames[i];
//             enemyHealth = 50;
//             fight(pickedEnemyName);
//           }
//         }
//         break;
//     default: 
//     window.alert("You chose neither, Why sir? Why?");
// }

// Game States

// "WIN" - Player robot has defeated all enemy-robots

//    * Fight all enemy-robots