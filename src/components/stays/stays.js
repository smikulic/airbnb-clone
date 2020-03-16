import React from 'react'
import styled from '@emotion/styled'
import { shuffleArray } from '../../utilities/shuffleArray'
import { StaysStyl, HeadlineStyl } from '../../sharedStyledComponents'
import Places from '../places/places'
import WorldLIst from '../worldList/worldList'

const SubHeadlineStyl = styled.h3`
  margin: 0.2rem 0;
  font-weight: 300;
  font-size: 0.85rem;
`
const StatusStyl = styled.div`
  p {
    margin: 0;
    font-size: 0.7rem;
    padding: 1.2rem 0;
  }
  p:first-of-type {
    color: rgb(113, 113, 113);
    border-bottom: 1px solid rgb(221, 221, 221);
  }
  p:last-of-type {
    color: rgb(34, 34, 34);
    font-weight: 700;
    img {
      padding-right: 0.8rem;
      vertical-align: middle;
      width: 2rem;
    }
  }
`

function Stays({
  places,
  numberOfPlaces,
  searchedCity,
  isSearched,
  setSearchTerm,
}) {
  return (
    <StaysStyl>
      <StatusStyl>
        <p>Enter dates and number of guests to see the total price per night.</p>
        <p>
          { isSearched && (
            <>
              <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584205699/airbnb_clone/trophy_icon.png" alt="Trophy" />
              Over 130,000 guest reviews for places to stay in {searchedCity}, with an average of 4.8 out of 5 stars.
            </>
          )}
        </p>
      </StatusStyl>
      { isSearched && (
        <>
          <HeadlineStyl>{numberOfPlaces}+ places to stay</HeadlineStyl>
          <Places places={places} />
        </>
      )}
      { !isSearched && (
        <>
          <HeadlineStyl>Travel the world with us</HeadlineStyl>
          <WorldLIst setSearchTerm={setSearchTerm} />
          <HeadlineStyl>Top-rated places to stay</HeadlineStyl>
          <SubHeadlineStyl>Explore some of the best-reviewed stays in the world</SubHeadlineStyl>
          <Places places={shuffleArray(places)} limit={10} />
        </>
      )}
    </StaysStyl>
  )
}

export default Stays
