<script lang="ts">
	import { page } from '$app/stores';
	import type { itemObject } from 'src/interfaces';
	import { onMount } from 'svelte';
	import Button from '../../components/Button.svelte';
	// Can't use load because we get the item id from the slug

	const itemId = $page.params.itemslug;
	let itemData: itemObject;

	onMount(async () => {
		const itemPage = document.getElementById('item-page') as HTMLDivElement;
		const imagePreview = document.getElementById('imagePreview') as HTMLImageElement;
		const itemTitle = document.getElementById('item-title') as HTMLSpanElement;
		await fetch(`/api/item/${itemId}`)
			.then((r) => r.json())
			.then((data) => {
				itemData = data;
			})
			.then(readyToShow);

		function readyToShow() {
			itemPage.classList.remove('loading');
			document.title = `77Z Shop -- ${itemData.name}`;
			itemTitle.innerText = itemData.name;
			imagePreview.style.backgroundImage = `url(${itemData.image.lg})`;
		}
	});
</script>

<title>77Z Shop</title>

<div class="item-contents loading" id="item-page">
	<div class="image" id="imagePreview" />
	<div class="content">
		<span class="item-title" id="item-title" />
		<Button>Add to Cart</Button>
	</div>
</div>

<style>
	.item-contents {
		height: 500px;
		position: relative;
		border-radius: 10px;
	}

	.image {
		position: absolute;
		height: 100%;
		width: 35%;
		top: 0;
		left: 0;
		border-radius: 10px 0 0 10px;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.content {
		position: absolute;
		height: 100%;
		width: 64%;
		top: 0;
		left: 36%;
	}

	.item-title {
		font-size: 20pt;
	}
</style>
