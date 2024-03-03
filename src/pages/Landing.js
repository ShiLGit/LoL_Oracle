import { React } from "react";
import Grid from "@mui/material/Grid";
import LandingForm from "../components/LandingForm/LandingForm";
import TextCard from "./TextCard";
import Box from "@mui/material/Box";

const Landing = () => {
	return (
		<Box>
				<Grid container direction='row' spacing={2}>
					<Grid item lg={4} md={3} sm={12} xs={12}>
						<TextCard />
					</Grid>
					<Grid item lg={8} md={9} sm={12} xs={12} alignItems='top'>
						<LandingForm />
					</Grid>
				</Grid>
		</Box>
	);
};
export default Landing;
