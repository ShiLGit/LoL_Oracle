import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import { ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import theme from "./styling/theme";
import styles from "./styling/styles";
import axios from "axios";
import apiKeyContext from "./common/ApiKeyContext";
import { useState } from "react";
axios.defaults.baseURL = "http://localhost:8080";
function App() {
	const [apiKey, setApiKey] = useState("");
	const [timeout, setTimeout] = useState(null);
	const apiKeyContextValue = {
		apiKey,
		setKey: setApiKey,
		timeout,
		setTimeout
	};
	return (
		<ThemeProvider theme={theme}>
			<apiKeyContext.Provider value={apiKeyContextValue}>
				<div className='Layout'>
					<Navbar options={["Main", "About", "Analyse Account"]} />
					<Landing />
				</div>
			</apiKeyContext.Provider>
		</ThemeProvider>
	);
}

export default withStyles(styles)(App);
