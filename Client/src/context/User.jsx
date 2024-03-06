import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../config/apiConfig";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [inputData, setInputData] = useState({});
  const [logedUser, setLogedUser] = useState({});

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resUser = await axios.post(`${apiUrl}users/login`, inputData);

    setLogedUser(resUser.data.userFound);

    localStorage.setItem("token", resUser.data.token);
    // location.reload();
  };

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiUrl}users/init-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      console.log(data);
      setLogedUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ handleChange, handleSubmit, logedUser, setLogedUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
