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
	class="px-14 pt-10 pb-28 bg-[radial-gradient(circle_at_center_right,_var(--tw-gradient-stops))] from-blue-violet-500 via-boston-blue-500 to-[#52758e]"
>
	<div class="flex items-center justify-center text-[44px] font-bold pb-16 text-center">
		<h2>Get results in <br /> your team work</h2>
	</div>
	<div class="flex gap-6 justify-between border-t-2">
		{#each items as item}
			<Card {item} />
		{/each}
	</div>
</section>
