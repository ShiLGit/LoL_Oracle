import { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
const ApiKeyForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const apiKey = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(apiKey.current);
		setIsLoading(true);
		axios
			.post("http://localhost:8080/validate-key", apiKey.current)
			.then((res) => {
				console.log("from validate-key:", res);
				setIsLoading(false);
				if (res.data.error == false) {
					alert(res.data.message);
				} else {
					//set api key in reducer
					//navigate to summoner form
				}
			})
			.catch((err) => {
				setIsLoading(false);

				alert(err);
				console.log("MISC ERROR", err);
			});
	};
	const handleOnChange = (e) => {
		apiKey.current = e.target.value;
	};

	const getFormBody = () => {
		if (isLoading) {
			return (
				<Grid container direction='column' spacing={10} justifyContent='center'>
					<Grid item>
						<Typography>Validating API key...</Typography>
					</Grid>
					<Grid item>
						<CircularProgress sx={{ height: "2000vh" }} />
					</Grid>
				</Grid>
			);
		} else {
			return (
				<form style={{ margin: "auto", height: "100%" }} onSubmit={handleSubmit}>
					<Grid container direction='row' spacing={5} justifyContent='center'>
						<Grid item>
							<Typography variant='h6'>
								Riot has not approved my API key application so you'll need to generate one :D!
							</Typography>
							<Typography>
								Go to <a href='https://developer.riotgames.com/'>Riot's devsite</a>, log in, and
								generate + paste an api key in this form:
							</Typography>
							<img src={require("../../images/dammit.gif")} style={{ maxHeight: "320px" }}></img>
						</Grid>
						<Grid item></Grid>
					</Grid>
					<TextField
						sx={{ minWidth: "350px" }}
						inputProps={{ form: { autocomplete: "off" } }}
						onChange={handleOnChange}
					></TextField>
					<Button type='submit'>Submit</Button>
				</form>
			);
		}
	};
	return getFormBody();
};

export default ApiKeyForm;
