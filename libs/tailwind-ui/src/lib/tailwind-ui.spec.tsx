import { render } from '@testing-library/react';

import TailwindUi from './tailwind-ui';

describe('TailwindUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TailwindUi />);
    expect(baseElement).toBeTruthy();
  });
});
