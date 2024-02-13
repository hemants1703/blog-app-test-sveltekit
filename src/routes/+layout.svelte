<script>
	import '../app.css';
	import Footer from '$lib/Footer.svelte';
</script>

<div>
	<div class="fixed flex justify-center items-center w-full mt-2">
		<nav
			class="flex bg-slate-50 bg-opacity-50 backdrop-blur-lg p-1 rounded-full border-2 shadow-md"
		>
			<a
				href="/"
				class="px-2 py-0.5 hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-full"
				>Home</a
			>
			<a
				href="/blog"
				class="px-2 py-0.5 hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-full"
				>Blog</a
			>
			<a
				href="/post"
				class="px-2 py-0.5 hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-full"
				>Post</a
			>
			<a
				href="/table"
				class="px-2 py-0.5 hover:bg-slate-200 transition-all duration-100 ease-in-out rounded-full"
				>Table</a
			>
		</nav>
	</div>
	<div class="flex flex-col p-2">
		<slot />
	</div>
	<Footer />
</div>
