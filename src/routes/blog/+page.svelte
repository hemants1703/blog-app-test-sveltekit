<script>
	export let data;
</script>

<div class="mt-16">
	<h1 class="text-4xl flex items-center gap-2 pb-4">
		<span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
				/>
			</svg>
		</span>
		Blog App
	</h1>

	<div class="overflow-hidden rounded-2xl">
		{#each data.summaries as { slug, title }}
			<article class="bg-slate-200 p-4 hover:bg-slate-300 transition-all duration-100 ease-in-out">
				<a href={`blog/${slug}`} class="hover:bg-slate-300">
					<h2>{title}</h2>
				</a>
			</article>
		{/each}
	</div>
</div>
