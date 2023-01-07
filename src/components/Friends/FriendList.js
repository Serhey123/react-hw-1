import styles from "./Friends.module.css";

export default function FriendList(props) {
  return (
    <ul className={styles.friend}>
      {props.friends.map((el) => (
        <FriendListItem
          key={el.id}
          name={el.name}
          avatar={el.avatar}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
}

function FriendListItem(props) {
  return (
    <li className={styles.item}>
      <span
        className={props.isOnline ? styles.statusActive : styles.status}
      ></span>
      <img
        className={styles.avatar}
        src={props.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{props.name}</p>
    </li>
  );
}
