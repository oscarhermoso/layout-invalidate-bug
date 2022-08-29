let counter = 0;

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	console.log('Layout reload');
	return {
		layout: counter++
	};
}
