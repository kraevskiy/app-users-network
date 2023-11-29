import { FindDto } from './dto/find.dto';

export function queriesGetAll({ skip, take, subscriptions, cards, payments, ...data }: FindDto) {
	return {
		where: {
			...data,
			subscriptions: subscriptions
				? {
						hasSome: subscriptions,
				  }
				: undefined,
			cards: cards
				? {
						some: {
							AND: {
								id: {
									in: cards,
								},
							},
						},
				  }
				: undefined,
			payments: payments
				? {
						some: {
							AND: {
								id: {
									in: payments,
								},
							},
						},
				  }
				: undefined,
		},
		include: {
			cards: true,
			payments: true,
		},
		skip,
		take,
	};
}
