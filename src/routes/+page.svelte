<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import ErrorMessage from '$lib/components/ErrorMessage.svelte';
	import { coffeeList, updateCoffeeList, loadingStatus, error } from '$lib/store';
	import { LoadingStatusEnum } from '$lib/types';
	import { scrollToBottom } from '$lib/utils';

	async function addItem() {
		await updateCoffeeList();
		setTimer();
	}

	let timer: ReturnType<typeof setInterval>;

	function setTimer() {
		clearTimeout(timer);
		timer = setTimeout(async () => {
			await addItem();
		}, 30000);
	}

	setTimer();

	let isLoading: boolean = false;

	loadingStatus.subscribe((value) => {
		isLoading = value == LoadingStatusEnum.loading;
	});
</script>

<svelte:head>
	<title>Coffee Feed</title>
	<meta name="description" content="An endless source of knowledge about coffee" />
</svelte:head>

{#if $error}
	<ErrorMessage error={$error} />
{:else}
	<div use:scrollToBottom={$coffeeList} class="cards">
		{#each $coffeeList as item}
			<Card
				class="card"
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
		<div class="button-container">
			<Button text="+" on:click={addItem} loading={isLoading} />
		</div>
	</div>
{/if}

<style lang="less">
	@import '../variables.less';
	.cards {
		display: flex;
		flex-wrap: wrap;
		overflow: auto;
		max-height: @cards_max_height;

		@media @mobile {
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			max-height: @cards_max_height_mobile;
		}

		&::-webkit-scrollbar {
			width: 5px;
		}

		&::-webkit-scrollbar-track {
			background: white;
			border-radius: 5px;
		}
		&::-webkit-scrollbar-thumb {
			background-color: @red;
			border-radius: 5px;
		}

		:global(.card) {
			width: @card_width;
			margin: 0 @card_horizontal_margin 1.5rem;

			@media @tablet {
				width: @card_width_tablet;
			}

			@media @mobile {
				width: @card_width_mobile;
			}
		}
	}

	.button-container {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		width: @card_width;
		min-height: @button_container_min_height;
		margin: 0 @card_horizontal_margin 1.5vw;

		@media @tablet {
			width: @card_width_tablet;
			margin-left: @card_horizontal_margin_tablet;
			margin-right: @card_horizontal_margin_tablet;
		}

		@media @mobile {
			width: @card_width_mobile;
		}
	}
</style>
