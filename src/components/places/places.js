import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const PlacesStyl = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -0.5rem;
`
const PlaceStyl = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 1280px) {
    width: 25%;
  }
  @media (max-width: 1130px) {
    width: 50%;
  }
  @media (max-width: 760px) {
    width: 100%;
  }
`
const PlaceInnerStyl = styled.div`
  padding: 0 0.5rem;
`
const ImageStyl = styled.div`
  padding-top: 66.6667%;
  width: 100%;
  height: 100%;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-size: cover;
`
const PlaceDetailsStyl = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 14px 0 4px 0;
  font-size: 0.75rem;
  color: #717171;
  svg {
    margin-right: 0.15rem;
    height: 0.6rem;
    vertical-align: 0;
    color: #FF385C; 
  }
`

function Places({ places }) {
  return (
    <PlacesStyl>
      { places.map((place, placeKey) => {
        return (
          <PlaceStyl key={placeKey}>
            <PlaceInnerStyl>
              <ImageStyl url={place.imageUrl} />
              <PlaceDetailsStyl>
                <div>
                  <span>{place.details}</span> · 
                  <span>{place.beds}</span> beds
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} />
                  {place.rating}
                </div>
              </PlaceDetailsStyl>
              name
              {/* price
              total */}
            </PlaceInnerStyl>
          </PlaceStyl>
        )
      })}
    </PlacesStyl>
  )
}

export default Places
