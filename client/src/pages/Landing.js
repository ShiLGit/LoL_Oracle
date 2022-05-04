import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
const Landing = () => {
	const textFieldStyle = { display: "block" };
	return (
		<Grid container spacing={2}>
			<Grid item lg={8} md={7} sm={11} xs={11}>
				<Card sx={{ borderRadius: 0 }}>
					<CardContent>
						<Typography variant='h6' sx={{ textAlign: "center" }}>
							Enter Summoner Names
						</Typography>

						<Grid container direction='row' spacing={4} justifyContent='center'>
							<Grid item>
								<Typography variant='h6'>Team 1</Typography>
								<TextField label='Summoner 1' sx={textFieldStyle} />
								<TextField label='Summoner 2' sx={textFieldStyle} />
								<TextField label='Summoner 3' sx={textFieldStyle} />
								<TextField label='Summoner 4' sx={textFieldStyle} />
								<TextField label='Summoner 5' sx={textFieldStyle} />
							</Grid>
							<Grid item>
								<Typography variant='h6'>Team 2</Typography>
								<TextField label='Summoner 1' sx={textFieldStyle} />
								<TextField label='Summoner 2' sx={textFieldStyle} />
								<TextField label='Summoner 3' sx={textFieldStyle} />
								<TextField label='Summoner 4' sx={textFieldStyle} />
								<TextField label='Summoner 5' sx={textFieldStyle} />
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default Landing;
