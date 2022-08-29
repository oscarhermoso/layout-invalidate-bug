<script>
	import { invalidate } from '$app/navigation';

	/** @type {import('./$types').PageData} */
	export let data;

	async function doInvalidate() {
		await invalidate();
		console.log('Invalidated');
	}
</script>

<div>
	Page load counter: {data.page}
</div>

<button on:click={doInvalidate}>Invalidate</button>

<style>
	div {
		background-color: lavender;
	}
</style>
