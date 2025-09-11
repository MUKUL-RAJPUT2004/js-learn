/**
 Example 1: No Constructor Needed
Scenario: All objects created from the class start out exactly the same. They don't need any unique data when they are first made.

Here, we're creating Goblin enemies. Every goblin is identical when it first appears.
 */
class Goblin {
    // No constructor is written here.
    // JavaScript provides an empty, invisible one for us.
  
    // We can set default properties that are the same for ALL goblins.
    health = 30;
    weapon = 'Club';
  
    attack() {
      console.log(`The goblin attacks with its ${this.weapon}!`);
    }
  }
  
  console.log('--- Example 1: No Constructor Needed ---');
  
  // We create new goblins without passing any arguments.
  const goblin1 = new Goblin();
  const goblin2 = new Goblin();
  
  console.log(goblin1.health); // 30
  goblin2.attack();            // "The goblin attacks with its Club!"
  // Both goblin1 and goblin2 are identical.


  /**
   Example 2: Constructor is Required
Scenario: Each object must be customized with unique data at the moment of its creation.

Here, we're creating a Hero. Each hero needs a unique name and role, so we must pass those values in when we create them.
   */

class Hero {
    // A constructor is REQUIRED to accept and process the unique arguments.
    constructor(name, role) {
      this.name = name;
      this.role = role;
      this.level = 1; // We can still have default properties.
    }
  
    introduce() {
      console.log(`I am ${this.name}, the ${this.role}!`);
    }
  }
  
  console.log('\n--- Example 2: Constructor is Required ---');
  
  // We MUST pass arguments to create our unique heroes.
  const hero1 = new Hero('Zane', 'Knight');
  const hero2 = new Hero('Lyra', 'Archer');
  
  hero1.introduce();        // "I am Zane, the Knight!"
  console.log(hero2.role);  // "Archer"
  // hero1 and hero2 are unique because of the values passed to the constructor.