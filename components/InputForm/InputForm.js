import { useController } from "react-hook-form"
import styles from "../../styles/Input.module.css"

export default function InputForm({
  label,
  type,
  name,
  rules,
  control,
  error,
  placeholder
}) {
  const { field } = useController({
    name,
    control,
    rules: rules
  })

  return (
    <div className={styles.container}>
      <label>{label}</label>
      <div className={styles.containerInput}>
        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>
      {error && <p className={styles.textError}>{error.message}</p>}
    </div>
  )
}
