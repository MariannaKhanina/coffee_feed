<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { coffeeList, updateCoffeeList } from "$lib/store";

	async function addItem() {
		await updateCoffeeList();
	}
</script>

<svelte:head>
	<title>Coffee Feed</title>
	<meta name="description" content="An endless source of knowledge about coffee" />
</svelte:head>

{#each $coffeeList as item}
	<Card
		image={item.image || ''}
		intensifier={item.intensifier}
		origin={item.origin}
		name={item.blend_name}
		variety={item.variety}
		notes={item.notes.split(', ')}
	/>
{:else}
	<div>Данные не найдены</div>
	{/each}

<button on:click={addItem}> + </button>
