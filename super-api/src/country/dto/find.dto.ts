import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class FindDto {
	@IsString()
	@MinLength(4)
	@IsOptional()
	name: string;

	@IsString()
	@MinLength(2)
	@IsOptional()
	iso_2_code: string;

	@IsNumber()
	@IsOptional()
	skip: number;

	@IsNumber()
	@IsOptional()
	take: number;
}
