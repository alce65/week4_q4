import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';
import { Menu } from '../menu/menu';

jest.mock('../menu/menu');

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    const title = 'Testing header';

    beforeEach(() => {
      render(<Header title={title} menuOptions={[]}></Header>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
      expect(Menu).toHaveBeenCalled();
    });

    test('Then it should render the title', () => {
      const element = screen.getByText(title);
      expect(element).toBeInTheDocument();
    });
  });
});
