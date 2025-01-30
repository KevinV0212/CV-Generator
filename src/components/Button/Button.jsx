import styles from "./button.module.css";
export default function Button({ color, children, ...other }) {
  return (
    <button className={color ? styles[color] : styles["neutral"]} {...other}>
      {children}
    </button>
  );
}
