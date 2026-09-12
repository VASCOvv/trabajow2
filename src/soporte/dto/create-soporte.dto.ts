import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSoporteDto {
  @ApiProperty({ description: 'Título de la solicitud de soporte', example: 'Fallo en la red local' })
  @IsString()
  @MinLength(5)
  titulo: string;

  @ApiProperty({ description: 'Nombre del cliente', example: 'Juan Pérez' })
  @IsString()
  @IsNotEmpty()
  cliente: string;

  @ApiProperty({ description: 'Categoría del problema', enum: ['Hardware', 'Software', 'Redes', 'Seguridad', 'Soporte Usuario'], example: 'Redes' })
  @IsIn(['Hardware', 'Software', 'Redes', 'Seguridad', 'Soporte Usuario'])
  categoria: string;

  @ApiProperty({ description: 'Nivel de prioridad', enum: ['Baja', 'Media', 'Alta', 'Crítica'], example: 'Alta' })
  @IsIn(['Baja', 'Media', 'Alta', 'Crítica'])
  prioridad: string;

  @ApiProperty({ description: 'Descripción detallada del problema', example: 'La conexión se interrumpe constantemente en el piso 2' })
  @IsString()
  @MinLength(15)
  descripcion: string;

  @ApiProperty({ description: 'Fecha de registro de la solicitud', example: '2026-09-11' })
  @Type(() => Date)
  fecha: Date;
}
