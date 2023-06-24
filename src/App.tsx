import { Route, Routes, Link, NavLink } from "react-router-dom";
import { AboutUs, ContactMe, ContactUs } from "./components/AboutUs";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { WelcomePageRoutes } from "./WelcomePageRoutes";

function App() {
	return (
		<>
			<Routes>
				<Route path="/welcomes" element={<h1> Extra Content </h1>} />
			</Routes>
			<nav>
				<ol>
					<li>
						<NavLink to="/">Home Page</NavLink>
					</li>
					<li>
						<Link to="/about">about us</Link>
					</li>
					<li>
						<Link to="/contactUs">contact us</Link>
					</li>
					<li>
						<Link to="/contactMe">contactMe</Link>
					</li>
					<li>
						<NavLink to="/welcomes">Welcome Pages</NavLink>
					</li>
				</ol>
			</nav>
			<Routes>
				<Route path="/contactMe" element={<ContactMe />} />
				<Route path="/about/:id?" element={<AboutUs />} />
				<Route path="/contactUs" element={<ContactUs />} />

				{/* <Route path="/welcomes" element={<WelcomeList />} />
				<Route path="/welcomes/:id" element={<Welcome />} />
				<Route path="/welcomes/new" element={<NewWelcome />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="/welcomes/*" element={<WelcomePageRoutes />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
