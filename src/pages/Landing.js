import { React } from "react";
import Grid from "@mui/material/Grid";
import LandingForm from "../components/LandingForm/LandingForm";
import TextCard from "./TextCard";
import Box from "@mui/material/Box";

const Landing = () => {
	return (
		<Box>
			<Grid container direction='row'>
				<Grid item lg={5} md={5} sm={12} xs={12}>
					<TextCard />
				</Grid>
				<Grid item lg={7} md={7} sm={12} xs={12} alignItems='top'>
					<LandingForm />
				</Grid>
			</Grid>
		</Box>
	);
};
export default Landing;
