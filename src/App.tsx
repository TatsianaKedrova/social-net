import React from "react";
import "./App.css";

import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Switch>
						<Route path="/dialogs/:id" component={Dialogs} />
						<Route path="/profile" component={Profile} />
						<Route path="/news" component={News} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
