import '../styling/SearchBar.css';


export default function SearchBar({handleClick}) {


    return (
        <>
            <div className="search-container">
                <input placeholder="this doesnt work yet" type='search' id='search'></input>
                <button onClick={handleClick}>Generate Test</button>
            </div>
           
        </>
    )
}