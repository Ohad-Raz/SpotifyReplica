import React from 'react'
import SpotifyLogo from '../../../assets/Spotify_Logo_RGB_White.png';
import styles from "./RegisterNav.module.css";

function RegisterNav() {
  return (
    <nav className={styles.registerNav}>
        <img src={SpotifyLogo} className={styles.navLogo}alt="spotify-logo-white" />
    </nav>
  )
}

export default RegisterNav
