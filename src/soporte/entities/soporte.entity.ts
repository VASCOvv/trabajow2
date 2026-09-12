import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'soporte' })
export class Soporte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  cliente: string;

  @Column()
  categoria: string;

  @Column()
  prioridad: string;

  @Column({ default: 'Pendiente' })
  estado: string;

  @Column()
  descripcion: string;

  @Column({ type: 'date' })
  fecha: Date;
}
