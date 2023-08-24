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

  it("should activate a customer", () => {
    const customer = new Customer("1", "John");
    const address = new Address("1", "Street 1", "12345", 12345);
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address is undefined and when you activate a customer", () => {

    expect(() => {
      let customer = new Customer("123", "John");
      customer.activate();
    }).toThrowError("Customer address cannot be empty");

});

  it("should activate and deactivate a customer", () => {
    const customer = new Customer("1", "John");
    const address = new Address("1", "Street 1", "12345", 12345);
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });
});
