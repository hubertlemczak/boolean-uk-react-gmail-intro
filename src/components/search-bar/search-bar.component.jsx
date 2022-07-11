import './search-bar.styles.css';

const SearchBar = (props) => (
  <div className="search">
    <input className="search-bar" placeholder={props.placeholder} />
  </div>
);

export default SearchBar;
