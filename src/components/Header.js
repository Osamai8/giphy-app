import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to='/'>
                        <i class="fa fa-reddit" aria-hidden="true"></i>Reddit
                    </Link>
                </li>
                <li>
                    <Link to='/giphy'>
                        <i class="fa fa-gg-circle" aria-hidden="true"></i>Giphy
                    </Link>
                </li>
            </ul>

        </StyledNav>
    )
};
const StyledNav = styled.nav`
    background: black;
    align-items:center;
    margin:auto;
    padding:1rem 10rem 0rem 10rem;
    font-size: 2rem;
    min-height: 10vh;
    z-index:2;
    position: sticky;
    ul{
        list-style: none;
        display:flex;
        flex-direction: row;
        align-items:center ;
        justify-content: space-around;        
    }
    a{
        color: whitesmoke;
        text-decoration: none;
        &:hover{
            color:#23d997;
            cursor: pointer;
        }
    }
    li{
        padding: 0.2rem;
    }
    i{
      padding:1rem ;
    }
    @media(max-width:900px){
        flex-direction:column;
        padding:2rem 0rem;
        padding:1rem;
        ul{
            padding:1rem;
            justify-content:space-around;
            width:100%;
            li{
                position:relative;
                padding-left:2rem;                
            }

        }
    }

`;

export default Header;
