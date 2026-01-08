/** Local Imports */
import FormFields from '../../../models/form-fields.json'

/** Libraries */
import { Controller } from "react-hook-form"

/** Main Export */
const CustomInput = ({
    name,
    parent,
    control,
    type = 'text',
    styles,
    required
}) => {

    const FieldName = parent ? (FormFields[parent])[name] : FormFields[name]
    const InputType = type === 'textarea' ? 'textarea' : 'input'

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <div
                    className={`${styles.px_input_wrap} ${error ? styles.error : ""
                        }`}
                >
                    <div className={styles.input_container}>

                        {FieldName?.label && (
                            <p className={styles.floating_label}>
                                {FieldName.label} {required && <span className={styles.required}>*</span>}
                            </p>
                        )}

                        <InputType
                            id={name}
                            className={styles.px_input}
                            placeholder={FieldName?.placeholder}
                            {...(type !== "textarea" && { type })}
                            {...field}
                        />
                    </div>

                    {error && <p className={styles.error_msg}>{error.message}</p>}
                </div>
            )}
        />
    )
}

export default CustomInput