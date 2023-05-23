import styles from './EmptyBlock.module.scss';

const EmptyBlock = () => {
  return (
    <h1 className={styles.root}>
      <span>🙁</span>
      <br />
      Змініть параметри пошуку на спробуйте ще раз
    </h1>
  );
}

export default EmptyBlock