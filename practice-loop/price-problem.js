var prices = [300, 160, 100, 400, 500, 600];
for (var i = 0; i < prices.length; i++){
    var price = prices[i];
    
    if (price > 200) {
        continue;
    }
    console.log(price);
    
    
}