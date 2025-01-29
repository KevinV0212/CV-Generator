import styles from "./textarea.module.css";
export default function Textarea({ label, ...other }) {
  return (
    <div className={styles.wrapper}>
      {label ? <label htmlFor={other.id || null}>{label}</label> : null}
      <textarea {...other} />
    </div>
  );
}
