<script lang="ts">
	import Card from './Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let item = data.item;
</script>

<svelte:head>
	<title>Coffee Feed</title>
	<meta name="description" content="An endless source of knowledge about coffee" />
</svelte:head>

{#if item != null}
	<Card
		intensifier={item.intensifier}
		origin={item.origin}
		name={item.blend_name}
		variety={item.variety}
		notes={item.notes.split(', ')}
	/>
{:else}
	<div>Данные не найдены</div>
{/if}

<button> + </button>
