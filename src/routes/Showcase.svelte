<script>
	import image1 from '$lib/img/dogrobot.webp';
	import image2 from '$lib/img/catrobot.webp';
	import minilogo from '$lib/img/ai.svg';
</script>

<section
	id="showcase"
	class="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-violet-500 via-boston-blue-500 to-[#52758e] pb-28"
>
	<div class="px-14">
		<div class="flex">
			<div class="w-2/5 border-[3px] flex items-center justify-center bg-white/20 backdrop-blur-sm">
				<h2 class="text-[40px] font-bold">Create <br /> Communicate <br /> & code</h2>
			</div>
			<div class="w-2/5 border-y-[3px]">
				<img src={image1} alt="dog robot" class="w-full" />
			</div>
			<div class="w-1/5 border-[3px] flex items-center justify-center bg-white/20 backdrop-blur-sm">
				<h2 class="text-5xl font-regular">Built <br /> -in AI</h2>
			</div>
		</div>
		<div class="flex">
			<div class="w-[44%] border-x-[3px] border-b-[3px]">
				<img src={image2} alt="cat robot" class="w-full" />
			</div>
			<div
				class="w-[28%] border-b-[3px] flex justify-center flex-col px-20 gap-14 bg-white/20 backdrop-blur-sm"
			>
				<img src={minilogo} alt="ai logo" class="h-14 w-14" />
				<p class="text-xl">
					Radically accelerate your productivity with AI features built directly into Microsoft
					tools and services.
				</p>
			</div>
			<div
				class="w-[28%] border-x-[3px] border-b-[3px] bg-boston-blue-800 flex items-center justify-center"
			>
				<h2 class="uppercase font-regular tracking-wider text-xl">+ GET <br /> Started</h2>
			</div>
		</div>
	</div>
</section>
