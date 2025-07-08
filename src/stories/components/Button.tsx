import React from 'react';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    'inline-flex px-5 md:px-6 lg:px-7 py-3 md:py-4 lg:py-5 flex items-center font-body transition-all duration-300',
    'btn-default justify-center rounded-[50px] px-4 md:px-6 py-2'
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
      <span className={`${showArrow ? 'flex items-center gap-2 leading-[0]' : ''}`}>
        <span>{children}</span>
        {showArrow && <ChevronRight className='mt-[2px]' size={24} />}
      </span>
    </button>
  );
};