import { ParagraphProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Paragraph = ({ as: Comp = 'p', children, className }: ParagraphProps) => {
  return (
    <Comp className={clsx('leading-normal text-pretty', className)}>
      {children}
    </Comp>
  );
};

export default Paragraph;
