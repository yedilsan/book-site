"use strict";

class Enemy {
  health;
  constructor(health) {
    this.health = health;
  }

  recieveDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) {
      console.log("Enemy dead!");
      return;
    }
    console.log(this.health);
  }
}

class Sword {
  #damage;
  constructor(damage) {
    this.#damage = damage;
  }

  strike(enemy) {
    enemy.recieveDamage(this.#damage);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }
  recieveDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    if (this.health <= 0) {
      console.log("Orc dead!");
      return;
    }
    console.log(this.health);
  }
}

const enemy = new Orc(10);
const sword = new Sword(3);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
sword.strike(enemy);
