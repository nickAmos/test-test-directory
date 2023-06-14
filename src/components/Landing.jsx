import '../styling/Landing.css'
import SearchBar from './SearchBar'



export default function Landing({handleClick}) {
   
    return(
       
        <div className="loading-container">
            <div className='heading-container'>
                <p id='heading'>New Test Dicrectory . . .</p>
            </div>

            <div className='search'>
            <SearchBar handleClick={handleClick} height={0}/>
            <p></p>
            </div>

            <div className='footer-container'>
                <p id='footer'> . . . Begin your search now</p>
            </div>
            
        </div>
    
    )
}