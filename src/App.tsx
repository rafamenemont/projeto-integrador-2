import './App.css';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/default';
import GlobalStyle from './styles/globalStyle';
import AppRoutes from './routes';

const App = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
