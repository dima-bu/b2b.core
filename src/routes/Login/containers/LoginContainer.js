import {connect} from 'react-redux';
import {setPassword, setLoginName, LogIn} from '../modules/login';
import Login from '../components/Login';

const mapDispatchToProps = {
  LogIn: LogIn
};

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn,
  userName: state.login.userName,
  errorMessage: state.login.errorMessage
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
