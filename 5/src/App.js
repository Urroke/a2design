import React from "react";
import { Provider } from "react-redux";
import routes from "./routes";
import { store } from "./store/index";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <div>
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
