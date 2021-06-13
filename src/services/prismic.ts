import Prismic from '@prismicio/client'
import config from '../../env.config'

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(config.PRISMIC_ENDPOINT, {
    req,
    accessToken: config.PRISMIC_ACCESS_TOKEN,
  })

  return prismic
}
