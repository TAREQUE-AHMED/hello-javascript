const shoppingCart = [
    {name:"shoe",price:1200,quantity:4},
    {name:"shirt",price:1000,quantity:5},
    {name:"pant",price:900,quantity:2},
    {name:"belt",price:200,quantity:3},
]
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        const totalPrice = product.price * product.quantity;
        sum = sum + totalPrice;
    }
    return sum;
    
}
const expense = totalCost(shoppingCart);
console.log('Total cost: ', expense);