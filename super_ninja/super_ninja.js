class Ninja {
  constructor(name, strength, speed, health = 3){
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.health = health;
  }
  sayName(){
    console.log(`${this.name}`);
    return this
  }
  showStats(){
    console.log(`Name: ${this.name}`,`Strength:${this.strength}`,`Speed: ${this.speed}`,`Health:${this.health}`);
    return this
  }
  drinkSake(){
    this.health += 10;
    return this
  }
}

class Sensei extends Ninja {
  constructor(name, strength, speed, health = 200, wisdom=10){
    super(name,strength,speed,health)
    this.wisdom = wisdom
  }
  speakWisdom(){
    this.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.")
    return this
  }
}




// example output
const superSensei = new Sensei("Master Splinter",10,10);
superSensei.speakWisdom().showStats()
// -> "What one programmer can do in one month, two programmers can do in two months."
//-> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

