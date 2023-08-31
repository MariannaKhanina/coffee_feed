<script lang="ts">
	import '../app.less';
	import AppHeader from './AppHeader.svelte';
</script>

<div class="main-layout">
	<AppHeader />
	<main class="main">
		<slot />
	</main>
</div>

<style lang="less">
	@import '../variables.less';

	.main-layout {
		background-color: @dark_blue;
		min-height: 100vh;

		.main {
			padding: 0 @main_horizontal_padding;
		}
	}
</style>
