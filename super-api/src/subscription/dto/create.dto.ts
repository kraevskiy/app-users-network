import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { SubscriptionCredentialType } from '@prisma/client';

export class CreateDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	name: string;

	@IsNumber()
	price: number;

	@IsString()
	currency: string;

	@IsString()
	@IsOptional()
	api_key?: string;

	@IsNumber()
	@IsOptional()
	trial_period_days?: number;

	@IsEnum(SubscriptionCredentialType)
	@IsOptional()
	credential: SubscriptionCredentialType;
}
