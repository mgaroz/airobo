<script>
	/**
	 * @type {any}
	 */
	export let item;
</script>

<div class="w-1/3 border-t-2">
	<div id={item.id} class="box border-x-2">
		<div class="flex flex-col">
			<img loading="lazy" src={item.img} alt={item.img_description} />
			<div class="min-h-[200px] bg-white/20 px-12 py-9 backdrop-blur-sm">
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
