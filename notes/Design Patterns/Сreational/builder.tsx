// Builder is a creational design pattern, which allows constructing complex objects step by step.

// Unlike other creational patterns, Builder doesn’t require products to have a common interface.
//  That makes it possible to produce different products using the same construction process.

class Product {
    parts: string[] = []
}

interface IBuilder {
    buildPartA(): this
    buildPartB(): this
    buildPartC(): this
    getResult(): Product
}

class Builder implements IBuilder {
    // The Concrete Builder
    product: Product

    constructor() {
        this.product = new Product()
    }

    buildPartA() {
        this.product.parts.push('a')
        return this
    }

    buildPartB() {
        this.product.parts.push('b')
        return this
    }

    buildPartC() {
        this.product.parts.push('c')
        return this
    }

    getResult() {
        return this.product
    }
}

class Director {
    // The Director, building a complex representation

    static construct() {
        'Constructs and returns the final product'
        return new Builder()
            .buildPartA()
            .buildPartB()
            .buildPartC()
            .getResult()
    }
}

// The Client
const PRODUCT1 = Director.construct()
console.log(PRODUCT1.parts)

// OUTPUT : [ 'a', 'b', 'c' ]