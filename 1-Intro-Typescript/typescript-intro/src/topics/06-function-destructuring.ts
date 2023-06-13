export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description:'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'IPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {products, tax} = options

    console.log(products)
    console.log(tax)
    let total = 0;

    products.forEach(product => {
        const {price} = product
        total += price;
    });

    return [total, total* options.tax]
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxResult] = taxCalculation(
    {
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total);
console.log('Tax', taxResult);

export{};
