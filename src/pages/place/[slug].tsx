import client from 'graphql/client'
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery,
  Place as PlaceType
} from 'graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { PlaceTemplate } from 'templates/Place'

interface PlaceProps {
  place: PlaceType
}

export default function Place({ place }: PlaceProps) {
  return <PlaceTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    variables: {
      first: 20
    }
  })

  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) {
    return { notFound: true }
  }

  return {
    revalidate: 60,
    props: {
      place
    }
  }
}
