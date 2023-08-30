<script lang="ts">
	import Image from './Image.svelte';

	export let intensifier: string;
	export let origin: string = '';
	export let name: string;
	export let variety: string = '';
	export let notes: string[] = [];
</script>

<article>
	<Image src="https://loremflickr.com/500/500/coffee_bean" alt="Coffe image" />

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
