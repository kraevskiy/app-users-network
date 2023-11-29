import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { PaymentType, PaymentStatus } from '@prisma/client';

export class CreateDto {
	@IsEnum(PaymentType)
	@IsNotEmpty()
	type: PaymentType;

	@IsNumber()
	count: number;

	@IsString()
	currency: string;

	@IsString()
	@IsNotEmpty()
	card_id: number;

	@IsNumber()
	user_id: number;

	@IsEnum(PaymentStatus)
	status: PaymentStatus;
}
