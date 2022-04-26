import React from "react";
import "./Navbar.css";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
const Navbar = ({ options }) => {
	return (
		<AppBar>
			<Toolbar variant='string' disableGutters>
				{options.map((opt) => (
					<Typography variant='h5' component='div' gutterBottom sx={{ display: "flex", padding: "10px" }}>
						{opt}
					</Typography>
				))}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
