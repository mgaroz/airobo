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
		class="min-h-screen flex items-start justify-between bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-violet-500 via-boston-blue-500 to-[#52758e] px-14 pt-[88px] gap-20 pb-28"
	>
		<div id="left" class="flex gap-16 flex-col w-1/6 min-h-screen">
			<div id="logo" class="text-4xl font-bold">AiRobo</div>
			<div id="nav">
				<ul class="flex gap-6 flex-col text-[18px] text-white/70">
					<li>Home</li>
					<li>Platform</li>
					<li>Company</li>
					<li>Products</li>
					<li>Resources</li>
				</ul>
			</div>
			<div id="tech" class="flex flex-col gap-12">
				<h2 class="text-2xl">Our Technologies</h2>
				<div class="inline-block">
					<span class="text-white/50 text-[14px]">01/</span>
					<div class="inline-block w-[85%]">
						<div class="border-b-2 border-white/60 flex justify-between items-center">
							<p class="text-xl inline-block">Rillcuy</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-5 h-5 inline-block"
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
					<span class="text-white/50 text-[14px]">02/</span>
					<div class="inline-block w-[85%]">
						<div class="border-b-2 border-white/60 flex justify-between items-center">
							<p class="text-xl inline-block">Mdituru</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-5 h-5 inline-block"
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
					<span class="text-white/50 text-[14px]">03/</span>
					<div class="inline-block w-[85%]">
						<div class="border-b-2 border-white/60 flex justify-between items-center">
							<p class="text-xl inline-block">Kockgmg</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-5 h-5 inline-block"
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
			<div id="footer" class="flex min-h-full justify-between items-end flex-1">
				<!-- <div class="flex items-start justify-center h-full"> -->
				<p class="-rotate-90 inline-block -translate-y-[150px]">Scroll down</p>
				<!-- </div> -->
				<div>
					<p class="text-xl">Into AI <br /> better life <br /> services</p>
				</div>
			</div>
		</div>
		<div id="center" class="w-3/6">
			<div class="w-full">
				<h1 class="text-8xl uppercase font-sans font-bold z-10 relative inline-block left-[11%]">
					Let's <br /> improve <br /> your life
				</h1>
			</div>
			<img src={heroImage} alt="robot" class="-mt-8" />
		</div>
		<div id="right" class="w-1/6 flex flex-col gap-16">
			<button
				class="uppercase rounded-full bg-transparent border px-12 py-5 mb-96 font-sans font-bold whitespace-nowrap hover:bg-white hover:text-boston-blue-800 transition-colors duration-200"
				>Get Started</button
			>
			<div id="chips">
				<div>
					<p class="bg-white rounded-full text-black inline-block px-4 py-1">robotics</p>
					<p class="bg-boston-blue-800 rounded-full inline-block px-4 py-1">automation</p>
				</div>
				<div>
					<p class="bg-boston-blue-800 rounded-full inline-block px-4 py-1">technology</p>
					<p class="bg-white rounded-full text-black inline-block px-4 py-1">2023</p>
				</div>
				<div>
					<p class="bg-white rounded-full text-black inline-block px-4 py-1">real time</p>
					<p class="bg-boston-blue-800 rounded-full inline-block px-4 py-1">rebrand</p>
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
