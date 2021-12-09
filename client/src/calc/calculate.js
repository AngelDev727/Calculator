// my imports
import operate from './operate';
import isNumber from './isNumber';

// all logic for buttons
export default function calculate(obj, btnName) {
    if (btnName === 'AC') {
        return {
            total: null,
            next: null,
            operation: null,
        };
    }

    if (isNumber(btnName)) {
        if (btnName === '0' && obj.next === '0') {
            return {};
        }
        // Update next if there's an operation
        if (obj.operation) {
            if (obj.next) {
                return { next: obj.next + btnName };
            }
            return { next: btnName };
        }
        // Update next and clear value if there's no operation
        if (obj.next) {
            return {
                next: obj.next + btnName,
                total: null,
            };
        }
        return {
            next: btnName,
            total: null,
        };
    }

    if (btnName === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                return {};
            }
            return { next: obj.next + '.'};
        }
        if (obj.operation) {
            return { next: '0.' };
        }
        if (obj.total) {
            if (obj.total.includes('.')) {
                return {};
            }
            return { total: obj.total + '.' };
        }
        return { total: '0.' };
    }

    if (btnName === '=') {
        if (obj.next && obj.operation) {
            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null,
            };
        } else {
            // nothing to do with no operation '='
            return {};
        }
    }

    if (btnName === '+/-') {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return { total: (-1 * parseFloat(obj.total)).toString()};
        }
        return {};
    }

    // If the user presses an operation button, but there is an existing operation
    if (obj.operation) {
        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: btnName,
        };
    }

    // When the user has not typed a number, this will save the operation
    if (!obj.next) {
        return { operation: btnName };
    }

    // saves operation and shifts 'next' to 'total'
    return {
        total: obj.next,
        next: null,
        operation: btnName,
    };
}