import React from 'react';
import clsx from 'clsx';

const Spinner = ({
  size = 'md',
  className = '',
}: {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  const sizeMap = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-2 border-t-transparent border-brand-neutral-700',
        sizeMap[size],
        className,
      )}
    />
  );
};

export default Spinner;
