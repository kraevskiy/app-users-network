import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDto } from './dto/create.dto';
import { Country } from '@prisma/client';
import { FindDto } from './dto/find.dto';
import { PatchDto } from './dto/patch.dto';

@Injectable()
export class CountryService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(data: CreateDto): Promise<Country> {
		return this.prismaService.country.create({ data });
	}

	async delete(id: string): Promise<Country | null> {
		return this.prismaService.country.delete({
			where: {
				id: +id,
			},
		});
	}

	async patch(id: string, dto: PatchDto): Promise<Country | null> {
		return this.prismaService.country.update({
			where: {
				id: +id,
			},
			data: {
				...dto,
			},
		});
	}

	async getById(id: string): Promise<Country | null> {
		return this.prismaService.country.findUnique({
			where: {
				id: +id,
			},
		});
	}

	async findAll(dto: FindDto): Promise<Country[] | null> {
		return this.prismaService.country.findMany({
			where: {
				name: dto.name,
				iso_2_code: dto.iso_2_code,
			},
			take: dto.take,
			skip: dto.skip,
		});
	}
}
