import React, { Fragment, Component } from "react";
import "./App.css";
import Header from "./components/header";
import Referrals from "./components/referrals";
import Amplify, { Auth, Hub } from "aws-amplify";
import { withAuthenticator} from "aws-amplify-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const signUpConfig = {
  header: "Welcome!",
  signUpFields: [
  ]
};

class App extends Component {
  state = {
    showType: "",
    loggedIn: false,
    currentUser: null
  };

  loadCurrentUser() {
    Auth.currentAuthenticatedUser().then(userInfo => {
      this.setState({
        loggedIn: true,
        currentUser: userInfo.username,
        currentUserData: userInfo
      });
    });
  }
  
  componentDidMount = () => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.setState({
            currentUser: data.username,
            currentUserData: data,
            loggedIn: true
          });
          break;
        case "signOut":
          this.setState({
            currentUser: null,
            loggedIn: false
          });
          break;
        default:
          break;
      }
    });
    this.loadCurrentUser();
  };

  handleLogin = () => {
    this.setState({
      showType: "login"
    });
  };

  handleLogout = () => {
    this.setState({
      showType: "login"
    });
  };

  
  main = () =>  (
      <Fragment>
        <Header
          onHandleLogin={this.handleLogin}
          onHandleLogout={this.handleLogout}
          loggedIn={this.state.loggedIn}
          userName={this.state.currentUser}
        />
        <Referrals/>
      </Fragment>
  )
  
  render() {
    return (this.main());
    
  }
}

export default withAuthenticator(App, {includeGreetings: false});
