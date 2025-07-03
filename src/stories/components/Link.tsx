import React from 'react';
import clsx from 'clsx';

export interface PlainLinkProps {
  path: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export const PlainLink: React.FC<PlainLinkProps> = ({
  path,
  target,
  rel,
  className = '',
  children,
}) => {
  const baseClasses = clsx(
    'inline-flex  flex items-center font-body transition-all duration-300',
    'text-[var(--color-neutral-900)] hover:text-[var(--color-primary-300)]'
  );

  return (
    <a
      href={path}
      target={target}
      rel={rel}
      className={clsx(baseClasses, className)}
    >
      <span>{children}</span>
    </a>
  );
};