import styles from "./select.module.css";
export default function Select({ label, children, ...other }) {
  return (
    <div className={styles.wrapper}>
      {label ? <label htmlFor={other.id || null}>{label}</label> : null}
      <select {...other}>{children}</select>
    </div>
  );
}
