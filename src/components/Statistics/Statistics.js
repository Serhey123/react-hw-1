import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

export default function Statistics(props) {
  return (
    <section className={styles.statistics}>
      {props.title && <h2 className={styles.title}>{props.title}</h2>}

      <ul className={styles.stat}>
        {props.stats.map((el) => (
          <ListItem key={el.id} label={el.label} percentage={el.percentage} />
        ))}
      </ul>
    </section>
  );
}

function ListItem(props) {
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
      }}
    >
      <span className={styles.label}>{props.label}</span>
      <span className={styles.percentage}>{`${props.percentage}%`}</span>
    </li>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

ListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
