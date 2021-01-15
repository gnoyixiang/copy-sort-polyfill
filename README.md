# copy-sort-polyfill
Support Array.sort without mutating original array

## Getting started
```
npm install copy-sort-polyfill
```

At the top level your application, import the polyfill.
```
require("copy-sort-polyfill")
```

## How it works
To return a sorted array without mutating the original array, pass in the 2nd argument
```
const arr = [1, 4, 3]
const sorted = arr.sort(function (a, b) {
  return a - b
}, true)
console.log(arr)    // [1, 4, 3]
console.log(sorted) // [1, 3, 4]
```

Without adding the 2nd argument, the sort function will work as per native [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
