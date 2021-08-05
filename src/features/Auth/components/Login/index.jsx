import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      // dong dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      console.log('login user:', user);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      console.log('loi dang nhap:', error);
    }
    // console.log('Form Submit: ', values);
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
