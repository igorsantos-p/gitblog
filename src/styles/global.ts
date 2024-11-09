import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${(props) => props.theme["slate-900"]};
    color: ${(props) => props.theme["slate-300"]};
    font: 400 1rem/160% "Nunito", sans-serif;
}

h1, h2 {
    color: ${(props) => props.theme["slate-100"]};
}
`;
