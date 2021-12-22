import { Button, Divider, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import { useState } from 'react';
import styles from './Login.module.css';

const Login = props => {
  const [error, setError] = useState(false);
  const submitHandler = event => {
    event.preventDefault();
    console.log('login');
    fetch('http://localhost:8088/api/login', {
      method: 'post',
      body: new FormData(event.target)
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('response status is ' + response.status);
      }
    })
    .then(text => {
      console.log('token = ' + text);
      props.onLogin();
    })
    .catch(error => {
      console.log('error = ');
      console.log(error);
      setError(true);
      event.target.password.value = '';
    });
  };
  return (
    <div>
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
    </div>
  );
};

export default Login;
