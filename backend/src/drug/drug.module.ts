import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [DrugService, PrismaService],
  controllers: [DrugController],
})
export class DrugModule {}
