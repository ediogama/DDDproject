import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Edio Smith");
const address = new Address("123", "123 Main St", "Anytown", 321);
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 9.99, "1", 5);
const item2 = new OrderItem("2", "Item 2", 19.99, "2", 10);
const order = new Order("123", customer.id, [item1, item2]);