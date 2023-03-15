var shoppingCart = {
    mouse:10,
    keyboard: 2,
    pen: 5,
    book: 5,
    khata: 7,
    sunglass: 27,
    shoes:5
}
var keys = Object.keys(shoppingCart);
// for (var i = 0; i < keys.length; i++){
//     var propertyName = keys[i];
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName,propertyValue);
// }
//console.log(keys);
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName,value);
}