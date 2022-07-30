import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const TextCard = () => {
	const lol = { my: 2, color: "white", display: "block", padding: "30px" };

	return (
		<Box>
			<Typography sx={lol} variant='h6'>
				{
					"LoL Oracle is a project that aims to analyze various facets of LoL by using machine learning models. Right now its main purpose is to predict the winning team of a match during champ select/load screen. Enter your summoner name on the right to try!!!!"
				}
			</Typography>
		</Box>
	);
};

export default TextCard;
