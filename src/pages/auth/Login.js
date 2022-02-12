import { Fragment } from 'react';
import { Backdrop, Button, CircularProgress, Divider, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import styles from './Login.module.css';


const Login = props => {
  let loading = false;

  return (
    <Fragment>
      <Backdrop
        sx={{color: '#fff', zIndex: theme => theme.zIndex.drawer + 1}}
        open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h1>Sign in</h1>
      <Divider />
      <div className={styles['error-message']}>Invalid username or password</div>
      <form onSubmit={() => {}}>
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
