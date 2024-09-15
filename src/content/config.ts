import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			ogImage: image().optional(),
			videoUrl: z.string().optional(),
		}),
});

export const collections = {
	blog: blogsCollection,
};
