import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ImageStyl } from '../../sharedStyled'
import profileImg from '../../images/profile.jpg'

const HeaderStyl = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding: 0 2rem 0 4rem;
  height: 80px;
  box-shadow: 0 1px 0 #EBEBEB;
  svg.fa-mountain {
    position: absolute;
    left: 0.7rem;
    font-size: 1.4rem;
    color: #FF385C;
  }
  svg.fa-search {
    position: absolute;
    left: 4.75rem;
    font-size: 0.85rem;
    top: 1.65rem;
  }
`
const SearchInputStyl = styled.input`
  width: 21rem;
  height: 2.2rem;
  font-size: 1rem;
  line-height: 2.2rem;
  padding-left: 2.2rem;
  border-radius: 5px;
  border: none;
  outline: 0;
  box-shadow: 0px 1px 4px 0px #b0b0b0;
  transition: width 0.2s ease-in;
  &:hover {
    box-shadow: 0px 1px 6px 0px #b0b0b0;
  }
  &:focus {
    width: 25rem;
  }
`
const NavStyl = styled.nav`
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    border-radius: 50%;
    border: 1px solid #b0b0b0;
  }
`

function Header() {
  return (
    <HeaderStyl>
      <FontAwesomeIcon icon={faMountain} />
      <FontAwesomeIcon icon={faSearch} />
      <SearchInputStyl type="text" placeholder='Try “Berlin”' />
      <NavStyl>
        <img src={profileImg} alt="profile" />
      </NavStyl>
    </HeaderStyl>
  )
}

export default Header
