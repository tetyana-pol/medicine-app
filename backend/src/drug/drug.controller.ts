import { Controller, Get, Param } from '@nestjs/common';
import { DrugService } from './drug.service';
import { ReturnDrugDto } from './dto/drug.dto';

@Controller('drug')
export class DrugController {
  constructor(private drugService: DrugService) {}

  @Get(':idCompany')
  async findByCompany(@Param('idCompany') idCompany): Promise<ReturnDrugDto[]> {
    return await this.drugService.findByCompany(Number(idCompany));
  }
}
