import React from 'react'
import styled from '@emotion/styled'

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
    max-width: 280px;
    color: #222;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    cursor: pointer;
  }
  img {
    height: 100%;
    width: 100%;
    position: static;
  }
  span {
    padding: 0.85rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
    font-size: 0.7rem;
  }
`

function WorldList({ setSearchTerm }) {
  return (
    <WorldListStyl>
      <div onClick={() => setSearchTerm('Berlin')}>
        <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209834/airbnb_clone/top_places/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg" alt="Berlin" />
        <span>Berlin</span>
      </div>
      <div onClick={() => setSearchTerm('Zagreb')}>
        <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209864/airbnb_clone/top_places/3d3a87bc-9a2c-47b7-8a36-22969be34e5d.jpg" alt="Zagreb" />
        <span>Zagreb</span>
      </div>
      <div onClick={() => setSearchTerm('San Francisco')}>
        <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209883/airbnb_clone/top_places/ef2b9de4-3b78-4c26-9d90-fa1789762ebc.jpg" alt="San Francisco" />
        <span>San Francisco</span>
      </div>
      <div onClick={() => setSearchTerm('Dubrovnik')}>
        <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209900/airbnb_clone/top_places/5cf02a45-25d8-47c6-8c8b-c61949238dc0.jpg" alt="Dubrovnik" />
        <span>Dubrovnik</span>
      </div>
      <div onClick={() => setSearchTerm('Berlin')}>
        <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209834/airbnb_clone/top_places/e3b8d12c-07dc-4f3d-9cdc-c79e0a442dd4.jpg" alt="Berlin" />
        <span>Berlin</span>
      </div>
      <div onClick={() => setSearchTerm('Zagreb')}>
        <img src="https://res.cloudinary.com/djgh6tvhv/image/upload/v1584209864/airbnb_clone/top_places/3d3a87bc-9a2c-47b7-8a36-22969be34e5d.jpg" alt="Zagreb" />
        <span>Zagreb</span>
      </div>
    </WorldListStyl>
  )
}

export default WorldList
