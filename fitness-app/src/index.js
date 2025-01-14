import React from 'react';
import ReactDOM from 'react-dom/client'; // Użyj `react-dom/client` zamiast `react-dom`
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ContextProvider } from './contexts/ContextProvider';

// Tworzenie motywu MUI
const theme = createTheme();

// Pobranie elementu root
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Tworzenie "roota" React 18

// Renderowanie aplikacji
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);

