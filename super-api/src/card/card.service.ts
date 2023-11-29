import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDto } from './dto/create.dto';

@Injectable()
export class CardService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(data: CreateDto) {
		return this.prismaService.card.create({ data });
	}

	async delete(id: number) {
		return this.prismaService.card.delete({
			where: { id },
		});
	}

	async deleteAllByUser(user_id: number) {
		return this.prismaService.card.deleteMany({
			where: {
				user_id,
			},
		});
	}
}
