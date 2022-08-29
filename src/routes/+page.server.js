let counter = 0;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	console.log('Home page reload');

	return {
		page: counter++
	};
}
