import React, {useContext} from 'react';
import {cartContext} from '../contexts/cartContext'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const {cart} = useContext(cartContext)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
