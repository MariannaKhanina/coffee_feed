<script lang="ts">
	import { slide } from 'svelte/transition';
	import Image from './Image.svelte';
	import { quintOut } from 'svelte/easing';

	export let image: string;
	export let intensifier: string;
	export let origin: string = '';
	export let name: string;
	export let variety: string = '';
	export let notes: string[] = [];
</script>

<article transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}>
	<Image src={image} alt={name} />

	<span>{intensifier}</span>
	<h3>{origin}</h3>
	<h2>{name}</h2>
	<p>{variety}</p>
	<ul>
		{#each notes as note}
			<li>{note}</li>
		{/each}
	</ul>
</article>
