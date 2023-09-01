import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(710, () => {
    console.log(`
🚀 Server ready at: http://localhost:710/graphql
`);
  });
}
bootstrap();
