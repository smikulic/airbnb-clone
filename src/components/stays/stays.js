import React from 'react'
import styled from '@emotion/styled'
import { shuffleArray } from '../../utilities/shuffleArray'
import { StaysStyl, HeadlineStyl } from '../../sharedStyledComponents'
import Places from '../places/places'

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
const WorldListStyl = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem -0.5rem 3rem -0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 0 0.5rem;
    height: 100%;
    max-width: 220px;
    color: #222;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
  img {
    height: 100%;
    width: 100%;
    position: static;
  }
  span {
    padding: 0.85rem;
    font-weight: 600;
    font-size: 0.7rem;
  }
`

function Stays({
  places,
  numberOfPlaces,
  searchedCity,
  isSearched,
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
          <WorldListStyl>
            <div>
              <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209834/airbnb_clone/top_places/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg" alt="Berlin" />
              <span>Berlin</span>
            </div>
            <div>
              <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209864/airbnb_clone/top_places/3d3a87bc-9a2c-47b7-8a36-22969be34e5d.jpg" alt="Zagreb" />
              <span>Zagreb</span>
            </div>
            <div>
              <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209883/airbnb_clone/top_places/ef2b9de4-3b78-4c26-9d90-fa1789762ebc.jpg" alt="San Francisco" />
              <span>San Francisco</span>
            </div>
            <div>
              <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209900/airbnb_clone/top_places/5cf02a45-25d8-47c6-8c8b-c61949238dc0.jpg" alt="Dubrovnik" />
              <span>Dubrovnik</span>
            </div>
            <div>
              <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209834/airbnb_clone/top_places/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg" alt="Berlin" />
              <span>Berlin</span>
            </div>
          </WorldListStyl>
          <HeadlineStyl>Top-rated places to stay</HeadlineStyl>
          <SubHeadlineStyl>Explore some of the best-reviewed stays in the world</SubHeadlineStyl>
          <Places places={shuffleArray(places)} limit={10} />
        </>
      )}
    </StaysStyl>
  )
}

export default Stays
