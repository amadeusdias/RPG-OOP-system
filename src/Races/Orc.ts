import Race from './Race';

export default class Orc extends Race {
  private maxHp: number;
  static numberOfInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxHp = 74;
    Orc.numberOfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this.maxHp;
  }

  static createdRacesInstances(): number {
    return Orc.numberOfInstances;
  }
}