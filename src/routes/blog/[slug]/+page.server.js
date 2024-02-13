import { error } from "@sveltejs/kit";
import { posts } from "$lib/data";

export function load({ params }) {
    const post = posts.find(post => post.slug === params.slug);

    if(!post) throw error(404, 'Post not found');

    return {
        post
    };
}