// src/app/admin/portfolio/__tests__/page.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminPortfolio from "../page";
import { describe, it, expect, vi } from "vitest";

describe("AdminPortfolio", () => {
  it("renderiza la tabla con items iniciales", () => {
    render(<AdminPortfolio />);

    expect(screen.getByText("ADMIN PORTFOLIO")).toBeInTheDocument();
    expect(screen.getByTestId("items-table")).toBeInTheDocument();

    const rows = screen.getAllByTestId("table-row");
    expect(rows).toHaveLength(2);
  });

  it("muestra el botón de crear nuevo proyecto", () => {
    render(<AdminPortfolio />);

    expect(screen.getByTestId("create-button")).toBeInTheDocument();
    expect(screen.getByTestId("create-button")).toHaveTextContent(
      "Nuevo Proyecto"
    );
  });

  it("abre el formulario al hacer click en Nuevo Proyecto", () => {
    render(<AdminPortfolio />);

    const createButton = screen.getByTestId("create-button");
    fireEvent.click(createButton);

    expect(screen.getByTestId("edit-form")).toBeInTheDocument();
    expect(screen.getByText("Crear Proyecto")).toBeInTheDocument();
  });

  it("carga datos en el formulario al editar", () => {
    render(<AdminPortfolio />);

    const editButton = screen.getByTestId("edit-1");
    fireEvent.click(editButton);

    expect(screen.getByTestId("edit-form")).toBeInTheDocument();
    expect(screen.getByTestId("input-title")).toHaveValue(
      "Campaña Verano Hotel"
    );
    expect(screen.getByTestId("input-category")).toHaveValue("TURISMO");
  });

  it("permite crear un nuevo item", async () => {
    render(<AdminPortfolio />);

    // Abrir formulario de creación
    fireEvent.click(screen.getByTestId("create-button"));

    // Llenar formulario
    fireEvent.change(screen.getByTestId("input-title"), {
      target: { value: "Nuevo Proyecto Test" },
    });
    fireEvent.change(screen.getByTestId("input-category"), {
      target: { value: "BRANDING" },
    });
    fireEvent.change(screen.getByTestId("input-thumbnail"), {
      target: { value: "/test.jpg" },
    });

    // Guardar
    fireEvent.click(screen.getByTestId("save-button"));

    await waitFor(() => {
      const rows = screen.getAllByTestId("table-row");
      expect(rows).toHaveLength(3);
      expect(screen.getByText("Nuevo Proyecto Test")).toBeInTheDocument();
    });
  });

  it("permite editar un item existente", async () => {
    render(<AdminPortfolio />);

    // Editar primer item
    fireEvent.click(screen.getByTestId("edit-1"));

    // Cambiar título
    const titleInput = screen.getByTestId("input-title");
    fireEvent.change(titleInput, {
      target: { value: "Título Editado" },
    });

    // Guardar
    fireEvent.click(screen.getByTestId("save-button"));

    await waitFor(() => {
      expect(screen.getByText("Título Editado")).toBeInTheDocument();
      expect(
        screen.queryByText("Campaña Verano Hotel")
      ).not.toBeInTheDocument();
    });
  });

  it("permite eliminar un item con confirmación", () => {
    // Mock window.confirm
    global.confirm = vi.fn(() => true);

    render(<AdminPortfolio />);

    const deleteButton = screen.getByTestId("delete-1");
    fireEvent.click(deleteButton);

    expect(global.confirm).toHaveBeenCalled();

    const rows = screen.getAllByTestId("table-row");
    expect(rows).toHaveLength(1);
  });

  it("no elimina item si se cancela la confirmación", () => {
    global.confirm = vi.fn(() => false);

    render(<AdminPortfolio />);

    const deleteButton = screen.getByTestId("delete-1");
    fireEvent.click(deleteButton);

    const rows = screen.getAllByTestId("table-row");
    expect(rows).toHaveLength(2);
  });

  it("permite cancelar la edición", () => {
    render(<AdminPortfolio />);

    // Abrir formulario
    fireEvent.click(screen.getByTestId("create-button"));
    expect(screen.getByTestId("edit-form")).toBeInTheDocument();

    // Cancelar
    fireEvent.click(screen.getByTestId("cancel-button"));

    expect(screen.queryByTestId("edit-form")).not.toBeInTheDocument();
  });

  it("muestra el estado activo/inactivo correctamente", () => {
    render(<AdminPortfolio />);

    const activeLabels = screen.getAllByText("Activo");
    expect(activeLabels.length).toBeGreaterThan(0);
  });

  it("permite cambiar el estado activo de un item", async () => {
    render(<AdminPortfolio />);

    // Editar
    fireEvent.click(screen.getByTestId("edit-1"));

    // Cambiar estado
    const activeCheckbox = screen.getByTestId("input-active");
    fireEvent.click(activeCheckbox);

    // Guardar
    fireEvent.click(screen.getByTestId("save-button"));

    await waitFor(() => {
      expect(screen.getByText("Inactivo")).toBeInTheDocument();
    });
  });

  it("permite cambiar el orden de un item", async () => {
    render(<AdminPortfolio />);

    fireEvent.click(screen.getByTestId("edit-1"));

    const orderInput = screen.getByTestId("input-order");
    fireEvent.change(orderInput, { target: { value: "99" } });

    fireEvent.click(screen.getByTestId("save-button"));

    await waitFor(() => {
      const rows = screen.getAllByTestId("table-row");
      expect(rows[0]).toHaveTextContent("99");
    });
  });

  it("oculta el botón de crear cuando está editando", () => {
    render(<AdminPortfolio />);

    expect(screen.getByTestId("create-button")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("create-button"));

    expect(screen.queryByTestId("create-button")).not.toBeInTheDocument();
  });
});
