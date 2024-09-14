// Task 1: Create an Inventory Array of Product Objects
let Inventory = [
    { name: 'Mascara', price: 20, quantity: 20, lowStockLevel: 10 },
    { name: 'Blush', price: 40, quantity: 30, lowStockLevel: 15 },
    { name: 'Foundation', price: 70, quantity: 50, lowStockLevel: 25 },
    { name: 'Eyeliner', price: 15, quantity: 25, lowStockLevel: 8 },
    { name: 'Lipstick', price: 12, quantity: 40, lowStockLevel: 20 },
]; // product informations

// Task 2: Create a Function to Display Product Details
function displayProductDetails(products) {
    let productinstock = products.quantity >= products.lowStockLevel ? "In Stock" : "Low Stock"; //compare quantity and low level stock to see if item is in stock or low in stock
    console.log(`${products.name}, $${products.price}, ${products.quantity},${productinstock}`); // display message with all the products informations + if product is in or low stock
};

// Task 3: Create a Function to Update Product Stock After Sales
function updateStock(products, unitsSold) {
    products.quantity -= unitsSold;
    let productinstock = products.quantity >= products.lowStockLevel ? "In Stock" : "Low Stock"; // update function to see if an item is in or low in stock after a sale
    console.log(`Updated quantity for product ${products.name} is ${products.quantity}`);
    if (unitsSold > products.quantity) {
        return (`Not enough products to sell`) // message in case tries to sell more than what inventory has
    };
};

//Task 4: Create a Function to Check Low Stock Products
function checkLowStock(inventory) {
    inventory.forEach(products => {
        if (products.quantity <= products.lowStockLevel) {
            console.log(`Low on stock`);
        }
    });
}; // function to check for products that are low in stock and need to be restocked

