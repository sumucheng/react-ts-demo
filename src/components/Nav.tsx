import React from 'react'
import Icon from 'components/Icon'
import {
    Link
} from "react-router-dom";
import styled from 'styled-components';
const NavWrapper = styled.ul`

`
const Nav = () => {
    return (
        <NavWrapper>
            <Link to="/statistics" className='link'>
                <Icon name="statistics"></Icon>
                <p>statistics</p>
            </Link>
            <Link to="/record" className='link'>
                <Icon name="record"></Icon>
            </Link>
            <Link to="/setting" className='link'>
                <Icon name="setting"></Icon>
                <p>setting</p>
            </Link>
        </NavWrapper>
    )
}
export default Nav