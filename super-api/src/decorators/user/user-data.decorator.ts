import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserRoleType } from '@prisma/client';

export const UserData = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest();
	return request.user;
});

export type UserDataTypes = {
	email: string;
	role: UserRoleType;
};
