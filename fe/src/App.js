import React from 'react';
import { Provider } from 'react-redux';
import {
  ThemeProvider,
} from 'styled-components';

import store from './store';
import routes from './routes';

import {
  GlobalStyle,
} from './cssGlobals/globals';

import Footer from './components/Footer';

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
    if (e.altKey && e.keyCode === 84) {
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
          {routes}
          <Footer
            toggleTheme={this.toggleTheme}
          />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
