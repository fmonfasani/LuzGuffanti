// src/server/services/inquiryService.ts
import { PrismaClient, InquiryStatus } from "@prisma/client";
import { z } from "zod";

export const createInquirySchema = z.object({
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  serviceId: z.string().optional(),
  message: z.string().min(10, "Mensaje debe tener al menos 10 caracteres"),
});

export type CreateInquiryInput = z.infer<typeof createInquirySchema>;

export class InquiryService {
  constructor(private db: PrismaClient) {}

  async create(data: CreateInquiryInput) {
    const validated = createInquirySchema.parse(data);

    const inquiry = await this.db.inquiry.create({
      data: {
        ...validated,
        status: InquiryStatus.PENDING,
      },
    });

    return inquiry;
  }

  async findById(id: string) {
    return this.db.inquiry.findUnique({
      where: { id },
    });
  }

  async findAll(filters?: { status?: InquiryStatus }) {
    return this.db.inquiry.findMany({
      where: filters,
      orderBy: { createdAt: "desc" },
    });
  }

  async updateStatus(id: string, status: InquiryStatus) {
    const inquiry = await this.db.inquiry.findUnique({
      where: { id },
    });

    if (!inquiry) {
      throw new Error("Inquiry not found");
    }

    return this.db.inquiry.update({
      where: { id },
      data: { status },
    });
  }

  async delete(id: string) {
    return this.db.inquiry.delete({
      where: { id },
    });
  }
}
