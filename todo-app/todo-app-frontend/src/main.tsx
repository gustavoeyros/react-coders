import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./components/todo/TodoList.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import multi from "redux-multi";
import reducers from "./reducers.ts";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
