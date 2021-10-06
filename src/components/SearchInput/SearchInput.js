import "./SearchInput.css";
import Button from "../Button/Button";

function SearchInput() {
  return (
    <div className="search-input">
      <input type="text" placeholder="Enter your address"></input>
      <Button className="search-button" label="Search" />
    </div>
  );
}

export default SearchInput;
