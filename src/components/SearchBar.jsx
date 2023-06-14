import '../styling/SearchBar.css';
import { SearchableArray } from './jsontests';
import { useState } from 'react';


export default function SearchBar({handleClick}) {

const [input, setInput] = useState('');

const handleChange = (e) => {
    
    setInput(e.target.value)
}


    return (
        <>
            <div className="search-container">
                <input placeholder="Development" onChange={handleChange} input={input} type='text'></input>
                <div className='dropdown'>
                    {SearchableArray.filter(item => {
                        const searchTerm = input.toLowerCase();
                        const returnedItem = item.toLowerCase();
                        return searchTerm && returnedItem.includes(searchTerm);
                    })
                    
                    .map((item) => (
                        <div key={item.names}>{item}</div>
                    ))}
                </div>
                <button onClick={handleClick}>Generate Test</button>
            </div>
           
        </>
    )
}

// data needs to be object of objects with both parts being string

//{'somekey': 'some value'}