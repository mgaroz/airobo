<script>
	import Card from '$lib/components/Card.svelte';

	let items = [
		{
			id: 'card-1',
			title: 'Quickly discover the meeting insights that matter the most',
			description:
				'Without humans, technology solves nothing. We match technology with humans needs.'
		},
		{
			id: 'card-2',
			title: 'Elevate webinar experiences for any audience',
			description:
				'Without humans, technology solves nothing. We match technology with humans needs.'
		},
		{
			id: 'card-3',
			title: 'Personalize virtual appointments with customers',
			description:
				'Without humans, technology solves nothing. We match technology with humans needs.'
		},
		{
			id: 'card-4',
			title: 'Protect confidential information with additional controls',
			description:
				'Without humans, technology solves nothing. We match technology with humans needs.'
		}
	];
</script>

<section
	id="results"
	class="from-blue-violet-500 via-boston-blue-500 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] to-[#52758e] px-14 pb-28 pt-10"
>
	<div class="flex items-center justify-center pb-16 text-center text-[44px] font-bold">
		<h2>Get results in <br /> your team work</h2>
	</div>
	<div class="flex justify-between gap-6 border-t-2">
		{#each items as item}
			<Card {item} />
		{/each}
	</div>
</section>
