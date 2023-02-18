import { render } from '@testing-library/react';

import GettingStartedWithCSS from './GettingStartedWithCSS';

describe('GettingStartedWithCSS', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GettingStartedWithCSS />);
    expect(baseElement).toBeTruthy();
  });
});
