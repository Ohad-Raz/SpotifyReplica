import {useState} from 'react'
import RegisterNav from '../MiniComponents/RegisterNav/RegisterNav'
import styles from "./Register.module.css";

function Register() {
  const [isRegister, setIsRegister] = useState(true);
  return (
    <div className={styles.registerPage}>
      <RegisterNav />
      <h1>Register to start listening</h1>
      <div>
        <form className={styles.registerForm}>
            <div className={styles.email}>
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" id="email" className={styles.inputs}/>
                <button className={styles.nextButton}>Next</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Register
