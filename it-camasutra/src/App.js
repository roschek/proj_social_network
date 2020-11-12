import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import  {AuthDialogsRedirectComponent} from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom"
import SearchUsersContainer from "./components/SearchUsers/SearchUsersContainer";
import WithUrlDataContainerComponent from "./components/Profile/ProfileContainer";
import Login from "./components/login/Login";
import WithUrlHeaderContainer from "./components/HeaderContainer";
import Preloader from "./components/Preloader/Preloader";



class App extends React.Component {

  render() {
    return (
        <BrowserRouter>

          <WithUrlHeaderContainer store={this.props.store}/>
          <main className="container-md mt-4 pl-0 row ml-auto mr-auto">
            <Navbar store={this.props.store} friends={this.props.store.getState().dialogsPage}/>
            <section className="col-9 ml-auto mr-0 pr-0 ">
              <React.Suspense fallback={<Preloader/>}>

                <Route path="/profile:userId?"
                       render={() => <WithUrlDataContainerComponent store={this.props.store}/>}/>
                <Route path="/dialogs"
                       render={() => <AuthDialogsRedirectComponent auth={this.props.store.getState().auth}
                                                                   persons={this.props.store.getState().dialogsPage}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/search_users" component={SearchUsersContainer}/>
                <Route path="/login" auth={this.props.store.getState().auth} component={Login}/>

              </React.Suspense>
            </section>
          </main>
        </BrowserRouter>
    );
  }
}

export default App;
