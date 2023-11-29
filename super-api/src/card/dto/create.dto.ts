import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CardType } from '@prisma/client';

export class CreateDto {
	@IsString()
	cvv: string;

	@IsString()
	number: string;

	@IsString()
	expiration_date: string;

	@IsString()
	@IsOptional()
	token?: string;

	@IsEnum(CardType)
	@IsOptional()
	type?: CardType;

	@IsNumber()
	user_id: number;
}
