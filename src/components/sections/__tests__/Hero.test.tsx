// src/components/sections/__tests__/Hero.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "../Hero";
import { describe, it, expect, vi } from "vitest";

describe("Hero Component", () => {
  it("renderiza el título principal correctamente", () => {
    render(<Hero />);

    expect(screen.getByText(/Transformá tus ideas en/i)).toBeInTheDocument();
    expect(screen.getByText(/contenido que vende/i)).toBeInTheDocument();
  });

  it("muestra el CTA primario", () => {
    render(<Hero />);

    const ctaPrimary = screen.getByTestId("cta-primary");
    expect(ctaPrimary).toHaveTextContent(/Solicitar propuesta creativa/i);
  });

  it("llama onCtaClick cuando se hace click en el botón", () => {
    const handleClick = vi.fn();
    render(<Hero onCtaClick={handleClick} />);

    const ctaPrimary = screen.getByTestId("cta-primary");
    fireEvent.click(ctaPrimary);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renderiza las 4 métricas", () => {
    render(<Hero />);

    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("50M+")).toBeInTheDocument();
    expect(screen.getByText("98%")).toBeInTheDocument();
    expect(screen.getByText("24h")).toBeInTheDocument();
  });

  it("muestra el botón secundario de portfolio", () => {
    render(<Hero />);

    const ctaSecondary = screen.getByTestId("cta-secondary");
    expect(ctaSecondary).toHaveTextContent(/Ver portfolio/i);
  });
});
