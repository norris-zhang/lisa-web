import { Backdrop, Button, CircularProgress, Divider, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import { Fragment, useState } from 'react';
import styles from './Login.module.css';

import { login as loginService } from '../../services/APIService';
import { useNavigate } from 'react-router-dom';

const Login = props => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = event => {
    event.preventDefault();
    setLoading(true);
    loginService(event.target)
    .then(response => {
      setLoading(false);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('response status is ' + response.status);
      }
    })
    .then(json => {
      localStorage.setItem('_token', json.token);
      localStorage.setItem('lastLogin', new Date().getTime().toString());
      navigate("/classes");
    })
    .catch(error => {
      setLoading(false);
      setError(true);
      event.target.password.value = '';
    });
  };
  return (
    <Fragment>
      <Backdrop
        sx={{color: '#fff', zIndex: theme => theme.zIndex.drawer + 1}}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h1>Sign in</h1>
      <Divider />
      {error && <div className={styles['error-message']}>Invalid username or password</div>}
      <form onSubmit={submitHandler}>
      <FormGroup>
        <FormControl margin="normal">
          <InputLabel htmlFor="username">Username or Email Address *</InputLabel>
          <Input id="username" type="text" name="username"/>
          {/* <FormHelperText>What is a form helper text</FormHelperText> */}
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="password">Password*</InputLabel>
          <Input id="password" type="password" name="password"/>
        </FormControl>
        <FormControl margin="normal">
          <Button variant="contained" type="submit" className={styles['submit-button']}>Sign In</Button>
        </FormControl>
      </FormGroup>
      </form>
    </Fragment>
  );
};

export default Login;
