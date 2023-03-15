var shoppingCart = {
    mouse:10,
    keyboard: 2,
    pen: 5,
    book: 5,
    khata:7
}
//getproperties
var getPen = shoppingCart.pen;
var getPen2 = shoppingCart['book'];
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
var properties = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);

//set propery values
shoppingCart.mouse = 20;
console.log(shoppingCart);
shoppingCart['mouse'] = 30;
console.log(shoppingCart);
shoppingCart[propertyName] = 40;
console.log(shoppingCart);
