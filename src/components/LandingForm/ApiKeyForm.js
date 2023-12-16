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

	const getFormBody = () => {
		if (isLoading) {
			return <LoadMsg msg={"Validating API key..."} />;
		} else {
			return (
				<form style={{ margin: "auto", boxSizing: "none" }} onSubmit={handleSubmit}>
					<Grid container direction='col' spacing={5} justifyContent='center'>
						<Grid item>
							<Grid container justifyContent='center'>
								<Grid item>
									<Typography variant='h3' align='center' className='formTitle'>
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
								<img src={require("../../images/dammit.gif")} style={{ maxHeight: "375px" }}></img>
								<Typography align='center' sx={{ marginTop: "5px", fontSize: "0.8em" }}>
									Note that these keys will only last 24h, so you'll need to generate a new key after
									it expires (or if you clear your cukie!!)
								</Typography>
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
