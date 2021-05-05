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
import { RootStateType, StoreType} from "./redux/store";


export type AppType = {
	state: RootStateType
	dispatch: (action: any) => void
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
							   render={ () => <Dialogs
								   store={props.store}
							   />} />

						<Route path="/profile"
							   render = { () => <Profile
								   profilePage = {props.state.profilePage}
								   dispatch = {props.dispatch}
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
