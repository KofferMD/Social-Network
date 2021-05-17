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
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
        <div>
            <HeaderContainer/>
            <div className="container">
                <div className="app-wrapper">
                    <div className="app-inner">
                        <Navbar/>
                        <div className="app-inner-content">
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/books' render={() => <Books/>}/>
                            <Route path='/invests' render={() => <Invests/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <LoginPage/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
