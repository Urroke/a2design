import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers/history";
import { store } from "./store/index.js";
import { Provider } from "react-redux";
import routes from "./routes.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Provider store={store}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              ></Route>
            ))}
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
