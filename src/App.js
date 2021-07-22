
import React, { Component,  Suspense, lazy } from 'react';
import { Switch} from 'react-router-dom';
import AppBar from './Components/AppBar';

import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';

const HomeView = lazy(() => import('./Pages/HomePage'));
const RegisterView = lazy(() => import('./Pages/RegisterPage'));
const LoginView = lazy(() => import('./Pages/LoginPage'));
const PhoneBook = lazy(() => import('./Pages/PhoneBook'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
     <>
        <AppBar />
        <Suspense fallback={ <p> Please, waiting. We are loading...</p>}>
          
          <Switch>
          <PublicRoute exact path="/"  component={HomeView} />
          <PublicRoute path="/register"  restricted redirectTo="/contacts" component={RegisterView} />
          <PublicRoute path="/login"  restricted redirectTo="/contacts" component={LoginView} />
          <PrivateRoute path="/contacts" redirectTo="/login" component={PhoneBook} />
        </Switch>
       </Suspense>
     </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

