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
import { StoreType } from "./redux/state";


export type AppType = {
	store: StoreType
}

const App: React.FC<AppType> = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />

				<div className="app-wrapper-content">
					<Switch>
						<Route exact path="/dialogs"
							   component={ () => <Dialogs
								   state = {props.store._state.dialogsPage}/> } />

						<Route path="/profile"
							   render = { () => <Profile
								   profilePage = {props.store._state.profilePage}
								   addPost = {props.store.addPost.bind(props.store)}
								   updateNewPostText = {props.store.updateNewPostText.bind(props.store)}
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
