<script>
	import CardVariant from '$lib/components/CardVariant.svelte';
	import image1 from '$lib/img/resim1.webp';
	import image2 from '$lib/img/resim2.webp';
	import image3 from '$lib/img/resim3.webp';

	let items = [
		{
			id: 'card-1',
			img: image1,
			img_description: 'Crystall balls',
			text: 'Your data is always secure & safe'
		},
		{
			id: 'card-2',
			img: image2,
			img_description: 'Man on laptop',
			text: 'Your fine-tuned data is used to train AI only for your use'
		},
		{
			id: 'card-3',
			img: image3,
			img_description: 'Stacked shapes',
			text: 'Your data is protected at every step'
		}
	];
</script>

<section
	id="experience"
	class="to-blue-violet-500 via-boston-blue-500 bg-[radial-gradient(circle_at_center_left,_var(--tw-gradient-stops))] from-[#52758e] px-14 pb-20"
>
	<div class="flex justify-between pb-20">
		<div>
			<h2 class="text-[44px] font-bold">Experience AI<br />in action</h2>
		</div>
		<div class="flex max-w-md items-center">
			<p class="text-xl">
				Without humans, technology solves nothing. We match technology with humans needs.
			</p>
		</div>
	</div>
	<div class="flex justify-between gap-6">
		{#each items as item}
			<CardVariant {item} />
		{/each}
	</div>
</section>
