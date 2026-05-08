import { pow } from '../conditions.js';
import { assert } from 'chai';

describe("pow", function (){
    describe(("wrong values"), function() {
        it('should returns NaN if the power it\'s less than 0 ', () => {
            assert.isNaN(pow(2, -1));
        });
        it('should returns NaN if the power will be different if rounded', () => {
            assert.isNaN(pow(0, 1.5));
        });
    });
    
    describe("test x power of 3", function() {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        } 

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    describe("Task to renew a test", function () {
        function raiseXtoPowerOf(n) {
            it(`Raises x to the power ${n}`, function() {
                let x = 5;
                let result = x ** n;
                assert.equal(pow(x, n), result);
            });
        }

        for(let i = 1; i <= 3; i++){
             raiseXtoPowerOf(i);
        }
    })
})