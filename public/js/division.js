export function divide(dividend, divisor){
    
    if(divisor === 0) throw new Error(`Cannot divide ${dividend} by 0`);

    return dividend / divisor

}