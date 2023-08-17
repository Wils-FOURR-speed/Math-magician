import operate from '../../Logic/operate';

describe('operate', () => {
    test('divides two numbers correctly', () => {
        const result = operate(10, 2, '÷');
        expect(result).toBe("5");
    });
    test('subtracts two numbers correctly', () => {
        const result = operate(10, 2, '-');
        expect(result).toBe("8");
    });
    test('subtracts two numbers correctly', () => {
        const result = operate(10, 30, '-');
        expect(result).toBe("-20");
    });
    test('multiplies two numbers correctly', () => {
        const result = operate(10, 0, 'x');
        expect(result).toBe("0");
    });
    test('multiplies two numbers correctly', () => {
        const result = operate(10, 2, 'x');
        expect(result).toBe("20");
    });
    test('adds two numbers correctly', () => {
        const result = operate(10, 2, '+');
        expect(result).toBe("12");
    });
    test('modulus of two numbers correctly', () => {
        const result = operate(10, 2, '%');
        expect(result).toBe("0");
    });
})