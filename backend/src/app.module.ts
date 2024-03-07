import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { CompanyModule } from './company/company.module';
import { DrugModule } from './drug/drug.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [ConfigModule.forRoot(), CompanyModule, DrugModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
