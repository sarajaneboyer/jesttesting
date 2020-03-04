// export const methodName = (param) => {
// }

let numberArray = [1,2,3,4]

export const originalArray = (arr) => {
  return arr
}

// return array with double values in array
// doubleArray(numberArray) // => [2,4,6,8];  hint use map
 export const doubleArray = (arr) => {
   var newArray = arr.map(function(index, arr) {
     return index*2
   })
   return newArray
 }

 // return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4,6,8];  hint use filter 
export const evensOnlyArray = (arr) => {
  
}