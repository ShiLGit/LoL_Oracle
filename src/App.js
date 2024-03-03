import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import { ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import theme from "./styling/theme";
import axios from "axios";
import apiKeyContext from "./common/ApiKeyContext";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Cookies from "js-cookie";
axios.defaults.baseURL = "http://localhost:8080";
function App() {
	const [apiKey, setApiKey] = useState("");
	const apiKeyContextValue = {
		apiKey,
		setKey: setApiKey
	};
	const gridContainer = {
		display: "grid",
		gridTemplateRows: "10vh 85vh"
	}
	const landing = {display: "grid"}
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline></CssBaseline>
			<apiKeyContext.Provider value={apiKeyContextValue}>
				<Box container direction="column" sx = {gridContainer}>
					<Grid item xs={landing}>
						<Navbar options={["LoL ORACLE", "ANALYTICS", "GET DATASET"]} current="LoL ORACLE"/>
					</Grid>	
					<Grid item xs = {landing}>
						<Landing />
					</Grid>
				</Box>
			</apiKeyContext.Provider>
		</ThemeProvider>
	);
}

export default App;
