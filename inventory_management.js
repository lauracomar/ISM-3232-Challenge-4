// Task 1: Create an Inventory Array of products Objects
let Inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
]; // products informations

// Task 2: Create a Function to Display products Details
function displayproductsDetails(products) {
    let productsinstock = products.quantity >= products.lowStockLevel ? "In Stock" : "Low Stock"; //compare quantity and low level stock to see if item is in stock or low in stock
    console.log(`${products.name}, $${products.price}, ${products.quantity},${productsinstock}`); // display message with all the products informations + if products is in or low stock
};

// Task 3: Create a Function to Update products Stock After Sales
function updateStock(products, unitsSold) {
    if (unitsSold > products.quantity) {
        console.log(`Not enough products to sell`); // message in case tries to sell more than what Inventory has
    };
    products.quantity -= unitsSold;
    let productsinstock = products.quantity >= products.lowStockLevel ? "In Stock" : "Low Stock"; // update function to see if an item is in or low in stock after a sale
    console.log(`Updated quantity for products ${products.name} is ${products.quantity}`);
};

//Task 4: Create a Function to Check Low Stock products
function checkLowStock(Inventory) {
    Inventory.forEach(products => {
        if (products.quantity <= products.lowStockLevel) {
            console.log(`Low on stock`);
        }
    });
}; // function to check for products that are low in stock and need to be restocked

// Task 5: Create a Function to Calculate Total Inventory Value
function calculateInventoryValue(Inventory) {
    let totalInventoryValue = Inventory.reduce((total, products) => total + (products.price * products.quantity), 0);
    console.log(`Total Inventory Value is ${totalInventoryValue}`);
}; // calculate the value of all products inventories

// Task 6: Create a Function to Process a Sale
function processSale(productsname, unitsSold) {
    let products = Inventory.find(x => x.name === productsname); // find and process sale
    if (!products) {
        console.log(`products not found`); // error message
    };
    updateStock(products, unitsSold); //update stock after sale
};

// testing 
displayproductsDetails(Inventory[2]); // testing to display tablet informations
processSale('Tablet', 3); // testing to process the sale of 3 tablets
checkLowStock(Inventory); // test to check stock status
calculateInventoryValue(Inventory); // calculate total value of inventory