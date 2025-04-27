'use client';

import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Button } from './ui/button';

export const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return <Button></Button>;
};
