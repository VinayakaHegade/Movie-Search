import styles from "./EmptyState.module.css";

const EmptyState = () => {
  return (
    <section className={styles.emptyStateContainer}>
      <p className={styles.emptyStateMessage}>
        Enter a movie name in the search bar above and the results will be
        displayed here. Find your next favorite movie!
      </p>
    </section>
  );
};

export default EmptyState;
