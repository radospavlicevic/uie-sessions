import styles from './tailwind-ui.module.css';

/* eslint-disable-next-line */
export interface TailwindUiProps {}

export function TailwindUi(props: TailwindUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TailwindUi!</h1>
    </div>
  );
}

export default TailwindUi;
