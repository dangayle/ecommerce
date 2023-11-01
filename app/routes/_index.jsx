import { Link } from '@remix-run/react'
export default function Homepage() {
	return (
		<>
			<h1>Homepage</h1>
			<ul>
				<li>
					<Link to="/products">Products</Link>
				</li>
			</ul>
		</>
	)
}
