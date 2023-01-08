import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

export default function TransactionHistory(props) {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map((el) => (
          <Transaction
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

function Transaction(props) {
  return (
    <tr>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
