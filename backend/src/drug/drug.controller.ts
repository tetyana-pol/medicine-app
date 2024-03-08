import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { DrugService } from './drug.service';
import { ReturnDrugDto } from './dto/drug.dto';

@Controller('drug')
export class DrugController {
  constructor(private drugService: DrugService) {}

  @Get(':idCompany')
  async findByCompany(@Param('idCompany') idCompany): Promise<ReturnDrugDto[]> {
    return await this.drugService.findByCompany(Number(idCompany));
  }

  @Get('image/:imagename')
  getImage(@Param('imagename') image: string, @Res() res) {
    const response = res.sendFile(image, { root: './uploads' });
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }
}
