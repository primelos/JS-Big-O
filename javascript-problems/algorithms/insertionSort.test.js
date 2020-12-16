const { expect } = require('@jest/globals');
const insertionSort = require('./insertionSort')


test('input is array', () => {
    const arr = [3,1,2]
    expect(insertionSort(arr)).toEqual([1,2,3])
    
});

