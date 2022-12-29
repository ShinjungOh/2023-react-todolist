import React from 'react';

import { Page } from './ui/components/layout';
import GlobalStyles from './ui/core/GlobalStyles';
import Router from './Router';

const App = () => (
  <>
    <Page>
      <Router />
    </Page>
    <GlobalStyles />
  </>
);

export default App;
