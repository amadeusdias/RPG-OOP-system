import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player1: Fighter, monsters: SimpleFighter[]) {
    super(player1);
    this._character = player1;
    this._monsters = monsters;
  }

  public fight(): number {
    this._monsters.forEach((m) => {
      while (this._character.lifePoints > 0 && m.lifePoints > 0) {
        this._character.attack(m);
        m.attack(this._character);
      }
    });
    return super.fight();
  }
}