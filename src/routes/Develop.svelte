<script>
	import image1 from '$lib/img/robotdevelop.webp';
	import image2 from '$lib/img/catrobotdevelopf.webp';
</script>

<section
	id="develop"
	class="pb-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-violet-500 via-boston-blue-500 to-[#52758e]"
>
	<div class="flex justify-between pb-20 px-14">
		<div>
			<h2 class="text-[44px] font-bold">The Develop- <br />ment of AI</h2>
		</div>
		<div class="max-w-md flex items-center">
			<p class="text-xl">
				Without humans, technology solves nothing. We match technology with humans needs.
			</p>
		</div>
	</div>
	<div class="flex gap-10 pl-14 overflow-hidden">
		<div class="flex flex-col min-w-[905px] gap-6">
			<div>
				<img src={image1} alt="robot develop" class="w-full" />
			</div>
			<div class="flex justify-between uppercase">
				<p>Without humans, technology solves nothing</p>
				<p>/ 2023</p>
			</div>
			<div class="border-b-2 border-b-white/40" />
		</div>
		<div class="flex flex-col min-w-[905px] gap-6">
			<div class="object-cover h-full">
				<img src={image2} alt="catrobot develop" class="h-full" />
			</div>
			<div class="flex justify-between uppercase">
				<p>Without humans, technology solves nothing</p>
				<p>/ 2023</p>
			</div>
			<div class="border-b-2 border-b-white/40" />
		</div>
	</div>
</section>
