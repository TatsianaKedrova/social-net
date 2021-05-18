import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer

});

declare global {
    interface Window {
        store: any
    }
}

let store = createStore(reducers);

console.log(store === window.store) ;


export type AppRootType = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch

export default store;