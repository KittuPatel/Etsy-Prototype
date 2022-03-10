import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="MainDiv">
      <Header/>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact render={ (props) => <route.component {...props} />} />
          ))}
        </Switch>
      </BrowserRouter>  
      <Footer />
      </div>
  );
}

export default App;
