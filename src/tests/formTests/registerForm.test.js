import React from 'react';
import {
    render, 
    screen, 
    fireEvent, 
    act, 
    waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import nock from 'nock';
import axios from 'axios';
import RegisterForm from '../../Components/Auth/RegisterForm';

const getRenderForm = async () => {
    return await act(async () => {
        render(<RegisterForm />);
    });
}

describe("Register form", () => {

    it("should validate password is not empty and special characters", async () => {
        getRenderForm();

        fireEvent.change(screen.getByPlaceholderText("Contraseña"), {
         target: { value: "" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "Ingrese su contraseña"
          )).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText("Contraseña"), {
         target: { value: "123456789" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "La contraseña debe tener al menos una letra, un número y un caracter especial"
          )).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText("Contraseña"), {
         target: { value: "eeeeeeeeeee" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "La contraseña debe tener al menos una letra, un número y un caracter especial"
          )).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText("Contraseña"), {
         target: { value: "eeeeeee1111" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "La contraseña debe tener al menos una letra, un número y un caracter especial"
          )).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText("Contraseña"), {
         target: { value: "eeeeeee!!!" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "La contraseña debe tener al menos una letra, un número y un caracter especial"
          )).toBeInTheDocument();
        });
    });

    it("should validate name input is not empty", async () => {
        getRenderForm();

        fireEvent.change(screen.getByPlaceholderText("Nombre"), {
         target: { value: "" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getAllByText(
            "Requerido"
          )).toBeTruthy();
        });
    });

    it("should validate lastName input is not empty", async () => {
        getRenderForm();

        fireEvent.change(screen.getByPlaceholderText("Apellido"), {
         target: { value: "" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getAllByText(
            "Requerido"
          )).toBeTruthy();
        });
    });

    it("should validate email input is not empty", async () => {
        getRenderForm();

        fireEvent.change(screen.getByPlaceholderText("Mail"), {
         target: { value: "" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getAllByText(
            "Requerido"
          )).toBeTruthy();
        });
    });

    it("should validate email is not empty or invalid", async () => {
        getRenderForm();

        fireEvent.change(screen.getByPlaceholderText("Mail"), {
         target: { value: "" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getAllByText(
            "Requerido"
          )).toBeTruthy();
        });
        
        fireEvent.change(screen.getByPlaceholderText("Mail"), {
         target: { value: "wwwww" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "Email inválido"
          )).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText("Mail"), {
            target: { value: "wwwww@gmail,com" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "Email inválido"
          )).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText("Mail"), {
            target: { value: "wwwww.com" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "Email inválido"
          )).toBeInTheDocument();
        });
    });

    it("should validate confirmedPassword is not empty and confirmation is true", async () => {
        getRenderForm();

        fireEvent.change(screen.getByPlaceholderText("Confirmar contraseña"), {
         target: { value: "" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "Confirme su contraseña"
          )).toBeInTheDocument();
        });

        fireEvent.change(screen.getByPlaceholderText("Confirmar contraseña"), {
         target: { value: "contraseña1!" }
        });
        fireEvent.change(screen.getByPlaceholderText("Contraseña"), {
         target: { value: "contraseña2!" }
        });
        fireEvent.click(screen.getByText('Register'));
        await waitFor(() => {
          expect(screen.getByText(
            "La contraseña no coincide, por favor inténtelo de nuevo"
          )).toBeInTheDocument();
        });
    });

    it("should validate POST request and response", async () => {
        const testData = {
            email: "zz@gmail.com",
            name: "hulk",
            password: "contraseña1!",
            confirmedPassword: "contraseña1!",
            lastName: "Garcia"
        }

        nock("http://localhost:3000/register")
        .post("/users")
        .once()
        .reply(200, {
            testData,
            success: true
        });

        axios.post("/users", testData)
        .then(res => {
            expect(res.data.success).toBeEqual(true);
        });
        
    });
});