import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	// const config = new DocumentBuilder()
	// 	.setTitle('Median')
	// 	.setDescription('The Median API description')
	// 	.setVersion('0.1')
	// 	.build();
	//
	// const document = SwaggerModule.createDocument(app, config);
	// SwaggerModule.setup('swagger', app, document);
	app.useGlobalPipes(new ValidationPipe());
	app.setGlobalPrefix('api');
	const { httpAdapter } = app.get(HttpAdapterHost);
	app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
	await app.listen(3000);
}

bootstrap();
