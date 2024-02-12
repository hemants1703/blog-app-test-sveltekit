<script>
	export let data;
	console.log(data);
</script>

<h1 class="text-4xl flex items-center gap-2 p-2">
	<a href="/blog">
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
				d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
			/>
		</svg>
	</a>
	{data.post.title}
</h1>

<div class="p-4">
	<pre class="inline text-sm bg-gray-400 text-white px-2 py-0.5 rounded-lg">{data.post.slug}</pre>
	<p class="mt-4">{@html data.post.html}</p>
</div>
