import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

// Custom Right Arrow SVG Component
const RightArrow: React.FC<{ className?: string; size?: number }> = ({ 
  className = '', 
  size = 16 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    className={className}
  >
    <path
      d="M3 1l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface LinkButtonProps {
  path?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  path,
  variant = 'primary',
  className = '',
  children,
  showArrow = false,
  onClick,
}) => {
  const navigate = useNavigate();

  const baseClasses = clsx(
    'inline-flex px-3 xs:px-6 md:px-6 lg:px-10 py-2 md:py-2  flex items-center font-body transition-all duration-300',
    'btn-default justify-center rounded-[50px] px-2 xs:px-4 md:px-6 py-2'
  );

  const variantClasses: Record<string, string> = {
    primary:
      'bg-[var(--color-primary-300)] text-[var(--color-white)] hover:bg-[var(--color-primary-400)]',
    secondary:
      'bg-white text-[var(--color-primary-300)] hover:bg-[var(--color-primary-400)] hover:text-[var(--color-white)]',
    tertiary:
      'bg-transparent border border-[var(--color-primary-300)] text-[var(--color-primary-300)] hover:bg-[var(--color-primary-400)] hover:text-[var(--color-white)]',
    quaternary:
      'bg-[var(--color-white)] text-[var(--color-primary-300)] hover:bg-[var(--color-primary-400)] hover:text-[var(--color-white)]',
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    } else if (path) {
      navigate(path);
    } else{
      console.log('No path or click function')
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(baseClasses, variantClasses[variant], className)}
    >
      <span className={`${showArrow ? 'flex items-center gap-2 xs:gap-4 ' : ''}`}>
        <span>{children}</span>
        {showArrow && <RightArrow className='' size={16} />}
      </span>
    </button>
  );
};