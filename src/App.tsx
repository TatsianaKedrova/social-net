import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path="" component={Dialogs} />
					<Route component={Profile} />
					{/* < Profile />  */}
					<Dialogs />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
