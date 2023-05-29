<script>
	import { onMount } from 'svelte';

	let ingredients = [];

	onMount(async () => {
		const response = await fetch('./IngredientsTest.json');
		const data = await response.json();
		ingredients = data.ingredients;
	});

	function getButtonClass(category) {
		return `bg-${category === 'dairy' ? 'yellow' : 'gray'}-500 text-black rounded p-2`;
	}
</script>

<div class="flex flex-col items-center">
	<input class="border rounded p-2 my-4" type="text" placeholder="Search for ingredients" />
	<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
		{#each ingredients as ingredient}
			<button class={getButtonClass(ingredient.category)}>
				{ingredient.name}
			</button>
		{/each}
	</div>
</div>
