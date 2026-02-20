export const complexInterfaces = (): void => {
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

  const Client: Client = {
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

  console.log(Client);

  console.log("--- END COMPLEX TS INTERFACES FILE ---");
};
