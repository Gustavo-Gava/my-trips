import client from 'graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from 'graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import { PageTemplate } from 'templates/Pages'

interface PageResponseProps {
  id: string
  slug: string
  heading: string
  body: {
    html: string
  }
}

interface PageProps {
  data: PageResponseProps
}

export default function Page({ data }: PageProps) {
  const router = useRouter()

  console.log(data)

  if (router.isFallback) return <div>Loading...</div>

  return <PageTemplate page={data} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      data: page
    }
  }
}
