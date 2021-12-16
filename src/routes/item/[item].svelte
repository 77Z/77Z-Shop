<script lang="ts">
	import { page } from '$app/stores';
	import type { itemObject } from 'src/interfaces';
	import { onMount } from 'svelte';
	// Can't use load because we get the item id from the slug

	const itemId = $page.params.item;
	let itemData: itemObject;

	onMount(async () => {
		const itemPage = document.getElementById('item-page') as HTMLDivElement;
		await fetch(`/api/item/${itemId}`)
			.then((r) => r.json())
			.then((data) => {
				itemData = data;
			})
			.then(readyToShow);

		function readyToShow() {
			itemPage.classList.remove('loading');
			document.title = `77Z Shop -- ${itemData.name}`;
			itemPage.appendChild(document.createTextNode(itemData.name));
		}
	});
</script>

<title>77Z Shop</title>

<div class="item-contents loading" id="item-page" />

<style>
	.item-contents {
		height: 500px;
	}
</style>
