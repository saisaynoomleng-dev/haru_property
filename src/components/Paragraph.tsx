import { ParagraphProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Paragraph = ({
  as: Comp = 'p',
  children,
  className,
  variant = 'full',
}: ParagraphProps) => {
  return (
    <Comp
      className={clsx(
        'leading-normal text-pretty',
        variant === 'half' && 'max-w-[80%] md:max-w-[60%] lg:max-w-[50%]',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Paragraph;
