import { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import ApiKeyContext from "../../common/ApiKeyContext";
import { SUMMONER_FORM } from "../../common/constants";
const ApiKeyForm = ({ setFormType, formHeader }) => {
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
				<Grid container direction='column' spacing={12} justifyContent='center'>
					<Grid item>
						<Typography variant='h3' textAlign={"center"} sx={{ marginTop: "100px" }}>
							Validating API key...
						</Typography>
					</Grid>
					<Grid item>
						<LinearProgress sx={{ maxWidth: "80%", margin: "auto", textAlign: "center" }} />
					</Grid>
				</Grid>
			);
		} else {
			return (
				<form style={{ margin: "auto", boxSizing: "none" }} onSubmit={handleSubmit}>
					<Grid container direction='col' spacing={5} justifyContent='center'>
						<Grid item>
							<Grid container justifyContent='center'>
								<Grid item>
									<Typography variant='h3' classes={formHeader} align='center'>
										Step 1: Generate an API key
									</Typography>
									<Typography align='center'>
										Riot hasn't approved my API key application, so you'll have to generate one
										yourself. Go to{" "}
										<a href='https://developer.riotgames.com/' target='_blank'>
											Riot's devsite
										</a>
										, log in, generate a key and copy paste it in this form:
									</Typography>
								</Grid>
								<img src={require("../../images/dammit.gif")} style={{ maxHeight: "350px" }}></img>
							</Grid>
						</Grid>
						<Grid item></Grid>
						<Grid item id='wtf'>
							<TextField
								variant='standard'
								sx={{ minWidth: "45ch", height: "0.5em", boxSizing: "none !important" }}
								inputProps={{ form: { autocomplete: "off" } }}
								onChange={handleOnChange}
								value={inputApiKey}
							></TextField>
							<Button type='submit'>Submit</Button>
						</Grid>
					</Grid>
				</form>
			);
		}
	};
	return getFormBody();
};

export default ApiKeyForm;
