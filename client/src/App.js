import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: "#241C55"
			},
			secondary: {
				main: "#060117"
			}
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<div className='Layout'>
				<Navbar options={["Main", "About"]} />
			</div>
		</ThemeProvider>
	);
}

export default App;
