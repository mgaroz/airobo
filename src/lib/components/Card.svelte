<script>
	/**
	 * @type {any}
	 */
	export let item;
</script>

<div id={item?.id} class="box border-x-2 flex flex-col gap-10 px-12 py-10">
	<h3 class="text-[18px] font-bold">
		{item?.title}
	</h3>
	<p class="text-[1rem] leading-6">
		{item?.description}
	</p>
</div>

<style>
	.box {
		border-image: linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 1 100%;
	}
</style>
