import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

import { Greetings } from './greetings';

describe('Given Greetings component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Greetings></Greetings>);
    });

    test('It should be in the document', () => {
      const element = screen.getByRole('region', { name: 'greetings' });
      expect(element).toBeInTheDocument();
    });

    test('Its button should be used', async () => {
      const input = screen.getByRole('textbox');
      const button = screen.getByRole('button');
      await userEvent.type(input, 'Pepe');
      expect(input).toHaveValue('Pepe');
      let p = screen.getByText(/Pepe/i);
      expect(p).toBeInTheDocument();
      await userEvent.click(button);
      p = screen.getByText(/Amigo/i);
      expect(p).toBeInTheDocument();
    });
  });
});
