import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsIn, IsOptional } from 'class-validator';
import { CreateSoporteDto } from './create-soporte.dto';

export class UpdateSoporteDto extends PartialType(CreateSoporteDto) {
  @ApiProperty({ description: 'Estado de la solicitud', enum: ['Pendiente', 'En Proceso', 'Finalizada'], required: false })
  @IsOptional()
  @IsIn(['Pendiente', 'En Proceso', 'Finalizada'])
  estado?: string;
}
