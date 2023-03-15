// for (var i = 0; i <= 20; i++){
//     console.log(i);
//     if (i > 10) {
//         break;
//     }
// }

var arr = [30, 45, 60, 67, 65,39,37,49,12];
for (var i = 0; i <arr.length; i++){
    var number = arr[i];
    if (number >50) {
        continue;
    }
    console.log(number);
}