import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: Proxima Nova;
    font-weight: regular;
    src: url("fonts/proxima-nova-regular.woff");
}

@font-face {
    font-family: Proxima Nova;
    font-weight: bold;
    src: url("fonts/proxima-nova-bold.woff");
}

@font-face {
    font-family: Bello Script;
    src: url("fonts/Bello-Script.ttf");
}

body{
    font-family: Proxima Nova;
    font-weight: regular;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;
