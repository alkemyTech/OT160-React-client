import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import ContactForm from '../../Components/Contact/ContactForm';
import { createContact } from '../../Services/contactsService';

describe('Contact component', () => {
  let component, submitBtn, name, email, phone, message;

  beforeEach(() => {
    component = render(<ContactForm />);
    submitBtn = component.getByText('Enviar');
    name = component.getByPlaceholderText('Tu nombre');
    email = component.getByPlaceholderText('Dirección de email');
    phone = component.getByPlaceholderText('Número de teléfono');
    message = component.getByPlaceholderText('Escribe aquí tu mensaje...');
  });

  const clickSubmit = () => user.click(submitBtn);

  test('empty name input displays error message', async () => {
    const requiredNameError = () => component.queryAllByText('Requerido');
    expect(requiredNameError()[0]).toBe(undefined);
    user.click(name);
    await waitFor(clickSubmit);
    expect(requiredNameError()[0]).toBeInTheDocument();
  });

  test('empty email input displays error message', async () => {
    const requiredEmailError = () => component.queryAllByText('Requerido');
    expect(requiredEmailError()[1]).toBe(undefined);
    user.click(email);
    await waitFor(clickSubmit);
    expect(requiredEmailError()[1]).toBeInTheDocument();
  });

  test('invalid email input displays error message', async () => {
    const invalidEmailError = () => component.queryByText('Email inválido');
    expect(invalidEmailError()).toBe(null);
    user.type(email, 'invalidEmail.com');
    await waitFor(clickSubmit);
    expect(invalidEmailError()).toBeInTheDocument();
  });

  test('empty message input displays error message', async () => {
    const emptyMessageError = () =>
      component.queryByText('Debes escribir algún mensaje para enviar');
    expect(emptyMessageError()).toBe(null);
    user.click(message);
    await waitFor(clickSubmit);
    expect(emptyMessageError()).toBeInTheDocument();
  });

  test('empty phone input displays error message', async () => {
    const emptyPhoneError = () =>
      component.queryByText('Debes ingresar un nro de teléfono');
    expect(emptyPhoneError()).toBe(null);
    user.click(phone);
    await waitFor(clickSubmit);
    expect(emptyPhoneError()).toBeInTheDocument();
  });

  test('non-number chars in phone input displays error message', async () => {
    const invalidPhoneError = () =>
      component.queryByText('Sólo puedes ingresar números');
    expect(invalidPhoneError()).toBe(null);
    user.type(phone, '12345678x');
    await waitFor(clickSubmit);
    expect(invalidPhoneError()).toBeInTheDocument();
  });

  test('less than 8 chars phone input displays error message', async () => {
    const shortPhoneError = () =>
      component.queryByText('El número debe tener al menos 8 dígitos');
    expect(shortPhoneError()).toBe(null);
    user.type(phone, '1234567');
    await waitFor(clickSubmit);
    expect(shortPhoneError()).toBeInTheDocument();
  });

  test('requests has success with valid inputs', async () => {
    const mockContact = {
      name: 'Valid name',
      email: 'validEmail@email.com',
      phone: '12345678',
      message: 'Message for testing',
    };

    const { error, data } = await createContact(mockContact);

    expect(error).toBe(undefined);
    expect(data.success).toBe(true);
  });
});
