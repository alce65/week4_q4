import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

import { Button } from './button';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const selectAllGentlemanMockFn = jest.fn();

    render(<Button selectAllGentleman={selectAllGentlemanMockFn}></Button>);

    test('It should be in the document', async () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(selectAllGentlemanMockFn).toHaveBeenCalled();
    });
  });
});
