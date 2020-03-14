import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { StaysStyl, HeadlineStyl } from '../sharedStyledComponents'
import Stays from '../components/stays/stays'

const READ_PLACES = gql`
  query places($searchTerm: String) {
    getPlaces(search: $searchTerm) {
        places {
            name
            beds
            city
            price
            rating
            details
            imageUrl
        }
        count
    }
  }
`;

function StaysContainer({ searchTerm }) {
  const { data, loading, error } = useQuery(READ_PLACES, {
    variables: { searchTerm: searchTerm },
  })

  if (loading) {
    return <StaysStyl><HeadlineStyl>loading...</HeadlineStyl></StaysStyl>
  }
  if (!data) {
    return <p>No data</p>
  }
  if (error) return <p>ERROR</p>

  const places = data.getPlaces.places
  const numberOfPlaces = data.getPlaces.count
  const searchedCity = places[0].city
  const isSearched = searchTerm

  return (
    <Stays
      places={places}
      numberOfPlaces={numberOfPlaces}
      searchedCity={searchedCity}
      isSearched={isSearched}
    />
  )
}

export default StaysContainer
