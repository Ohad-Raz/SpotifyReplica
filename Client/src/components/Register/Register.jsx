import {useState, useContext} from 'react'
import axios from 'axios';
import { apiUrl } from '../../config/apiConfig';
import { UserContext } from '../../context/User';
import RegisterNav from '../MiniComponents/RegisterNav/RegisterNav'
import RegisterFooter from '../MiniComponents/RegisterFooter';
import styles from "./Register.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";


function Register() {
  const [isRegister, setIsRegister] = useState(true);
  const [passwordHidden, setPasswordHidden] = useState("password");
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  });
  const {setToken} = useContext(UserContext);

  const handleInputChange = (e) =>{
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  const handleEmailSubmit = (e) =>{
    e.preventDefault();
    setIsRegister(false);
    console.log({user, isRegister});
  }

  const handleRegister = async (e) =>{
    e.preventDefault();
    try {
        const res = await axios.post(`${apiUrl}api/v1/users/register`, {
            name: user.username,
            email: user.email,
            password: user.password
        });
        setUser(res.data.user);
        setToken(res.data.token);
        console.log('Register successful:', user);
        // window.location.href = '/';
    } catch (error) {
        console.error("Failed to register:", error);
    }
  }
  return (
    <div className={styles.registerPage}>
      <RegisterNav />
      {isRegister? (
              <div className={styles.registerPreview}>
              <h1>Register to start listening</h1>
                <form className={styles.emailForm} onSubmit={handleEmailSubmit}>
                    <div className={styles.email}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email" required="true" className={styles.inputs} onChange={handleInputChange}/>
                    </div>
                    <button className={styles.nextButton}>Next</button>
                </form>
                <section className={styles.thirdPartyBtnSec}>
                    <div className={styles.topSectionBorder}>
                        <span>OR</span>
                    </div>
                    <div className={styles.registerButtons}>
                        <button> 
                            <FcGoogle /> <span>Sign up with Google</span>
                        </button>
                        <button>
                            <FaFacebook className={styles.facebook}/> <span>Sign up with Facebook</span>
                        </button>
                        <button>
                            <FaApple /> <span>Sign up with Apple</span>
                        </button>
                    </div>
                    <div className={`${styles.topSectionBorder} ${styles.bottomBorder}`}>
                    </div>
                    <div className={styles.haveAnAccount}>
                        <p>Have an account? <u>Go to your account</u>.</p>
                    </div>
                </section>
              </div>
      ) :(
            <div className={styles.nextSection}>
                <div className={styles.topBar}></div>
                <div className={styles.stages}>
                    <button className={styles.arrowBtn} onClick={()=> {
                        setIsRegister(true);
                        setUser({});
                        }}><IoIosArrowBack /></button>
                    <div className={styles.stagesText}>
                        <p className={styles.stagesShow}>Stage 2 of 2</p>
                        <p className={styles.stagesPar}>Create username and password</p>
                    </div>
                </div>
                <form className={styles.passwordForm} onSubmit={handleRegister}>
                <div className={styles.email}>
                        <label htmlFor="password">Username</label>
                        <input type="text" name="username" id="username" required="true" onChange={handleInputChange} className={styles.inputs}/>
                </div>
                <div className={styles.email}>
                        <label htmlFor="password">Password</label>
                        <FaRegEyeSlash className={styles.eye}/>
                        <input type="password" name="password" id="password" required="true" onChange={handleInputChange} className={styles.inputs}/>
                </div>
                <button className={styles.nextButton}>Register</button>
                </form>
            </div>
      )}

        <RegisterFooter />
    </div>
  )
}

export default Register
