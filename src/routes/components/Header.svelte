<script>
    import Dropdown from '../plugins/Dropdown.svelte';
    import robotLogo from '../../images/robotLogo.svg';
    let dropdownOpen = false;

    function handleMenuOpen() {
        dropdownOpen = true;
        document.body.addEventListener('click', handleMenuClose);
    }

    function handleMenuClose() {
        dropdownOpen = false;
        document.body.removeEventListener('click', handleMenuClose);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            handleMenuOpen();
        }
    }

    const items = [
        { label: 'Homepage', href: '/' },
        // add more items here
    ];
</script>

<div class="sticky top-0 z-10 bg-orange-50 flex items-center p-3">
    <div class="flex items-center">
        <div class="relative">
            <button
                class="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none"
                on:click|stopPropagation={handleMenuOpen}
                on:keydown={handleKeyDown}
            >
                <img src={robotLogo} width="48" height="48" class="hover:rounded" />
            </button>
            {#if dropdownOpen}
                <Dropdown {items} />
            {/if}
        </div>
        <a
            href="/"
            class="ml-3 text-xl font-medium hover:text-white hover:bg-gray-500 hover:rounded pl-1 pr-2 py-1 rounded-md transition duration-300"
        >🍳RoboChef</a>
    </div>
</div>
