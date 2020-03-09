import React from 'react'
import styled from '@emotion/styled'

const FiltersStyl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 0 1rem;
  height: 40px;
  font-size: 0.85rem;
`
const FilterTypesStyl = styled.div`
  display: flex;
  justify-content: flex-start;
`
const FilterTriggerStyl = styled.div`
  margin-right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #b0b0b0;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    border-color: black;
  }
`
const MapToggleStyl = styled.div`
  
`

function Filters() {
  return (
    <FiltersStyl>
      <FilterTypesStyl>
        <FilterTriggerStyl>Dates</FilterTriggerStyl>
        <FilterTriggerStyl>Guests</FilterTriggerStyl>
        <FilterTriggerStyl>Type of place</FilterTriggerStyl>
        <FilterTriggerStyl>Price</FilterTriggerStyl>
      </FilterTypesStyl>
      <MapToggleStyl>Show map</MapToggleStyl>
    </FiltersStyl>
  )
}

export default Filters
