import 'src/global.css';

import Fab from '@mui/material/Fab';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/theme/theme-provider';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  const githubButton = (
    <Fab
    >
      <Iconify width={24} icon="" />
    </Fab>
  );

  return (
    <ThemeProvider>
      <Router />
      {githubButton}
    </ThemeProvider>
  );
}
