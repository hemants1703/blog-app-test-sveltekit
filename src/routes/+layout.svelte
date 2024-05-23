<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="max-w-[640px] m-auto">
	<div class="flex justify-center items-center w-full mt-2">
		<Navbar />
	</div>
	<div class="flex flex-col p-2">
		<slot />
	</div>
	<div class="flex justify-center items-center w-full mt-2">
		<Footer />
	</div>
</div>
