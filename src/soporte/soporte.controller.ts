import { Controller, Get } from '@nestjs/common';
import { SoporteService } from './soporte.service';

@Controller('soporte')
export class SoporteController {
  constructor(private readonly soporteService: SoporteService) {}

  @Get()
  findAll() {
    return this.soporteService.findAll();
  }
}
