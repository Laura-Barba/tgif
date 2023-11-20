import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, 
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, 
  });

export async function getPageBySlug(slug) {
  const response = await client.getEntries( {
    content_type: "standardPage",
    'fields.slug': slug,
    include: 10,

  });

  return response?.items?.[0];
}

export async function getPageById(id) {

  // const response = await client.getEntries( {
  //   content_type: "home",
  //   include: 10,
  // });
  const response = await client.getEntry('mpCZ7r0fePr6NVGxWGE6G')
  console.log('getPageById', response)
  return response;
}