import { divide } from "../division.js";
import { assert } from 'chai';

describe('division', () => {

    describe(('error case'), () => {
        it("should throw an error if the divisor it's 0", function () {
            assert.throws(() => divide(5, 0), Error, `Cannot divide 5 by 0`);
        });
    })

    describe(('division operation'), () => {
        it("10 divided by 5 should return 2", function () {
            assert.strictEqual(divide(10, 5), 2.0);
        });

        it("5 divided by 2 should return 2.5", function () {
            assert.strictEqual(divide(5, 2), 2.5);
        });

        it("7 divided by 2 should return 3.5", function () {
            assert.strictEqual(divide(7, 2), 3.5);
        });

        it("0 divided by 5 should return 0", function () {
            assert.strictEqual(divide(0, 5), 0);
        });
    })
});