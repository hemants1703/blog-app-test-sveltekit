import { posts } from '$lib/data';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const title = data.get('title');
        const slug = data.get('slug');
        const content = data.get('content');

        const post = {
            title,
            slug,
            html: content,
        }
        
        posts.push(post);

        return {
            status: 200,
            message: 'Post added successfully',
        }
    }
}