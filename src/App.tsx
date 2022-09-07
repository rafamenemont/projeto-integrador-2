import { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/default';
import GlobalStyle from './styles/globalStyle';
import AppRoutes from './routes';

const App = () => {
const [chosenTheme, setChosenTheme] = useState('dark')

  return (
    <ThemeProvider theme={chosenTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
