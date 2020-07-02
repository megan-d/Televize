import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#root {
  min-height: 100vh;
}

body {
  background: rgb(14, 13, 13);
  color: rgb(240, 238, 238);
  font-family: 'Saira Condensed', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
}

html {
  height: 100%;
}


footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5vh;
  margin-top: auto;
  flex-shrink: 0;
  font-size: 13px;
}

footer p {
  margin-bottom: 0;
}

.box-shadow {
  box-shadow: 0 0 4px rgb(143, 141, 141);
}

.full-page {
  min-height: 88vh;
}

.full-search-page {
  min-height: 85vh;
}

.button-text {
  font-size: 15px;
}

.text-results {
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  .text-results {
    padding: 20px;
  }
}
`;

export default GlobalStyle;
