import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
}: BoundedProps) => {
  return <Comp className={clsx('relative', className)}>{children}</Comp>;
};

export default Bounded;
