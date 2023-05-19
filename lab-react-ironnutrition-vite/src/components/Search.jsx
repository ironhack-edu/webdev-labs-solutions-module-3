import { Divider, Input } from "antd";
import { useState } from "react";

function Search({ filterFoodHandler }) {
  const [char, setChar] = useState("");

  const handleSearch = (event) => {
    setChar(event.target.value);
    filterFoodHandler(event.target.value);
  };

  return (
    <div className="search-bar">
      <>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input
          value={char}
          type="text"
          onChange={handleSearch}
          placeholder="Search for foods"
        />
      </>
    </div>
  );
}

export default Search;
