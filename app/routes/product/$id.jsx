import { json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant';

export async function loader({params}) {
	invariant(params.id, "Expected product id to be defined");
	const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
	return json(await res.json())
}

export default function ProductIndex() {
	const product = useLoaderData()
	return (
		<>
			<h1>Product</h1>
			<ul>
				{JSON.stringify(product, 2, null)}
			</ul>
		</>
	)
}
