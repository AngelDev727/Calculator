// my imports
import Big from 'big.js';

// logic for various operations imported from Big.js library

export default function operate(numberOne, numberTwo, operation) {
    const one = Big(numberOne);
    const two = Big(numberTwo);

    if (operation === '+') {
        return one.plus(two).toString();
    }
    if (operation === '-') {
        return one.minus(two).toString();
    }
    if (operation === 'x') {
        return one.times(two).toString();
    }
    if (operation === '÷') {
        if (two === '0') {
            alert('ERROR: Cannot divide by 0'); // alert box pops up if user tries to divide by 0
            return '0';
        } else {
            return one.div(two).toString();
        }
    }
    if (operation === '%') {
        return one.mod(two).toString();
    }
    throw Error(`Error: Operation Unknown '${operation}'`);
}