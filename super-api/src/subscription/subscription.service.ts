import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Subscription } from '@prisma/client';
import { FindDto } from './dto/find.dto';
import { PatchDto } from './dto/patch.dto';

@Injectable()
export class SubscriptionService {
	constructor(private readonly prismaService: PrismaService) {}
	async create(data: CreateDto): Promise<Subscription | null> {
		return this.prismaService.subscription.create({ data });
	}

	async getById(id: string): Promise<Subscription | null> {
		return this.prismaService.subscription.findUnique({
			where: {
				id: +id,
			},
		});
	}

	async delete(id: string): Promise<Subscription | null> {
		return this.prismaService.subscription.delete({
			where: {
				id: +id,
			},
		});
	}

	async patch(id: string, { ...dto }: PatchDto): Promise<Subscription | null> {
		return this.prismaService.subscription.update({
			where: {
				id: +id,
			},
			data: {
				...dto,
			},
		});
	}

	async findAll({ take, skip, ...data }: FindDto): Promise<Subscription[] | null> {
		return this.prismaService.subscription.findMany({
			where: { ...data },
			skip,
			take,
		});
	}
}
