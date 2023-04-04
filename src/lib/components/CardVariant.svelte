<script>
	/**
	 * @type {any}
	 */
	export let item;
</script>

<div class="border-t-2 w-1/3">
	<div id={item.id} class="box border-x-2">
		<div class="flex flex-col">
			<img src={item.img} alt={item.img_description} />
			<div class="bg-white/20 backdrop-blur-sm px-12 py-9 min-h-[200px]">
				<h3 class="text-[26px] font-bold">{item.text}</h3>
			</div>
		</div>
	</div>
</div>

<style>
	.box {
		border-image: linear-gradient(to bottom, white, rgba(0, 0, 0, 0)) 1 100%;
	}
</style>
