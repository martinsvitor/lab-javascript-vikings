// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(dmg){
    this.health -= dmg
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dmg){
    this.health -= dmg
    if(this.health > 0){
      return `${this.name} has received ${dmg} points of damage`
    }
    else{
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg){
    this.health -= dmg;
    if(this.health > 0){
      return `A Saxon has received ${dmg} points of damage`
    }
    else{
      return `A Saxon has died in combat`
    }
  }

}


// War
class War {
  constructor(){
    this.vikingArmy =[];
    this.saxonArmy =[];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  };
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  };
  vikingAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    
    const result = randomSaxon.receiveDamage(randomViking.strength)
    
    
      if(randomSaxon.health <= 0){
      this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon))
      }
    return result
     
  };
  saxonAttack(){
    const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    
    const result = randomViking.receiveDamage(randomSaxon.strength)
    
      if(randomViking.health <= 0){
      this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking));
      }
    return result
  };

  showStatus(){
    if(this.saxonArmy.length < 1){
      return "Vikings have won the war of the century!"
    }
    else if(this.vikingArmy.length < 1){
      return "Saxons have fought for their lives and survived another day..."
    }
    else if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
      return "Vikings and Saxons are still in the thick of battle."
    }
    
  };

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
