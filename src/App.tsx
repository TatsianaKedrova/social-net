import React from "react";
import "./App.css";
import News from "./components/News/News";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type AppPropsType = {
	/*state: RootStateType
	dispatch: (action: DispatchFucntionType) => void*/
	// store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />

				<div className="app-wrapper-content">
					<Switch>
						<Route exact path="/dialogs"
							   render={ () => <DialogsContainer />} />

						<Route path="/profile"
							   render = { () => <Profile /> } />
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
