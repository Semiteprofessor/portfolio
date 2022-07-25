/** @format */

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import About from "./components/About";
import Notification from "./components/Notification";

function App() {
	return (
		<div>
			<Notification />
			<Header />
			<Slider />
			<About />
			<Footer />
		</div>
	);
}

export default App;
