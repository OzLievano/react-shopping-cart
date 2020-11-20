import React, {useContext} from 'react';
import {productContext} from '../contexts/ProductContext'


// Components
import Product from './Product';

const Products = props => {
	const products = useContext(productContext)
	console.log(products)
	return (
		<div className="products-container">
			{products.products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
