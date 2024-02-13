<script>
	export let data;
</script>

<div class="mt-16">
	<h1 class="text-4xl flex justify-start items-center gap-2">
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
					d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
				/>
			</svg>
		</span>
		Post new blog
	</h1>

	{#if data && data.status === 200}
		<p class="text-green">{data.message}</p>
	{/if}

	<form class="flex flex-col gap-4 py-4" action="/post" method="POST">
		<label for="title" class="flex gap-2 justify-start items-center">
			Title:<input class="border-2 rounded-lg px-2" type="text" name="title" id="title" required />
		</label>
		<label for="slug" class="flex gap-2 justify-start items-center">
			Slug:<input class="border-2 rounded-lg px-2" type="text" name="slug" id="slug" required />
		</label>
		<label for="content" class="flex flex-col justify-start items-start">
			Type your Post:
			<textarea
				class="border-2 w-full rounded-lg px-2"
				name="content"
				id="content"
				cols="30"
				rows="10"
				required
			></textarea>
		</label>
		<input
			type="submit"
			value="Post new blog"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
            focus:outline-none focus:shadow-outline
            transition duration-150 ease-in-out
            cursor-pointer"
			id="newPostButton"
		/>
	</form>
</div>
