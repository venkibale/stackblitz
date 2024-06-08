import StarRating from "./StarRating";
import styles from "./StarRating.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <StarRating value={0} total={5} />
    </div>
  );
}