import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;

  h1 {
    font-size: 2.5rem;
    line-height: 32px;
    margin-top: 30px;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 2rem;
    line-height: 32px;
  }

  p {
    font-size: 1.5rem;
  }

  blockquote {
    color: var(--highlight);
  }
`

export const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin: 20px 0;

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #cecece 0%,
      #edeef1 20%,
      #cecece 40%,
      #cecece 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const ImageWrapper = styled.div`
  > div {
    width: 600px !important;
    border-radius: 8px !important;

    @media screen and (max-width: 600px) {
      width: 100% !important;
    }

    img {
      object-fit: cover;
      border-radius: 8px !important;
    }
  }
`
