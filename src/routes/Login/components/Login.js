import React from 'react';
import LoginForm from './../../../components/form-login/form-login';
import style from './Login.less';

const Login = props => {
  const {LogIn, loggedIn, userName, errorMessage} = props;

  const onSubmitHandler = (credentials) => {
    LogIn(credentials);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.logo} />
      <h1 className={style.title}>Вход в кабинет контрагента</h1>
      <LoginForm onSubmit={onSubmitHandler} />
      {errorMessage &&
        <div className={style.error}>{errorMessage}</div>
      }
    </div>
  );
};

export default Login;
