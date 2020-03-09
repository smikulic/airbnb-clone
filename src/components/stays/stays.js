import React from 'react'
import styled from '@emotion/styled'
import Places from '../places/places'

const StaysStyl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
`
const HeadlineStyl = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`
const SubHeadlineStyl = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 1rem;
`

function Stays({ places }) {
  const numberOfPlaces = places.length

  if (numberOfPlaces === 0) {
    return (
      <StaysStyl>
        <HeadlineStyl>Travel the world with us</HeadlineStyl>
        <HeadlineStyl>Top-rated places to stay</HeadlineStyl>
        <SubHeadlineStyl>Top-rated places to stay</SubHeadlineStyl>
      </StaysStyl>
    )
  }

  return (
    <StaysStyl>
      <HeadlineStyl>
        {numberOfPlaces}+ places to stay
      </HeadlineStyl>
      <Places places={places} />
    </StaysStyl>
  )
}

export default Stays
