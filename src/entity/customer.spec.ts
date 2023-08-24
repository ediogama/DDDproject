import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {

  it("should throw error when id is empty", () => {

        expect(() => {
          let customer = new Customer("", "John");
        }).toThrowError("Id is required");

    });

  it("should throw error when name is empty", () => {

      expect(() => {
        let customer = new Customer("123", "");
      }).toThrowError("Name is required");

  });

  it("should change name", () => {
        let customer = new Customer("1", "John");
        customer.changeName("Mary");
        expect(customer.name).toBe("Mary");
    }
  );

  it("should activate customer", () => {
    const customer = new Customer("1", "John");
    const address = new Address("1", "Street 1", "12345", 12345);
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });
});
