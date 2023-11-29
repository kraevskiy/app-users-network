import {
	IsArray,
	IsEmail,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
} from 'class-validator';
import { CardType, PaymentType, UserRoleType } from '@prisma/client';

class RegisterPaymentDto {
	@IsNumber()
	count: number;

	@IsString()
	currency: string;

	@IsString()
	type: PaymentType;
}

class RegisterCardDto {
	@IsString()
	@IsString()
	type?: CardType;

	@IsString()
	cvv: string;

	@IsString()
	@MinLength(14)
	@MaxLength(20)
	number: string;

	@IsString()
	expiration_date: string;

	@IsString()
	@IsOptional()
	token?: string;
}

export class RegisterDto {
	@IsEmail()
	email: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	first_name?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	last_name?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	address?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	city?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	postal_code?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	phone?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	country?: string;

	@IsString()
	@MinLength(5)
	@IsOptional()
	password?: string;

	@IsOptional()
	payment?: RegisterPaymentDto;

	@IsEnum(UserRoleType)
	@IsOptional()
	role?: UserRoleType;

	@IsOptional()
	card?: RegisterCardDto;

	@IsArray()
	@IsNumber({}, { each: true })
	@IsOptional()
	subscriptions?: number[];
}
