import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing";
import { ThemeProvider } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import theme from "./styling/theme";
import styles from "./styling/styles";
function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='Layout'>
				<Navbar options={["Main", "About", "Analyse Account"]} />
				<Landing />
			</div>
		</ThemeProvider>
	);
}

export default withStyles(styles)(App);
