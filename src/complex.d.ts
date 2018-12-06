declare type complex = [number, number];
declare class Complex {
    private readonly numbers;
    constructor(a: Complex | complex | number | string);
    stringify(): string;
    add(...a: (Complex | complex | number | string)[]): Complex;
    subtract(...a: (Complex | complex | number | string)[]): Complex;
    multiply(...a: (Complex | complex | number | string)[]): Complex;
    divide(a: Complex | complex | number | string): Complex;
    power(a: Complex | complex | number | string): Complex;
    root(a?: Complex | complex | number | string): Complex;
    ln(): Complex;
    log(a?: Complex | complex | number | string): Complex;
    sin(): Complex;
    cos(): Complex;
    tan(): Complex;
    cot(): Complex;
    sec(): Complex;
    csc(): Complex;
    asin(): Complex;
    acos(): Complex;
    atan(): Complex;
    acot(): Complex;
    asec(): Complex;
    acsc(): Complex;
    sinh(): Complex;
    cosh(): Complex;
    tanh(): Complex;
    coth(): Complex;
    sech(): Complex;
    csch(): Complex;
    asinh(): Complex;
    acosh(): Complex;
    atanh(): Complex;
    acoth(): Complex;
    asech(): Complex;
    acsch(): Complex;
    abs(): number;
    conjugate(): Complex;
    R(): number;
    I(): number;
    get(): complex;
}
export default Complex;
