import React from "react";


const SearchBox = ({searchfield, searchChange}) => {
    return(
    <div className='pa2'>

        <input 
        className= 'tc pa3 ba b--black bg-dark-gray'
        type = 'search' 
        placeholder='Search people' 
        onChange = {searchChange}
        
            
        />
    </div>


    );
}

export default SearchBox;