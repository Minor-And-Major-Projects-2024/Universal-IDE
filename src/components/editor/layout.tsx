import styles from './editor-ide.module.css';

export default function Layout({ children }: any): JSX.Element {
  return <div className={styles.mainBody}>{children}</div>;
}
