import React from 'react';
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";


import {BrowserRouter, Route} from "react-router-dom"
import SearchUsersContainer from "./components/SearchUsers/SearchUsersContainer";


function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <main className="container-md mt-4 pl-0 row ml-auto mr-auto">
                <Navbar friends={props.store.getState().dialogsPage}/>
                <section className="col-9 ml-auto mr-0 pr-0 ">
                    <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs  persons={props.store.getState().dialogsPage} />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/search_users" component={SearchUsersContainer}/>
                </section>
            </main>
        </BrowserRouter>
    );
}

export default App;
