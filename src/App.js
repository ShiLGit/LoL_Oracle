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
import {LOL_ORACLE, ANALYTICS, GET_DATASET} from './constants'
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
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline></CssBaseline>
			<apiKeyContext.Provider value={apiKeyContextValue}>
				<Box container direction="column" sx = {gridContainer}>
					<Grid item>
						<Navbar options={[LOL_ORACLE, ANALYTICS, GET_DATASET]} current={LOL_ORACLE} />
					</Grid>	
					<Grid item>
						<Landing />
					</Grid>
				</Box>
			</apiKeyContext.Provider>
		</ThemeProvider>
	);
}

export default App;
