// src/server/services/__tests__/inquiryService.test.ts
import { describe, it, expect, beforeEach, vi } from "vitest";
import { InquiryService } from "../inquiryService";
import { PrismaClient, InquiryStatus } from "@prisma/client";

// Mock Prisma Client
const mockPrisma = {
  inquiry: {
    create: vi.fn(),
    findUnique: vi.fn(),
    findMany: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  },
} as unknown as PrismaClient;

describe("InquiryService", () => {
  let service: InquiryService;

  beforeEach(() => {
    service = new InquiryService(mockPrisma);
    vi.clearAllMocks();
  });

  describe("create", () => {
    it("crea una inquiry correctamente", async () => {
      const input = {
        name: "Juan Pérez",
        email: "juan@example.com",
        phone: "+5491112345678",
        message: "Necesito un video para mi marca",
        serviceId: "service-123",
      };

      const mockInquiry = {
        id: "inquiry-1",
        ...input,
        status: InquiryStatus.PENDING,
        createdAt: new Date(),
        userId: null,
      };

      vi.mocked(mockPrisma.inquiry.create).mockResolvedValue(mockInquiry);

      const result = await service.create(input);

      expect(mockPrisma.inquiry.create).toHaveBeenCalledWith({
        data: {
          ...input,
          status: InquiryStatus.PENDING,
        },
      });
      expect(result).toEqual(mockInquiry);
    });

    it("rechaza email inválido", async () => {
      const input = {
        name: "Juan",
        email: "invalid-email",
        message: "Hola necesito ayuda",
      };

      await expect(service.create(input)).rejects.toThrow();
    });

    it("rechaza nombre muy corto", async () => {
      const input = {
        name: "J",
        email: "juan@example.com",
        message: "Hola necesito ayuda",
      };

      await expect(service.create(input)).rejects.toThrow();
    });

    it("rechaza mensaje muy corto", async () => {
      const input = {
        name: "Juan Pérez",
        email: "juan@example.com",
        message: "Hola",
      };

      await expect(service.create(input)).rejects.toThrow();
    });
  });

  describe("findById", () => {
    it("encuentra una inquiry por ID", async () => {
      const mockInquiry = {
        id: "inquiry-1",
        name: "Juan Pérez",
        email: "juan@example.com",
        phone: null,
        message: "Test message",
        serviceId: null,
        status: InquiryStatus.PENDING,
        createdAt: new Date(),
        userId: null,
      };

      vi.mocked(mockPrisma.inquiry.findUnique).mockResolvedValue(mockInquiry);

      const result = await service.findById("inquiry-1");

      expect(mockPrisma.inquiry.findUnique).toHaveBeenCalledWith({
        where: { id: "inquiry-1" },
      });
      expect(result).toEqual(mockInquiry);
    });
  });

  describe("updateStatus", () => {
    it("actualiza el estado de una inquiry", async () => {
      const existingInquiry = {
        id: "inquiry-1",
        name: "Juan",
        email: "juan@example.com",
        phone: null,
        message: "Test",
        serviceId: null,
        status: InquiryStatus.PENDING,
        createdAt: new Date(),
        userId: null,
      };

      const updatedInquiry = {
        ...existingInquiry,
        status: InquiryStatus.CONTACTED,
      };

      vi.mocked(mockPrisma.inquiry.findUnique).mockResolvedValue(
        existingInquiry
      );
      vi.mocked(mockPrisma.inquiry.update).mockResolvedValue(updatedInquiry);

      const result = await service.updateStatus(
        "inquiry-1",
        InquiryStatus.CONTACTED
      );

      expect(result.status).toBe(InquiryStatus.CONTACTED);
    });

    it("lanza error si inquiry no existe", async () => {
      vi.mocked(mockPrisma.inquiry.findUnique).mockResolvedValue(null);

      await expect(
        service.updateStatus("nonexistent", InquiryStatus.CONTACTED)
      ).rejects.toThrow("Inquiry not found");
    });
  });

  describe("findAll", () => {
    it("retorna todas las inquiries", async () => {
      const mockInquiries = [
        {
          id: "inquiry-1",
          name: "Juan",
          email: "juan@example.com",
          phone: null,
          message: "Test 1",
          serviceId: null,
          status: InquiryStatus.PENDING,
          createdAt: new Date(),
          userId: null,
        },
        {
          id: "inquiry-2",
          name: "María",
          email: "maria@example.com",
          phone: null,
          message: "Test 2",
          serviceId: null,
          status: InquiryStatus.CONTACTED,
          createdAt: new Date(),
          userId: null,
        },
      ];

      vi.mocked(mockPrisma.inquiry.findMany).mockResolvedValue(mockInquiries);

      const result = await service.findAll();

      expect(result).toHaveLength(2);
      expect(mockPrisma.inquiry.findMany).toHaveBeenCalledWith({
        where: undefined,
        orderBy: { createdAt: "desc" },
      });
    });

    it("filtra por status", async () => {
      await service.findAll({ status: InquiryStatus.PENDING });

      expect(mockPrisma.inquiry.findMany).toHaveBeenCalledWith({
        where: { status: InquiryStatus.PENDING },
        orderBy: { createdAt: "desc" },
      });
    });
  });
});
