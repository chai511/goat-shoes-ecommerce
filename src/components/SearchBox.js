import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (    
      <input
        className="header__searchInput"
        type='search'
        placeholder='search shoes'
        style={{'align':'center'}}
        onChange={searchChange}
      />
      );
}

export default SearchBox;