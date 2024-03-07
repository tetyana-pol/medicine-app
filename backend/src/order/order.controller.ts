import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('add')
  async addOrder(@Body() dto: CreateOrderDto) {
    const promises = dto.drugs.map((drug) =>
      this.orderService.create({
        adress: dto.adress,
        email: dto.email,
        count: drug.count,
        idDrug: drug.idDrug,
        name: dto.name,
        phone: dto.phone,
      }),
    );
    return await Promise.all(promises);
  }
}
