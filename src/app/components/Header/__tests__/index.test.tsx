import * as React from 'react';
import { getByLabelText, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { Header } from '..';

describe('<Header  />', () => {
  it('should match snapshot', () => {
    const history = createMemoryHistory();
    const loadingIndicator = render(
      <Router history={history}>
        <Header />
      </Router>,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
  it('should contain 2 anchors', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <Header />
      </Router>,
    );

    const calcLink = getByText(/Калькулятор/);
    const rateLink = getByText(/Курс/);
    expect(calcLink).toBeInTheDocument();
    expect(rateLink).toBeInTheDocument();
  });
  // it('should redirect to calc page', () => {
  //   const loadingIndicator = render(<Header />);

  // });
});
