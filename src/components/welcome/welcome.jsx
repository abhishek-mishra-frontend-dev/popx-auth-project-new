/** React Imports */
import React from 'react'

/** Styles */
import styles from './welcome.module.scss';

/* Main Export */
const Welcome = ({ SetIntent, Intent }) => {

  return (
    <div className={styles.px_welcome}>
      <p className={styles.px_title}>Welcome to PopX</p>
      <p className={styles.px_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className={styles.px_create_btn} onClick={() => SetIntent({ ...Intent, step: 'sign-up' })}>
        Create Account
      </button>
      <button className={styles.px_login_btn} onClick={() => SetIntent({ ...Intent, step: 'sign-in' })}>
        Already Registered? Login
      </button>
    </div>
  )
}

export default Welcome