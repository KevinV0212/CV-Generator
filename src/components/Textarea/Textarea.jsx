import styles from "./textarea.module.css";
export default function Textarea({ label, fill, ...other }) {
  return (
    <div className={styles.wrapper}>
      {label ? <label htmlFor={other.id || null}>{label}</label> : null}
      <textarea rows="6" {...other} style={fill ? { width: "100%" } : null} />
    </div>
  );
}
