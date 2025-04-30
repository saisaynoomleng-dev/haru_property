import { PageTagProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const PageTag = ({ icon, title, className }: PageTagProps) => {
  return (
    <div
      className={clsx(
        'flex px-5 py-2 bg-brand-neutral-400 text-brand-neutral-100 items-center gap-2 rounded-full max-w-[250px] text-center text-fs-300 justify-center',
        className,
      )}
    >
      <p>{icon}</p>
      <p className="font-semibold text-fs-300">{title}</p>
    </div>
  );
};

export default PageTag;
