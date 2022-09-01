import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { NextSeo } from 'next-seo'

import * as S from './styles'

interface PageProps {
  id: string
  slug: string
  heading: string
  body: {
    html: string
  }
}

interface PageTemplateProps {
  page: PageProps
}

export const PageTemplate = ({ page }: PageTemplateProps) => {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places I have visited and would like to visit in the future."
        canonical="https://my-trips.willianjusten.com.br"
        openGraph={{
          url: 'https://my-trips.willianjusten.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places I have visited and would like to visit in the future.',
          site_name: 'My Trips'
        }}
      />

      <S.Content>
        <LinkWrapper href="/">
          <CloseOutline size={32} />
        </LinkWrapper>

        <S.Heading>{page.heading}</S.Heading>

        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
        </S.Body>
      </S.Content>
    </>
  )
}
