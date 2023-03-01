import { render } from '@testing-library/react';

import FlexBox from './FlexBox';

describe('FlexBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlexBox />);
    expect(baseElement).toBeTruthy();
  });
});
