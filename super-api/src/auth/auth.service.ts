import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { compare } from 'bcryptjs';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly JwtService: JwtService,
	) {}
	async validateUser(email: string, password: string): Promise<User> {
		const user = await this.prismaService.user.findUnique({ where: { email } });
		if (!user) {
			throw new UnauthorizedException('User not find');
		}
		const isCorrectPassword = await compare(password, user.passwordHash);
		if (!isCorrectPassword) {
			throw new UnauthorizedException('Password not correct');
		}

		return user;
	}

	async login(user: User) {
		const payload = { email: user.email, role: user.role };

		return {
			access_token: await this.JwtService.signAsync(payload),
			user,
		};
	}
}
