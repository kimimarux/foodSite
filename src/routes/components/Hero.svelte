<script>
	import Robot from '../../images/robot.png';
</script>

<div class="min-h-screen flex items-center pb-24">
    <div class="flex flex-col lg:flex-row-reverse items-center w-full">
        <img
            src={Robot}
            alt="cooking robot"
            class="transform hover:-translate-y-5 transition duration-500 hidden lg:block"
        />
        <div class="lg:mr-10">
            <h1 class="text-5xl lg:text-7xl font-bold">Greetings, HUMAN!</h1>
            <p class="py-6 text-left text-2xl lg:text-3xl font-semibold">
                Welcome to RoboChef, the website where a little funny robot cooks a recipe for you based on
                your ingredients. Whether you want to use up what's in your fridge, or try something new and
                exotic, RoboChef will surprise you with a delicious dish. Just type or select the
                ingredients you have or want, and let RoboChef do the magic.
            </p>
            <a
                class="inline-block px-6 py-3 rounded bg-green-600 text-xl font-bold text-white hover:bg-indigo-700 transition duration-300"
                href="/1"
            >
                Let's make a Recipe
            </a>
        </div>
    </div>
</div>