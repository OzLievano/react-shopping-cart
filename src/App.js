import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {productContext} from '../src/contexts/ProductContext'
import {cartContext} from '../src/contexts/cartContext'
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart,item])
	};


	return (
		<div className="App">
			<productContext.Provider value={{products,addItem}}>
				<cartContext.Provider value={cart}>
					<Navigation/>

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</cartContext.Provider>
			</productContext.Provider>
		</div>
	);
}

export default App;
