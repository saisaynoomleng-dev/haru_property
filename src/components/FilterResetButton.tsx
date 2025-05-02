'use client';

import { useRouter } from 'next/navigation';

const FilterResetButton = () => {
  const router = useRouter();
  return (
    <button
      type="reset"
      className="bg-red-500 text-white  px-4 rounded-sm text-fs-300 font-medium h-full cursor-pointer"
      onClick={() => router.push('/properties', { scroll: false })}
    >
      Reset
    </button>
  );
};

export default FilterResetButton;
