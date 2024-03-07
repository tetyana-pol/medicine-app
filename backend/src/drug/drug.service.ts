import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DrugService {
  constructor(private prisma: PrismaService) {}

  async findByCompany(idCompany: number) {
    return await this.prisma.drug.findMany({
      where: {
        companyId: idCompany,
      },
    });
  }
}
