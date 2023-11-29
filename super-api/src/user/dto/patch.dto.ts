import { IsArray, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRoleType } from '@prisma/client';

export class PatchDto {
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
	country: string;

	@IsString()
	@MinLength(5)
	@IsOptional()
	password?: string;

	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	payments: string[];

	@IsEnum(UserRoleType)
	@IsOptional()
	role: string;

	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	cards: string[];

	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	subscriptions: string[];
}
