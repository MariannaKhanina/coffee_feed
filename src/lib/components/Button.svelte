<script lang="ts">
	import Loader from './Loader.svelte';
	export let text: string;
	export let loading: boolean = true;
</script>

<button on:click disabled={loading}>
	{#if loading}
		<Loader />
	{:else}
		{text}
	{/if}
</button>

<style lang="less">
	@import '../../variables.less';

	@button_width: 3rem;
	@button_height: @button_width;

	button {
		color: white;
		font-size: 1.5rem;
		font-weight: 500;

		background-color: @red;
		border: 0;
		border-radius: calc(@button_width / 2);

		width: @button_width;
		height: @button_height;

		&:disabled {
			opacity: 0.8;
		}
	}
</style>
