import '../styling/SearchBar.css';
import { SearchableArray } from './jsontests';
import { useState } from 'react';



export default function SearchBar({handleClick}) {

const [input, setInput] = useState('');

const handleChange = (e) => {
    setInput(e.target.value);
}


const selectedTest = (item) => {
    let newTest = SearchableArray.indexOf(item);
    handleClick(newTest);
    setInput('');
}
    return (
        
        <div className='search-container'>
            <input className='SearchBar' placeholder="Search for a test" onChange={handleChange} input={input} type='text'></input>
            <div className='dropdown' id='dropdown'>
                    {SearchableArray.filter(item => {
                        const searchTerm = input.toLowerCase();
                        const returnedItem = item.toLowerCase();

                        return searchTerm && returnedItem.includes(searchTerm);
                    })
                    
                    .map((item) => (
                        <div className='test-result' key={item} onClick={() => selectedTest(item)}>{item}</div>
                    ))}
            </div>
        </div>
    )
}

// data needs to be object of objects with both parts being string

//{'somekey': 'some value'}

