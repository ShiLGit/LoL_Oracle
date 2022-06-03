import { React, useRef } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
const SummonerForm = () => {
	const formData = useRef({
		teamOne: {},
		teamTwo: {}
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post("/welcome").then((resp) => {
			console.log(resp);
		});
	};
	const handleFormChange = (e, keys) => {
		formData.current[keys[0]][keys[1]] = e.target.value;
		console.log(formData.current);
	};
	const summoner_textfield = {
		display: "block",
		marginBottom: "10px",
		borderRadius: "0px",
		padding: "5px"
	};
	const team_title = { textAlign: "center", fontSize: "1.1em" };
	const generateTextFields = (teamName) => {
		const toReturn = [];
		for (let i = 1; i < 6; i++) {
			toReturn.push(
				<TextField
					label={"Summoner " + i}
					required
					sx={summoner_textfield}
					onChange={(e) => handleFormChange(e, [teamName, "p" + i])}
					key={teamName + "_" + i}
					inputProps={{ form: { autocomplete: "off" } }}
				/>
			);
		}
		return toReturn;
	};
	return (
		<form onSubmit={handleSubmit}>
			<Grid container direction='row' spacing={10} justifyContent='center'>
				<Grid item>
					<Typography variant='h6' sx={team_title}>
						Team 1
					</Typography>
					{generateTextFields("teamOne")}
				</Grid>
				<Grid item>
					<Typography variant='h6' sx={team_title}>
						Team 2
					</Typography>
					{generateTextFields("teamTwo")}
				</Grid>
			</Grid>

			<Grid container>
				<Button xs={12} sx={{ margin: "auto" }} type='submit'>
					Predict the Outcome
				</Button>
			</Grid>
		</form>
	);
};
export default SummonerForm;
