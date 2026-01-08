/** Local Imports */
import profilePic from '../../assets/user-profile.png';
import CameraIcon from '../../assets/camera.svg?react';

/** Styles */
import styles from './user-profile.module.scss';

const UserProfile = () => {

    return (
        <div className={styles.px_profile}>
            <p className={styles.px_title}>Account Settings</p>
            <div className={styles.px_bottom_content}>
                <div className={styles.px_profile_bottom}>
                    <div className={styles.px_profile_img_container}>
                        <img src={profilePic} alt="user-img" className={styles.px_profile_img} />
                        <div className={styles.px_camera_wrapper}>
                            <CameraIcon className={styles.px_camera_svg} />
                        </div>
                    </div>
                    <div className={styles.px_profile_details}>
                        <p className={styles.px_profile_name}>Marry Doe</p>
                        <p className={styles.px_profile_email}>Mary@example.com</p>
                    </div>
                </div>
                <p className={styles.px_profile_bio}>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
                    Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>
        </div>
    )
}

export default UserProfile