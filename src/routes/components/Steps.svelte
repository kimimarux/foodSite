<script>
	import Step1 from '../../images/step1.jpg';
	import Step2 from '../../images/step2.jpg';
	import Step3 from '../../images/step3.jpg';
</script>

<div class="wrapper">
	<div class="mb-24 lg:mt-0">
		<div class="col">
			<h2 class="text-center text-7xl font-extrabold underline">How It Works</h2>
		</div>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] grid-rows-3 gap-4">
		<div class="justify-self-center hidden lg:block">
			<img src={Step1} width="512" height="512" />
		</div>
		<div class="row-span-3 col-span-1 flex flex-col justify-center items-center relative px-4">
			<span class="lg:absolute top-0 text-center w-full">
				<span
					class="hidden lg:flex rounded-full border border-rose-500 w-12 h-12 items-center justify-center bg-rose-500 text-white font-bold -ml-1.5"
				>
					1
				</span>
			</span>
			<span class="lg:absolute top-half text-center w-full">
				<span
					class="hidden lg:flex rounded-full border border-rose-500 w-12 h-12 items-center justify-center bg-rose-500 text-white font-bold -ml-1.5"
				>
					2
				</span>
			</span>

			<span class="lg:absolute bottom-0 text-center w-full">
				<span
					class="hidden lg:flex rounded-full border border-rose-500 w-12 h-12 items-center justify-center bg-rose-500 text-white font-bold -ml-1.5"
				>
					3
				</span>
			</span>
			<div class="border-r-4 border-rose-500 h-full hidden lg:flex" />
		</div>

		<div
			class="flex justify-end font-semibold text-2xl lg:text-6xl self-start bg-gray-50 lg:self-end lg:min-h-full"
		>
			<div class="flex flex-col text-left space-y-5">
				<h4 class="font-extrabold underline">Pick ingredients</h4>
				<p class="text-gray-700 font-bold text-2xl lg:text-5xl lg:leading-normal">
					Enter or choose the ingredients you want to cook with. You can be as specific or as vague
					as you like. For example, you can type “<span class="bg-pink-200">chicken</span>
					<span class="bg-yellow-400">noodles</span> <span class="bg-green-400">broccoli</span>”.
				</p>
			</div>
		</div>
		<div
			class="flex justify-start font-semibold text-2xl lg:text-6xl self-start bg-pink-100 lg:self-auto"
		>
			<div class="flex flex-col text-left space-y-5">
				<h4 class="font-extrabold underline">Get Recipe</h4>
				<p class="text-gray-700 font-bold text-2xl lg:text-5xl lg:leading-normal">
					RoboChef will generate a recipe for you using
					<span class="bg-blue-500 text-white">artificial intelligence.</span> It will tell you the name
					of the dish, the ingredients list, the cooking instructions, and the estimated time and servings.
				</p>
			</div>
		</div>
		<div class="col-start-3 justify-self-center hidden lg:block">
			<img src={Step2} width="512" height="512" />
		</div>
		<div class="justify-self-center hidden lg:block">
			<img src={Step3} width="512" height="512" />
		</div>
		<div
			class="flex justify-end font-semibold text-2xl lg:text-6xl self-start bg-stone-200 lg:self-auto"
		>
			<div class="flex flex-col text-left space-y-5">
				<h4 class="font-extrabold underline">Enjoy meal</h4>
				<p class="text-gray-700 font-bold text-2xl lg:text-5xl lg:leading-normal">
					Follow the recipe and enjoy your meal. <span class="bg-red-500 text-white">Or don’t.</span
					>
					RoboChef won’t judge you. It might even give you some tips and feedback along the way.
				</p>
			</div>
		</div>
	</div>
</div>
