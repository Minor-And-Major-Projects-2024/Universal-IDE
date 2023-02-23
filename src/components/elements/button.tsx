import { forwardRef, HTMLAttributes } from 'react';
import styles from './button.module.css';

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isInline?: boolean;
  type: string;
}

const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({ children, isInline = true, type, className, ...props }, ref) => {
    return (
      <div
        className={`${styles.button} ${styles[type]} ${
          isInline ? styles.inline : ''
        } ${className || ''}`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default Button;
