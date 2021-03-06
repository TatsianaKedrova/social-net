import React from "react";
import "./App.css";
import News from "./components/News/News";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer />}/>

                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}/>

                        <Route path="/users"
                               render={() => <UsersContainer />}/>

                        <Route path="/news"
                               render={() => <News/>}/>
                        <Route path="/music"
                               render={() => <Music/>}/>
                        <Route path="/settings"
                               render={() => <Settings/>}/>
                        <Route path="/login"
                               render={() => <Login/>}/>

                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
