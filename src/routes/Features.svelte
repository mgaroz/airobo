<script>
	import robocat from '$lib/img/robocat.webp';
</script>

<section
	id="features"
	class="px-14 pb-28 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] to-blue-violet-500 via-boston-blue-500 from-[#52758e]"
>
	<div
		class="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] border-[3px] max-h-[800px]"
	>
		<div
			class="col-span-2 row-span-1 border-b-[3px] border-r-[3px] px-16 py-12 flex items-center justify-center backdrop-blur-sm bg-white/20"
		>
			<h2 class="text-[40px] font-bold">Rebirths <br /> on Earth,</h2>
		</div>
		<div
			class="col-span-1 row-span-1 border-b-[3px] flex justify-center items-center px-16 backdrop-blur-sm bg-white/20"
		>
			<p class="text-xl">Mythological character built with AI with such an amazing look</p>
		</div>
		<div
			class="col-span-1 row-span-2 border-b-[3px] border-l-[3px] flex items-center justify-center backdrop-blur-sm bg-white/20"
		>
			<h2 class="text-5xl">Built<br />-in AI</h2>
		</div>
		<div class="col-span-3 row-span-3">
			<img src={robocat} alt="Cat robot" class="object-cover h-full object-center" />
		</div>
		<div
			class="col-span-1 row-span-2 border-l-[3px] flex items-center justify-center bg-boston-blue-800"
		>
			<h2 class="uppercase font-regular tracking-wider text-xl">+ GET <br /> Started</h2>
		</div>
	</div>
</section>
