import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import ApiKeyContext from "../../common/ApiKeyContext";
import { SUMMONER_FORM } from "../../common/constants";
const ApiKeyForm = ({ setFormType }) => {
	const [isLoading, setIsLoading] = useState(false);
	const apiKeyContext = useContext(ApiKeyContext);
	const [inputApiKey, setInputApiKey] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputApiKey);
		setIsLoading(true);
		axios
			.post("http://localhost:8080/validate-key", inputApiKey)
			.then((res) => {
				console.log("from validate-key:", res, res.data.error === true);
				setIsLoading(false);

				if (res.data.error == true) {
					alert(res.data.message);
					setInputApiKey("");
				} else {
					//set api key in reducer
					//navigate to summoner form
					apiKeyContext.setKey(inputApiKey);
					setFormType(SUMMONER_FORM);
					console.log(apiKeyContext);
					setTimeout(() => {
						console.log("API KEY EXPIRED!!");
						apiKeyContext.setKey(null);
					}, 3600 * 24);
				}
			})
			.catch((err) => {
				setIsLoading(false);

				alert(err);
				console.log("MISC ERROR", err);
			});
	};
	const handleOnChange = (e) => {
		setInputApiKey(e.target.value.replace(" ", ""));
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
								Go to{" "}
								<a href='https://developer.riotgames.com/' target='_blank'>
									Riot's devsite
								</a>
								, log in, and generate + paste an api key in this form:
							</Typography>
							<img src={require("../../images/dammit.gif")} style={{ maxHeight: "320px" }}></img>
						</Grid>
						<Grid item></Grid>
					</Grid>
					<TextField
						sx={{ minWidth: "350px" }}
						inputProps={{ form: { autocomplete: "off" } }}
						onChange={handleOnChange}
						value={inputApiKey}
					></TextField>
					<Button type='submit'>Submit</Button>
				</form>
			);
		}
	};
	return getFormBody();
};

export default ApiKeyForm;
