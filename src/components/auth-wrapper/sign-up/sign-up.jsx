/** Libraries */
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

/** Local Imports */
import FormFields from '../../../models/form-fields.json'

/** Components */
import CustomInput from '../../form-utilities/custom-input/custom-input';
import CustomRadio from '../../form-utilities/custom-radio/custom-radio';

/** Styels */
import styles from './sign-up.module.scss';

/** Main Export */
const SignUp = ({ SetIntent, Intent }) => {

  const { control, handleSubmit, reset, formState: { isValid } } = useForm({
    resolver: yupResolver(SignUpSchema),
    mode: "onChange"
  })

  const Builder = (control, styles) => [
    {
      name: "full_name",
      parent: "sign_up",
      type: "text",
      control,
      required: true,
      styles
    },
    {
      name: "phone",
      parent: "sign_up",
      type: "tel",
      control,
      required: true,
      styles
    },
    {
      name: "email",
      parent: "sign_up",
      type: "email",
      control,
      required: true,
      styles
    },
    {
      name: "password",
      parent: "sign_up",
      type: "password",
      control,
      required: true,
      styles
    },
    {
      name: "company",
      parent: "sign_up",
      type: "text",
      control,
      required: true,
      styles
    },
    {
      name: "agency",
      type: "radio",
      label: "Are you an Agency?",
      required: true,
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ]
    }
  ];

  const OnSubmit = (data) => {
    console.log(data)
    reset()
    SetIntent({ ...Intent, step: 'user-profile' })
  }

  return (
    <div className={styles.px_sign_up}>
      <p className={styles.px_title}>Create your <br /> PopX account</p>
      <form onSubmit={handleSubmit(OnSubmit)} className={styles.px_form}>
        <div className={styles.px_form_wrapper}>
          {
            Builder(control).map(item => (
              <div className={styles.px_input_wrapper} key={item.name}>
                {
                  item.type === "radio" ? (
                    <CustomRadio
                      {...{
                        ...item,
                        control,
                        styles,
                      }}
                    />
                  ) : (
                    <CustomInput
                      {...{
                        ...item,
                        control,
                        styles,
                      }}
                    />
                  )
                }
              </div>
            ))
          }
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={`${styles.px_create_btn} ${!isValid ? styles.px_disabled : ""}`}
        >
          Create Account
        </button>
        <button className={styles.px_login_btn} onClick={() => SetIntent({ ...Intent, step: 'sign-in' })}>
          Already Registered? Login
        </button>
      </form>
    </div>
  )
}

export default SignUp

const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PhoneRegex = /^[6-9]\d{9}$/;

export const SignUpSchema = yup.object({
  full_name: yup
    .string()
    .required(FormFields.sign_up.full_name.errors.required),

  phone: yup
    .string()
    .required(FormFields.sign_up.phone.errors.required)
    .matches(PhoneRegex, FormFields.sign_up.phone.errors.valid),

  email: yup
    .string()
    .required(FormFields.sign_up.email.errors.required)
    .matches(EmailRegex, FormFields.sign_up.email.errors.valid),

  password: yup
    .string()
    .required(FormFields.sign_up.password.errors.required)
    .min(8, FormFields.sign_up.password.errors.min)
    .max(16, FormFields.sign_up.password.errors.max)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "password must contain at least one letter and one number"
    ),

  company: yup
    .string(),
  agency: yup
    .string()
    .required(FormFields.sign_up.agency.errors.required)
});