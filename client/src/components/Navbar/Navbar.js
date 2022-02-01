import React from "react";
import "./Navbar.css";
const Navbar = ({ options }) => {
	return (
		<div className='Navbar'>
			{options.map((opt) => (
				<h1 className='nav-opt glow' key={opt}>
					{opt}
				</h1>
			))}
		</div>
	);
};

export default Navbar;
