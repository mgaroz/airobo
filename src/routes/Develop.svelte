<script>
	import image1 from '$lib/img/robotdevelop.webp';
	import image2 from '$lib/img/catrobotdevelopf.webp';
</script>

<section
	id="develop"
	class="from-blue-violet-500 via-boston-blue-500 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] to-[#52758e] pb-20"
>
	<div class="flex justify-between px-14 pb-20">
		<div>
			<h2 class="text-[44px] font-bold">The Develop- <br />ment of AI</h2>
		</div>
		<div class="flex max-w-md items-center">
			<p class="text-xl">
				Without humans, technology solves nothing. We match technology with humans needs.
			</p>
		</div>
	</div>
	<div class="flex gap-10 overflow-hidden pl-14">
		<div class="flex min-w-[905px] flex-col gap-6">
			<div>
				<img loading="lazy" src={image1} alt="robot develop" class="w-full" />
			</div>
			<div class="flex justify-between uppercase">
				<p>Without humans, technology solves nothing</p>
				<p>/ 2023</p>
			</div>
			<div class="border-b-2 border-b-white/40" />
		</div>
		<div class="flex min-w-[905px] flex-col gap-6">
			<div class="h-full object-cover">
				<img loading="lazy" src={image2} alt="catrobot develop" class="h-full" />
			</div>
			<div class="flex justify-between uppercase">
				<p>Without humans, technology solves nothing</p>
				<p>/ 2023</p>
			</div>
			<div class="border-b-2 border-b-white/40" />
		</div>
	</div>
</section>
