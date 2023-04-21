<script>
	import heroImage from '$lib/img/hero.webp';
	import Brands from './Brands.svelte';
	import Showcase from './Showcase.svelte';
	import Develop from './Develop.svelte';
	import Results from './Results.svelte';
	import Experience from './Experience.svelte';
	import Features from './Features.svelte';
	import Footer from './Footer.svelte';
</script>

<section id="hero">
	<div
		class="from-blue-violet-500 via-boston-blue-500 flex min-h-screen items-start justify-between gap-20 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] to-[#52758e] px-14 pb-28 pt-[88px]"
	>
		<div id="left" class="flex min-h-screen flex-col gap-16 md:w-1/6">
			<div id="logo" class="text-4xl font-bold">AiRobo</div>
			<div id="nav">
				<ul class="flex flex-col gap-6 text-[18px] text-white/70">
					<li class="group"><a href="/" class="group-hover:underline">Home</a></li>
					<li class="group"><a href="#showcase" class="group-hover:underline">Platform</a></li>
					<li class="group"><a href="#develop" class="group-hover:underline">Company</a></li>
					<li class="group"><a href="#results" class="group-hover:underline">Products</a></li>
					<li class="group"><a href="#features" class="group-hover:underline">Resources</a></li>
				</ul>
			</div>
			<div id="tech" class="flex flex-col gap-12">
				<h2 class="text-2xl">Our Technologies</h2>
				<div class="inline-block">
					<span class="text-[14px] text-white/50">01/</span>
					<div class="inline-block w-[85%]">
						<div class="flex items-center justify-between border-b-2 border-white/60">
							<p class="inline-block text-xl">Rillcuv</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="inline-block h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="inline-block">
					<span class="text-[14px] text-white/50">02/</span>
					<div class="inline-block w-[85%]">
						<div class="flex items-center justify-between border-b-2 border-white/60">
							<p class="inline-block text-xl">Mditerm</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="inline-block h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div class="inline-block">
					<span class="text-[14px] text-white/50">03/</span>
					<div class="inline-block w-[85%]">
						<div class="flex items-center justify-between border-b-2 border-white/60">
							<p class="inline-block text-xl">Kraulmg</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="inline-block h-5 w-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div id="footer" class="flex min-h-full flex-1 items-end justify-between">
				<!-- <div class="flex items-start justify-center h-full"> -->
				<p class="inline-block -translate-y-[150px] -rotate-90">Scroll down</p>
				<!-- </div> -->
				<div>
					<p class="text-xl">Into AI <br /> better life <br /> services</p>
				</div>
			</div>
		</div>
		<div id="center" class="w-3/6">
			<div class="w-full">
				<h1 class="relative left-[11%] z-10 inline-block font-sans text-8xl font-bold uppercase">
					Let's <br /> improve <br /> your life
				</h1>
			</div>
			<img src={heroImage} alt="robot" class="-mt-8" />
		</div>
		<div id="right" class="flex w-1/6 flex-col gap-16">
			<button
				class="hover:text-boston-blue-800 mb-96 whitespace-nowrap rounded-full border bg-transparent px-12 py-5 font-sans font-bold uppercase transition-colors duration-200 hover:bg-white"
				>Get Started</button
			>
			<div id="chips">
				<div>
					<p class="inline-block rounded-full bg-white px-4 py-1 text-black">robotics</p>
					<p class="bg-boston-blue-800 inline-block rounded-full px-4 py-1">automation</p>
				</div>
				<div>
					<p class="bg-boston-blue-800 inline-block rounded-full px-4 py-1">technology</p>
					<p class="inline-block rounded-full bg-white px-4 py-1 text-black">2023</p>
				</div>
				<div>
					<p class="inline-block rounded-full bg-white px-4 py-1 text-black">real time</p>
					<p class="bg-boston-blue-800 inline-block rounded-full px-4 py-1">rebrand</p>
				</div>
			</div>
			<div id="description" class="flex items-end">
				<p class="text-xl">
					provides a powerful low-code platform that empowers the world's leading enterprises to
					Build for Change
				</p>
			</div>
		</div>
	</div>
</section>
<Brands />
<Showcase />
<Develop />
<Results />
<Experience />
<Features />
<Footer />
