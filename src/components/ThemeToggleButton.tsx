'use client';

import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {resolvedTheme === 'dark' ? (
        <Button
          variant="darkSwitch"
          className="cursor-pointer"
          onClick={() => setTheme('light')}
        >
          <FiSun />
        </Button>
      ) : (
        <Button
          variant="darkSwitch"
          className="cursor-pointer"
          onClick={() => setTheme('dark')}
        >
          <FiMoon />
        </Button>
      )}
    </>
  );
};
