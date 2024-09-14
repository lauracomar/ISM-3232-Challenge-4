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
