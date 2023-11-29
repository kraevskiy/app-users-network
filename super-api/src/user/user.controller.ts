import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Req,
	Patch,
	Post,
	UseGuards,
	ForbiddenException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PatchDto } from './dto/patch.dto';
import { FindDto } from './dto/find.dto';
import { UserService } from './user.service';
import { Roles } from '../decorators/roles/roles.decorator';
import { UserRoleType } from '@prisma/client';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../decorators/roles/roles.guard';
import { UserData, UserDataTypes } from '../decorators/user/user-data.decorator';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}
	@Post('register')
	async register(@Body() dto: RegisterDto) {
		const oldUser = await this.userService.findByEmail(dto.email);
		if (oldUser) {
			throw new BadRequestException('User register by this email');
		}
		return this.userService.create(dto);
	}

	@UseGuards(JwtGuard)
	@Get(':email')
	async get(@Param('email') email: string, @UserData() user: UserDataTypes) {
		if (user.email !== email && user.role !== (UserRoleType.ADMIN || UserRoleType.MANAGER)) {
			return new ForbiddenException();
		}
		return this.userService.findByEmail(email);
	}

	@UseGuards(JwtGuard)
	@Delete(':email')
	async delete(@Param('email') email: string, @UserData() user: UserDataTypes) {
		if (user.email !== email && user.role !== (UserRoleType.ADMIN || UserRoleType.MANAGER)) {
			return new ForbiddenException();
		}
		return this.userService.deleteByEmail(email);
	}

	@UseGuards(JwtGuard, RolesGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: PatchDto) {}

	@Roles(UserRoleType.ADMIN, UserRoleType.MANAGER)
	@UseGuards(JwtGuard, RolesGuard)
	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindDto) {
		return this.userService.findMany(dto);
	}
}
