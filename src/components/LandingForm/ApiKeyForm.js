import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
const ApiKeyForm = () => {
	return (
		<form>
			<Grid container direction='row' spacing={10} justifyContent='center'>
				<Grid item>
					<Typography>
						Riot has not approved my API key application so you'll need to generate one :D!!!!
					</Typography>
				</Grid>
				<Grid item>
					<TextField></TextField>
					<Button>Submit</Button>
				</Grid>
			</Grid>
		</form>
	);
};

export default ApiKeyForm;
