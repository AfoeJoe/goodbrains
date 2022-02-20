import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({});

// A `seed` function so that you can use async/await
async function seed() {
	// Create user, posts, and categories

	const question1 = await prismaClient.questions.create({
		data: {
			question: 'What si life',
			options: ['I don;t know', 'Guees'],
			correctAnswer: 1,
			subject: 'ENGLISH',
		},
	});
	const user = await prismaClient.user.create({
		data: {
			email: 'ariadne2@prisma.io',
			QuestionsMeta: {
				create: [
					{
						exam: 'UNDERTERMINED',
						year: new Date(),
						totalAppearances: 0,
						average: 0,
						question: {
							create: {
								question: 'What si life',
								options: ['I don;t know', 'Guees'],
								correctAnswer: 1,
							},
						},
					},
				],
			},
			Attempts: {
				create: [
					{
						questionId: [question1.id],
						userAnswers: [0],
						result: 1000,
					},
				],
			},
		},
	});

	// Return user, and posts, and categories
	/* const returnUser = await prismaClient.user.findUnique({
		where: {
			id: user.id,
		},
		include: {
			posts: {
				include: {
					categories: true,
				},
			},
		},
	}); */

	// console.log(returnUser);
}

seed();

/* .catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	}); */
