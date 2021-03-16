import * as React from 'react';
import { render } from '@testing-library/react';

import { Converter } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<Converter  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Converter />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
