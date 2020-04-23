import React from 'react';
import {
  Wrapper,
} from '../../cssGlobals/globals';

/**
 * Component to Loading
*/
const ErrorPage = () => (
  <>
    <Wrapper>
      <h1>Something is rotten in the state of Denmark</h1>
      <p>Try contact the administrators of site</p>
    </Wrapper>
  </>
);

ErrorPage.propTypes = {
};

ErrorPage.defaultProps = {
};

export default ErrorPage;
