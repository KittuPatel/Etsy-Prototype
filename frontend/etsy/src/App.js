import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Routes from "./Routes"
import { GlobalProvider } from "./context/Provider"
import routes from "./routes/index"
function App() {
  const RenderRoute = (route) => {
    return (
      <Route
        path={route.path}
        exact
        render={(props) => <route.component {...props} />}
      ></Route>
    )
  }
  return (
    <GlobalProvider>
      <div className='MainDiv'>
        <BrowserRouter>
          <div>
            {/* <Routes /> */}
            <Switch>
              {routes.map((route, index) => (
                <RenderRoute route={route} key={index} />
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </GlobalProvider>
  )
}

export default App
