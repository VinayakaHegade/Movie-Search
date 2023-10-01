import PropTypes from "prop-types";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ errorMessage, actionMessage }) => {
  return (
    <div className={styles.errorContainer}>
      <img src="./no-search-results.svg" />
      <h4 className={styles.errorMessage}>{errorMessage}</h4>
      <p className={styles.actionMessage}>{actionMessage}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  actionMessage: PropTypes.string,
};

export default ErrorMessage;
