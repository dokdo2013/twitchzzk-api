import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Twitchzzk Helix API')
    .setDescription(
      `Unofficial Twitch Helix API compatible Chzzk API Wrapper (made by <a href="https://github.com/dokdo2013" target="_blank">dokdo2013 (도연)</a>)
      <br><br>
      지원 예정인 API는 Deprecated 처리되어 있습니다.`,
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    // no expansion
  });
  SwaggerModule.setup('/', app, document, {
    swaggerOptions: {
      // docExpansion: 'none',
    },
  });

  await app.listen(3000);
}
bootstrap();
