<script lang="ts">
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Post', href: '/post' },
        { name: 'Table', href: '/table' },
    ];

    const toggleDarkMode = () => {
    	document.body.classList.toggle("dark-mode");
	};
</script>

<nav
			class="flex bg-slate-50 bg-opacity-50 backdrop-blur-lg p-1 rounded-full border-2 shadow-md"
		>
        {#each navItems as navItem}
            <a href={navItem.href} class="px-2 py-0.5 hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-full">{navItem.name}</a>
        {/each}
			<button on:click={toggleDarkMode}>Toggle Dark Mode</button>
</nav>