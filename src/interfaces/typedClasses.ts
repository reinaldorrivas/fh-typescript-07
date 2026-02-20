interface Xmen {
  name: string;
  realName: string;
  mutantPower(power: string): string;
}

interface Human {
  isHuman: boolean;
}

export const typedClasses = (): void => {
  class Mutant implements Xmen, Human {
    public name: string;
    public realName: string;
    public isHuman: boolean;

    constructor(name: string, realName: string, isHuman: boolean) {
      this.name = name;
      this.realName = realName;
      this.isHuman = isHuman;
    }

    public mutantPower(power: string): string {
      return this.isHuman
        ? "This Xmen is human, it doesn't have any power"
        : `It's power is: ${power}`;
    }
  }

  const wolverine: Mutant = new Mutant("Wolverine", "Logan", false);

  console.log("Wolverine", wolverine);
  console.log(wolverine.mutantPower("Regeneration"));

  console.log("--- END TYPED CLASSES FILE ---");
};
