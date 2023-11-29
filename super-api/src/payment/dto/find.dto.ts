import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { PaymentStatus, PaymentType } from '@prisma/client';

export class FindDto {
	@IsString()
	@IsOptional()
	date: string;

	@IsEnum(PaymentType)
	@IsOptional()
	type: string;

	@IsString()
	@IsOptional()
	user_id: string;

	@IsString()
	@IsOptional()
	card_id: string;

	@IsNumber()
	@IsOptional()
	skip: number;

	@IsNumber()
	@IsOptional()
	take: number;

	@IsEnum(PaymentStatus)
	status?: PaymentType;
}
