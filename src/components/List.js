import React, { useState } from "react";
import ListItem from "./ListItem";

const List = ({ items }) => {
  const [onlyShowStarred, setOnlyShowStarred] = useState(false);
  const [languageFilter, setLanguageFilter] = useState("");
  const languages = items
    ?.filter((item) => item.language !== null)
    .map(function (item) {
      return item.language;
    });
  const filterLanguages = [...new Set(languages)];

  const handleSelect = (filter) => {
    setLanguageFilter(filter);
  };

  if (languageFilter.length > 0) {
    items = items.filter((item) => item.language === languageFilter);
  }

  if (onlyShowStarred) {
    items = items.filter((item) => item.starred === true);
  }

  return (
    <div>
      <button
        className="List-FilterButton"
        onClick={() => setOnlyShowStarred(!onlyShowStarred)}
      >
        Only Show {onlyShowStarred ? "all" : "⭐"} Repositories
      </button>

      <select
        className="List-FilterSelect"
        name="languageFilter"
        id="languages"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="">None</option>
        {filterLanguages.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>

      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
