// ### Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.

// ** Input:**
//     `var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

//     ** Output:**

//         `'TomTimTinTik'`

// ---

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let newStr = '';
for (let num of numbers) {
    newStr = newStr + num;
}
console.log(newStr);