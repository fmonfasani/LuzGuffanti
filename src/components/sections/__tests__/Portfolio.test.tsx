// src/components/sections/__tests__/Portfolio.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Portfolio } from "../Portfolio";
import { describe, it, expect } from "vitest";

describe("Portfolio", () => {
  it("renderiza el título correctamente", () => {
    render(<Portfolio />);
    expect(screen.getByText("VIDEOS")).toBeInTheDocument();
  });

  it("muestra todos los filtros de categoría", () => {
    render(<Portfolio />);

    expect(screen.getByTestId("filter-ALL")).toBeInTheDocument();
    expect(screen.getByTestId("filter-REELS")).toBeInTheDocument();
    expect(screen.getByTestId("filter-BRANDING")).toBeInTheDocument();
    expect(screen.getByTestId("filter-TURISMO")).toBeInTheDocument();
    expect(screen.getByTestId("filter-INSTITUCIONAL")).toBeInTheDocument();
    expect(screen.getByTestId("filter-LIFESTYLE")).toBeInTheDocument();
    expect(screen.getByTestId("filter-ECOMMERCE")).toBeInTheDocument();
  });

  it("muestra 6 items por defecto (ALL)", () => {
    render(<Portfolio />);

    const items = screen.getAllByTestId("portfolio-item");
    expect(items).toHaveLength(6);
  });

  it("filtra correctamente por categoría REELS", async () => {
    render(<Portfolio />);

    const reelsFilter = screen.getByTestId("filter-REELS");
    fireEvent.click(reelsFilter);

    await waitFor(() => {
      const items = screen.getAllByTestId("portfolio-item");
      expect(items).toHaveLength(1);
    });
  });

  it("filtra correctamente por categoría TURISMO", async () => {
    render(<Portfolio />);

    const turismoFilter = screen.getByTestId("filter-TURISMO");
    fireEvent.click(turismoFilter);

    await waitFor(() => {
      const items = screen.getAllByTestId("portfolio-item");
      expect(items).toHaveLength(1);
      expect(
        screen.getByText("Campaña Verano Hotel Boutique")
      ).toBeInTheDocument();
    });
  });

  it("aplica estilos activos al filtro seleccionado", () => {
    render(<Portfolio />);

    const allFilter = screen.getByTestId("filter-ALL");
    const reelsFilter = screen.getByTestId("filter-REELS");

    expect(allFilter).toHaveClass("bg-gray-800", "text-white");
    expect(reelsFilter).toHaveClass("bg-white", "text-gray-600");

    fireEvent.click(reelsFilter);

    expect(reelsFilter).toHaveClass("bg-gray-800", "text-white");
  });

  it("vuelve a mostrar todos los items al seleccionar ALL", async () => {
    render(<Portfolio />);

    // Filtrar por REELS
    fireEvent.click(screen.getByTestId("filter-REELS"));

    await waitFor(() => {
      expect(screen.getAllByTestId("portfolio-item")).toHaveLength(1);
    });

    // Volver a ALL
    fireEvent.click(screen.getByTestId("filter-ALL"));

    await waitFor(() => {
      expect(screen.getAllByTestId("portfolio-item")).toHaveLength(6);
    });
  });

  it("muestra métricas cuando están disponibles", () => {
    render(<Portfolio />);

    expect(screen.getByText("2.5M")).toBeInTheDocument();
    expect(screen.getByText("45K")).toBeInTheDocument();
  });
});
