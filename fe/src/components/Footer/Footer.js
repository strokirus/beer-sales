import React from 'react';
import { func } from 'prop-types';

import {
  MainFooter,
} from './styles';

/**
 * Component to Footer
 * @param toggleTheme Function to toggle theme
*/
const Footer = ({ toggleTheme }) => (
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
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
    </p>
  </MainFooter>
);

Footer.propTypes = {
  toggleTheme: func,
};

Footer.defaultProps = {
  toggleTheme: () => {},
};

export default Footer;
