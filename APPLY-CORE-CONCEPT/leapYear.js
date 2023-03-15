function leapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        //return true;
        console.log(year+ 'is a leap year');
    }
    else {
        //return false;
        console.log(year+'is not a leap year');
    }
}
// const myYear = leapYear(2000);
// console.log(myYear);
const year = prompt('Enter a Year: ');
leapYear(year);