import React, { MouseEventHandler } from 'react';
import Spinner from '../Spinner';

interface Props {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  full?: boolean;
  icon?: string;
  isRounded?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'small' | 'outlineprimary' | 'text';
  isSubmitting?: boolean;
  wide?: boolean;
  className?: string;
}

const Button = ({
  isRounded,
  full,
  children,
  onClick,
  disabled,
  type = 'button',
  variant = 'primary',
  isSubmitting,
  wide,
  className,
}: Props) => {
  return (
    <button
      className={`${variant}  ${full ? 'w-full' : ''} ${
        isRounded ? 'rounded-xl ' : 'rounded-lg'
      } ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'} ${
        wide && 'w-auto md:w-48'
      } ${className}`}
      onClick={onClick}
      disabled={disabled || isSubmitting}
      type={type}
    >
      {isSubmitting && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
