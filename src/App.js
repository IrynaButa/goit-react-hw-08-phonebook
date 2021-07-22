
// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import AppBar from './Components/AppBar';
// import PhoneBook from './Pages/PhoneBook';
// import HomeView from './Pages/HomePage';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import Container from './components/Container';
// import { authOperations } from './redux/auth/auth-operations';


// import { connect } from 'react-redux';

// import  * as contactsOperations from './redux/contacts-operations';
// import  * as contactsSelectors from './redux/contacts-selectors';
// import Contacts from "./Components/Contacts/Contacts";
// import Filter from "./Components/Filter/Filter";
// import Form from "./Components/Form/Form";

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar';
import PhoneBook from './Pages/PhoneBook';
import HomeView from './Pages/HomePage';
import RegisterView from './Pages/RegisterPage';
import LoginView from './Pages/LoginPage';
//import Container from './components/Container';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
     <>
        <AppBar />
      
          <Switch>
          <PublicRoute exact path="/"  component={HomeView} />
          <PublicRoute path="/register"  restricted redirectTo="/contacts" component={RegisterView} />
          <PublicRoute path="/login"  restricted redirectTo="/contacts" component={LoginView} />
          <PrivateRoute path="/contacts" redirectTo="/login" component={PhoneBook} />
        </Switch>
       
     </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

