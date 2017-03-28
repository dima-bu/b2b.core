import React, {Component, PropTypes} from 'react';
import Input from './../input/input';
import Button from './../button/button';
import {Field, reduxForm} from 'redux-form';
import pure from './../../decorators/pure';

import style from './form-login.less';

@pure
@reduxForm({form: 'loginForm'})
export default class FormLogin extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired
  }

  render () {
    const {handleSubmit} = this.props;

    const getInput = () => {
      return <Input meta = {
        { touched: false,
          error: 'Эл. почта должна быть вида example@domain.com'
        }
      }
      />;
    };

    return (
      <div className={style.wrapper}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.row}>
            <label className={style.label} htmlFor='email'>Логин</label>
            <Field name='name' type='text' component={Input} />
          </div>
          <div className={style.row}>
            <label className={style.label} htmlFor='password'>Пароль</label>
            <Field name='password' type='password' component={Input} />
          </div>
          <div className={style.actions}>
            <Button theme='primary' type='submit' size='lg' caption='Войти' />
          </div>
        </form>
      </div>
    );
  }
}
