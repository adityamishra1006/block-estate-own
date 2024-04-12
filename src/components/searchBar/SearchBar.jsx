import { useState } from 'react';
import './SearchBar.scss'

const types = ["buy", "rent"];

function SearchBar(){
    const [query, setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    })

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
      };
    
    return(
        <div className='searchBar'>
            <div className='type'>
                {types.map((type)=>(
                <button
                    key={type}
                    onClick={() => switchType(type)}
                    className={query.type === type ? "active" : ""}
                    >{type}
                </button>
                ))}
                
            </div>
            <form>
                <input 
                type='text' 
                name='location' 
                placeholder='City Location' 
                />
                <input 
                type='number' 
                name='minPrice' 
                min={0} 
                max={10000000000} 
                placeholder='Minimum Price' 
                />
                <input 
                type='number' 
                name='maxPrice' 
                min={0} 
                max={10000000000} 
                placeholder='Maximum Price' 
                />
                <button>
                    <img src='/search.png' />
                </button>
            </form>
        </div>
    );
}

export default SearchBar;