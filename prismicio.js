import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from './slicemachine.config.json'
 
export const  { repositoryName } = sm;
 
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'home_page':
      return '/'
    case 'works':
      return '/works'
    case 'works_child':
      return `/${doc.uid}`
    default:
      return null
  }
}
 
export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, config)
 
  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })
 
  return client
}