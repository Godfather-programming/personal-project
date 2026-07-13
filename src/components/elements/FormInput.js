import styles from "@/src/components/elements/FormInput.module.scss"


function FormInput({ placeholder }) {
  return (
    <input placeholder={placeholder} className={styles.input} />
  );
}

export default FormInput;