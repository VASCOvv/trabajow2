import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateSoporteDto } from './dto/create-soporte.dto';
import { UpdateSoporteDto } from './dto/update-soporte.dto';
import { SoporteService } from './soporte.service';

@ApiTags('soporte')
@Controller('soporte')
export class SoporteController {
  constructor(private readonly soporteService: SoporteService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las solicitudes' })
  findAll() {
    return this.soporteService.findAll();
  }

  @Get('buscar')
  @ApiOperation({ summary: 'Buscar una solicitud por título' })
  buscar(@Query('titulo') titulo: string) {
    return this.soporteService.buscar(titulo);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar una solicitud por ID' })
  findOne(@Param('id') id: string) {
    return this.soporteService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una solicitud' })
  create(@Body() dto: CreateSoporteDto) {
    return this.soporteService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una solicitud' })
  update(@Param('id') id: string, @Body() dto: UpdateSoporteDto) {
    return this.soporteService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una solicitud' })
  remove(@Param('id') id: string) {
    return this.soporteService.remove(+id);
  }
}
