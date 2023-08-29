<script lang="ts">
	import Card from './Card.svelte';
	import type { CoffeeListType } from './+page';

	/** @type {import('./$types').PageData} */
	export let data: CoffeeListType;
</script>

<svelte:head>
	<title>Coffee Feed</title>
	<meta name="description" content="An endless source of knowledge about coffee" />
</svelte:head>

{#each data.list as item}
	<Card
		intensifier={item.intensifier}
		origin={item.origin}
		name={item.blend_name}
		variety={item.variety}
		notes={item.notes.split(', ')}
	/>
{:else}
	<div>Данные не найдены</div>
{/each}

<button> + </button>
