const phones=[
    { name: 'samsung', camera: 12, storage:'12gb',price:22000,color:'silver'},
    { name: 'samsung', camera: 12, storage:'12gb',price:15000,color:'dark'},
    { name: 'samsung', camera: 12, storage:'12gb',price:20000,color:'golden'},
    { name: 'samsung', camera: 12, storage:'12gb',price:1000,color:'black'},
    { name: 'samsung', camera: 12, storage:'12gb',price:23000,color:'white'},
    { name: 'samsung', camera: 12, storage:'12gb',price:24000,color:'silver'}
]
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);