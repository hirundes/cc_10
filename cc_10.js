//Task 1 - Created Product Class 
class Product {     //CREATE A CLASS Product WITH PROPERTIES NAME, ID, PRICE, STOCK
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

getDetails() {      //ADD METHOD get(Details) THAT RETURNS FORMATTED STRING OF PRODUCT DETAILS
    return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
};

updateStock(quantity) {     //ADD METHOD updateStock(quantity) THAT MODIFIES STOCK LEVEL WHEN ORDER IS PLACED
    if (quantity > 0 && quantity <= this.stock) {
        this.stock -= quantity;
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    }
    else {
        console.log("Invalid")
    }
};
};

console.log ("---Task 1---")    //INSTANTIATE Product as prod1, LOGGED "Task 1" AND prod1.getDetails(); AND prod1.updateStock(3);
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


//Task 2 - Created Order Class
class Order {       //CREATE CLASS ORDER WITH PROPERTIES ORDEID, PRODUCT, QUANTITY
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
    };

getOrderDetails() {     //ADD METHOD getOrderDetails() THAT RETURNS ORDER DETAILS
    return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`
};
};

console.log("---Task 2---")     //LOGGED "Task 2", getOrderDetails, and updateStock(2)
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)


//Task 3 - Created Inventory Class
class Inventory {     //CREATING INVENTORY CLASS
    constructor() {
        this.products = [];     //ADDING PROPERTY PRODUCTS
        this.orders = [];
    };

   addProduct(products) {       //ADDING METHOD addProducts(product) TO ADD A NEW PRODUCT TO INVENTORY
    this.products.push(products);
   }

   listProducts() {             //ADDING METHOD listProducts() TO LOG ALL PRODUCTS' DETAILS
    this.products.forEach(product => console.log(product));
   }
   placeOrder(orderId, product, quantity) {     //APART OF TASK 4: ADD METHOD PLACEODER THAT CREATES NEW ORDER AND ADDS IT TO ORDERS IF STOCK IS AVAILABLE
    if (product.stock >= quantity) {
        const order = new Order (orderId, product, quantity);
        this.orders.push (order); 
        product.updateStock(quantity); }
        else {console.log("Not enough stock is available")}
   };
   listOrders() {       //LOGS ALL PLACED ORDERS
    this.orders.forEach(order => console.log(order.getOrderDetails()));
}
    restockProduct(productId, quantity) {       //APART OF TASK 5: ADD METHOD RESTOCKPRODUCT WHICH INCREASES STOCK OF PRODUCTS
        const product = this.products.find(prod => prod.id === productId);
        if (product) {
            product.stock += quantity;
            console.log("Restocked"); } 
            else console.log("Product was not found")
    };
};

console.log("---Task 3---")     //LOGGING "Task 3", AND DECLARING INVENTORY, AND LOGGIN add.Products(prod1) AND list.Products
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


//Task 4 - Implemented Order Management
console.log("---Task 4---")     //LOGGING "Task 4," AND placeOrder(), listOrders() AND prod1.getDetails()
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3" 



//Task 5 - Implemented Product Restocking
console.log("---Task 5---")     //LOGGING "Task 5" AND restockProduct, prod1.getDetails()
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"