import { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../config/apiConfig";
import { UserContext } from "../../context/User";
import RegisterNav from "../MiniComponents/RegisterNav/RegisterNav";
import RegisterFooter from "../MiniComponents/RegisterFooter";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import styles from "./Register.module.css";

function Register() {
  const [isRegister, setIsRegister] = useState(true);
  const [passwordHidden, setPasswordHidden] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<FaRegEyeSlash />);
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { setToken, setLogedUser, token, logedUser } = useContext(UserContext);
  const navigate = useNavigate();

  const togglePasswordType = () => {
    setPasswordHidden(passwordHidden === "password" ? "text" : "password");
    setPasswordIcon(
      passwordIcon === <FaRegEyeSlash /> ? <FaRegEye /> : <FaRegEyeSlash />
    );
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsRegister(false);
    console.log({ newUser, isRegister });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}users/register`, {
        name: newUser.username,
        email: newUser.email,
        password: newUser.password,
      });

      // console.log(res.data.user);
      // console.log(res.data.token);

      localStorage.setItem('token', res.data.token);

      setToken(res.data.token);
      setLogedUser(res.data.user);

      console.log("Register successful:", newUser);
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  useEffect(() => {
    console.log("User updated:", logedUser);
    console.log("Token updated:", token);

    // Redirect to root if user is logged in
    if (logedUser && token) {
      navigate("/");
    }
  }, [logedUser, token]);

  return (
    <div className={styles.registerPage}>
      <RegisterNav />
      {isRegister ? (
        <div className={styles.registerPreview}>
          <h1>Register to start listening</h1>
          <form className={styles.emailForm} onSubmit={handleEmailSubmit}>
            <div className={styles.email}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                required={true}
                className={styles.inputs}
                onChange={handleInputChange}
              />
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
                <FaFacebook className={styles.facebook} />{" "}
                <span>Sign up with Facebook</span>
              </button>
              <button>
                <FaApple /> <span>Sign up with Apple</span>
              </button>
            </div>
            <div
              className={`${styles.topSectionBorder} ${styles.bottomBorder}`}
            ></div>
            <div className={styles.haveAnAccount}>
              <p>
                Have an account?{" "}
                <u>
                  <NavLink to="/login">Go to your account</NavLink>
                </u>
                .
              </p>
            </div>
          </section>
        </div>
      ) : (
        <div className={styles.nextSection}>
          <div className={styles.topBar}></div>
          <div className={styles.stages}>
            <button
              className={styles.arrowBtn}
              onClick={() => {
                setIsRegister(true);
                setNewUser({});
              }}
            >
              <IoIosArrowBack />
            </button>
            <div className={styles.stagesText}>
              <p className={styles.stagesShow}>Stage 2 of 2</p>
              <p className={styles.stagesPar}>Create username and password</p>
            </div>
          </div>
          <form className={styles.passwordForm} onSubmit={handleRegister}>
            <div className={styles.email}>
              <label htmlFor="password">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required={true}
                onChange={handleInputChange}
                className={styles.inputs}
              />
            </div>
            <div className={styles.email}>
              <label htmlFor="password">Password</label>
              <span className={styles.eye} onClick={togglePasswordType}>
                {passwordIcon}
              </span>
              <input
                type={passwordHidden}
                name="password"
                id="password"
                required={true}
                onChange={handleInputChange}
                className={styles.inputs}
              />
            </div>
            <button className={styles.nextButton}>Register</button>
          </form>
        </div>
      )}

      <RegisterFooter />
    </div>
  );
}

export default Register;
