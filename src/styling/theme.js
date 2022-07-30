import { createTheme } from "@mui/material/styles";
const theme = createTheme({
	palette: {
		primary: {
			main: "#241C55"
		},
		secondary: {
			main: "#060117"
		},
		background: {
			default: "#060117"
		}
	},
	typography: {
		fontFamily: ["Work Sans"].join(",")
	}
});

export default theme;
