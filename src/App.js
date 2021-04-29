import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Books from "./components/Books/Books";
import Invests from "./components/Invests/Invests";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className="container">
            <div className="app-wrapper">
                <Header/>
                <div className="app-inner">
                    <Navbar/>
                    <div className="app-inner-content">
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Profile'
                               render={() => <Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}
                               />}
                        />
                        <Route path='/Dialogs'
                               render={() => <Dialogs
                                   state={props.state.dialogsPage}
                                   dispatch={props.dispatch}
                               />}
                        />
                        <Route path='/Books' render={() => <Books/>}/>
                        <Route path='/Invests' render={() => <Invests/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
