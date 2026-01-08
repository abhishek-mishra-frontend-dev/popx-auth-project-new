/** Libraries */
import { Controller } from "react-hook-form";

/** Main Export */
const CustomRadio = ({
    name,
    label,
    options,
    control,
    styles,
    defaultValue = "yes",
    required
}) => {

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => (
                <div className={styles.px_radio_group}>
                    <p className={styles.radio_label}>{label} {required && <span className={styles.required}>*</span>}</p>
                    {options.map((opt) => (
                        <label key={opt.value} className={styles.radio}>
                            <input
                                type="radio"
                                value={opt.value}
                                checked={field.value === opt.value}
                                onChange={() => field.onChange(opt.value)}
                            />
                            <span></span>
                            {opt.label}
                        </label>
                    ))}
                    {error && (
                        <p className={styles.error_msg}>{error.message}</p>
                    )}
                </div>
            )}
        />
    );
};

export default CustomRadio;