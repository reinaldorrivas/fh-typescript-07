interface Client {
  name: string;
  age?: number;
  address: Address;
  getFullAddress(id: string, city: string): string;
}

interface Address {
  id: number;
  zip: string;
  city: string;
}

export const complexInterfaces = (): void => {
  const client: Client = {
    name: "René Rivas",
    age: 35,
    address: {
      id: 200810940,
      zip: "1010a",
      city: "Caracas, Venezuela",
    },
    getFullAddress(id: string, city: string): string {
      return `${id} - ${city}`;
    },
  };

  console.log(client);

  console.log("--- END COMPLEX TS INTERFACES FILE ---");
};
