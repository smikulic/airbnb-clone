import React from 'react'
import styled from '@emotion/styled'

const HeaderStyl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 0 1rem;
  height: 80px;
`
const SearchInputStyl = styled.input`
  width: 16rem;
  height: 2rem;
  font-size: 1.25rem;
  line-height: 2rem;
  padding-left: 2rem;
  border-radius: 5px;
  border: none;
  outline: 0;
  box-shadow: 0px 1px 4px 0px #b0b0b0;
  transition: width 0.2s ease-in;
  &:hover {
    box-shadow: 0px 1px 6px 0px #b0b0b0;
  }
  &:focus {
    width: 20rem;
  }
`

function Header() {
  return (
    <HeaderStyl>
      <SearchInputStyl type="text" placeholder='Try “Berlin”' />
      <nav>
        saved
        help
        profile
      </nav>
    </HeaderStyl>
  )
}

export default Header
