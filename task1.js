// task1.js
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// console.log(colors.reverse());

let revColors = [];
for (let num of colors) {
    revColors.unshift(num);
}

console.log(revColors);