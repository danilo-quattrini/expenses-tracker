/**
 * Return true if the password it is valid false otherwise
 * @param {string} password the password to validate
 * @return {Object} true if the password it's valid flase otherwise with an error message.
* */
export function passwordValidator(password) {
    if(! password){
        return { valid: false, error: `Password hasn't been declare or defined` }
    }

    const sanitizedPassword = password.trim();

    if(sanitizedPassword.length === 0) {
        return { valid: false, error: `You cannot leave the password blank` }
    }
    if(sanitizedPassword.length < 8) {
        return { valid: false, error: `Too short, min 8 characters` }
    }
    if(! /\d/.test(sanitizedPassword)){
        return { valid: false, error: `Password should contain at least one number` }
    }
    if(! /[A-Z]/.test(sanitizedPassword)){
        return { valid: false, error: `Must contain at least one uppercase letter` }
    }
    
    return { valid: true, error: null }
}