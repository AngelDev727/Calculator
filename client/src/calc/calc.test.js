// my imports
import calculate from './calculate';
import { expect } from 'chai';

// tests for calc operations

function pressBtns(btns) {
    const value = {};
    btns.forEach((btn) => {
        Object.assign(value, calculate(value, button));
    });

    Object.keys(value).forEach((key) => {
        if (value[key] === null) {
            delete value[key];
        }
    });
    return value;
}

function expectBtns(btns, expectation) {
    expect(pressBtns(btns)).to.deep.equal(expectation);
}

it('should support 6', () => {
    expectBtns(['6'], { next: '6 '});
});

it('should support 66', () => {
    expectBtns(['6', '6'], { next: '66' });
});

it('should support 6 + 6', () => {
    expectBtns(['6', '+', '6'], {
        next: '6',
        total: '6',
        operation: '+',
    });
});

it('should support 6 + 6 =', () => {
    expectBtns(['6', '+', '6', '='], {
        total: '12',
    });
});

it('should support 00 + 0 =', () => {
    expectBtns(['0', '0', '+', '0', '='], {
        total: '0',
    });
});

it('should support 6 + 6 = 9', () => {
    expectBtns(['6', '+', '6', '=', '9'], {
        next: '9';
    });
});

it('should support 3 + 6 = +', () => {
    expectBtns(['3', '+', '6', '=', '+'], {
        total: '9',
        operation: '+',
    });
});

it('should support 3 + 6 = + 9', () => {
    expectBtns(['3', '+', '6', '=', '+', '9'], {
        total: '9',
        operation: '+',
        next: '9',
    });
});

it('should support 3 + 6 = + 9 =', () => {
    expectBtns(['3', '+', '6', '=', '+', '9', '='], {
        total: '18',
    });
});

it('should support 3 + = 3 =', () => {
    expectBtns(['3', '+', '=', '3', '='], {
        total: '6',
    });
});