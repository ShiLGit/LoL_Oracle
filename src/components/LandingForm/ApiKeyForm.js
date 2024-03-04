import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Cookies from "js-cookie";
import LoadMsg from "./LoadMsg";
import { SUMMONER_FORM, APIKEY } from "../../common/constants";
import RequestLogic from "../../common/RequestLogic";
const ApiKeyForm = ({ setFormType }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [inputApiKey, setInputApiKey] = useState("");
	const validKeySuccessCallback = (resData) => {
		console.log("from validate-key:", resData, resData.error === "true");
		setIsLoading(false);
		if (resData.error === "true") {
			alert(resData.message);
			setInputApiKey("");
		} else {
			Cookies.set(APIKEY, inputApiKey, { expires: 1 });
			setFormType(SUMMONER_FORM);
		}
	};
	const validateKeyFailCallback = (err) => {
		setIsLoading(false);
		alert(err);
		console.log("MISC ERROR", err);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputApiKey);
		setIsLoading(true);
		RequestLogic.validateApiKey(inputApiKey, validKeySuccessCallback, validateKeyFailCallback);
	};
	const handleOnChange = (e) => {
		setInputApiKey(e.target.value.replace(" ", ""));
	};

	const formTitle = {
		fontFamily:"Josefin Sans Bold"

	}
	const getFormBody = () => {
		if (isLoading) {
			return <LoadMsg msg={"Validating API key..."} />;
		} else {
			return (
				<form style={{ margin: "auto", boxSizing: "none"}} onSubmit={handleSubmit}>
					<Grid container direction='col' spacing={2} justifyContent='center'>
						<Grid item>
							<Grid container justifyContent='center'>
								<Grid item sx = {{padding: "30px 10px 10px 30px"}}>
									<Typography variant='h4' sx={formTitle}>
										STEP 1: Generate an API key
									</Typography>
									<Typography>
										We need an API key to use the Riot API for getting needed match information. Go to {" "}
										<a href='https://developer.riotgames.com/' target='_blank'>
											Riot's dev site
										</a>
										, log in, generate a key and copy paste it in this form:
									</Typography>
								</Grid>
								<Grid item>
									<img src={require("../../images/dammit.gif")} style={{ maxHeight: "350px", border: "1px" }}></img>
								</Grid>
								<Grid item>
									<Typography align='center' sx={{  fontSize: "1em" }}>
																			Note that these keys will only last 24h, so you'll need to generate a new key after
																			it expires (or if you clear your cookie)
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item></Grid>
						<Grid item>
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
