// src/components/forms/__tests__/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "../ContactForm";
import { describe, it, expect, vi } from "vitest";

describe("ContactForm", () => {
  it("renderiza todos los campos", () => {
    render(<ContactForm />);

    expect(screen.getByTestId("input-name")).toBeInTheDocument();
    expect(screen.getByTestId("input-email")).toBeInTheDocument();
    expect(screen.getByTestId("input-phone")).toBeInTheDocument();
    expect(screen.getByTestId("input-message")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("muestra errores de validación para campos vacíos", async () => {
    render(<ContactForm />);

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("error-name")).toHaveTextContent(
        "El nombre debe tener al menos 2 caracteres"
      );
      expect(screen.getByTestId("error-email")).toHaveTextContent(
        "Email inválido"
      );
      expect(screen.getByTestId("error-message")).toHaveTextContent(
        "El mensaje debe tener al menos 10 caracteres"
      );
    });
  });

  it("valida formato de email", async () => {
    render(<ContactForm />);

    const emailInput = screen.getByTestId("input-email");
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("error-email")).toHaveTextContent(
        "Email inválido"
      );
    });
  });

  it("valida longitud mínima de nombre", async () => {
    render(<ContactForm />);

    const nameInput = screen.getByTestId("input-name");
    fireEvent.change(nameInput, { target: { value: "J" } });

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("error-name")).toBeInTheDocument();
    });
  });

  it("valida longitud mínima de mensaje", async () => {
    render(<ContactForm />);

    const messageInput = screen.getByTestId("input-message");
    fireEvent.change(messageInput, { target: { value: "Hola" } });

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByTestId("error-message")).toBeInTheDocument();
    });
  });

  it("envía el formulario con datos válidos", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ContactForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "juan@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-phone"), {
      target: { value: "+5491112345678" },
    });
    fireEvent.change(screen.getByTestId("input-message"), {
      target: { value: "Necesito crear contenido para mi marca" },
    });

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        name: "Juan Pérez",
        email: "juan@example.com",
        phone: "+5491112345678",
        message: "Necesito crear contenido para mi marca",
        serviceId: undefined,
      });
    });
  });

  it("muestra estado de carga durante el envío", async () => {
    const onSubmit = vi.fn(
      () => new Promise((resolve) => setTimeout(resolve, 100))
    );
    render(<ContactForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "Juan" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "juan@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-message"), {
      target: { value: "Mensaje de prueba" },
    });

    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).toHaveTextContent("Enviando...");
      expect(submitButton).toBeDisabled();
    });
  });

  it("muestra mensaje de éxito después del envío", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ContactForm onSubmit={onSubmit} />);

    fireEvent.change(screen.getByTestId("input-name"), {
      target: { value: "Juan" },
    });
    fireEvent.change(screen.getByTestId("input-email"), {
      target: { value: "juan@example.com" },
    });
    fireEvent.change(screen.getByTestId("input-message"), {
      target: { value: "Mensaje válido para testing" },
    });

    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(screen.getByTestId("submit-button")).toHaveTextContent(
        "¡Mensaje enviado!"
      );
    });
  });

  it("renderiza selector de servicios cuando se pasan servicios", () => {
    const services = [
      { id: "1", title: "Contenido UGC" },
      { id: "2", title: "Edición de video" },
    ];

    render(<ContactForm services={services} />);

    expect(screen.getByTestId("input-service")).toBeInTheDocument();
    expect(screen.getByText("Contenido UGC")).toBeInTheDocument();
    expect(screen.getByText("Edición de video")).toBeInTheDocument();
  });

  it("resetea el formulario después de envío exitoso", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined);
    render(<ContactForm onSubmit={onSubmit} />);

    const nameInput = screen.getByTestId("input-name") as HTMLInputElement;
    const emailInput = screen.getByTestId("input-email") as HTMLInputElement;
    const messageInput = screen.getByTestId(
      "input-message"
    ) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: "Juan" } });
    fireEvent.change(emailInput, { target: { value: "juan@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Mensaje de prueba" } });

    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(nameInput.value).toBe("");
      expect(emailInput.value).toBe("");
      expect(messageInput.value).toBe("");
    });
  });
});
