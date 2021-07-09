import React from 'react';
import styled from 'styled-components';

const CardList = ({ items }) => {
    console.log(items)
    return (
        <StyledLayout>
            {items.map(item => {
                return (
                    <StyledDiv key={item.id} >
                        <a href={item.bitly_url} target='_blank' rel='noreferrer'><img src={item.images.preview_gif.url} alt={item.id} /></a>
                        <p>{item.title}</p>
                        <div>
                            <i className="fa fa-share-alt" aria-hidden="true"></i>
                            <i className="fa fa-download" aria-hidden="true"></i>
                        </div>
                    </StyledDiv>
                )
            })}
        </StyledLayout>
    )
};

const StyledLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1.2rem;
`;

const StyledDiv = styled.div`
    background-color: black;
    max-width: 17rem;
    min-width: 17rem;
    height: 20rem;
    margin: 1rem;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    p{
        font-size: 22px;
        margin: 0.7rem;
        color:whitesmoke;
    }
    img{
        width:17rem;
        height:12rem;
        border-radius: 0.4rem 0.4rem 0rem 0rem;
    }
    i{
        cursor: pointer;
        margin:1rem;
        font-size: 20px;
        color: whitesmoke;
        &:hover{
            color: #23d997;
        }
    }

`;


export default CardList
