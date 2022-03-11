import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './Routes';
import { GlobalProvider } from './context/Provider';

function App() {
  return (
    <GlobalProvider>
      <div className="MainDiv">
        <BrowserRouter>
          <div>
            <Routes />
          </div>
        </BrowserRouter>  
      </div>
    </GlobalProvider>
  );
}

export default App;
