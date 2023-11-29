import {
	IsArray,
	IsEmail,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	MinLength,
} from 'class-validator';
import { UserRoleType } from '@prisma/client';

export class FindDto {
	@IsNumber()
	@IsOptional()
	skip?: number;

	@IsNumber()
	@IsOptional()
	take?: number;

	@IsEmail()
	@IsOptional()
	email?: string;

	@IsEmail()
	@IsOptional()
	first_name?: string;

	@IsEmail()
	@IsOptional()
	last_name?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	phone?: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	country?: string;

	@IsArray()
	@IsNumber({}, { each: true })
	@IsOptional()
	payments?: number[];

	@IsEnum(UserRoleType)
	@IsOptional()
	role?: UserRoleType;

	@IsArray()
	@IsNumber({}, { each: true })
	@IsOptional()
	cards?: number[];

	@IsArray()
	@IsNumber({}, { each: true })
	@IsOptional()
	subscriptions?: number[];
}
