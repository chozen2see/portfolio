import { ContentfulClient } from 'react-contentful';

// Contentful Connection
export const contentfulClient = new ContentfulClient({
  accessToken: process.env.REACT_APP_API_TOKEN,
  space: process.env.REACT_APP_SPACE_ID
});

// Get navigation data from contentful
export const getContentfulNav = async () => {
  // put in id of entry and get all data associated with it
  const data = await contentfulClient.getEntry('4qfI5tQxwvXrvr9Pew3TuY');
  return data;
}

// Get navigation data from contentful
export const getContentfulHomepage = async () => {
  // put in id of entry and get all data associated with it
  // send an object with entryId and how many nested levels of the object to include upon return
  const data = await contentfulClient.getEntry({ entryId: '3joaFa61x7gJAaAMtqgQ09', include: 3 });
  return data;
}