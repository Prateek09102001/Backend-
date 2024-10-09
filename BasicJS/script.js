// Fundamental of JAVASCRIPT
// Arrays and object
// function return
// async and await
// forEach map filter find indexOf

var check = [ 1, 2, 3, "Hello", true, function(){}, []];

var arr = [1, 2, 3, 4];
arr.forEach((val) => {
    console.log(val+" Hello");
})

// Map is create a new arr and calculate all calculations
var mapArr = arr.map(function (val) {
    return val + 12;
})

console.log(mapArr);

// Filter are use for less and same size of array
// for example i am filter greater then 3 val so many case happen like no val is grater then 3 one val and also other so it is create no of find element size array are created

var filterArr = arr.filter(function (val) {
    if(val >= 3) return true;
    else return false;
})

console.log(filterArr);

// Find is use to find the value and if first val meet them return

var findVal = arr.find(function (val) {
    if(val === 2) return val;    
})

console.log(findVal);

console.log(arr.indexOf(2));
