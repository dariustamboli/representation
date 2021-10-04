import "./SearchInput.css";

function SearchInput() {
    return( 
        <div class = 'searchInput'>
        <input type='text' placeholder = 'Enter your address'></input>
        <button>Search</button> 
        </div>
    )
}

export default SearchInput;