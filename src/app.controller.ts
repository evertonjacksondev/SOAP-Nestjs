import { Controller, Get } from '@nestjs/common';
import { SigepWebService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: SigepWebService) { }

  @Get()
  async getLabels() {
    return await this.appService.rechargeLabels();
  }
}
