import React, { useEffect, useState } from 'react';
import Search from './Search';
import CardList from './CardList';


const Giphy = () => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zAvlxBymWb6queqKHajDWiZJ6uUTFkxo&limit=24`)
            .then(rep => rep.json())
            .then(response => setItems(response.data))
            .catch(error => console.log("Error", error));
    }, [query]);

    const searchHandler = (e) => {
        setQuery(e.target.value);
    }
    if (query.length === 0) {
        setQuery('trending');
    }

    return (
        <div>
            <Search searchHandler={searchHandler} />
            <CardList items={items} />
        </div>
    )
}
// #23d997 #1b1b1b #ccc #282828

export default Giphy
