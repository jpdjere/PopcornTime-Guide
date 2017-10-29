import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import MoviesIndex from "./components/movies_index";
import MoviesNew from "./components/movies_new";
import MoviesShow from "./components/movies_show";
import LazyLoad from "./components/lazyloadtest";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={
    createStoreWithMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={MoviesNew} />
          <Route path="/posts/:id" component={MoviesShow} />
          <Route path="/lazyload" component={LazyLoad} />
          <Route path="/" component={MoviesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
