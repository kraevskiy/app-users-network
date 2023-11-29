import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigurableModuleClass } from './stripe.module-definition';

@Module({
  providers: [StripeService],
  exports: [StripeService],
  imports: [ConfigModule],
  controllers: [StripeController],
})
export class StripeModule extends ConfigurableModuleClass {}
