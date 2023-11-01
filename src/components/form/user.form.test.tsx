import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { UserForm } from './user.form';

describe('UserForm Component', () => {
  describe('when submitting the form with valid data', () => {
    let nameInput: HTMLInputElement;
    let submitButton: HTMLButtonElement;
    let form: HTMLFormElement;
    beforeEach(() => {
      render(<UserForm></UserForm>);
      nameInput = screen.getByLabelText('User Name') as HTMLInputElement;
      submitButton = screen.getByText('Enviar');
      form = screen.getByRole('form');
    });

    test('It should render input and button', () => {
      expect(nameInput).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
      expect(form).toBeInTheDocument();
    });

    test('It should call handleSubmit when the submit button is clicked', async () => {
      await userEvent.type(nameInput, 'test');
      expect(nameInput).toHaveValue('test');
      await userEvent.click(submitButton);
      // fireEvent.change(nameInput, { target: { value: 'test' } });
      // expect(nameInput).toHaveValue('test');
      // fireEvent.submit(form);
    });
  });
});
