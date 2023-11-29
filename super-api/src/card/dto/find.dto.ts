import { IsNumber, IsOptional } from 'class-validator';

export class FindDto {
	@IsNumber()
	@IsOptional()
	skip: number;

	@IsNumber()
	@IsOptional()
	take: number;
}
