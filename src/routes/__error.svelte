<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				title: `${status} ${error.message}`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<title>77Z Shop Error</title>
<h1>{title}</h1>
