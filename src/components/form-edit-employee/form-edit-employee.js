import React, {Component, PropTypes} from 'react';
import Input from 'components/input/input';
import Button from 'components/button/button';
import {Field, reduxForm} from 'redux-form';
import pure from './../../decorators/pure';
import style from './form-edit-employee.less';
import mapProps from 'recompose/mapProps';

@pure
@reduxForm({form: 'editEmployeeForm'})
export default class FormEditEmployee extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
    onTurnOffEditing: PropTypes.func,
    onInitialize: PropTypes.func,
    initData: PropTypes.object
  };

  componentWillMount(){
    this.props.initialize(this.props.initData)
  }

  render () {
    const {handleSubmit, onTurnOffEditing} = this.props;

    return (
      <div className={style.wrapper}>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.formRow}>
            <label htmlFor="">Фамилия</label>
            <Field name='lastName' type='text' size="sm" component={Input} />
          </div>
          <div className={style.formRow}>
            <label htmlFor="">Имя</label>
            <Field name='firstName' type='text' size="sm" component={Input} />
          </div>
          <div className={style.formRow}>
            <label htmlFor="">Отчество</label>
            <Field name='middleName' type='text' size="sm" component={Input} />
          </div>
          <div className={style.formButtons}>
            <Button size="sm" theme="danger" caption="ОТМЕНА" onClick={onTurnOffEditing}/>
            <Button size="sm" type='submit'  caption="ОК" />
          </div>
        </form>
      </div>
    );
  }
}
