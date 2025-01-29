import styles from "./input.module.css";
export default function Input({ label, ...other }) {
  return (
    <div className={styles.wrapper}>
      {label ? <label htmlFor={other.id || null}>{label}</label> : null}
      <input {...other} />
    </div>
  );
}
