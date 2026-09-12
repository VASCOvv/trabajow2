import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoporteModule } from './soporte/soporte.module';

@Module({
  imports: [SoporteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
