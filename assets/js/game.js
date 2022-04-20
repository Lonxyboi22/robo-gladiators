//making variables
var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  }, // comma!
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var randomNumber = function(min, max) {
  //var value = Math.floor(Math.random() * 21) + 40;
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}
//var enemy.names = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

var pickedEnemyObj = randomNumber(40, 60);

//prompt the fight to see what happens:
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//shop function
var shop = function(){

    //ask player what they want to do!
    var shopOptionPrompt = window.prompt (
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
      switch (shopOptionPrompt) {
      case "refill":
      case "REFILL":
        if (playerInfo.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
      
          // increase health and decrease money
          playerInfo.refillHealth();
        }
        else {
          window.alert("You don't have enough money!");
        }
      
        break;
      case "upgrade":
      case "UPGRADE":
        if (playerInfo.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
         // increase attack and decrease money
          playerInfo.upgradeAttack();
        }
        else {
          window.alert("You don't have enough money!");
        }
      
        break;

        case "leave":
        case "LEAVE":
          window.alert("Leaving the shop");

          //nothing happens
          break;
        default:
          window.alert("You did not pick a valid option. Try again..." + playerInfo.name);

          //call shop function again to get player to pick a valid option:
          shop();
          break;
      }

}

// Create function named "fight"
var fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        window.alert("playerInfo.money", playerInfo.money);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    //added a random damage function with smaller limits
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemy.attack variable
    //changed to randomized numbers
    var enemyDamage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - enemyDamage);
    //log player health
    console.log(
      enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  } // end of while loop
}; // end of fight function

//end game function
var endGame = function() {
  window.alert("The game has now ended. Let's see how you did!");
//if player is still alive or not 
  if (playerInfo.health > 0) {
     window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } 
  else {
      window.alert("You've lost your robot in battle.");
  }

//play again?
var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
      // restart the game
      startGame();
    } 
    else {
     window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


// function to start a new game
var startGame = function() {

  // reset player stats
    playerInfo.reset();

  for (var i = 0; i < enemyInfo.length; i++) {
    if (playerInfo.health > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyObj = enemyInfo[i];

      fight(pickedEnemyObj);

      //if there are more enemies go to shop!
      if(playerInfo.health > 0 && i < enemyInfo.length -1){
        //ask player if they want to shop
        var storeConfirm = window.confirm("The fight is over, would you like to visit the store?")
        
        //if yes then open store:
        if(storeConfirm){
          shop();
        }
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }

//end the game
    endGame();
};

startGame();