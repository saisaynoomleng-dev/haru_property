import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'relative pt-18 md:pt-24 z-10 space-y-10 px-10 py-5',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
