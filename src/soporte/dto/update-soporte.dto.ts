import { PartialType } from '@nestjs/mapped-types';
import { IsIn, IsOptional } from 'class-validator';
import { CreateSoporteDto } from './create-soporte.dto';

export class UpdateSoporteDto extends PartialType(CreateSoporteDto) {
  @IsOptional()
  @IsIn(['Pendiente', 'En Proceso', 'Finalizada'])
  estado?: string;
}
