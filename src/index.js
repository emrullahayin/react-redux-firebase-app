import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store/reducers/rootReducer";
import thunk from "redux-thunk";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const store = createStore(rootReducers, applyMiddleware(thunk));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#779ecb",
      light: "#9cb8d9",
      dark: "#5284bd",
      contrastText: "#ffffff"
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
