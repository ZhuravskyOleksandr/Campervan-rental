import css from './Button.module.css';
import clsx from 'clsx';

export default function Button({
  type = 'button',
  children,
  className,
  onClick,
  ...props
}) {
  return (
    <button
      className={clsx(css.button, className && className)}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
