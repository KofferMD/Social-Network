import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Books from "./components/Books/Books";
import Invests from "./components/Invests/Invests";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div>
            <HeaderContainer/>
            <div className="container">
                <div className="app-wrapper">
                    <div className="app-inner">
                        <Navbar/>
                        <div className="app-inner-content">
                            <Route path='/News' render={() => <News/>}/>
                            <Route path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/Users' render={() => <UsersContainer/>}/>
                            <Route path='/Books' render={() => <Books/>}/>
                            <Route path='/Invests' render={() => <Invests/>}/>
                            <Route path='/Settings' render={() => <Settings/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
