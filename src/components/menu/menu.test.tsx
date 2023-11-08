import { MemoryRouter as Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Menu } from './menu';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    render(
      <Router>
        <Menu options={[{ label: 'test', path: '/test' }]}></Menu>);
      </Router>
    );

    test('It should be in the document', () => {
      const element = screen.getByRole('navigation');
      expect(element).toBeInTheDocument();
    });
  });
});
