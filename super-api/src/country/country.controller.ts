import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { PatchDto } from './dto/patch.dto';
import { FindDto } from './dto/find.dto';
import { CountryService } from './country.service';
import { Country } from '@prisma/client';

@Controller('country')
export class CountryController {
	constructor(private readonly countryService: CountryService) {}

	@Post('create')
	async create(@Body() dto: CreateDto) {
		return this.countryService.create(dto);
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		return this.countryService.getById(id);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Country | null> {
		return this.countryService.delete(id);
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: PatchDto) {
		return this.countryService.patch(id, dto);
	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindDto): Promise<Country[] | null> {
		return this.countryService.findAll(dto);
	}
}
