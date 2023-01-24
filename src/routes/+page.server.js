export const actions = {
	contactus: async ({ request }) => {
		const formdata = Object.fromEntries(await request.formData());
		// const name = res.get('name');
		// const email = res.get('email');
		// const message = res.get('message');
		// console.log(formdata);
		return {
			success: true,
			formdata
		};
	}
};
