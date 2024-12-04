import React from 'react';
import styles from './RegisterPage.module.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
const [credentials, setCredentials] = React.useState({name: "", email: "", password: "", phonenumber: ""});

const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/createuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name:credentials.name,
      email:credentials.email,
      password:credentials.password,
      phonenumber:credentials.phonenumber
    }),
  })
  const json = await response.json();
  console.log(json);

  if (!json.success) {
    alert("Enter valid credentials");
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
            <h2 className={styles.welcomemsg}>Welcome👋</h2>
            <p className={styles.description}>Today is a new day. It's your day. You shape it.<br /> Sign up to start ordering.</p>
          </div>
          <form className={styles.signupform} onSubmit={handleSubmit} >
            <div className={styles.formgroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="eg. John A" name='name' value={credentials.name} onChange={onChange} />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="phonenumber">Phone Number</label>
              <input type="number" id="phonenumber" placeholder="Enter your 10 digit mobile number" name='phonenumber' value={credentials.phonenumber} onChange={onChange} />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Example@email.com" name='email' value={credentials.email} onChange={onChange} />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="At least 5 characters" name='password' value={credentials.password} onChange={onChange} />
            </div>
            <button type="submit" className={styles.continuebtn}>
              Continue
            </button>
            <p className={styles.alreadyaccounttext}>
              Already have an account? <Link className={styles.signinlink} to="/Loginuser">Sign in</Link>
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

export default RegisterPage;