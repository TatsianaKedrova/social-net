import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,

});

let store = createStore(reducers);

// @ts-ignore
window.store = store;


export type AppRootType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch

export default store;