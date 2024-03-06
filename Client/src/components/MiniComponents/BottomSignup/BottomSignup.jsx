import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./BottomSignup.module.css";

function BottomSignup({setIsOnAuth}) {
  return (
    <div className={styles.bottomSignup}>
      <div className={styles.text}>
      <p>Preview of Spotify</p>
      <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
      </div>
      <button><NavLink to="/register" onClick={()=> setIsOnAuth(true)}>Sign up free</NavLink></button>
    </div>
  )
}

export default BottomSignup
