import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="MainDiv">
      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>  
      </div>
  );
}

export default App;
