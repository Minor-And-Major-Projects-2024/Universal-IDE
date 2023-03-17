import styles from './header.module.css';

export default function Header({
  children,
  size,
  center = false,
  shadow = false,
  className,
  ...props
}: any) {
  return (
    <div
      className={`${styles[size]} ${center ? styles.center : ''} ${
        shadow ? styles.shadow : ''
      } ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
