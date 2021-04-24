import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Books from "./components/Books/Books";
import Invests from "./components/Invests/Invests";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-inner">
                    <Navbar/>
                    <div className="app-inner-content">
                        <Route path='/News' component={News}/>
                        <Route path='/Dialogs' component={Dialogs}/>
                        <Route path='/Profile' component={Profile}/>
                        <Route path='/Books' component={Books}/>
                        <Route path='/Invests' component={Invests}/>
                        <Route path='/Settings' component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
