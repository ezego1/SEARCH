import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const PORT = process.env.LOCAL_PORT;
/**
 * Instantiate new instance of logger
 */
const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: 'localhost',
    port: parseInt(PORT),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  app.listen().then(() => {
    logger.log(`Search Microservice now listening....`);
  });
}
bootstrap();
