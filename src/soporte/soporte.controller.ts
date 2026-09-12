import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateSoporteDto } from './dto/create-soporte.dto';
import { UpdateSoporteDto } from './dto/update-soporte.dto';
import { SoporteService } from './soporte.service';

@Controller('soporte')
export class SoporteController {
  constructor(private readonly soporteService: SoporteService) {}

  @Get()
  findAll() {
    return this.soporteService.findAll();
  }

  @Get('buscar')
  buscar(@Query('titulo') titulo: string) {
    return this.soporteService.buscar(titulo);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soporteService.findOne(+id);
  }

  @Post()
  create(@Body() dto: CreateSoporteDto) {
    return this.soporteService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSoporteDto) {
    return this.soporteService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soporteService.remove(+id);
  }
}
