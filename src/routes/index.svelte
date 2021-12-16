<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page, fetch, session, stuff }) {
		const url = '/api/storefront';
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					storefront: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	import type { storefrontObj } from 'src/interfaces';

	export let storefront: storefrontObj;

	const storefrontCard1 = `background-image: url(${storefront.data[0].image.md});`;
	const storefrontCard2 = `background-image: url(${storefront.data[1].image.md});`;
</script>

<title>77Z Shop</title>

<a sveltekit:prefetch href="/item/{storefront.data[0].id}">
	<div class="skeleton-container" style={storefrontCard1}>
		<div class="skle-bottom">
			<h3>{storefront.data[0].name}</h3>
			<p>{storefront.data[0].excerpt}</p>
		</div>
	</div>
</a>

<a sveltekit:prefetch href="/item/{storefront.data[1].id}">
	<div class="skeleton-container sk-right" style={storefrontCard2}>
		<div class="skle-bottom">
			<h3>{storefront.data[1].name}</h3>
			<p>{storefront.data[1].excerpt}</p>
		</div>
	</div>
</a>

<style>
	.skeleton-container {
		box-shadow: 0 0 10px #111;
		width: 49%;
		height: 30vw;
		border-radius: 10px;
		float: left;
		margin-bottom: 20px;
		position: relative;
		cursor: pointer;
		transition: 0.3s;
		color: #fff;

		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.skeleton-container:hover {
		transform: translateY(-10px);
	}

	.skle-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #333;
		height: 20%;
		box-sizing: border-box;
		padding-left: 20px;
		border-radius: 10px;
	}

	.sk-right {
		float: right;
	}
</style>
