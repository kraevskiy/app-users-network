import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@HttpCode(200)
	@Post('login')
	async login(@Body() { email, password }: LoginDto) {
		const user = await this.authService.validateUser(email, password);

		return this.authService.login(user);
	}
}
