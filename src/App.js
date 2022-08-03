/** @format */

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import About from "./components/About";
import Notification from "./components/Notification";
import Service from "./components/Service";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Counter from "./components/Counter";

function App() {
	return (
		<Router>
			<div>
				<Notification />
				<Header />
				<Slider />
				<About />
				<Service />
				<Skill />
				<Experience />
				<Counter />
				<Portfolio />
				{/* <Testimonial /> */}
				{/* <Blog /> */}
				<Contact />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
