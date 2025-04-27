import { TitleProps } from '@/lib/types';
import clsx from 'clsx';

const Title = ({ as: Comp = 'h1', children, className, size }: TitleProps) => {
  return (
    <Comp
      className={clsx(
        'font-bold leading-brand-100 text-balance',
        size === 'lg' && 'text-fs-900 md:text-fs-1000 lg:text-fs-1100',
        size === 'md' && 'text-fs-700 md:text-fs-800 lg:text-fs-900',
        size === 'sm' && 'text-fs-600 md:text-fs-700 lg:text-fs-800',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Title;
