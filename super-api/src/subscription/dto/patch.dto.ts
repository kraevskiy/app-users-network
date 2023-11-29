import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { SubscriptionCredentialType } from '@prisma/client';

export class PatchDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	@IsOptional()
	name: string;

	@IsNumber()
	@IsOptional()
	price: number;

	@IsString()
	@IsOptional()
	currency: string;

	@IsString()
	@IsOptional()
	@IsOptional()
	api_key?: string;

	@IsNumber()
	@IsOptional()
	trial_period_days?: number;

	@IsEnum(SubscriptionCredentialType)
	@IsOptional()
	credential: SubscriptionCredentialType;
}
