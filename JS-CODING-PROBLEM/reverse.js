function reverseString(text) {
    let reverse = '';
    for (i = text.length - 1; i >= 0; i--){
        const element = text[i];
        reverse = reverse + element;
        console.log(element,reverse);
    }
    return reverse;
}
const myString = 'I am iron man';
const reverse = reverseString(myString);
console.log('reverse output:',reverse);