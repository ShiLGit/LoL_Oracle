import "./App.css";
import Navbar from "./components/Navbar/Navbar";
function App() {
	return (
		<div className='Layout'>
			<Navbar options={["Main", "About"]} />
		</div>
	);
}

export default App;
