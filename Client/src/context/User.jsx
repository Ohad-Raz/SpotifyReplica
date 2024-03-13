import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../config/apiConfig";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [inputData, setInputData] = useState({});
  const [logedUser, setLogedUser] = useState(null); // Changed initial state to null
  const [token, setToken] = useState("");

  // console.log(apiUrl);
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token");
        let URL = `${apiUrl}users/user`;
        // console.log(URL);
        if (token) {
          const res = await axios.get(URL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = await res.data;

          console.log(data);
          if (data.status === "success") {
            // console.log(res.data.data.user);
            setLogedUser(data); // Set the user obtained from token validation
          } else {
            // Token is invalid or expired, clear localStorage and set logged user to null
            localStorage.removeItem("token");
            setLogedUser(null);
          }
        }
      } catch (error) {
        console.log("Error checking token:", error);
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (token == "") {
      setToken(localStorage.getItem("token") ?? "");
    } else {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resUser = await axios.post(`${apiUrl}users/login`, inputData);

    setLogedUser(resUser.data.userFound);

    localStorage.setItem("token", resUser.data.token);
  };

  return (
    <UserContext.Provider
      value={{
        handleChange,
        handleSubmit,
        logedUser,
        setLogedUser,
        setToken,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
