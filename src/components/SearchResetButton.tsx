'use client';

import { useRouter } from 'next/navigation';

const SearchResetButton = () => {
  const router = useRouter();
  const reset = () => {
    router.push('/properties', { scroll: false });
  };
  return (
    <button
      aria-label="clear search"
      type="reset"
      className="absolute right-3 top-2 bg-brand-neutral-700 text-brand-neutral-200 dark:bg-brand-neutral-200 dark:text-brand-neutral-700 cursor-pointer px-2 rounded-sm text-fs-300 font-medium"
      onClick={reset}
    >
      x
    </button>
  );
};

export default SearchResetButton;
