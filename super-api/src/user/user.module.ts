import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CardModule } from '../card/card.module';
import { PaymentModule } from '../payment/payment.module';

@Module({
	imports: [PrismaModule, CardModule, PaymentModule],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule {}
