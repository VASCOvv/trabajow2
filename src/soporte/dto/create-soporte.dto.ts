import { Type } from 'class-transformer';
import { IsIn, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSoporteDto {
  @IsString()
  @MinLength(5)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  cliente: string;

  @IsIn(['Hardware', 'Software', 'Redes', 'Seguridad', 'Soporte Usuario'])
  categoria: string;

  @IsIn(['Baja', 'Media', 'Alta', 'Crítica'])
  prioridad: string;

  @IsString()
  @MinLength(15)
  descripcion: string;

  @Type(() => Date)
  fecha: Date;
}
