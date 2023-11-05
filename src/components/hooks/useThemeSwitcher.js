import React, { useEffect } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = React.useState('');

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('theme');

    function handleChange() {
      let newMode;
      if (userPref) {
        newMode = userPref === 'dark' ? 'dark' : 'light';
      } else {
        newMode = mediaQuery.matches ? 'dark' : 'light';
      }

      setMode(newMode);

      if (newMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    handleChange();

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList = 'dark';
    } else if (mode === 'light') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList = 'light';
    }
  }, [mode]);

  return {
    mode,
    setMode,
    toggleMode,
  };
};

export default useThemeSwitcher;
