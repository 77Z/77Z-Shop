<script lang="ts">
	import Header from '../components/Header.svelte';
</script>

<Header />

<div class="content">
	<slot />
</div>

<style>
	.content {
		margin-top: 70px;
	}
</style>
