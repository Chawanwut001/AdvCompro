let values1 = ['Apple', 1, false];
let values2 = ['fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

function commonElements(arr1, arr2, arr3) {
    let common = [];    
    for (let item of arr1) {
        if (arr2.includes(item) && arr3.includes(item)) {
            common.push(item);
        }
    }
    return common;
}
console.log(commonElements(values1, values2, values3));
