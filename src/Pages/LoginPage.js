import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import styles from "./pages.module.css";


class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div >
        <h1>Log in page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          
          <Button type="submit" variant="contained" color="secondary" href="#contained-buttons" onClick={this.handleSubmit}>
 Go
</Button>
            
        
          
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);