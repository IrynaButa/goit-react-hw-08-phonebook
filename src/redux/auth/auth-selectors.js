const getIsAuthenticated = state => Boolean(state.auth.token);

const getUsername = state => state.auth.user.name;

const getUseremail = state => state.auth.user.email;

export default {
  getIsAuthenticated,
    getUsername,
  getUseremail
};