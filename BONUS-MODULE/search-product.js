const products = [
    {id:1,name:"walton",price:19000},
    {id:1,name:"i phone",price:16000},
    {id:1,name:"samsung phone",price:17000},
    {id:1,name:"walton laptop",price:18000},
    {id:1,name:"walton phone",price:190000},
    {id:1,name:"walton laptop",price:192000},
    {id:1,name:"walton Phone",price:19000},
]

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products,'phone');
console.log(result);