interface SuperHeroe {
  name: string;
  age: number;
  powers: string[];
  getName?: () => string;
};


export const basicInterfaces = (): void => {
  const flash: SuperHeroe = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper Velocidad", "Time travel"],
    getName() {
      return this.name;
    },
  };

  console.log(flash.getName?.());

  const superman: SuperHeroe = {
    name: "Clark Kent",
    age: 60,
    powers: ["Súper Fuerza"],
  };

  console.log({ superman });

    console.log("--- END BASIC INTERFACES FILE ---");
};


