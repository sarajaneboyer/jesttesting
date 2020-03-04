// export const methodName = (param) => {
// }

let numberArray = [1,2,3,4]


export const originalArray = (arr) => {
  return arr
}

// return array with double values in array
// doubleArray(numberArray) // => [2,4,6,8];  hint use map
 export const doubleArray = (arr) => {
   var newArray = arr.map(function(el) {
     return el*2
   })
   return newArray
 }

 // return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4,6,8];  hint use filter 
export const evensOnlyArray = (arr) => {
  function evenFunction(value){
    return value%2==0
  }
  var evenArray = arr.filter(evenFunction);
  return evenArray
}

// return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce
export const arraySum = (arr) => {
  function sumFunction(sum,value){
    return sum + value
  }
  return arr.reduce(sumFunction)
}

// return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every
export const allNumbersGreaterThanZero = (arr) => {
  function isPositive(el){
    return el > 0
  }
  return arr.every(isPositive)
}

// I misunderstood the one above and wrote this instead so I'm leaving it here.
export const allPositiveNumbers = (arr) => {
  function positiveNumbers(value){
    return value > 0
  }
  return arr.filter(positiveNumbers)
}

// return true if one or more items are odd
// someNumbersAreOdd(numberArray) // => true; use some
export const someNumbersAreOdd = (arr) => {
  function isNumberOdd(el){
    return el%2!==0
  }
  return arr.some(isNumberOdd)
}

// return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter
export const evensOnlyAndDoubleArray = (arr) => {
  function doubleFunction(el){
    return el*2
  }
  function evenFunction(el){
    return el%2==0
  }
  var evenArray = arr.filter(evenFunction);
  var evenDoubleArray = evenArray.map(doubleFunction);
  return evenDoubleArray
}

// find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1
export const findItem = (arr, value) => {
  function findValue(el){
    return el === value
  }
  var newArray = arr.filter(findValue)
  if (newArray.length === 0) {
    return 'not found'
  }
  else {
    return newArray[0]
  }
}

//sortArray(numberArray) //=> [4,3,2,1] *desc*
export const sortArray = (arr) => {
  function whichIsLarger(el1,el2) {
    return el1-el2
  }
  return arr.sort(whichIsLarger)
}


let artists = [
  {name: 'a', likes:100},
  {name: 'b', likes:99},
  {name: 'c', likes:101}, 
]



// doubles likes of artist
//doubleLikes(artists)
// => [
//   {name: 'a', likes:200},
//   {name: 'c', likes:198},
//   {name: 'c', likes:202},  
// ]; 

export const doubleLikes = (arr) => {
  function doubler(el){
    var currentLikes = el.likes;
    var newLikes = currentLikes*2;
    el.likes = newLikes;
    return el;
  }
  let newArray = arr.map(doubler);
  return newArray;
}
