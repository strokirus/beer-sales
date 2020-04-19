import React from 'react';
import { Provider } from 'react-redux';
import styled, {
  ThemeProvider,
} from 'styled-components';

import store from './store';
import routes from './routes';

import {
  GlobalStyle,
  MainHeader,
  MainFooter,
} from './cssGlobals/globals';

const Section = styled.section`
  position: relative;
  padding-bottom: 150px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', this.keyToggleTheme, false);
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.keyToggleTheme, false);
  }

  /**
   * Trigged when key is t
  */
  keyToggleTheme = (e) => {
    if (e.keyCode === 84) {
      this.toggleTheme();
    }
  }

  toggleTheme = () => {
    let { theme } = this.state;

    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }

    this.setState({
      theme,
    });
  }

  render() {
    const {
      theme,
    } = this.state;

    return (
      <Provider
        store={store}
      >
        <ThemeProvider
          theme={{
            mode: theme,
          }}
        >
          <GlobalStyle />
          <MainHeader>
            <h1>Beer Store</h1>
          </MainHeader>
          <Section>
            {routes}
          </Section>
          <MainFooter>
            <p
              className="about"
            >
              Created by
              <a
                href="//diasalexandre.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alexandre Dias
              </a>
            </p>
            <p
              className="toggle"
            >
              <button
                type="button"
                onClick={this.toggleTheme}
              >
                Toggle theme
              </button>
            </p>
          </MainFooter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
