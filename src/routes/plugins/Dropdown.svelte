<script>
    import { fly } from 'svelte/transition';
    export let items = [];

    function handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.target.click();
        }
    }
</script>

<div
    class="absolute left-0 mt-3 p-2 shadow bg-white rounded-md w-52"
    transition:fly={{ y: -20, duration: 300 }}
>
    <ul class="space-y-2">
        {#each items as item}
            <li>
                <a
                    href={item.href}
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    on:keydown={handleKeyDown}
                >{item.label}</a>
            </li>
        {/each}
    </ul>
</div>
