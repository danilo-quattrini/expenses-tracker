import { describe } from 'mocha';
import { assert } from 'chai';
import { passwordValidator } from '../password-validator.js';

describe('password validator', () => {

    describe('error case', () => {
        it('should return false and a message if the password it has not be passed in the function', () => {
            assert.deepEqual(passwordValidator(null), {
                valid: false,
                error: `Password hasn't been declare or defined`,
            })
        })
        it('should return false and a message if the password it\'s empty', () => {
            assert.deepEqual(passwordValidator(''), {
                valid: false,
                error: `Password hasn't been declare or defined`,
            })
        })
        it('should return false and a message if the password contains spaces', () => {
            assert.deepEqual(passwordValidator('                                        '), {
                valid: false,
                error: `You cannot leave the password blank`,
            })
        })
    })

    describe('normal case', () => {
        it('should return error because the password doesn\'t contains any number', () => {
            assert.deepEqual(passwordValidator('examplepassword'), {
                valid: false,
                error: `Password should contain at least one number`
            })
        })
        it('should return error because the password it\'s too short', () => {
            assert.deepEqual(passwordValidator('abc'), {
                valid: false,
                error: `Too short, min 8 characters`
            })
        })
        it('should return true because the password it\'s in the right format', () => {
            assert.deepEqual(passwordValidator('adfadDadfa31!'), {
                valid: true,
                error: null
            })
        })
        it('should return false because the password it\'s in the right format but too short', () => {
            assert.deepEqual(passwordValidator('adf31!'), {
                valid: false,
                error: `Too short, min 8 characters`
            })
        })
        
        it('should return false without an uppercase letter', () => {
            assert.deepEqual(passwordValidator('alllower1!'), {
                valid: false,
                error: 'Must contain at least one uppercase letter'
            })
        })
    })
})
