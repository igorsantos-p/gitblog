import { ThemeProvider } from "styled-components";
import { Header } from "./pages/components/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { IssuesProvider } from "./contexts/IssuesContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </IssuesProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
