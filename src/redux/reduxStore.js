import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducers from "./usersReducer";
import authReducers from "./authReducer";
import thunkMiddleware  from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducers,
    auth: authReducers
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;