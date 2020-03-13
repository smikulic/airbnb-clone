import React from 'react'
import styled from '@emotion/styled'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Places from '../places/places'

const StaysStyl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem 4rem;
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

const READ_PLACES = gql`
  query places($searchTerm: String) {
    getPlaces(search: $searchTerm) {
        places {
            name
            beds
            price
            rating
            details
            imageUrl
        }
        count
    }
  }
`;

function Stays({ searchTerm }) {
  const { data, loading, error } = useQuery(READ_PLACES, {
    variables: { searchTerm: searchTerm },
  })

  if (loading) {
    return <StaysStyl><HeadlineStyl>loading...</HeadlineStyl></StaysStyl>
  }
  if (!data || data.getPlaces.places === 0) {
    return (
      <StaysStyl>
        <HeadlineStyl>Travel the world with us</HeadlineStyl>
        <HeadlineStyl>Top-rated places to stay</HeadlineStyl>
        <SubHeadlineStyl>Top-rated places to stay</SubHeadlineStyl>
      </StaysStyl>
    )
  }
  if (error) return <p>ERROR</p>

  const places = data.getPlaces.places
  const numberOfPlaces = data.getPlaces.count

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
