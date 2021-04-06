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
import state, { RootStateType } from "./redux/state";


export type AppType = {
	state: RootStateType
	addPost:(postMessage: string) => void
}

const App = (props: AppType) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />

				<div className="app-wrapper-content">
					<Switch>
						<Route exact path="/dialogs"
							   component={ () => <Dialogs
								   state = {props.state.dialogsPage}/> } />

						<Route path="/profile"
							   render = { () => <Profile
								   state = {props.state.profilePage}
							   		addPost = {props.addPost}
							   /> } />
						<Route path="/news"
							   render = { () => <News /> } />
						<Route path="/music"
							   render = { () => <Music /> } />
						<Route path="/settings"
							   render = { () => <Settings /> } />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
