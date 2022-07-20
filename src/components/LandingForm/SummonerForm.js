import { React, useRef, useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import apiKeyContext from "../../common/ApiKeyContext";

const SummonerForm = () => {
	const MANUAL_DATA = "MANUAL";
	const SUMMONER_NAME_DATA = "SUMMONER_NAME";
	const { apiKey } = useContext(apiKeyContext);
	const [isManual, setIsManual] = useState(false);
	const formData = useRef({
		apiKey,
		dataFormat: SUMMONER_NAME_DATA
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formDataObj = formData.current;
		if (isManual) {
			if (
				!formDataObj.teamOne ||
				formDataObj.teamOne.length < 5 ||
				!formDataObj.teamTwo ||
				formDataObj.teamTwo.length < 5
			) {
				alert(">= 1 of the fields arent filled in >:(");
				return;
			}
			axios.post("/submit-teams").then((resp) => {
				console.log(resp);
			});
		} else {
			console.log("TODO!!!");
		}
	};
	const summoner_textfield = {
		display: "block",
		marginBottom: "10px",
		borderRadius: "0px",
		padding: "5px"
	};
	const handleFormChange = (e) => {
		if (formData.current.teamOne) delete formData.current.teamOne;
		if (formData.current.teamTwo) delete formData.current.teamTwo;
		formData.current.summonerName = e.target.value;
		console.log(formData.current);
	};
	const handleManualFormChange = (e, teamName, idx) => {
		if (!formData.current[teamName]) formData.current[teamName] = [];
		if (formData.current.summonerName) delete formData.current.summonerName;
		formData.current[teamName][idx] = e.target.value;
		console.log(formData.current);
	};
	const toggleIsManual = () => {
		setIsManual((prev) => !prev);
	};
	const team_title = { textAlign: "center", fontSize: "1.1em" };
	const generateTextFields = (teamName) => {
		const toReturn = [];
		for (let i = 0; i < 5; i++) {
			toReturn.push(
				<TextField
					label={"Summoner " + i}
					required
					sx={summoner_textfield}
					onChange={(e) => handleManualFormChange(e, teamName, i)}
					key={teamName + "_" + i}
					inputProps={{ form: { autocomplete: "off" } }}
				/>
			);
		}
		return toReturn;
	};
	const getManualEntryForm = () => {
		return (
			<>
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
			</>
		);
	};
	const getDefaultForm = () => {
		return (
			<Grid item>
				<Typography variant='h5'>Enter a summoner in an active ranked game:</Typography>
				<TextField
					required
					label='Summoner Name'
					sx={{ display: "flex", minWidth: "300px", maxWidth: "80%", margin: "auto" }}
					onChange={handleFormChange}
				></TextField>
			</Grid>
		);
	};
	return (
		<form onSubmit={handleSubmit}>
			<Grid container direction='row' spacing={10} justifyContent='center'>
				{isManual ? getManualEntryForm() : getDefaultForm()}
			</Grid>
			<Grid container direction='column'>
				<Button xs={12} sx={{ margin: "auto" }} type='submit'>
					Predict the Outcome
				</Button>
				<Button onClick={toggleIsManual}>
					{isManual ? "Toggle Summoner Entry Mode (Active Games Only)" : "Toggle Manual Team Entry"}
				</Button>
			</Grid>
		</form>
	);
};
export default SummonerForm;
