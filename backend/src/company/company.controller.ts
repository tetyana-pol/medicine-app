import { Controller, Get } from '@nestjs/common';
import { ReturnCompanyDto } from './dto/company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  async allCompanies(): Promise<ReturnCompanyDto[]> {
    return await this.companyService.getAll();
  }
}
