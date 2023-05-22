import { React, useRef, useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Cookies from "js-cookie";
import { APIKEY } from "../../common/constants";
import RequestLogic from "../../common/RequestLogic";
import LoadMsg from "./LoadMsg";
const SummonerForm = () => {
	const apiKey = Cookies.get(APIKEY);
	const [isManual, setIsManual] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const formData = useRef({
		apiKey
	});

	const makePredictionFailCb = (err) => {
		setIsLoading(false);
		alert(err.response.data);
	};
	const makePredictionSuccessCb = () => {
		setIsLoading(false);
		alert("dummy success fx");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const formDataObj = formData.current;
		console.log("Submitting formdata: ", formDataObj);
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
		}
		setIsLoading(true);
		RequestLogic.makePrediction(formDataObj, makePredictionSuccessCb, makePredictionFailCb);
	};
	const summoner_textfield = {
		display: "flex",
		marginBottom: "10px",
		borderRadius: "0px",
		padding: "5px",
		fontSize: "0.5em"
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
					variant='standard'
				/>
			);
		}
		return toReturn;
	};

	const getManualEntryForm = () => {
		return (
			<Grid container direction='column'>
				<Grid item>
					<Grid container sx={10} spacing={4} justifyContent='center'>
						<Grid item xs={4} justifyContent='center'>
							<Typography variant='h6' sx={team_title}>
								Team 1
							</Typography>
							{generateTextFields("teamOne")}
						</Grid>
						<Grid item xs={4}>
							<Typography variant='h6' sx={team_title}>
								Team 2
							</Typography>
							{generateTextFields("teamTwo")}
						</Grid>
					</Grid>
				</Grid>
				<Grid item justifyContent='center'>
					<Button type='submit' sx={{ display: "flex", margin: "auto" }}>
						Predict the Outcome
					</Button>
				</Grid>
			</Grid>
		);
	};
	const getDefaultForm = () => {
		return (
			<Grid item sx={{ marginTop: "60px" }}>
				<Typography variant='h5' align='center'>
					Enter a summoner in an active Summoner's Rift game:
				</Typography>
				<Grid container justifyContent='center' sx={{ marginTop: "40px" }}>
					<Grid item xs={8}>
						<TextField
							required
							label='Summoner Name'
							variant='standard'
							sx={{ display: "flex" }}
							onChange={handleFormChange}
							inputProps={{ form: { autocomplete: "off" } }}
						></TextField>
					</Grid>
					<Grid item xs={3}>
						<Button type='submit'>Predict the Outcome</Button>
					</Grid>
				</Grid>
			</Grid>
		);
	};
	const getFormBody = () => {
		if (isLoading) {
			return <LoadMsg msg={"Computing..."}></LoadMsg>;
		} else {
			return (
				<form onSubmit={handleSubmit}>
					<Typography variant='h4' align='center' height='100px'>
						Step 2: Enter Game Lookup Info
					</Typography>
					<Grid container justifyContent='center' direction='column' height='580px' width='100%' id='ffs'>
						<Grid item xs={10}>
							{isManual ? getManualEntryForm() : getDefaultForm()}
						</Grid>
						<Grid item xs={2}>
							<Grid container justifyContent='center'>
								<Typography align='center'>Toggle Manual Entry Mode</Typography>
								<Switch onClick={toggleIsManual} checked={isManual}>
									{isManual
										? "Toggle Summoner Entry Mode (Active Games Only)"
										: "Toggle Manual Team Entry"}
								</Switch>
							</Grid>
						</Grid>
					</Grid>
				</form>
			);
		}
	};
	return getFormBody();
};
export default SummonerForm;
