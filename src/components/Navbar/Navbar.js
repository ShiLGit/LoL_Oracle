import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { LOL_ORACLE } from "../../constants";
const defaultBtnStyle = {color: "white", display: "block", margin: "20px", fontFamily: "Josefin Sans Regular"}
const selectedBtnStyle = {color: "white", display: "block", margin: "20px", fontFamily:"Josefin Sans Bold", textDecoration: "underline"}

const Navbar = ({options}) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [currentOption, setCurrentOption] = React.useState(LOL_ORACLE)
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (opt) => {
		setAnchorElNav(null);
		setCurrentOption(opt)
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position='fixed' sx={{ height: "fit-content" }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
			
					<img src={require("../../images/logo.png")} style={{ maxHeight: "50px", margin: "5px 20px" }}></img>

					<Typography
						variant='h3'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						LoL Oracle
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						 {options.map((option) => (
							<Button
								key={option}
								onClick={() => handleCloseNavMenu(option)}
								sx={currentOption === option ? selectedBtnStyle : defaultBtnStyle}
							>
								{option}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
