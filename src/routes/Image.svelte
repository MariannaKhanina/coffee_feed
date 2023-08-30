<script lang="ts">
	import { onMount } from 'svelte';
	export let src: string;
	export let alt: string = '';

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			console.log('onload');
			loading = false;
			loaded = true;
		};

		img.onerror = () => {
			console.log('onerror');
			loading = false;
			failed = true;
		};

		console.log('loaded', loaded);
	});
</script>

{#if loaded}
	<img {src} {alt} />
{:else if loading}
	<!-- TODO: добавить лоадер -->
	<div>Loading...</div>
{:else if failed}
	<!-- TODO: добавить отображение ошибки или плейсхолдера -->
	<div>Loading error...</div>
{/if}
