import {
  //method,
  //method,
  originalArray,
  doubleArray,
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