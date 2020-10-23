import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 576px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    max-width: 768px;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    max-width: 992px;
  }

  /* /xtra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`
