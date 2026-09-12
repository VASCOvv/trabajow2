import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoporteModule } from './soporte/soporte.module';
import { Soporte } from './soporte/entities/soporte.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT ?? 3306),
      username: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASS ?? '',
      database: process.env.DB_NAME ?? 'soportecliente_db',
      entities: [Soporte],
      synchronize: true,
    }),
    SoporteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
