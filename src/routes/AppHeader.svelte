<header>
	<h1>Coffee feed</h1>
</header>

<style lang="less">
	@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
	@import '../variables.less';

	header {
		color: white;
		font-size: 4.2vw;
		font-family: 'Courgette', cursive;

		height: @header_height;
		display: flex;
		align-items: center;
		justify-content: center;

		@media @mobile {
			height: @header_height_mobile;
		}

		h1 {
			margin: 0;
			text-align: center;
		}
	}
</style>
