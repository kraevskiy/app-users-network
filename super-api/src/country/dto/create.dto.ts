import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	name: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(2)
	iso_2_code: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(1)
	@IsOptional()
	iso_3_code?: string;
}
