import { useState } from 'react';
import './Login.css';

const Login = props => {
  const [error, setError] = useState(false);
  const submitHandler = event => {
    event.preventDefault();
    console.log('login');
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (username === 'lisa' && password === 'password') {
      props.onLogin();
    } else {
      setError(true);
      event.target.password.value = '';
    }
  };
  return (
    <div>
      <h1>Sign in</h1>
      {error && <div className="error-message">Invalid username or password</div>}
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" name="username" placeholder="Username or Email Address *"/>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password *"/>
        </div>
        <div>
          <button>SIGN IN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
