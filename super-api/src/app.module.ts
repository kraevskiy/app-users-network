import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { CountryModule } from './country/country.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { CardModule } from './card/card.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StripeModule } from './stripe/stripe.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		AuthModule,
		UserModule,
		PaymentModule,
		CountryModule,
		SubscriptionModule,
		CardModule,
		PrismaModule,
		StripeModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				apiKey: configService.get<string>('STRIPE_SECRET'),
				options: {}
			})
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {
}
