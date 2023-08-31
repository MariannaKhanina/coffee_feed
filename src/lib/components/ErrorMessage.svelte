<script lang="ts">
	export let error: Error;
</script>

<div class="error-message">
	{error.message}
</div>

<style lang="less">
	.error-message {
		color: white;

		text-align: center;
	}
</style>
