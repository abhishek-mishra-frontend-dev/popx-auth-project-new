/** Libraries */
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

/** Local Imports */
import FormFields from '../../../models/form-fields.json'

/** Components */
import CustomInput from '../../form-utilities/custom-input/custom-input';

/** Styels */
import styles from './sign-in.module.scss';

/** Main Export */
const SignIn = ({ SetIntent, Intent }) => {

    const { control, handleSubmit, reset, formState: { isValid } } = useForm({
        resolver: yupResolver(Schema),
        mode: "onChange"
    })

    const Builder = (control, styles) => {
        return [
            {
                name: 'email',
                parent: 'sign_in',
                styles,
                type: 'text',
                label: true,
                control: control,
            },
            {
                name: 'password',
                parent: 'sign_in',
                styles,
                type: 'password',
                label: true,
                control: control,
            },
        ]
    }

    const OnSubmit = (data) => {
        console.log(data)
        reset()
        SetIntent({ ...Intent, step: 'user-profile' })
    }

    return (
        <div className={styles.px_sign_in}>
            <p className={styles.px_title}>Signin to your <br /> PopX account</p>
            <p className={styles.px_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <form onSubmit={handleSubmit(OnSubmit)} className={styles.px_form}>
                {
                    Builder(control).map(item => (
                        <div className={styles.px_input_wrapper} key={item.name}>
                            <CustomInput
                                {...{
                                    ...item,
                                    control,
                                    styles,
                                }}
                            />
                        </div>
                    ))
                }
                <button
                    type="submit"
                    disabled={!isValid}
                    className={`${styles.px_login_btn} ${!isValid ? styles.px_disabled : ""}`}
                >
                    Login
                </button>
                <button className={styles.px_create_btn} onClick={() => SetIntent({ ...Intent, step: 'sign-up' })}>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignIn

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const Schema = yup.object().shape({
    email: yup
        .string()
        .required(FormFields.sign_in.email.errors.required)
        .max(250, FormFields.sign_in.email.errors.max)
        .matches(EmailRegex, FormFields.sign_in.email.errors.valid),

    password: yup
        .string()
        .required(FormFields.sign_in.password.errors.required)
        .min(8, FormFields.sign_in.password.errors.min)
        .max(16, FormFields.sign_in.password.errors.max)
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)/,
            "password must contain at least one letter and one number"
        )
})