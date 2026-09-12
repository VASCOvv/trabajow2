import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSoporteDto } from './dto/create-soporte.dto';
import { UpdateSoporteDto } from './dto/update-soporte.dto';
import { Soporte } from './entities/soporte.entity';

@Injectable()
export class SoporteService {
  constructor(
    @InjectRepository(Soporte)
    private repo: Repository<Soporte>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const soporte = await this.repo.findOne({ where: { id } });
    if (!soporte) throw new NotFoundException('Solicitud no encontrada');
    return soporte;
  }

  async create(dto: CreateSoporteDto) {
    this.revisarFecha(dto.fecha);
    const soporte = new Soporte();
    soporte.titulo = dto.titulo;
    soporte.cliente = dto.cliente;
    soporte.categoria = dto.categoria;
    soporte.prioridad = dto.prioridad;
    soporte.descripcion = dto.descripcion;
    soporte.fecha = dto.fecha;
    soporte.estado = 'Pendiente';
    return this.repo.save(soporte);
  }

  async update(id: number, dto: UpdateSoporteDto) {
    const soporte = await this.findOne(id);
    if (dto.fecha) this.revisarFecha(dto.fecha);
    if (soporte.estado === 'Finalizada' && dto.estado === 'Pendiente') {
      throw new BadRequestException('Una solicitud Finalizada no puede volver a Pendiente');
    }
    Object.assign(soporte, dto);
    return this.repo.save(soporte);
  }

  async remove(id: number) {
    const soporte = await this.findOne(id);
    if (soporte.estado !== 'Finalizada') {
      throw new BadRequestException('Solo se pueden eliminar solicitudes Finalizadas');
    }
    await this.repo.remove(soporte);
    return { mensaje: 'Solicitud eliminada' };
  }

  buscar(titulo: string) {
    return this.repo.find({ where: { titulo } });
  }

  private revisarFecha(fecha: Date) {
    if (fecha > new Date()) {
      throw new BadRequestException('La fecha no puede ser posterior a hoy');
    }
  }
}
