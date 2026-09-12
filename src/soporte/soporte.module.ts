import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoporteController } from './soporte.controller';
import { SoporteService } from './soporte.service';
import { Soporte } from './entities/soporte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Soporte])],
  controllers: [SoporteController],
  providers: [SoporteService],
  exports: [TypeOrmModule],
})
export class SoporteModule {}
