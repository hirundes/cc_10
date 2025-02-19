//Task 1 - Created Product Class 
class Product {     //CREATE A CLASS Product WITH PROPERTIES NAME, ID, PRICE, STOCK
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

getDetails() {      //ADD METHOD get(Details) THAT RETURNS FORMATTED STRING OF PRODUCT DETAILS
    console.log(`Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: $${this.stock}`);
}

updateStock(quantity) {     //ADD METHOD updateStock(qualtity) THAT MODIFIES STOCK LEVEL WHEN ORDER IS PLACED
    if (quantity > 0, quantity <= this.stock) {
        this.stock -= quantity;
        console.log(`Product: ${this.name}, ID: ${this.id}, Price: ${this.price}, Stock: $${this.stock}`)
    }
}
}

console.log ("---Task 1---")    //INSTANTIATE Product as prod1, LOGGED "Task 1" AND prod1.getDetails(); AND prod1.updateStock(3);
const prod1 = new Product("Laptop", 101, 1200, 10);
prod1.getDetails(); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"