import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../config/apiConfig";
import { UserContext } from "../../context/User";
import RegisterNav from "../MiniComponents/RegisterNav/RegisterNav";
import RegisterFooter from "../MiniComponents/RegisterFooter";
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

function Login() {
  const [passwordHidden, setPasswordHidden] = useState("password");
  const [passwordIcon, setPasswordIcon] = useState(<FaRegEyeSlash />);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { setToken, setLogedUser } = useContext(UserContext);

  const togglePasswordType = () => {
    if (passwordHidden === "password") {
      setPasswordHidden === "text";
      setPasswordIcon(<FaRegEye />);
    } else if (passwordHidden === "text") {
      setPasswordHidden("password");
      setPasswordIcon(<FaRegEyeSlash />);
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiUrl}users/login`, {
        email: user.email,
        password: user.password,
      });

      const data = await res.data;
      console.log(data);

      setUser(data.userFound);

      localStorage.setItem("token", data.token);
      setLogedUser(data.user);
      console.log("Logged in successfully:", data.user);
      window.location.href = "/";
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div className={styles.loginPage}>
      <RegisterNav />
      <div className={styles.login}>
        <section>
          <h1>Log in to - Spotify</h1>
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
          <form className={styles.passwordForm} onSubmit={handleLogin}>
            <div className={styles.email}>
              <label htmlFor="password">Email</label>
              <input
                type="email"
                name="email"
                id="email"
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
            <button className={styles.nextButton}>Login</button>
          </form>
        </section>
      </div>
      <RegisterFooter />
    </div>
  );
}

export default Login;
