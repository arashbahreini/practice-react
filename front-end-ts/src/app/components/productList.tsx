'use client'

import { useState } from 'react'

export interface Product {
    id: number
    name: string
    price: number
}
let counter = 0
export default function ProductList() {
    const [productList, setProductList] = useState<Product[]>([])

    const addNewProduct = () => {
        setProductList([
            ...productList,
            { id: counter++, name: 'Arash', price: 100 },
        ])
    }

    const removeProduct = (product: Product) => {
        setProductList(productList.filter((x) => x.id !== product.id))
    }
    return (
        <>
            {productList.map((product: Product) => (
                <div key={product.id} className="my-2">
                    <span>
                        ID: {product.id}, Name is {product.name}, price is:{' '}
                        {product.price}
                    </span>
                    <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                            removeProduct(product)
                        }}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <button className="btn btn-success mx-2" onClick={addNewProduct}>
                Add new
            </button>
        </>
    )
}
