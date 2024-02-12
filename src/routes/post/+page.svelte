<script>
	export let data;
</script>

<div class="flex flex-col p-2">
	<h1 class="text-4xl">Post new blog</h1>

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
