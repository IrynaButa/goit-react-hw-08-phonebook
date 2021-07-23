import React from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import defaultAvatar from '../boy-smiling.png';

import Button from '@material-ui/core/Button';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, email, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    {/* <span style={styles.name}>Welcome, your majesty {name}</span> */}
    <span style={styles.email}>Welcome, {email}</span>
    
   
    <Button variant="contained" color="secondary" href="#contained-buttons" type="button" onClick={onLogout}>
  Logout
</Button>
  </div>
);
const mapStateToProps = state => ({
email:authSelectors.getUseremail(state),
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);