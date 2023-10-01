import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ errorMessage, actionMessage }) => {
  return (
    <section className={styles.errorContainer}>
      <img src="./no-search-results.svg" alt="" />
      <h4 className={styles.errorMessage}>{errorMessage}</h4>
      {actionMessage && <p className={styles.actionMessage}>{actionMessage}</p>}
    </section>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  actionMessage: PropTypes.string,
};

export default ErrorMessage;
