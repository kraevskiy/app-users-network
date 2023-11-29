import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class PatchDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(4)
	@IsOptional()
	name: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(1)
	@IsOptional()
	iso_2_code: string;

	@IsString()
	@IsNotEmpty()
	@MinLength(1)
	@IsOptional()
	iso_3_code?: string;
}
