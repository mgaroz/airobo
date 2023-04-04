<script>
	import image1 from '$lib/img/dogrobot.webp';
	import image2 from '$lib/img/catrobot.webp';
	import minilogo from '$lib/img/ai.svg';
</script>

<section
	id="showcase"
	class="from-blue-violet-500 via-boston-blue-500 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] to-[#52758e] pb-28"
>
	<div class="px-14">
		<div class="flex">
			<div class="flex w-2/5 items-center justify-center border-[3px] bg-white/20 backdrop-blur-sm">
				<h2 class="text-[40px] font-bold">Create <br /> Communicate <br /> & code</h2>
			</div>
			<div class="w-2/5 border-y-[3px]">
				<img loading="lazy" src={image1} alt="dog robot" class="w-full" />
			</div>
			<div class="flex w-1/5 items-center justify-center border-[3px] bg-white/20 backdrop-blur-sm">
				<h2 class="font-regular text-5xl">Built <br /> -in AI</h2>
			</div>
		</div>
		<div class="flex">
			<div class="w-[44%] border-x-[3px] border-b-[3px]">
				<img loading="lazy" src={image2} alt="cat robot" class="w-full" />
			</div>
			<div
				class="flex w-[28%] flex-col justify-center gap-14 border-b-[3px] bg-white/20 px-20 backdrop-blur-sm"
			>
				<img loading="lazy" src={minilogo} alt="ai logo" class="h-14 w-14" />
				<p class="text-xl">
					Radically accelerate your productivity with AI features built directly into Microsoft
					tools and services.
				</p>
			</div>
			<div
				class="bg-boston-blue-800 flex w-[28%] items-center justify-center border-x-[3px] border-b-[3px]"
			>
				<h2 class="font-regular text-xl uppercase tracking-wider">+ GET <br /> Started</h2>
			</div>
		</div>
	</div>
</section>
