//making variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//prompt the fight to see what happens:
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// Create function named "fight"
var fight = function() {
  //intro
  window.alert("Welcome to Robot Gladiators!");
  //attack enemy health
  enemyHealth = enemyHealth - playerAttack;
  //enemy attacks player health
  playerHealth =playerHealth - enemyAttack;
  //log changes
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
  //player Health check!!!
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
//enemy Health check
  if(enemyHealth <= 0) {
    window.alert(enemyName + " has died");
} else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
};

switch(promptFight){
    case "FIGHT":
    case "fight":
        fight();
        break;
    case "SKIP":
    case "skip":
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
}