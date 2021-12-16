<script lang="ts">
	import { fly } from 'svelte/transition';

	let ready = 0;

	setTimeout(() => {
		ready = 1;
	}, 1000);
</script>

<header>
	{#if ready}
		<a
			class="title title-font"
			href="/"
			sveltekit:prefetch
			transition:fly={{ y: 50, duration: 1000 }}>77Z Shop</a
		>
	{/if}

	<a class="cart" sveltekit:prefetch href="/cart">Cart</a>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background: #222;
	}

	.title {
		position: fixed;
		top: 5px;
		left: 0;
		width: 100%;
		font-size: 30px;
		text-align: center;
		color: #fff;
		text-decoration: none;
	}

	.cart {
		position: fixed;
		right: 10px;
		top: 10px;
		color: #fff;
		text-decoration: none;
	}
</style>
