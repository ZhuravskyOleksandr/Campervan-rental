import css from './Button.module.css';
import clsx from 'clsx';

export default function Button({
  type = 'button',
  className,
  onClick,
  disabled,
  children,
  ...props
}) {
  return (
    <button
      className={clsx(css.button, className && className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
