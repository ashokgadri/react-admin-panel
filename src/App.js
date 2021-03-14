import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { Router } from "react-router";
import { renderRoutes } from "react-router-config";
import { history } from "./helpers/history";
import { routes } from "./routes";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
}

export default App;
