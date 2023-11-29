import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { genSalt, hash } from 'bcryptjs';
import { PaymentStatus, User } from '@prisma/client';
import { CardService } from '../card/card.service';
import { PaymentService } from '../payment/payment.service';
import { generate } from 'generate-password';
import { FindDto } from './dto/find.dto';
import { queriesGetAll } from './queries';

@Injectable()
export class UserService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly cardService: CardService,
		private readonly paymentService: PaymentService,
	) {}

	async create(dto: RegisterDto) {
		const { password, subscriptions, payment, role, card, ...userField } = dto;
		const salt = await genSalt(10);
		const newPassword = password
			? password
			: generate({
					length: 5,
			  });
		const passwordHash = await hash(newPassword, salt);

		const user = await this.prismaService.user.create({
			data: {
				...userField,
				role: role ? role : 'USER',
				passwordHash,
				subscriptions,
			},
		});

		if (!card) {
			return user;
		}
		const newCard = await this.cardService.create({ ...card, user_id: user.id });
		if (!newCard) {
			return user;
		}

		if (payment && newCard) {
			await this.paymentService.create({
				...payment,
				user_id: user.id,
				card_id: newCard.id,
				status: PaymentStatus.processing
			});
		}

		return this.prismaService.user.findUnique({
			where: {
				email: user.email,
			},
			include: {
				payments: true,
				cards: true,
			},
		});
	}

	async findByEmail(email: string): Promise<User | null> {
		return this.prismaService.user.findUnique({
			where: { email },
		});
	}

	async deleteByEmail(email: string): Promise<User | null> {
		return this.prismaService.user.delete({
			where: { email },
		});
	}

	async findMany(data: FindDto): Promise<User[] | null> {
		return this.prismaService.user.findMany(queriesGetAll(data));
	}
}
