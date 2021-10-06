import "./SearchInput.css";
import Button from '../Button/Button'; 

function SearchInput() {
    return( 
        <div className = 'searchInput'>
        <input type='text' placeholder = 'Enter your address'></input>
        <Button className = 'searchButton' label = 'Search'/>
        </div>
    )
}

export default SearchInput;