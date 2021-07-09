import React, { useEffect, useState } from 'react'
import SearchR from './SearchR';
import ItemsList from './ItemsList';;


const Reddit = () => {
    const [redditData, setRedditData] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://www.reddit.com/r/${search}/new.json?sort=new&limit=24`)
            .then(response => response.json())
            .then(data => setRedditData(data.data.children))
    }, [search]);
    console.log(redditData)

    const redditSearchHandler = (e) => {
        if (e.key === 'Enter' || e.target.value === 'Go') {
            setSearch(e.target.value);
        }
    }
    if (search.length === 0) {
        setSearch('aww');
    }

    return (
        <div>
            <SearchR redditSearchHandler={redditSearchHandler} />
            <ItemsList redditData={redditData} />
        </div>
    )
};

export default Reddit
