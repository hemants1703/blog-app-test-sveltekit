import { posts } from "./data";

export function load() {
    return {
        summaries: posts.map(post => {
            return {
                title: post.title,
                slug: post.slug
            }
        })
    }
}