import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { PatchDto } from './dto/patch.dto';
import { FindDto } from './dto/find.dto';
import { SubscriptionService } from './subscription.service';
import { Subscription, UserRoleType } from '@prisma/client';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { Roles } from '../decorators/roles/roles.decorator';
import { RolesGuard } from '../decorators/roles/roles.guard';

@Controller('subscription')
export class SubscriptionController {
	constructor(private readonly subscriptionService: SubscriptionService) {}
	@Roles(UserRoleType.ADMIN, UserRoleType.MANAGER)
	@UseGuards(JwtGuard, RolesGuard)
	@Post('create')
	async create(@Body() dto: CreateDto) {
		return this.subscriptionService.create(dto);
	}

	@Get(':id')
	async get(@Param('id') id: string): Promise<Subscription | null> {
		return this.subscriptionService.getById(id);
	}

	@Roles(UserRoleType.ADMIN, UserRoleType.MANAGER)
	@UseGuards(JwtGuard, RolesGuard)
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Subscription | null> {
		return this.subscriptionService.delete(id);
	}

	@Roles(UserRoleType.ADMIN, UserRoleType.MANAGER)
	@UseGuards(JwtGuard, RolesGuard)
	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: PatchDto): Promise<Subscription | null> {
		return this.subscriptionService.patch(id, dto);
	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindDto): Promise<Subscription[] | null> {
		return this.subscriptionService.findAll(dto);
	}
}
