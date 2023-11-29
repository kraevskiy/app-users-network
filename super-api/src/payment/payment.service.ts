import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDto } from './dto/create.dto';

@Injectable()
export class PaymentService {
	constructor(private readonly prismaService: PrismaService) {}

	async create(data: CreateDto) {
		return this.prismaService.payment.create({ data });
	}

	async delete(id: number) {
		return this.prismaService.payment.delete({
			where: { id },
		});
	}

	async deleteAllByUser(user_id: number) {
		return this.prismaService.payment.deleteMany({
			where: { user_id },
		});
	}
}
