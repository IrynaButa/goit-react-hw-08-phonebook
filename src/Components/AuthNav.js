import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}>
       
       <Button variant="contained" color="primary" href="#contained-buttons">
  Register
</Button>
   </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}>
      
     <Button variant="contained" color="secondary" href="#contained-buttons" >
  Log in
</Button>
    </NavLink>
  </div>
);

export default AuthNav;