<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<div>
	Layout load counter: {data.layout}
</div>

<slot />

<style>
	div {
		background-color: lightgrey;
	}
</style>
