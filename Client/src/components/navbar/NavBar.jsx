import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styles from "../../App.module.css";

export default function NavBar({ setIsOnAuth, logedUser }) {
  return (
    <header className={styles.header}>
      {logedUser ? (
        <>
          <div className={styles.userMenu}>
            <img className={styles.userIcon} src={logedUser.imageUrl} alt="" />
            <IoIosNotificationsOutline size={20} />
            <div className={styles.installApp}>
              <MdOutlineDownloadForOffline size={20} />
              <p>Download the official app today</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.auth}>
            <NavLink
              to="/login"
              className={styles.login}
              onClick={() => setIsOnAuth(true)}
            >
              Log In
            </NavLink>
            <NavLink
              to="/register"
              className={styles.register}
              onClick={() => setIsOnAuth(true)}
            >
              Sign Up
            </NavLink>
          </div>
        </>
      )}
      <div className={styles.switch}>
        <div>
          <IoIosArrowBack />
        </div>
        <div>
          <IoIosArrowForward />
        </div>
      </div>
    </header>
  );
}