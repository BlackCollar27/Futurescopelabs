import { RouterProvider } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { router } from './routes';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}