import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import { ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import theme from "./styling/theme";
import axios from "axios";
import apiKeyContext from "./common/ApiKeyContext";
import { useState } from "react";
import Cookies from "js-cookie";
axios.defaults.baseURL = "http://localhost:8080";
function App() {
	const [apiKey, setApiKey] = useState("");
	const apiKeyContextValue = {
		apiKey,
		setKey: setApiKey
	};
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline></CssBaseline>
			<apiKeyContext.Provider value={apiKeyContextValue}>
				<div className='Layout'>
					<Navbar options={["Main", "About", "Analyse Account"]} />
					<Landing />
				</div>
			</apiKeyContext.Provider>
		</ThemeProvider>
	);
}

export default App;
