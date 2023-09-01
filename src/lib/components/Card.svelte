<script lang="ts">
	import { scale, slide } from 'svelte/transition';
	import Image from './Image.svelte';
	import { quintOut } from 'svelte/easing';

	let clazz: string = '';
	export { clazz as class };

	export let image: string;
	export let intensifier: string;
	export let origin: string = '';
	export let name: string;
	export let variety: string = '';
	export let notes: string[] = [];

	let classes = ['card', clazz].join(' ');
</script>

<article class={classes} in:scale>
	<div class="image-container">
		<Image src={image} alt={name} />
	</div>

	<span class="intensifier">
		{intensifier}
	</span>
	<div class="content">
		<h3 class="origin">{origin}</h3>
		<h2 class="name">{name}</h2>
		<p class="variety">{variety}</p>
	</div>

	<ul class="notes">
		{#each notes as note}
			<li class="note">{note}</li>
		{/each}
	</ul>
</article>

<style lang="less">
	@import '../../variables.less';

	@content-horizontal-padding: 1rem;

	.card {
		background: white;

		padding-bottom: 1rem;

		position: relative;
		overflow: hidden;

		.image-container {
			display: flex;
			height: @card_width;

			overflow: hidden;

			@media @tablet {
				height: @card_width_tablet;
			}

			@media @mobile {
				height: @card_width_mobile;
			}

			:global(.image) {
				align-items: center;
				width: 100%;
			}
		}

		.intensifier {
			color: white;
			font-weight: 400;

			box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
			border-radius: 0.5rem;
			background-color: rgba(0, 0, 0, 0.2);

			position: absolute;
			right: 0.5rem;
			top: 0.5rem;

			padding: 0 0.1rem;
		}

		.content {
			padding: 0.5rem @content-horizontal-padding;
		}

		.origin {
			color: #a1a1a1;
			font-size: 0.8rem;
			font-weight: 300;

			margin: 0;
		}

		.name {
			font-size: 1.1rem;

			margin: 0.2rem 0 0.3rem;
		}

		.variety {
			font-size: 0.8rem;

			margin: 0;
		}

		.notes {
			list-style: none;

			display: flex;
			margin: 0.5rem 0 0 @content-horizontal-padding;
			padding: 0;

			overflow-x: scroll;

			cursor: all-scroll;

			&::-webkit-scrollbar {
				display: none;
			}
		}

		.note {
			font-size: 0.7rem;

			text-align: center;
			white-space: nowrap;

			background-color: @grey;
			padding: 0.2rem;
			margin: 0 0.2rem 0 0;
			min-width: 5rem;
			border-radius: 0.2rem;

			user-select: none;

			&:nth-child(4n + 1) {
				background-color: @light_yellow;
			}

			&:nth-child(4n + 2) {
				background-color: @light_green;
			}

			&:nth-child(4n + 3) {
				background-color: @brown;
				color: white;
			}
		}
	}
</style>
