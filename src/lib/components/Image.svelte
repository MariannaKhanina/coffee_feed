<script lang="ts">
	import placeholder from '../assets/placeholder.jpg';
	import { onMount } from 'svelte';
	import Loader from './Loader.svelte';
	export let src: string;
	export let alt: string = '';

	let clazz: string = '';
	export { clazz as class };

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = src;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};

		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

{#if loaded}
	<img {src} {alt} class={clazz} />
{:else if loading}
	<div class="image-loader"><Loader /></div>
{:else if failed}
	<img src={placeholder} alt="Placeholer" />
{/if}

<style lang="less">
	.image-loader {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
