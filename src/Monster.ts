import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter | Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  // receiveDamage(attackPoints: number): number {
  //   this._lifePoints -= attackPoints;
  //   if (this._lifePoints <= 0) this._lifePoints = -1;
  //   return this._lifePoints;
  // }

  receiveDamage(attackPoints: number): number {
    const damage = this.lifePoints - attackPoints;
    // if (damage > 0) {
    //   this._lifePoints -= damage;
    // }
    if (damage <= 0) {
      this._lifePoints = -1;
      return this._lifePoints;
    }
    return damage;
  }
}