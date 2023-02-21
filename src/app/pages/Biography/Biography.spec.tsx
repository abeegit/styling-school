import { render } from '@testing-library/react';

import Biography from './Biography';

describe('Biography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Biography />);
    expect(baseElement).toBeTruthy();
  });
});
