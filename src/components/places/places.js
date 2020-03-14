import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { pluralize } from '../../utilities/pluralize'

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
  @media (max-width: 1430px) {
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
const PlaceNameStyl = styled.div`
  margin-bottom: 1.2rem;
  height: 1.1rem;
  line-height: 1.2rem;
  overflow: hidden;
  font-size: 0.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const ImageStyl = styled.div`
  padding-top: 66.6667%;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-image: url('${props => props.url}');
  background-repeat: no-repeat;
  background-size: cover;
`

function Places({ places, limit = 0 }) {
  console.log(places, limit)
  places = limit > 0 ? places.slice(0, limit) : places

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
                  <span>{pluralize(place.beds, 'bed')}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} />
                  {place.rating}
                </div>
              </PlaceDetailsStyl>
              <PlaceNameStyl>
                {place.name}
              </PlaceNameStyl>
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
