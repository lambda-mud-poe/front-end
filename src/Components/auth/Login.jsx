import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    axios
      .post(' https://mount-doom-mud.herokuapp.com/api/login/', {
        username,
        password
      })
      .then(res => {
        localStorage.setItem('key', res.data.key);
        setLoginSuccess(res.data);
      })
      .catch(err => setLoginError(err.response.data.non_field_errors[0]));
  };

  if (loginSuccess) {
    return <Redirect to="/" />;
  }

  if (loginError) {
    alert(loginError);
    setLoginError(false);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Enter Username"
          type="text"
          required
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
