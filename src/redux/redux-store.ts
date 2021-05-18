import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer

});

let store = createStore(reducers);

// @ts-ignore
window.store = store;


export type AppRootType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch

export default store;