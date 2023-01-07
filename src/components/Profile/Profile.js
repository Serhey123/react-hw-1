import styles from "./Profile.module.css";
export default function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={props.avatar}
          alt="User avatar"
          className={styles.avatar}
          width="400px"
        />
        <p className={styles.name}>{props.username}</p>
        <p className={styles.tag}>{`@${props.tag}`}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{" " + props.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{" " + props.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{" " + props.likes}</span>
        </li>
      </ul>
    </div>
  );
}
