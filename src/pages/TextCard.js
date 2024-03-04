import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const TextCard = () => {
	const bodyText = { my: 2, color: "white", display: "block", padding: "10px 30px" };

	return (
		<Box sx={{margin: "10%"}}>
			<Typography variant='h4' sx ={{padding: "10px 30px", fontFamily: "Josefin Sans Bold"}}>What is LoL Oracle?</Typography>
			<Typography sx={bodyText} variant='h6'>
				{
					"LoL Oracle is a project that aims to analyze LoL matches with machine learning models. Right now its main goal is to predict the outcome of a match during load screen. Follow the prompt on the right to try!!"
				}
			</Typography>
			<Typography sx={bodyText} variant='h6'>
				{
					"Waaaaaaaaaaaaaah ajsda wahwahwh hahhwah whaioasjdoais jodjia oifjaoisfjoaisjfoia jofj oij oi joi j koaspd! okfpaskopf kp.. . .OASDpso fppfokafpok pgjpaofpokspfok pkpfkapsfko paosfkpaoskfpaokfpaosfk pk k k pk k pk pk pok"
				}
			</Typography>
		</Box>
	);
};

export default TextCard;
