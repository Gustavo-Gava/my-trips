import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

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
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{page.heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
      </S.Body>
    </S.Content>
  )
}
