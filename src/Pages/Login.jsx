import React, { useState } from 'react';
import styles from './RegisterPage.module.css';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
const [credentials, setCredentials] = React.useState({email: "", password: ""});
let navigate = useNavigate();

const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email:credentials.email,
      password:credentials.password
    }),
  })
  const json = await response.json();
  console.log(json);

  if (!json.success) {
    alert("Enter valid credentials");
  }
  if (json.success) {
    localStorage.setItem("authToken", json.authToken);
    console.log(localStorage.getItem("authToken"))
    navigate("/");
  }

};

const onChange = (event) => {
  setCredentials({ ...credentials, [event.target.name]: event.target.value });
}

  return (
    <>
      <div className={styles.Maincontainer}>
        <div className={styles.containerleft}>
          <div className={styles.logo}>
            <img className={styles.logoimg} src="/assets/LOGO 1.png" alt="logo" />
          </div>
          <div>
            <h2 className={styles.welcomemsg}>Welcome Back  👋</h2>
            <p className={styles.description}>Today is a new day. It's your day. You shape it.<br /> Sign up to start ordering.</p>
          </div>
          <form className={styles.signupform} onSubmit={handleSubmit} >
            <div className={styles.formgroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Example@email.com" name='email' value={credentials.email} onChange={onChange} />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="At least 5 characters" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <button type="submit" className={styles.continuebtn}>
              Sign In
            </button>
            <p className={styles.alreadyaccounttext}>
            Don't you have an account?<Link className={styles.signinlink} to="/createuser"> Sign up </Link>
            </p>
          </form>
        </div>
        <div className={styles.containerright}>
          <img className={styles.rightimg} src="/assets/signupright.png" alt="uk flag" />
        </div>
      </div>
      <Footer />
    </>

  );
};

export default Login; ;