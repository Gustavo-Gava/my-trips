import { Place } from 'graphql/generated/graphql'
import * as S from './styles'

import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { useRouter } from 'next/dist/client/router'

interface PlaceTemplateProps {
  place: Place
}

export const PlaceTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <S.Container>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <h1>{place.name}</h1>

      {place.description && (
        <div
          dangerouslySetInnerHTML={{ __html: place.description?.html }}
        ></div>
      )}

      <S.Gallery>
        {place.gallery.map((image) => (
          <S.ImageWrapper key={image.id}>
            <Image
              src={image.url}
              width={image.width ?? 150}
              height={image.height ?? 150}
              alt={image.locale}
            />
          </S.ImageWrapper>
        ))}
      </S.Gallery>
    </S.Container>
  )
}
