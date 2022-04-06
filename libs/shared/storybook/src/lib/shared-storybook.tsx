import styles from './shared-storybook.module.css';

/* eslint-disable-next-line */
export interface SharedStorybookProps {}

export function SharedStorybook(props: SharedStorybookProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedStorybook!</h1>
    </div>
  );
}

export default SharedStorybook;
