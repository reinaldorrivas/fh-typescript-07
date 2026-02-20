interface AddTwoNumbers {
  (a: number, b: number): number;
}

export const typedFuctions = (): void => {
  const addTwoNumbers: AddTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };

  console.log(addTwoNumbers(1, 2));

  console.log("--- END TYPED FUNCTIONS FILE ---");
};
