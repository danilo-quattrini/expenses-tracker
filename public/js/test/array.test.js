import { describe } from 'mocha';
import {summarize, uniqueValues} from '../arrays.js'
import {assert} from 'chai';

describe('summarize', () => {
    describe('error states', () => { 
        it('should return nothing if the array it\'s empty', () => {
            assert.throws(() => summarize(), Error, `The array it's empty or the argument of the function it's empty too`);
        });
    });

    describe('normal states', () => { 
        it('should be return an object as result', () => {
            assert.deepEqual(summarize([5]),
                {
                total: 1,
                sum: 5,
                average: 5,
                highest: 5,
                lowest: 5
            });
        })
        it('should works with negative numbers', () => {
            assert.deepEqual(summarize([-1,-2,-3]),
                {
                    total: 3,
                    sum: -6,
                    average: -2,
                    highest: -1,
                    lowest: -3
                });
        })
    })
});

describe('uniqueValues', () => {
    describe('error states', () => {
        it('should return an empty array when given an empty array', () => {
            assert.deepEqual(uniqueValues([] ), []);
        });

        it('throw an error if no array has been passed', () => {
            assert.throws(() => uniqueValues(), Error, `No array has been passed to the function`);
        })
    });

    describe('normal state', () => {
        it('should return an array without duplication', () => {
            assert.deepEqual(uniqueValues([1,1,1,2,2,2,3,3,3]), [1,2,3]);
        })
        it('should return an array with one element', () => {
            assert.deepEqual(uniqueValues([1]), [1]);
        })
    })
})