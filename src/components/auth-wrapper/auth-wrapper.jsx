/** React Imports */
import { useState } from 'react';

/** Components */
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';
import Welcome from '../welcome/welcome';

/** Styles */
import styles from './auth-wrapper.module.scss';
import UserProfile from '../user-profile/user-profile';

/** Main Export */
const Authwrapper = () => {

    const [Intent, SetIntent] = useState({
        step: 'welcome',
    })

    const Forms = [
        {
            type: 'welcome',
            Component: Welcome
        },
        {
            type: 'sign-in',
            Component: SignIn
        },
        {
            type: 'sign-up',
            Component: SignUp
        },
        {
            type: 'user-profile',
            Component: UserProfile
        }
    ]

    const ActiveForm = Forms.find(val => val.type == Intent.step)

    return (
        <div className={styles.px_auth_wrapper}>
            {
                ActiveForm && (
                    <ActiveForm.Component
                        {...{
                            SetIntent,
                            Intent
                        }}
                    />
                )
            }
        </div>
    )
}

export default Authwrapper