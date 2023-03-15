const country = 'Bangladesh';
const age = 89;
const isIndependent = true;
const friends = [12, 23, 45, 34, 23, 45];
const student = { id: 1, age: 12, class: 12, name: 'hulk' };

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(Array.isArray(friends));
console.log(typeof student);

const newFriendsAge = [23, 56, 78, 99, 80];
const totalFriendAge = newFriendsAge.concat(friends);
console.log(totalFriendAge);