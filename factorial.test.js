
const factorial = require('./factorial');

describe('factorial function tests', () => {
    test('should return 1 for factorial(0)', () => {
        expect(factorial(0)).toBe(1);
    });

    test('should return correct factorial for a positive integer', () => {
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(3)).toBe(6);
        expect(factorial(5)).toBe(120);
        expect(factorial(10)).toBe(3628800);
    });

    test('should return null for negative numbers', () => {
        expect(factorial(-1)).toBeNull();
        expect(factorial(-5)).toBeNull();
    });

    test('should return null for non-integer values', () => {
        expect(factorial(3.14)).toBeNull();
        expect(factorial('5')).toBeNull();
        expect(factorial(undefined)).toBeNull();
        expect(factorial(null)).toBeNull();
    });
});
