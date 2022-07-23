import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const TextCard = () => {
	const lol = { my: 2, color: "white", display: "block" };

	return (
		<Box>
			<Typography sx={lol}>
				{
					"LoL Oracle is a project that aims to predict the winning team of a match during champ select/load screen. Enter summoner names on the right >:("
				}
			</Typography>
		</Box>
	);
};

export default TextCard;
