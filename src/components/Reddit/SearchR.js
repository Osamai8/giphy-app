import React from 'react';
import styled from 'styled-components';

const SearchR = ({ redditSearchHandler }) => {
    return (
        <StyledDiv>
            <i className='fa fa-reddit' ></i>
            <input type='text' placeholder='aww' onKeyPress={redditSearchHandler} />
        </StyledDiv>
    )
};
const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2rem 5rem;
    i{
        font-size:3rem;
        margin-right:1rem;    
    }
    input {
    border:solid 3px #000;
    box-sizing:border-box;
    font-size:2em;
    height:2em;
    outline:solid pink 5;
    padding:.5em;
    transition:all 0.5s ease-in;
    width:40vw;
    &:focus {
        border:solid 2px #23d997;      
        outline:solid whitesmoke 2px;
        }
    }
`;

export default SearchR;
