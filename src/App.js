
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
import  authOperations  from './redux/auth/auth-operations';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    //this.props.onGetCurretnUser();
  }

  render() {
    return (
     <>
        <AppBar />
      
          <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={PhoneBook} />
        </Switch>
       
        
     </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// const App = ({ filter, items, dispatch, loading }) => {
//   useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = items.filter((item) =>
//       item.name.toLowerCase().includes(normalizedFilter)
//     );
//   return (
//     <div>
//         <h1>Phonebook</h1>
//       <Form />
//       {/* <Form onAddContact={addContact} /> */}

//         <h2>Contacts</h2>
//          {loading && <h2>Loading...</h2>}
//       {items[0] ? <Filter /> : <h2 >No contact added </h2>}
//        {/* <Filter value={filter} onChangeFilter={onChangeFilter} /> */}
//       {visibleContacts[0] && <Contacts
//           contacts={visibleContacts}  
//       />}
//       {items[0] && !visibleContacts[0] && (
//           <h2>No contact found </h2>
//         )}

//       {/* <Contacts
//           contacts={visibleContacts}
//           onDeleteContact={deleteContact}
//         /> */}
//       </div>
    
//   );
// };

// App.propTypes = {
//   filter: PropTypes.string.isRequired,
//   items: PropTypes.arrayOf(PropTypes.any).isRequired,
//   dispatch: PropTypes.func.isRequired,
//   loading: PropTypes.bool.isRequired,
// };

// const mapStateToProps = state => ({
//   items: contactsSelectors.getAllContacts(state),
//   filter: contactsSelectors.getFilter(state),
//   loading: contactsSelectors.getLoading(state),
// });

// export default connect(mapStateToProps)(App);
