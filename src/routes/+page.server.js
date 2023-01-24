import { z } from 'zod';

const contactSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(2)
		.max(64, { message: 'Name must be less than 64 characters' })
		.trim(),
	email: z
		.string({ required_error: 'Email is required' })
		.trim()
		.max(64, { message: 'Name must be less than 64 characters' })
		.email({ message: 'Email must be a valid email address' }),
	message: z
		.string({ required_error: 'Message is required' })
		.min(5, { message: 'Message must be at least 5 characters' })
		.trim()
});
export const actions = {
	contactUs: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		// const name = formdata.name;
		// const email = formdata.email;
		// const message = formdata.message;
		try {
			const result = contactSchema.parse(formData);
			console.log('success!');
			// console.log(result);
		} catch (err) {
			const { fieldErrors: errors } = err.flatten();
			const { name, email, message } = formData;
			return {
				name,
				email,
				message,
				errors
			};
		}
	}
};
