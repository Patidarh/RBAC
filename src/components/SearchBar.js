import React from "react";

function SearchBar({ setUsers }) {
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setUsers((users) =>
      users.filter((user) => user.name.toLowerCase().includes(searchValue))
    );
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Users..." onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
