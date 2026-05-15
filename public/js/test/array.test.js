import { describe } from 'mocha';
import {summarize} from '../arrays.js'
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