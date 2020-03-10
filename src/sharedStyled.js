import styled from '@emotion/styled'

export const ImageStyl = styled.div`
  padding-top: 66.6667%;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-size: cover;
`
