import { Fragment, useContext, useState } from 'react';
import { Backdrop, Button, CircularProgress, Divider, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import styles from './Login.module.css';
import axios from 'axios';
import { useRef } from 'react';
import LoginContext from './LoginContext';


const Login = props => {
  // let loading = false;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const pwdRef = useRef(null);
  const { setUserInfo } = useContext(LoginContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // login
    axios.post(process.env.REACT_APP_API_SERVER_ROOT + '/login', new FormData(e.target))
    .then(response => {
      setLoading(false);
      setUserInfo(response.data);
    })
    .catch(error => {
      setLoading(false);
      if (error.response) {
        setError(error.response.data.errorMessages.join('<br />'));
      } else {
        setError('Something went wrong. Try again later.');
      }
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
      <div className={styles['error-message']}>{ error }</div>
      <form onSubmit={handleLogin}>
      <FormGroup>
        <FormControl margin="normal">
          <InputLabel htmlFor="username">Username or Email Address *</InputLabel>
          <Input id="username" type="text" name="username"/>
          {/* <FormHelperText>What is a form helper text</FormHelperText> */}
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="password">Password*</InputLabel>
          <Input id="password" type="password" name="password" inputRef={pwdRef} />
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
