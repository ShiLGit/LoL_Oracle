import { createTheme } from "@mui/material/styles";
const theme = createTheme({
	palette: {
		primary: {
			main: "#3D1E5C"
		},
		secondary: {
			main: "#B4A2E9"
		},
		background: {
			default: "#B4A2E9"
		}
	},
	typography: {
		fontFamily: ["Josefin Sans Regular", "Josefin Sans Bold", "Cinzel Decorative"].join(",")
	}
});

export default theme;
