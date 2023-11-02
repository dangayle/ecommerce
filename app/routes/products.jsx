import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

export async function loader() {
    const res = await fetch('https://fakestoreapi.com/products?limit=10')
    return json(await res.json())
}

export default function ProductIndex() {
    const products = useLoaderData()
    return (
        <>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
