import  SanityClient  from "@sanity/client";
import  imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
    projectId: '70jqroyi',
    dataset: 'production',
    apiVersion: '2023-03-10',
    useCdn: 'true',
    ignoreBrowserTokenWarning: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);