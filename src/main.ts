import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // sin esto, los @MinLength y @IsIn del DTO no se aplican
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('API Soporte')
    .setDescription('API REST para la gestión de solicitudes de soporte técnico')
    .setVersion('1.0')
    .build();
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  await app.listen(3000);
  console.log('API en http://localhost:3000');
  console.log('Swagger en http://localhost:3000/api');
}
bootstrap();
