import React from 'react';
import styled from 'styled-components';

const ItemsList = ({ redditData }) => {
    return (
        <StyledCard>
            {redditData.map(item => {
                return (
                    <StyledDiv key={item.data.id} >
                        <a href={item.data.url} target="_blank" rel="noreferrer"><img src={item.data.thumbnail === 'self' ? 'http://revisionmanufacture.com/assets/uploads/no-image.png' : item.data.thumbnail} alt="" /></a>
                        <h2>{item.data.title}</h2>
                        <h3>-{item.data.author}</h3>
                        <div>
                            <i className="fa fa-thumbs-up" aria-hidden="true">{item.data.ups}</i>
                            <i className="fa fa-comment" aria-hidden="true"> {item.data.num_comments}</i>
                        </div>
                    </StyledDiv>
                )
            })}
        </StyledCard>
    )
};

const StyledCard = styled.div`
    min-height: 80vh;
    margin:6rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

const StyledDiv = styled.div`
background: black;
    color:whitesmoke;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    min-height: 35vh;
    text-align: center;
    border-radius: 0.2rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 20rem ;
        object-fit: fill;
    }
    h2{
        padding-top: 1rem;
    }
    h3{
        padding-top: 1rem;
    }
    i{
        margin:1rem;
    }
`;


export default ItemsList
