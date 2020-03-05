import {
  //method,
  //method,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  allPositiveNumbers,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
  doubleLikes,
  moreThan100Likes,
  justArtistMoreThan100Likes,
  numberOfLikes,
  findObjByName
} from '../app'


let numberArray = [1,2,3,4]


// hint of look in to before_each or before_all
describe('originalArray test', ()=>{
  test('original array should return an identical array', ()=>{
    expect(originalArray([1,2,3])).toEqual([1,2,3])
  })
})

describe('doubleArray test', ()=>{
  test('should double each value in the array', ()=>{
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  })
})

describe('evensOnlyArray test', ()=>{
  test('gives an array with odd values removed', ()=>{
    expect(evensOnlyArray([6,5,4,3,2,1])).toEqual([6,4,2])
  })
})

describe('arraySum test', ()=>{
  test('sums all number in the array', ()=>{
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
})


//this is testing for true
describe('allNumbersGreaterThanZero test 1', ()=>{
  test('is every value > 0', ()=>{
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
})

//this is testing for false when all values are <= 0
describe('allNumbersGreaterThanZero test 2', ()=>{
  test('is every value > 0', ()=>{
    expect(allNumbersGreaterThanZero([-3,-2,-1,0])).toEqual(false)
  })
})

//this is testing for false when SOME values are <= 0
describe('allNumbersGreaterThanZero test 3', ()=>{
  test('is every value > 0', ()=>{
    expect(allNumbersGreaterThanZero([-1,0,1,2])).toEqual(false)
  })
})

// testing the method I accidentally made
describe('allPositiveNumbers', ()=>{
  test('returns an array of only positive values', ()=>{
    expect(allPositiveNumbers([-1,0,1,2,3])).toEqual([1,2,3])
  })
})

//testing if someNumbersAreOdd works when all numbers are even
describe('someNumbersAreOdd test 1', () => {
  test('are there any odd numbers in the array?', () => {
    expect(someNumbersAreOdd([-2,0,2,4,6])).toEqual(false)
  })
})

//testing if someNumbersAreOdd works when all one number is odd
describe('someNumbersAreOdd test 2', ()=>{
  test('are there any odd numbers in the array?', ()=>{
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
  })
})

//testing if someNumbersAreOdd works when the odd number is negative
describe('someNumbersAreOdd test 3', ()=>{
  test('are there any odd numbers in the array?',()=>{
    expect(someNumbersAreOdd([-3,2,4,6])).toEqual(true)
  })
})

//testing evensOnlyAndDoubleArray including 0 and negatives
describe('evensOnlyAndDoubleArray test', () => {
  test('remove odd numbers and then double array entries', () => {
    expect(evensOnlyAndDoubleArray([-2,-1,0,1,2,3,4,5])).toEqual([-4, 0, 4, 8])
  })
})


//testing findItem when item exists
describe('findItem test 1', () => {
  test('find an existing item and print it', () => {
    expect(findItem([1,2,3,4],2)).toEqual(2)
  })
})

//testing findItem when item does not exist
describe('findItem test 2', () => {
  test('display not found error when an item does not exist', () => {
    expect(findItem([1,2,3,4],5)).toEqual('not found')
  })
})

//testing sortArray
describe('sortArray test', () => {
  test('should return an array sorted by number in descending order', () => {
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })
})

//testing doubleLikes
describe('doubleLikes test', () => {
  test('should double likes of each artist and print the hash', () => {
    expect(doubleLikes([{name: 'a', likes:100},{name: 'b', likes:99},{name: 'c', likes:101}])).toEqual([{name: 'a', likes:200},{name: 'b', likes:198},{name: 'c', likes:202}])
  })
})

//testing moreThan100Likes
describe('moreThan100Likes test', () => {
  test('should return an array of only the artists who have more than 100 likes', () => {
    expect(moreThan100Likes([{name: 'a', likes:100},{name: 'b', likes:99},{name: 'c', likes:101}])).toEqual([{name: 'c', likes:101}])
  })
})


//testing justArtistMoreThan100Likes
describe('justArtistMoreThan100Likes test', () => {
  test('should return an array with just the artists names who have more than 100 likes', () => {
    expect(justArtistMoreThan100Likes([{name: 'a', likes:100},{name: 'b', likes:99},{name: 'c', likes:101}])).toEqual(['c'])
  })
})


//testing numberOfLikes
describe('numberOfLikes test', () => {
  test('should return the total number of likes for all artists', () => {
    expect(numberOfLikes([{name: 'a', likes:100},{name: 'b', likes:99},{name: 'c', likes:101}])).toEqual(300)
  })
})


// describe('myArray', () => {
//   beforeEach(() => {
//     const arr = new myArray([1,2,3]);
//   })
//   test('myArray to string', () => {
//     expect(arr.toString).toEqual('1,2,3');
//   })
// })


// [{name: 'a', likes:100},{name: 'b', likes:99},{name: 'c', likes:101}]